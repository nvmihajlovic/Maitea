/**
 * MAITEA - Artistic Catering
 * JavaScript Application
 * Mobile-first, accessible, bilingual
 */

// ============================================
// i18n TRANSLATION SYSTEM
// ============================================

const i18n = {
    sr: {
        // Navigation
        'nav.home': 'Naslovna',
        'nav.about': 'O nama',
        'nav.services': 'Naše usluge',
        'nav.contact': 'Kontakt',
        
        // Hero
        'hero.tagline': 'Umetnički ketering za nezaboravne trenutke',
        'hero.headline': 'Gde estetika sreće ukus',
        'hero.text': 'Kreiramo kulinarska iskustva koja nadilaze očekivanja. Svaki detalj je osmišljen sa strašću i preciznošću.',
        'hero.cta.book': 'Rezervišite',
        'hero.cta.services': 'Naše usluge',
        
        // Why MAITEA
        'why.title': 'Zašto MAITEA',
        'why.aesthetic.title': 'Estetika',
        'why.aesthetic.text': 'Svaki detalj je pažljivo osmišljen da oduševljava vizuelno i kulinarski.',
        'why.taste.title': 'Ukus',
        'why.taste.text': 'Koristimo isključivo svež, lokalan i premium kvalitet sastojke.',
        'why.reliability.title': 'Pouzdanost',
        'why.reliability.text': 'Precizna organizacija i besprekorna isporuka, bez iznenađenja.',
        
        // Services
        'services.title': 'Naše usluge',
        'services.intro': 'Nudimo ketering prilagođen svakoj vrsti događaja.',
        'services.corporate.title': 'Korporativni eventi',
        'services.corporate.text': 'Profesionalne proslave, konferencije i poslovni sastanci.',
        'services.private.title': 'Privatne proslave',
        'services.private.text': 'Rođendani, jubileji, porodična okupljanja sa ukusnom hranom.',
        'services.wedding.title': 'Wedding catering',
        'services.wedding.text': 'Najlepši dan zaslužuje savršen meni prilagođen vašoj viziji.',
        'services.tasting.title': 'Degustacioni meniji',
        'services.tasting.text': 'Tematski stolovi koji vode goste na kulinarski put.',
        'services.link': 'Saznajte više →',
        
        // Process
        'process.title': 'Kako radimo',
        'process.step1.title': 'Konsultacija',
        'process.step1.text': 'Razgovaramo o vašoj viziji, broju gostiju i specifičnim potrebama.',
        'process.step2.title': 'Kreiranje menija',
        'process.step2.text': 'Dizajniramo prilagođeni meni i detaljan plan izvedbe.',
        'process.step3.title': 'Savršena realizacija',
        'process.step3.text': 'Dostavljamo sve na vreme, sa preciznošću prema svakom detalju.',
        
        // Clients
        'clients.title': 'Naši klijenti',
        'clients.intro': 'Veruju nam vodeće kompanije i pojedinci koji cene kvalitet.',
        
        // CTA
        'cta.title': 'Spremni za nezaboravan događaj?',
        'cta.text': 'Kontaktirajte nas i počnimo sa planiranjem.',
        'cta.button': 'Pošaljite upit',
        
        // Footer
        'footer.tagline': 'Umetnički ketering',
        'footer.brand.statement': 'Estetika · Ukus · Pouzdanost',
        'footer.design.credit': 'Dizajn i izrada:',
        'footer.links.title': 'Linkovi',
        'footer.contact.title': 'Kontakt',
        'footer.copyright': 'Sva prava zadržana.',
        
        // About Page
        'about.page.title': 'O nama',
        'about.page.intro': 'Strast, preciznost i posvećenost svakom detalju.',
        'about.story.title': 'Naša priča',
        'about.story.p1': 'MAITEA je nastao iz želje da ketering više ne bude samo hrana na stolu, već celovit kulinarski doživljaj koji govori priču.',
        'about.story.p2': 'Verujemo da svaki događaj zaslužuje pažnju sličnu stvaranju umetničkog dela. Od biranja sastojaka do finalne prezentacije, svaki korak je promišljen.',
        'about.story.p3': 'Naš tim čine iskusni profesionalci sa pozadinom u gastronomiji, event managementu i vizuelnim umetnostima. Zajedno stvaramo događaje koji nadmašuju očekivanja.',
        'about.values.title': 'Naše vrednosti',
        'about.values.quality.title': 'Kvalitet bez kompromisa',
        'about.values.quality.text': 'Koristimo isključivo sveže, lokalne i premium sastojke. Sarađujemo sa proverenim dobavljačima.',
        'about.values.creativity.title': 'Kreativnost i inovacija',
        'about.values.creativity.text': 'Istražujemo nove ukuse, tehnike i prezentacije. Svaki meni je jedinstveno kreiran.',
        'about.values.attention.title': 'Pažnja prema detalju',
        'about.values.attention.text': 'Od inicijalne konsultacije do poslednjeg jela, ništa nije slučajno. Svaki element je pažljivo osmišljen.',
        'about.values.reliability.title': 'Profesionalnost i pouzdanost',
        'about.values.reliability.text': 'Precizna organizacija, blagovremena isporuka i transparentna komunikacija.',
        'about.approach.title': 'Naš pristup',
        'about.approach.lead': 'Ketering shvatamo kao umetnost koja uključuje sva čula.',
        'about.approach.p1': 'Fokusiramo se na autentičnost i originalnost. Ne pratimo trendove slepo – stvaramo časne, ukusne prezentacije koje odražavaju karakter vašeg događaja.',
        'about.approach.p2': 'Cenimo jednostavnost i eleganciju, gde svaki element ima svoju svrhu. Koristimo sezonske sastojke i poštujemo kulinarske tradicije kroz moderan pristup.',
        'about.cta.title': 'Želite da saznate više?',
        'about.cta.text': 'Kontaktirajte nas i razgovarajmo o vašem sledećem događaju.',
        
        // Services Page
        'services.page.title': 'Naše usluge',
        'services.page.intro': 'Prilagođeni ketering za svaku vrstu događaja.',
        'services.detail.corporate.title': 'Korporativni eventi',
        'services.detail.corporate.lead': 'Profesionalan pristup za poslovne događaje koji ostavljaju trajan utisak.',
        'services.detail.corporate.p1': 'Od poslovnih doručaka i radnih ručkova do svečanih proslava – nudimo ketering koji odražava profesionalnost vašeg brenda.',
        'services.detail.corporate.includes': 'Šta obuhvata:',
        'services.detail.corporate.item1': 'Poslovni doručci, ručkovi, kokteli',
        'services.detail.corporate.item2': 'Konferencije i seminari',
        'services.detail.corporate.item3': 'Team building događaji',
        'services.detail.corporate.item4': 'Korporativne proslave',
        'services.detail.private.title': 'Privatne proslave',
        'services.detail.private.lead': 'Intimni i porodični trenuci zaslužuju pažnju i autentičan pristup.',
        'services.detail.private.p1': 'Rođendani, jubileji, krsne slave, porodična okupljanja – stvaramo toplu atmosferu kroz hranu koja donosi radost.',
        'services.detail.private.includes': 'Šta obuhvata:',
        'services.detail.private.item1': 'Rođendanske proslave',
        'services.detail.private.item2': 'Krsne slave i verske proslave',
        'services.detail.private.item3': 'Godišnjice i jubileji',
        'services.detail.private.item4': 'Porodična okupljanja',
        'services.detail.wedding.title': 'Wedding catering',
        'services.detail.wedding.lead': 'Najlepši dan zaslužuje savršenu kulinarsku priču.',
        'services.detail.wedding.p1': 'Od koktela dobrodošlice do svadbene večere – stvaramo doživljaj koji će gosti pamtiti.',
        'services.detail.wedding.includes': 'Šta obuhvata:',
        'services.detail.wedding.item1': 'Kokteli dobrodošlice i apetiti',
        'services.detail.wedding.item2': 'Personalizovani vjenčani meni',
        'services.detail.wedding.item3': 'Degustacione večere',
        'services.detail.wedding.item4': 'Dizajn i prezentacija stola',
        'services.detail.tasting.title': 'Degustacioni meniji',
        'services.detail.tasting.lead': 'Kulinarski putevi koji otkrivaju priče i ukuse.',
        'services.detail.tasting.p1': 'Kreiramo degustacione večere koje vode goste kroz niz pažljivo odabranih jela – svako sa svojom pričom.',
        'services.detail.tasting.includes': 'Šta obuhvata:',
        'services.detail.tasting.item1': 'Višeservna degustaciona jela',
        'services.detail.tasting.item2': 'Tematski stolovi',
        'services.detail.tasting.item3': 'Priče o jelima i sastojcima',
        'services.detail.tasting.item4': 'Wine pairing opcije',
        'services.work.title': 'Kako radimo',
        'services.work.step1.title': 'Inicijalni razgovor',
        'services.work.step1.text': 'Konsultacija o vašoj viziji, broju gostiju i specifičnim potrebama.',
        'services.work.step2.title': 'Kreiranje predloga',
        'services.work.step2.text': 'Dizajniramo prilagođeni meni i detaljan plan sa transparentnom cenom.',
        'services.work.step3.title': 'Realizacija',
        'services.work.step3.text': 'Dostavljamo sve na vreme, serviramo sa pažnjom i ostajemo dostupni.',
        'services.cta.title': 'Planirate događaj?',
        'services.cta.text': 'Kontaktirajte nas i razgovarajmo o detaljima.',
        
        // Contact Page
        'contact.page.title': 'Kontakt',
        'contact.page.intro': 'Javite nam se – rado ćemo odgovoriti na sva pitanja.',
        'contact.phone.title': 'Telefon',
        'contact.phone.note': 'Pon-Pet 9:00-18:00',
        'contact.email.title': 'Email',
        'contact.email.note': 'Odgovaramo u roku od 24h',
        'contact.location.title': 'Lokacija',
        'contact.location.note': 'Servisiramo celu Srbiju',
        'contact.form.title': 'Pošaljite upit',
        'contact.form.intro': 'Popunite formu i kontaktiraćemo vas u najkraćem roku.',
        'contact.form.name.label': 'Ime i prezime *',
        'contact.form.name.placeholder': 'Vaše ime i prezime',
        'contact.form.email.label': 'Email adresa *',
        'contact.form.email.placeholder': 'vasa@email.com',
        'contact.form.phone.label': 'Telefon',
        'contact.form.phone.placeholder': '+381 62 123 4567',
        'contact.form.message.label': 'Poruka *',
        'contact.form.message.placeholder': 'Opišite ukratko vaš događaj...',
        'contact.form.submit': 'Pošaljite upit',
        'contact.form.success': 'Hvala! Vaša poruka je uspešno poslata. Kontaktiraćemo vas uskoro.',
        'contact.form.error.required': 'Ovo polje je obavezno',
        'contact.form.error.email': 'Unesite validnu email adresu',
    },
    
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Our Services',
        'nav.gallery': 'Gallery',
        'nav.contact': 'Contact',
        
        // Hero
        'hero.tagline': 'Artistic catering for unforgettable moments',
        'hero.headline': 'Where aesthetics meet taste',
        'hero.descriptor': 'Artistic catering for corporate, private and exclusive events',
        'hero.text': 'We create culinary experiences that exceed expectations. Every detail is crafted with passion and precision.',
        'hero.cta': 'Schedule Consultation',
        'hero.cta.book': 'Book Now',
        'hero.cta.services': 'Our Services',
        
        // Philosophy
        'philosophy.aesthetic': 'Aesthetics.',
        'philosophy.taste': 'Taste.',
        'philosophy.reliability': 'Reliability.',
        
        // Why MAITEA
        'why.title': 'Why MAITEA',
        'why.aesthetic.title': 'Aesthetics',
        'why.aesthetic.text': 'Every detail is carefully designed to delight both visually and culinarily.',
        'why.taste.title': 'Taste',
        'why.taste.text': 'We use exclusively fresh, local, and premium quality ingredients.',
        'why.reliability.title': 'Reliability',
        'why.reliability.text': 'Precise organization and flawless delivery, no surprises.',
        
        // Services
        'services.title': 'Our Services',
        'services.intro': 'We offer catering tailored to every type of event.',
        'services.corporate.title': 'Corporate Events',
        'services.corporate.text': 'Professional celebrations, conferences, and business meetings.',
        'services.private.title': 'Private Celebrations',
        'services.private.text': 'Birthdays, anniversaries, family gatherings with delicious food.',
        'services.wedding.title': 'Wedding Catering',
        'services.wedding.text': 'The most beautiful day deserves a perfect menu customized to your vision.',
        'services.tasting.title': 'Tasting Menus',
        'services.tasting.text': 'Themed tables that take guests on a culinary journey.',
        'services.link': 'Learn more →',
        
        // Process
        'process.title': 'How We Work',
        'process.step1.title': 'Consultation',
        'process.step1.text': 'We discuss your vision, number of guests, and specific needs.',
        'process.step2.title': 'Menu Creation',
        'process.step2.text': 'We design a customized menu and detailed execution plan.',
        'process.step3.title': 'Perfect Execution',
        'process.step3.text': 'We deliver everything on time, with precision and attention to every detail.',
        
        // Clients
        'clients.title': 'Our Clients',
        'clients.intro': 'Leading companies and individuals who value quality trust us.',
        
        // CTA
        'cta.title': 'Ready for an unforgettable event?',
        'cta.text': 'Contact us and let\'s start planning.',
        'cta.button': 'Send Inquiry',
        
        // Footer
        'footer.tagline': 'Artistic catering',
        'footer.brand.statement': 'Aesthetics · Taste · Reliability',
        'footer.design.credit': 'Design and development:',
        'footer.cta': 'Send Inquiry',
        'footer.links.title': 'Links',
        'footer.contact.title': 'Contact',
        'footer.copyright': 'All rights reserved.',
        
        // Gallery Page
        'gallery.title': 'Gallery',
        'gallery.subtitle': 'Culinary art in every detail',
        'gallery.cta.title': 'Interested?',
        'gallery.cta.text': 'Feel free to contact us. We\'ll gladly answer your questions.',
        
        // About Page
        'about.page.title': 'About Us',
        'about.page.intro': 'We are a team that takes your event seriously — with heart, expertise, and respect for every detail.',
        'about.story.title': 'Our Story',
        'about.story.p1': 'MAITEA was born from the desire for catering to be more than just food on a table, but a complete culinary experience that tells a story.',
        'about.story.p2': 'We believe every event deserves attention similar to creating a work of art. From selecting ingredients to final presentation, every step is thoughtful.',
        'about.story.p3': 'Our team consists of experienced professionals with backgrounds in gastronomy, event management, and visual arts. Together we create events that exceed expectations.',
        'about.values.title': 'Our Values',
        'about.values.quality.title': 'Quality Without Compromise',
        'about.values.quality.text': 'We use exclusively fresh, local, and premium ingredients. We work with trusted suppliers.',
        'about.values.creativity.title': 'Creativity and Innovation',
        'about.values.creativity.text': 'We explore new flavors, techniques, and presentations. Every menu is uniquely created.',
        'about.values.attention.title': 'Attention to Detail',
        'about.values.attention.text': 'From initial consultation to the last dish, nothing is accidental. Every element is carefully designed.',
        'about.values.reliability.title': 'Professionalism and Reliability',
        'about.values.reliability.text': 'Precise organization, timely delivery, and transparent communication.',
        'about.approach.title': 'Our Approach',
        'about.approach.lead': 'We understand catering as an art that engages all senses.',
        'about.approach.p1': 'We focus on authenticity and originality. We don\'t follow trends blindly – we create honest, tasty presentations that reflect your event\'s character.',
        'about.approach.p2': 'We value simplicity and elegance, where every element has its purpose. We use seasonal ingredients and respect culinary traditions through a modern approach.',
        'about.cta.title': 'Want to know more?',
        'about.cta.text': 'Contact us and let\'s talk about your next event.',
        
        // Services Page
        'services.page.title': 'Our Services',
        'services.page.intro': 'Every event is unique. Our role is to bring your vision to reality — precisely, professionally, and with heart.',
        'services.detail.corporate.title': 'Corporate Events',
        'services.detail.corporate.lead': 'Professional approach for business events that leave a lasting impression.',
        'services.detail.corporate.p1': 'From business breakfasts and working lunches to formal celebrations – we offer catering that reflects your brand\'s professionalism.',
        'services.detail.corporate.includes': 'What\'s included:',
        'services.detail.corporate.item1': 'Business breakfasts, lunches, cocktails',
        'services.detail.corporate.item2': 'Conferences and seminars',
        'services.detail.corporate.item3': 'Team building events',
        'services.detail.corporate.item4': 'Corporate celebrations',
        'services.detail.private.title': 'Private Celebrations',
        'services.detail.private.lead': 'Intimate and family moments deserve attention and an authentic approach.',
        'services.detail.private.p1': 'Birthdays, anniversaries, patron saint days, family gatherings – we create a warm atmosphere through food that brings joy.',
        'services.detail.private.includes': 'What\'s included:',
        'services.detail.private.item1': 'Birthday celebrations',
        'services.detail.private.item2': 'Patron saint days and religious celebrations',
        'services.detail.private.item3': 'Anniversaries and jubilees',
        'services.detail.private.item4': 'Family gatherings',
        'services.detail.wedding.title': 'Wedding Catering',
        'services.detail.wedding.lead': 'The most beautiful day deserves a perfect culinary story.',
        'services.detail.wedding.p1': 'From welcome cocktails to wedding dinner – we create an experience guests will remember.',
        'services.detail.wedding.includes': 'What\'s included:',
        'services.detail.wedding.item1': 'Welcome cocktails and appetizers',
        'services.detail.wedding.item2': 'Personalized wedding menu',
        'services.detail.wedding.item3': 'Tasting dinners',
        'services.detail.wedding.item4': 'Table design and presentation',
        'services.detail.tasting.title': 'Tasting Menus',
        'services.detail.tasting.lead': 'Culinary journeys that reveal stories and flavors.',
        'services.detail.tasting.p1': 'We create tasting dinners that guide guests through a series of carefully selected dishes – each with its own story.',
        'services.detail.tasting.includes': 'What\'s included:',
        'services.detail.tasting.item1': 'Multi-course tasting dishes',
        'services.detail.tasting.item2': 'Themed tables',
        'services.detail.tasting.item3': 'Stories about dishes and ingredients',
        'services.detail.tasting.item4': 'Wine pairing options',
        'services.work.title': 'How We Work',
        'services.work.step1.title': 'Initial Conversation',
        'services.work.step1.text': 'Consultation about your vision, number of guests, and specific needs.',
        'services.work.step2.title': 'Creating Proposal',
        'services.work.step2.text': 'We design a customized menu and detailed plan with transparent pricing.',
        'services.work.step3.title': 'Execution',
        'services.work.step3.text': 'We deliver everything on time, serve with care, and remain available.',
        'services.cta.title': 'Let\'s talk about your event',
        'services.cta.text': 'No obligation. Just an open conversation about you, your vision, and how we can help.',
        
        // Contact Page
        'contact.page.title': 'Contact',
        'contact.page.intro': 'Get in touch – we\'ll gladly answer all questions.',
        'contact.phone.title': 'Phone',
        'contact.phone.note': 'Mon-Fri 9:00-18:00',
        'contact.email.title': 'Email',
        'contact.email.note': 'We respond within 24h',
        'contact.location.title': 'Location',
        'contact.location.note': 'Delivery for Belgrade',
        'contact.form.title': 'Send Inquiry',
        'contact.form.intro': 'Fill out the form and we\'ll contact you shortly.',
        'contact.form.name.label': 'Full Name *',
        'contact.form.name.placeholder': 'Your full name',
        'contact.form.email.label': 'Email Address *',
        'contact.form.email.placeholder': 'your@email.com',
        'contact.form.phone.label': 'Phone',
        'contact.form.phone.placeholder': '+381 62 123 4567',
        'contact.form.message.label': 'Message *',
        'contact.form.message.placeholder': 'Briefly describe your event...',
        'contact.form.submit': 'Send Inquiry',
        'contact.form.success': 'Thank you! Your message has been sent successfully. We\'ll contact you soon.',
        'contact.form.error.required': 'This field is required',
        'contact.form.error.email': 'Please enter a valid email address',
    }
};

// ============================================
// GLOBAL STATE
// ============================================

let currentLanguage = localStorage.getItem('maitea-lang') || 'sr';

// ============================================
// i18n FUNCTIONS
// ============================================

function translatePage() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = i18n[currentLanguage][key];
        
        if (translation) {
            el.textContent = translation;
        }
    });
    
    // Translate placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const translation = i18n[currentLanguage][key];
        
        if (translation) {
            el.placeholder = translation;
        }
    });
}

function switchLanguage(lang) {
    if (lang !== currentLanguage) {
        currentLanguage = lang;
        localStorage.setItem('maitea-lang', lang);
        translatePage();
        updateLanguageButtons();
        document.documentElement.lang = lang;
    }
}

function updateLanguageButtons() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        if (btnLang === currentLanguage) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    updateLanguageButtons();
}

// ============================================
// MOBILE NAVIGATION
// ============================================

function initMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    
    if (!navToggle || !nav) return;
    
    navToggle.addEventListener('click', () => {
        const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
        
        navToggle.setAttribute('aria-expanded', !isOpen);
        nav.classList.toggle('active');
        
        // Prevent body scroll when menu is open with class-based approach
        if (!isOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    });
    
    // Close menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.setAttribute('aria-expanded', 'false');
            nav.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('active')) {
            navToggle.setAttribute('aria-expanded', 'false');
            nav.classList.remove('active');
            document.body.classList.remove('menu-open');
            navToggle.focus();
        }
    });
}

// ============================================
// PAPER ANIMATION (HERO)
// ============================================

function initPaperAnimation() {
    const paperAnimation = document.querySelector('.paper-animation');
    
    if (!paperAnimation) return;
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        paperAnimation.setAttribute('data-open', 'true');
        return;
    }
    
    // Start animation automatically on load
    window.addEventListener('load', () => {
        setTimeout(() => {
            paperAnimation.setAttribute('data-open', 'true');
        }, 50);
    });
}

// ============================================
// SECTION REVEAL - Intersection Observer
// ============================================

function initSectionReveal() {
    // Skip if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.section-reveal').forEach(section => {
            section.classList.add('section-revealed');
        });
        return;
    }
    
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.section-reveal').forEach(section => {
        observer.observe(section);
    });
}

// ============================================
// LAZY IMAGE LOADING - Smooth fade-in
// ============================================

function initLazyImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });
}

// ============================================
// CONTACT FORM VALIDATION
// ============================================

function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    
    const formSuccess = document.getElementById('formSuccess');
    
    function validateField(input, errorElement, validationType = 'required') {
        const value = input.value.trim();
        let errorMessage = '';
        
        if (input.hasAttribute('required') && !value) {
            errorMessage = i18n[currentLanguage]['contact.form.error.required'];
            input.classList.add('error');
        }
        else if (validationType === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                errorMessage = i18n[currentLanguage]['contact.form.error.email'];
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        }
        else {
            input.classList.remove('error');
        }
        
        if (errorElement) {
            errorElement.textContent = errorMessage;
        }
        
        return !errorMessage;
    }
    
    function validateForm() {
        const isNameValid = validateField(nameInput, nameError);
        const isEmailValid = validateField(emailInput, emailError, 'email');
        const isMessageValid = validateField(messageInput, messageError);
        
        return isNameValid && isEmailValid && isMessageValid;
    }
    
    // Real-time validation on blur
    nameInput.addEventListener('blur', () => validateField(nameInput, nameError));
    emailInput.addEventListener('blur', () => validateField(emailInput, emailError, 'email'));
    messageInput.addEventListener('blur', () => validateField(messageInput, messageError));
    
    // Clear error on input
    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener('input', () => {
            input.classList.remove('error');
            const errorId = input.id + 'Error';
            const errorElement = document.getElementById(errorId);
            if (errorElement) {
                errorElement.textContent = '';
            }
        });
    });
    
    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        // Show success message
        formSuccess.classList.add('show');
        form.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            formSuccess.classList.remove('show');
        }, 5000);
        
        // Scroll to success message
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================

function initScrollReveal() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards, service cards, and process steps
    const elementsToReveal = document.querySelectorAll('.card, .service-card, .process-step, .value-item, .contact-card, .service-detail');
    elementsToReveal.forEach(el => {
        el.classList.add('reveal-element');
        observer.observe(el);
    });
}

// ============================================
// HEADER SCROLL EFFECT
// ============================================

function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScroll = 0;
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize i18n
    translatePage();
    initLanguageSwitcher();
    
    // Initialize navigation
    initMobileNav();
    
    // Initialize animations
    initPaperAnimation();
    
    // Initialize performance optimizations
    initSectionReveal();
    initLazyImages();
    
    // Initialize form validation
    initContactForm();
    
    // Initialize smooth scroll
    initSmoothScroll();
    
    // Initialize scroll reveal (existing)
    initScrollReveal();
    
    // Initialize header scroll effect
    initHeaderScroll();
    
    // Initialize gallery lightbox
    initGalleryLightbox();
});

// ============================================
// GALLERY LIGHTBOX
// ============================================

function initGalleryLightbox() {
    const lightbox = document.getElementById('gallery-lightbox');
    if (!lightbox) return;

    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    const galleryItems = document.querySelectorAll('[data-lightbox-trigger]');
    
    let currentIndex = 0;
    const images = Array.from(galleryItems).map(item => {
        const img = item.querySelector('img');
        return {
            src: img.src.replace('w=800', 'w=1600'),
            alt: img.alt
        };
    });

    function openLightbox(index) {
        currentIndex = index;
        lightboxImage.src = images[index].src;
        lightboxImage.alt = images[index].alt;
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImage.src = images[currentIndex].src;
        lightboxImage.alt = images[currentIndex].alt;
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImage.src = images[currentIndex].src;
        lightboxImage.alt = images[currentIndex].alt;
    }

    // Event listeners
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(index);
            }
        });
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
    });

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowRight':
                showNext();
                break;
            case 'ArrowLeft':
                showPrev();
                break;
        }
    });
}

// ============================================
// CONTACT FORM AUTO-FILL
// ============================================

function initContactFormAutoFill() {
    // Check if we're on contact page and came from a CTA button
    if (window.location.hash === '#contact-form') {
        const messageField = document.getElementById('message');
        
        if (messageField && !messageField.value) {
            // Polite, formal pre-filled message
            const defaultMessage = `Pozdrav,

Interesuje me Vaša ponuda ketering usluga i želeo/želela bih da saznam više informacija.

Planiram događaj i želeo/želela bih da razgovaramo o mogućnostima, meniju i cenama.

Hvala unapred na odgovoru!`;
            
            messageField.value = defaultMessage;
            
            // Smooth scroll to form
            setTimeout(() => {
                const formSection = document.getElementById('contact-form');
                if (formSection) {
                    formSection.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                    
                    // Focus on name field after scroll
                    setTimeout(() => {
                        const nameField = document.getElementById('name');
                        if (nameField) {
                            nameField.focus();
                        }
                    }, 600);
                }
            }, 100);
        }
    }
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContactFormAutoFill);
} else {
    initContactFormAutoFill();
}
