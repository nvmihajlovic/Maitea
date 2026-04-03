<?php

/**
 * MAITEA Contact Form Handler
 * Sends via localhost SMTP (cPanel Exim) — no authentication needed
 */

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Sanitize input
$name    = trim(strip_tags(filter_input(INPUT_POST, 'name',    FILTER_DEFAULT) ?? ''));
$email   = trim(filter_input(INPUT_POST, 'email',   FILTER_SANITIZE_EMAIL) ?? '');
$phone   = trim(strip_tags(filter_input(INPUT_POST, 'phone',   FILTER_DEFAULT) ?? ''));
$message = trim(strip_tags(filter_input(INPUT_POST, 'message', FILTER_DEFAULT) ?? ''));

// Validation
if (empty($name) || mb_strlen($name) > 200) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Ime i prezime je obavezno polje.']);
    exit;
}
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Unesite validnu email adresu.']);
    exit;
}
if (empty($message) || mb_strlen($message) > 5000) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Poruka je obavezno polje.']);
    exit;
}

// Build email
$to       = 'info@maiteacatering.rs';
$from     = 'info@maiteacatering.rs';
$phoneLine = !empty($phone) ? "Telefon: {$phone}\r\n" : '';

$body  = "Novi upit sa sajta maiteacatering.rs\r\n";
$body .= "==========================================\r\n\r\n";
$body .= "Ime i prezime: {$name}\r\n";
$body .= "Email: {$email}\r\n";
$body .= $phoneLine;
$body .= "\r\nPoruka:\r\n{$message}\r\n";

$encodedSubject = '=?UTF-8?B?' . base64_encode('MAITEA upit - ' . $name) . '?=';

// Direct SMTP to localhost (cPanel Exim — no auth needed for local delivery)
function smtp_send($to, $from, $replyTo, $subject, $body)
{
    $smtp = @fsockopen('127.0.0.1', 25, $errno, $errstr, 10);
    if (!$smtp) {
        // fallback to mail()
        $headers  = "From: {$from}\r\nReply-To: {$replyTo}\r\n";
        $headers .= "MIME-Version: 1.0\r\nContent-Type: text/plain; charset=UTF-8\r\n";
        return mail($to, $subject, $body, $headers);
    }

    $read = function () use ($smtp) {
        $out = '';
        while ($line = fgets($smtp, 512)) {
            $out .= $line;
            if ($line[3] === ' ') break;
        }
        return (int) substr($out, 0, 3);
    };

    $cmd = function ($c) use ($smtp, $read) {
        fwrite($smtp, $c . "\r\n");
        return $read();
    };

    $ok = $read(); // greeting
    if ($ok !== 220) {
        fclose($smtp);
        return false;
    }

    $host = gethostname() ?: 'maiteacatering.rs';
    if ($cmd("EHLO {$host}") !== 250) {
        fclose($smtp);
        return false;
    }
    if ($cmd("MAIL FROM:<{$from}>") !== 250) {
        fclose($smtp);
        return false;
    }
    if ($cmd("RCPT TO:<{$to}>") !== 250) {
        fclose($smtp);
        return false;
    }
    if ($cmd("DATA") !== 354) {
        fclose($smtp);
        return false;
    }

    $msg  = "From: {$from}\r\n";
    $msg .= "To: {$to}\r\n";
    $msg .= "Reply-To: {$replyTo}\r\n";
    $msg .= "Subject: {$subject}\r\n";
    $msg .= "MIME-Version: 1.0\r\n";
    $msg .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $msg .= "Content-Transfer-Encoding: 8bit\r\n";
    $msg .= "\r\n";
    $msg .= $body;

    fwrite($smtp, $msg . "\r\n.\r\n");
    $code = $read();
    $cmd("QUIT");
    fclose($smtp);
    return $code === 250;
}

if (smtp_send($to, $from, $email, $encodedSubject, $body)) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Greška pri slanju. Pokušajte ponovo.']);
}
