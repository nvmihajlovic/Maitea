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
        'nav.gallery': 'Galerija',
        'nav.contact': 'Kontakt',
        
        // Hero
        'hero.tagline': 'Umetnički ketering za nezaboravne trenutke',
        'hero.headline': 'Gde estetika sreće ukus',
        'hero.descriptor': 'Umetnički ketering za korporativne,<br>privatne i ekskluzivne događaje',
        'hero.text': 'Kreiramo kulinarska iskustva koja nadilaze očekivanja. Svaki detalj je osmišljen sa strašću i preciznošću.',
        'hero.cta': 'Zakažite konsultaciju',
        'hero.cta.book': 'Rezervišite',
        'hero.cta.services': 'Naše usluge',
        
        // Philosophy
        'philosophy.aesthetic': 'Estetika.',
        'philosophy.taste': 'Ukus.',
        'philosophy.reliability': 'Pouzdanost.',
        
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
            'cta.title': 'Spremni za nezaboravan događaj? Razgovarajmo o <br>Vašoj ideji.',
        'cta.text': 'Kontaktirajte nas i počnimo sa planiranjem.',
        'cta.button': 'Pošaljite upit',
        
        // Footer
        'footer.tagline': 'Umetnički ketering',
        'footer.brand.statement': 'Estetika · Ukus · Pouzdanost',
        'footer.design.credit': 'Dizajn i izrada:',
        'footer.cta': 'Pošaljite upit',
        'footer.links.title': 'Linkovi',
        'footer.contact.title': 'Kontakt',
        'footer.copyright': 'Sva prava zadržana.',
        
        // Gallery Page
        'gallery.title': 'Galerija',
        'gallery.subtitle': 'Kulinarska umetnost u svakom detalju',
        'gallery.centerfeast.title': 'CENTERFEAST',
        'gallery.centerfeast.subtitle': 'Sto koji postaje centar okupljanja',
        'gallery.layers.title': 'LAYERS of FEAST',
        'gallery.layers.subtitle': 'Prefinjenost sa ritmom',
        'gallery.cta.title': 'Zainteresovani?',
        'gallery.cta.text': 'Slobodno nas kontaktirajte. Rado ćemo odgovoriti na Vaša pitanja.',
        
        // Concepts (index.html)
        'concepts.intro.title': 'Dva koncepta. Jedan cilj.',
        'concepts.intro.text': 'MAITEA je umetnički ketering koji pretvara sto u scenu, a hranu u doživljaj.<br>Kroz dva pažljivo osmišljena koncepta, svako slavlje dobija svoju atmosferu, ritam i karakter.',
        'concepts.centerfeast.title': 'CENTERFEAST',
        'concepts.centerfeast.subtitle': 'Sto koji postaje centar okupljanja',
        'concepts.centerfeast.p1': 'CENTERFEAST je sto prekriven pažljivo aranžiranom hranom na pek papiru, gde se boje, mirisi, ukusi i teksture spajaju u malo umetničko delo.',
        'concepts.centerfeast.p2': 'Savršen je za intimne proslave, porodične večere i trenutke koji zaslužuju poseban sjaj. Ovakav način posluženja stvara osećaj bliskosti i povezuje ljude oko hrane.',
        'concepts.centerfeast.link': 'Pogledajte slike',
        'concepts.layers.title': 'LAYERS of FEAST',
        'concepts.layers.subtitle': 'Prefinjenost sa ritmom',
        'concepts.layers.p1': 'LAYERS of FEAST je klasičan ketering u modernom, luksuznom izdanju - jer i praktičnost može biti servirana sa elegancijom.',
        'concepts.layers.p2': 'Višeslojno posluženje osmišljeno je za venčanja, rođendane, evente i velike proslave koje traže više od običnog keteringa. Bogato, rustično i sa stilom.',
        'concepts.layers.link': 'Pogledajte slike',
        
        // About Page
        'about.page.title': 'O nama',
        'about.page.intro': 'Mi smo tim koji shvata Vaš događaj ozbiljno - sa stilom, strukčnošću i poštovanjem prema svakom detalju.',
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
        'about.approach.p1': 'Fokusiramo se na autentičnost i originalnost. Ne pratimo trendove slepo - stvaramo časne, ukusne prezentacije koje odražavaju karakter vašeg događaja.',
        'about.approach.p2': 'Cenimo jednostavnost i eleganciju, gde svaki element ima svoju svrhu. Koristimo sezonske sastojke i poštujemo kulinarske tradicije kroz moderan pristup.',
        'about.cta.title': 'Voleli bismo da vas upoznamo',
        'about.cta.text': 'Razgovarajmo o Vašem događaju. Slobodno nas kontaktirajte - ovde smo da slušamo.',
        
        // Services Page
        'services.page.title': 'Naše usluge',
        'services.page.intro': 'Svaki događaj je jedinstven. Naša uloga je da vašu viziju prenesemo u stvarnost sa stilom: tačno i profesionalno.',
        'services.detail.corporate.title': 'Korporativni eventi',
        'services.detail.corporate.lead': 'Profesionalan pristup za poslovne događaje koji ostavljaju trajan utisak.',
        'services.detail.corporate.p1': 'Od poslovnih doručaka i radnih ručkova do svečanih proslava - nudimo ketering koji odražava profesionalnost vašeg brenda.',
        'services.detail.corporate.includes': 'Šta obuhvata:',
        'services.detail.corporate.item1': 'Poslovni doručci, ručkovi, kokteli',
        'services.detail.corporate.item2': 'Konferencije i seminari',
        'services.detail.corporate.item3': 'Team building događaji',
        'services.detail.corporate.item4': 'Korporativne proslave',
        'services.detail.private.title': 'Privatne proslave',
        'services.detail.private.lead': 'Intimni i porodični trenuci zaslužuju pažnju i autentičan pristup.',
        'services.detail.private.p1': 'Rođendani, jubileji, krsne slave, porodična okupljanja - stvaramo toplu atmosferu kroz hranu koja donosi radost.',
        'services.detail.private.includes': 'Šta obuhvata:',
        'services.detail.private.item1': 'Rođendanske proslave',
        'services.detail.private.item2': 'Krsne slave i verske proslave',
        'services.detail.private.item3': 'Godišnjice i jubileji',
        'services.detail.private.item4': 'Porodična okupljanja',
        'services.detail.wedding.title': 'Wedding catering',
        'services.detail.wedding.lead': 'Najlepši dan zaslužuje savršenu kulinarsku priču.',
        'services.detail.wedding.p1': 'Od koktela dobrodošlice do svadbene večere - stvaramo doživljaj koji će gosti pamtiti.',
        'services.detail.wedding.includes': 'Šta obuhvata:',
        'services.detail.wedding.item1': 'Kokteli dobrodošlice i apetiti',
        'services.detail.wedding.item2': 'Personalizovani vjenčani meni',
        'services.detail.wedding.item3': 'Degustacione večere',
        'services.detail.wedding.item4': 'Dizajn i prezentacija stola',
        'services.detail.tasting.title': 'Degustacioni meniji',
        'services.detail.tasting.lead': 'Kulinarski putevi koji otkrivaju priče i ukuse.',
        'services.detail.tasting.p1': 'Kreiramo degustacione večere koje vode goste kroz niz pažljivo odabranih jela - svako sa svojom pričom.',
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
        'services.cta.title': 'Razgovarajmo o Vašem događaju',
        'services.cta.text': 'Bez obaveze. Samo otvorena konverzacija o Vama, Vašoj viziji i načinu na koji možemo pomoći.',

        // Services Offers Page
        'services.offers.intro.text': 'U nastavku su naše konkretne ponude bez istaknutih cena. Izaberite tip proslave, paket i broj gostiju, a mi vam šaljemo personalizovanu ponudu.',
        'services.offers.intro.note': 'U cenu svih paketa uključene su dekoracija stola i dostava na teritoriji Beograda.',
        'services.offers.centerfeast.title': 'Centerfeast (Finger Food)',
        'services.offers.centerfeast.lead': 'Posluženje preko stola na pek papiru, prilagođeno broju gostiju.',
        'services.offers.centerfeast.soft.1': 'Kanapei, bruskete',
        'services.offers.centerfeast.soft.2': 'Krekeri, grisine, kiflice',
        'services.offers.centerfeast.soft.3': 'Slane palačinkice sa pilećom salatom, kikirikijem i susamom',
        'services.offers.centerfeast.soft.4': 'Urnebes kuglice',
        'services.offers.centerfeast.soft.5': 'Selekcija suhomesnatih proizvoda',
        'services.offers.centerfeast.soft.6': 'Selekcija sireva',
        'services.offers.centerfeast.soft.7': 'Sveže voće i povrće',
        'services.offers.centerfeast.soft.8': 'Orašasti plodovi',
        'services.offers.centerfeast.bold.1': 'Kanapei, bruskete',
        'services.offers.centerfeast.bold.2': 'Krekeri, grisine, domaći crni hleb',
        'services.offers.centerfeast.bold.3': 'Biftek rolnice',
        'services.offers.centerfeast.bold.4': 'Gambori na avokadu',
        'services.offers.centerfeast.bold.5': 'Slane palačinkice sa pilećom salatom, kikirikijem i susamom',
        'services.offers.centerfeast.bold.6': 'Urnebes kuglice',
        'services.offers.centerfeast.bold.7': 'Selekcija suhomesnatih proizvoda',
        'services.offers.centerfeast.bold.8': 'Selekcija sireva',
        'services.offers.centerfeast.bold.9': 'Sveže voće i povrće',
        'services.offers.centerfeast.bold.10': 'Orašasti plodovi',
        'services.offers.centerfeast.prime.1': 'Kanapei, bruskete',
        'services.offers.centerfeast.prime.2': 'Mini ćabate sa pestom',
        'services.offers.centerfeast.prime.3': 'Krekeri, grisine, domaći crni hleb',
        'services.offers.centerfeast.prime.4': 'Maitea cups',
        'services.offers.centerfeast.prime.5': 'Biftek rolnice',
        'services.offers.centerfeast.prime.6': 'Gambori na avokadu',
        'services.offers.centerfeast.prime.7': 'Losos korpice',
        'services.offers.centerfeast.prime.8': 'Kruška sa gorgonzolom i medom',
        'services.offers.centerfeast.prime.9': 'Urnebes salata',
        'services.offers.centerfeast.prime.10': 'Selekcija suhomesnatih proizvoda i sireva',
        'services.offers.centerfeast.prime.11': 'Sveže voće, povrće i orašasti plodovi',
        'services.offers.kids.title': 'Dečiji rođendani',
        'services.offers.kids.lead': 'Tri varijante posluženja u skladu sa tipom proslave i brojem mališana i odraslih.',
        'services.offers.kids.brunch.title': 'Brunch (doručak)',
        'services.offers.kids.brunch.1': 'Kiflice, gibanica, projice',
        'services.offers.kids.brunch.2': 'Punjena barena jaja',
        'services.offers.kids.brunch.3': 'Uštipci',
        'services.offers.kids.brunch.4': 'Spanać-šunka rolat',
        'services.offers.kids.brunch.5': 'Urnebes',
        'services.offers.kids.brunch.6': 'Selekcija sireva i suhomesnatih proizvoda',
        'services.offers.kids.brunch.7': 'Mini ćabatice sa pestom i pršutom',
        'services.offers.kids.brunch.8': 'Kanapei sa namazom od spanaća, sira i pečenice',
        'services.offers.kids.brunch.9': 'Voće, povrće i orašasti plodovi',
        'services.offers.kids.basic.1': 'Mix roštilja (ćevapi, uštipci, kobasica, rolovana piletina) + veggies',
        'services.offers.kids.basic.2': 'Kiflice, gibanica, somuni',
        'services.offers.kids.basic.3': 'Mix salata',
        'services.offers.kids.basic.4': 'Urnebes kuglice',
        'services.offers.kids.basic.5': 'Plata suhomesnatih proizvoda i sireva',
        'services.offers.kids.standard.1': 'Mix roštilja (ćevapi, uštipci, kobasica, rolovana piletina) + veggies',
        'services.offers.kids.standard.2': 'Kiflice, gibanica, somuni',
        'services.offers.kids.standard.3': 'Spanać-šunka rolat',
        'services.offers.kids.standard.4': 'Mix kanapea i brusketa',
        'services.offers.kids.standard.5': 'Urnebes kuglice',
        'services.offers.kids.standard.6': 'Mix salata',
        'services.offers.kids.standard.7': 'Pileća salata sa narom i kikirikijem',
        'services.offers.kids.standard.8': 'Plata suhomesnatih proizvoda i plata sireva',
        'services.offers.kids.standard.9': 'Voće, povrće i orašasti plodovi',
        'services.offers.layers.title': 'Layers of Feast',
        'services.offers.layers.lead': 'Za veće proslave, event-ove, slave i ostale svečanosti sa kompletnim servisom.',
        'services.offers.layers.soft.1': 'Domaće kiflice, somuni',
        'services.offers.layers.soft.2': 'Mix kanapea i brusketa',
        'services.offers.layers.soft.3': 'Urnebes kuglice',
        'services.offers.layers.soft.4': 'Plata suhomesnatih proizvoda i sireva',
        'services.offers.layers.soft.5': 'Grčka i sezonska salata',
        'services.offers.layers.soft.6': 'Mix roštilja (ćevapi, uštipci, kobasica, rolovana piletina) + veggies',
        'services.offers.layers.soft.7': 'Voće, povrće i orašasti plodovi',
        'services.offers.layers.bold.1': 'Domaće kiflice, somuni, gibanica',
        'services.offers.layers.bold.2': 'Mix kanapea i brusketa',
        'services.offers.layers.bold.3': 'Urnebes i susam kuglice',
        'services.offers.layers.bold.4': 'Plata suhomesnatih proizvoda i sireva',
        'services.offers.layers.bold.5': 'Grčka i sezonska salata',
        'services.offers.layers.bold.6': 'Pileća salata',
        'services.offers.layers.bold.7': 'Mix roštilja + veggies',
        'services.offers.layers.bold.8': 'Svinjski file u sosu',
        'services.offers.layers.bold.9': 'Voće, povrće i orašasti plodovi',
        'services.offers.layers.prime.1': 'Domaće kiflice, somuni, gibanica',
        'services.offers.layers.prime.2': 'Mix kanapea i brusketa',
        'services.offers.layers.prime.3': 'Urnebes i susam kuglice',
        'services.offers.layers.prime.4': 'Spanać-šunka rolat',
        'services.offers.layers.prime.5': 'Plata suhomesnatih proizvoda i sireva',
        'services.offers.layers.prime.6': 'Grčka, pileća i salata po izboru',
        'services.offers.layers.prime.7': 'Teletina ispod sača',
        'services.offers.layers.prime.8': 'Dimljena svinjska rebra ispod sača (ili sarma sa svinjskim rebrima)',
        'services.offers.layers.prime.9': 'Krompir sač',
        'services.offers.layers.prime.10': 'Voće, povrće i orašasti plodovi',
        'services.inquiry.title': 'Pošaljite upit',
        'services.inquiry.intro': 'Recite nam šta vam treba i pripremićemo predlog prema vašem događaju.',
        'services.inquiry.fullname': 'Ime i prezime',
        'services.inquiry.email': 'Email',
        'services.inquiry.phone': 'Telefon',
        'services.inquiry.eventType': 'Tip proslave',
        'services.inquiry.select': 'Izaberite',
        'services.inquiry.event.centerfeast': 'Centerfeast (Finger Food)',
        'services.inquiry.event.kids': 'Dečiji rođendani',
        'services.inquiry.event.layers': 'Layers of Feast',
        'services.inquiry.event.other': 'Drugo',
        'services.inquiry.package': 'Paket',
        'services.inquiry.selectPackage': 'Izaberite paket',
        'services.inquiry.guests': 'Broj gostiju',
        'services.inquiry.date': 'Datum događaja',
        'services.inquiry.location': 'Lokacija',
        'services.inquiry.notes': 'Dodatne napomene',
        'services.inquiry.notes.placeholder': 'Npr. alergeni, tip posluženja, posebne želje...',
        'services.inquiry.submit': 'Pošaljite upit',
        
        // Contact Page
        'contact.page.title': 'Kontakt',
        'contact.page.intro': 'Javite nam se - rado ćemo odgovoriti na sva pitanja.',
        'contact.phone.title': 'Telefon',
        'contact.phone.note': 'Pon-Pet 9:00-18:00',
        'contact.email.title': 'Email',
        'contact.email.note': 'Odgovaramo u roku od 24h',
        'contact.location.title': 'Lokacija',
        'contact.location.note': 'Radimo na teritoriji Beograda',
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
        'contact.form.message.autofill': 'Pozdrav,\n\nInteresuje me Vaša ponuda ketering usluga i želeo/želela bih da saznam više informacija.\n\nPlaniram događaj i želeo/želela bih da razgovaramo o mogućnostima, meniju i cenama.\n\nHvala unapred na odgovoru!',
        'contact.form.submit': 'Pošaljite upit',
        'contact.form.sending': 'Slanje u toku...',
        'contact.form.success': 'Hvala! Vaša poruka je uspešno poslata. Kontaktiraćemo vas uskoro.',
        'contact.form.error.submit': 'Došlo je do greške pri slanju. Pokušajte ponovo za par minuta.',
        'contact.form.error.required': 'Ovo polje je obavezno',
        'contact.form.error.email': 'Unesite validnu email adresu',

        'services.inquiry.sending': 'Slanje u toku...',
        'services.inquiry.success': 'Hvala! Upit je uspešno poslat. Javićemo vam se uskoro.',
        'services.inquiry.error.submit': 'Došlo je do greške pri slanju upita. Pokušajte ponovo za par minuta.',
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
        'hero.headline': 'Where aesthetics<br>meet taste',
        'hero.descriptor': 'Artistic catering for corporate,<br>private and exclusive events',
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
            'cta.title': 'Ready for an unforgettable event? <br>Let\'s talk about your idea.',
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
        'gallery.centerfeast.title': 'CENTERFEAST',
        'gallery.centerfeast.subtitle': 'A table that becomes the center of gathering',
        'gallery.layers.title': 'LAYERS of FEAST',
        'gallery.layers.subtitle': 'Refinement with rhythm',
        'gallery.cta.title': 'Interested?',
        'gallery.cta.text': 'Feel free to contact us. We\'ll gladly answer your questions.',
        
        // Concepts (index.html)
        'concepts.intro.title': 'Two concepts. One goal.',
        'concepts.intro.text': 'MAITEA is artistic catering that turns the table into a stage, and food into an experience.<br>Through two carefully designed concepts, every celebration gets its own atmosphere, rhythm and character.',
        'concepts.centerfeast.title': 'CENTERFEAST',
        'concepts.centerfeast.subtitle': 'The table becomes the center of gathering',
        'concepts.centerfeast.p1': 'CENTERFEAST is a table covered with carefully arranged food on parchment paper, where colors, aromas, flavors and textures come together in a small work of art.',
        'concepts.centerfeast.p2': 'Perfect for intimate celebrations, family dinners and moments that deserve a special glow. This style of serving creates a sense of closeness and connects people around food.',
        'concepts.centerfeast.link': 'See photos',
        'concepts.layers.title': 'LAYERS of FEAST',
        'concepts.layers.subtitle': 'Sophistication with rhythm',
        'concepts.layers.p1': 'LAYERS of FEAST is classic catering in a modern, luxurious edition - because even practicality can be served with elegance.',
        'concepts.layers.p2': 'Multi-layered serving designed for weddings, birthdays, events and large celebrations that demand more than ordinary catering. Rich, rustic and with style.',
        'concepts.layers.link': 'See photos',
        
        // About Page
        'about.page.title': 'About Us',
        'about.page.intro': 'We are a team that takes your event seriously - with style, expertise, and respect for every detail.',
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
        'about.approach.p1': 'We focus on authenticity and originality. We don\'t follow trends blindly - we create honest, tasty presentations that reflect your event\'s character.',
        'about.approach.p2': 'We value simplicity and elegance, where every element has its purpose. We use seasonal ingredients and respect culinary traditions through a modern approach.',
        'about.cta.title': 'We\'d love to meet you',
        'about.cta.text': 'Let\'s talk about your event. Feel free to contact us - we\'re here to listen.',
        
        // Services Page
        'services.page.title': 'Our Services',
        'services.page.intro': 'Every event is unique. Our role is to bring your vision to life with style: precisely and professionally.',
        'services.detail.corporate.title': 'Corporate Events',
        'services.detail.corporate.lead': 'Professional approach for business events that leave a lasting impression.',
        'services.detail.corporate.p1': 'From business breakfasts and working lunches to formal celebrations - we offer catering that reflects your brand\'s professionalism.',
        'services.detail.corporate.includes': 'What\'s included:',
        'services.detail.corporate.item1': 'Business breakfasts, lunches, cocktails',
        'services.detail.corporate.item2': 'Conferences and seminars',
        'services.detail.corporate.item3': 'Team building events',
        'services.detail.corporate.item4': 'Corporate celebrations',
        'services.detail.private.title': 'Private Celebrations',
        'services.detail.private.lead': 'Intimate and family moments deserve attention and an authentic approach.',
        'services.detail.private.p1': 'Birthdays, anniversaries, patron saint days, family gatherings - we create a warm atmosphere through food that brings joy.',
        'services.detail.private.includes': 'What\'s included:',
        'services.detail.private.item1': 'Birthday celebrations',
        'services.detail.private.item2': 'Patron saint days and religious celebrations',
        'services.detail.private.item3': 'Anniversaries and jubilees',
        'services.detail.private.item4': 'Family gatherings',
        'services.detail.wedding.title': 'Wedding Catering',
        'services.detail.wedding.lead': 'The most beautiful day deserves a perfect culinary story.',
        'services.detail.wedding.p1': 'From welcome cocktails to wedding dinner - we create an experience guests will remember.',
        'services.detail.wedding.includes': 'What\'s included:',
        'services.detail.wedding.item1': 'Welcome cocktails and appetizers',
        'services.detail.wedding.item2': 'Personalized wedding menu',
        'services.detail.wedding.item3': 'Tasting dinners',
        'services.detail.wedding.item4': 'Table design and presentation',
        'services.detail.tasting.title': 'Tasting Menus',
        'services.detail.tasting.lead': 'Culinary journeys that reveal stories and flavors.',
        'services.detail.tasting.p1': 'We create tasting dinners that guide guests through a series of carefully selected dishes - each with its own story.',
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

        // Services Offers Page
        'services.offers.intro.text': 'Below are our concrete offers without listed prices. Choose the type of celebration, package, and number of guests, and we will send you a personalized offer.',
        'services.offers.intro.note': 'Table decoration and delivery within Belgrade are included in all packages.',
        'services.offers.centerfeast.title': 'Centerfeast (Finger Food)',
        'services.offers.centerfeast.lead': 'Table-top serving on parchment paper, tailored to the number of guests.',
        'services.offers.centerfeast.soft.1': 'Canapes, bruschettas',
        'services.offers.centerfeast.soft.2': 'Crackers, breadsticks, mini rolls',
        'services.offers.centerfeast.soft.3': 'Savory mini pancakes with chicken salad, peanuts, and sesame',
        'services.offers.centerfeast.soft.4': 'Urnebes balls',
        'services.offers.centerfeast.soft.5': 'Selection of cured meats',
        'services.offers.centerfeast.soft.6': 'Selection of cheeses',
        'services.offers.centerfeast.soft.7': 'Fresh fruit and vegetables',
        'services.offers.centerfeast.soft.8': 'Nuts',
        'services.offers.centerfeast.bold.1': 'Canapes, bruschettas',
        'services.offers.centerfeast.bold.2': 'Crackers, breadsticks, homemade dark bread',
        'services.offers.centerfeast.bold.3': 'Beef rolls',
        'services.offers.centerfeast.bold.4': 'Shrimp on avocado',
        'services.offers.centerfeast.bold.5': 'Savory mini pancakes with chicken salad, peanuts, and sesame',
        'services.offers.centerfeast.bold.6': 'Urnebes balls',
        'services.offers.centerfeast.bold.7': 'Selection of cured meats',
        'services.offers.centerfeast.bold.8': 'Selection of cheeses',
        'services.offers.centerfeast.bold.9': 'Fresh fruit and vegetables',
        'services.offers.centerfeast.bold.10': 'Nuts',
        'services.offers.centerfeast.prime.1': 'Canapes, bruschettas',
        'services.offers.centerfeast.prime.2': 'Mini ciabattas with pesto',
        'services.offers.centerfeast.prime.3': 'Crackers, breadsticks, homemade dark bread',
        'services.offers.centerfeast.prime.4': 'Maitea cups',
        'services.offers.centerfeast.prime.5': 'Beef rolls',
        'services.offers.centerfeast.prime.6': 'Shrimp on avocado',
        'services.offers.centerfeast.prime.7': 'Salmon tartlets',
        'services.offers.centerfeast.prime.8': 'Pear with gorgonzola and honey',
        'services.offers.centerfeast.prime.9': 'Urnebes salad',
        'services.offers.centerfeast.prime.10': 'Selection of cured meats and cheeses',
        'services.offers.centerfeast.prime.11': 'Fresh fruit, vegetables, and nuts',
        'services.offers.kids.title': 'Children\'s Birthdays',
        'services.offers.kids.lead': 'Three serving variants tailored to the type of celebration and the number of children and adults.',
        'services.offers.kids.brunch.title': 'Brunch (Breakfast)',
        'services.offers.kids.brunch.1': 'Mini rolls, gibanica, mini corn muffins',
        'services.offers.kids.brunch.2': 'Stuffed boiled eggs',
        'services.offers.kids.brunch.3': 'Fritters',
        'services.offers.kids.brunch.4': 'Spinach-ham roll',
        'services.offers.kids.brunch.5': 'Urnebes spread',
        'services.offers.kids.brunch.6': 'Selection of cheeses and cured meats',
        'services.offers.kids.brunch.7': 'Mini ciabattas with pesto and prosciutto',
        'services.offers.kids.brunch.8': 'Canapes with spinach, cheese, and smoked-meat spread',
        'services.offers.kids.brunch.9': 'Fruit, vegetables, and nuts',
        'services.offers.kids.basic.1': 'Mixed grill (cevapi, fritters, sausage, rolled chicken) + veggies',
        'services.offers.kids.basic.2': 'Mini rolls, gibanica, flatbreads',
        'services.offers.kids.basic.3': 'Mixed salads',
        'services.offers.kids.basic.4': 'Urnebes balls',
        'services.offers.kids.basic.5': 'Platter of cured meats and cheeses',
        'services.offers.kids.standard.1': 'Mixed grill (cevapi, fritters, sausage, rolled chicken) + veggies',
        'services.offers.kids.standard.2': 'Mini rolls, gibanica, flatbreads',
        'services.offers.kids.standard.3': 'Spinach-ham roll',
        'services.offers.kids.standard.4': 'Mix of canapes and bruschettas',
        'services.offers.kids.standard.5': 'Urnebes balls',
        'services.offers.kids.standard.6': 'Mixed salads',
        'services.offers.kids.standard.7': 'Chicken salad with pomegranate and peanuts',
        'services.offers.kids.standard.8': 'Platter of cured meats and platter of cheeses',
        'services.offers.kids.standard.9': 'Fruit, vegetables, and nuts',
        'services.offers.layers.title': 'Layers of Feast',
        'services.offers.layers.lead': 'For larger celebrations, events, patron saint days, and other festivities with full service.',
        'services.offers.layers.soft.1': 'Homemade mini rolls, flatbreads',
        'services.offers.layers.soft.2': 'Mix of canapes and bruschettas',
        'services.offers.layers.soft.3': 'Urnebes balls',
        'services.offers.layers.soft.4': 'Platter of cured meats and cheeses',
        'services.offers.layers.soft.5': 'Greek and seasonal salad',
        'services.offers.layers.soft.6': 'Mixed grill (cevapi, fritters, sausage, rolled chicken) + veggies',
        'services.offers.layers.soft.7': 'Fruit, vegetables, and nuts',
        'services.offers.layers.bold.1': 'Homemade mini rolls, flatbreads, gibanica',
        'services.offers.layers.bold.2': 'Mix of canapes and bruschettas',
        'services.offers.layers.bold.3': 'Urnebes and sesame balls',
        'services.offers.layers.bold.4': 'Platter of cured meats and cheeses',
        'services.offers.layers.bold.5': 'Greek and seasonal salad',
        'services.offers.layers.bold.6': 'Chicken salad',
        'services.offers.layers.bold.7': 'Mixed grill + veggies',
        'services.offers.layers.bold.8': 'Pork tenderloin in sauce',
        'services.offers.layers.bold.9': 'Fruit, vegetables, and nuts',
        'services.offers.layers.prime.1': 'Homemade mini rolls, flatbreads, gibanica',
        'services.offers.layers.prime.2': 'Mix of canapes and bruschettas',
        'services.offers.layers.prime.3': 'Urnebes and sesame balls',
        'services.offers.layers.prime.4': 'Spinach-ham roll',
        'services.offers.layers.prime.5': 'Platter of cured meats and cheeses',
        'services.offers.layers.prime.6': 'Greek, chicken, and salad of choice',
        'services.offers.layers.prime.7': 'Veal under the sač',
        'services.offers.layers.prime.8': 'Smoked pork ribs under the sač (or sarma with pork ribs)',
        'services.offers.layers.prime.9': 'Potatoes under the sač',
        'services.offers.layers.prime.10': 'Fruit, vegetables, and nuts',
        'services.inquiry.title': 'Send Inquiry',
        'services.inquiry.intro': 'Tell us what you need and we will prepare a proposal tailored to your event.',
        'services.inquiry.fullname': 'Full Name',
        'services.inquiry.email': 'Email',
        'services.inquiry.phone': 'Phone',
        'services.inquiry.eventType': 'Type of Celebration',
        'services.inquiry.select': 'Select',
        'services.inquiry.event.centerfeast': 'Centerfeast (Finger Food)',
        'services.inquiry.event.kids': 'Children\'s birthdays',
        'services.inquiry.event.layers': 'Layers of Feast',
        'services.inquiry.event.other': 'Other',
        'services.inquiry.package': 'Package',
        'services.inquiry.selectPackage': 'Select package',
        'services.inquiry.guests': 'Number of Guests',
        'services.inquiry.date': 'Event Date',
        'services.inquiry.location': 'Location',
        'services.inquiry.notes': 'Additional Notes',
        'services.inquiry.notes.placeholder': 'E.g. allergens, serving style, special requests...',
        'services.inquiry.submit': 'Send Inquiry',
        
        // Contact Page
        'contact.page.title': 'Contact',
        'contact.page.intro': 'Get in touch - we\'ll gladly answer all questions.',
        'contact.phone.title': 'Phone',
        'contact.phone.note': 'Mon-Fri 9:00-18:00',
        'contact.email.title': 'Email',
        'contact.email.note': 'We respond within 24h',
        'contact.location.title': 'Location',
        'contact.location.note': 'We operate in the Belgrade area',
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
        'contact.form.message.autofill': 'Hello,\n\nI am interested in your catering services and would like to learn more.\n\nI am planning an event and would like to discuss options, menu, and pricing.\n\nThank you in advance for your response!',
        'contact.form.submit': 'Send Inquiry',
        'contact.form.sending': 'Sending...',
        'contact.form.success': 'Thank you! Your message has been sent successfully. We\'ll contact you soon.',
        'contact.form.error.submit': 'There was an error while sending. Please try again in a few minutes.',
        'contact.form.error.required': 'This field is required',
        'contact.form.error.email': 'Please enter a valid email address',

        'services.inquiry.sending': 'Sending...',
        'services.inquiry.success': 'Thank you! Your inquiry has been sent successfully. We will contact you soon.',
        'services.inquiry.error.submit': 'There was an error while sending your inquiry. Please try again in a few minutes.',
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
    document.documentElement.lang = currentLanguage;

    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = i18n[currentLanguage][key];
        
        if (translation) {
            // Use innerHTML if translation contains HTML tags, otherwise textContent
            if (translation.includes('<')) {
                el.innerHTML = translation;
            } else {
                el.textContent = translation;
            }
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
        
        // Update auto-fill message if on contact form
        if (window.location.hash === '#contact-form') {
            const messageField = document.getElementById('message');
            // Only update if it contains one of the default messages
            if (messageField && (
                messageField.value.includes('Interesuje me') || 
                messageField.value.includes('I am interested')
            )) {
                messageField.value = i18n[lang]['contact.form.message.autofill'];
            }
        }
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
    // Lazy loading iskljucen - odmah prikazujemo sve slike
    document.querySelectorAll('img').forEach(img => {
        img.classList.add('loaded');
    });
}

// ============================================
// CONTACT FORM VALIDATION
// ============================================

function getFormspreeEndpoint(form) {
    const dataEndpoint = (form?.dataset?.formspreeEndpoint || '').trim();
    const actionEndpoint = (form?.getAttribute('action') || '').trim();

    if (dataEndpoint && !dataEndpoint.includes('REPLACE_WITH_FORM_ID')) {
        return dataEndpoint;
    }

    if (actionEndpoint && !actionEndpoint.includes('REPLACE_WITH_FORM_ID')) {
        return actionEndpoint;
    }

    return '';
}

async function submitFormToFormspree(form, extraFields = {}) {
    const endpoint = getFormspreeEndpoint(form);

    if (!endpoint) {
        throw new Error('Formspree endpoint nije podešen.');
    }

    const formData = new FormData(form);
    Object.entries(extraFields).forEach(([key, value]) => {
        formData.set(key, value);
    });

    const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (!response.ok) {
        let details = '';
        try {
            const payload = await response.json();
            if (payload?.errors?.length) {
                details = payload.errors.map(item => item.message).join(' ');
            }
        } catch (_) {
            details = '';
        }

        throw new Error(details || 'Formspree request failed');
    }

    return response;
}

function setFormStatus(statusElement, message, type) {
    if (!statusElement) return;

    statusElement.textContent = message;
    statusElement.classList.remove('is-success', 'is-error', 'is-visible');

    if (!message) {
        return;
    }

    if (type === 'success') {
        statusElement.classList.add('is-success');
    } else if (type === 'error') {
        statusElement.classList.add('is-error');
    }

    statusElement.classList.add('is-visible');
}

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
    const submitButton = form.querySelector('button[type="submit"]');
    const defaultSubmitLabel = submitButton ? submitButton.textContent : '';
    
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
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = i18n[currentLanguage]['contact.form.sending'];
        }

        try {
            await submitFormToFormspree(form, {
                page: window.location.pathname,
                language: currentLanguage
            });

            formSuccess.classList.add('show');
            formSuccess.querySelector('p').textContent = i18n[currentLanguage]['contact.form.success'];
            form.reset();

            setTimeout(() => {
                formSuccess.classList.remove('show');
            }, 5000);

            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } catch (error) {
            formSuccess.classList.add('show');
            formSuccess.querySelector('p').textContent = i18n[currentLanguage]['contact.form.error.submit'];
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = i18n[currentLanguage]['contact.form.submit'] || defaultSubmitLabel;
            }
        }
    });
}

function initServicesInquiryForm() {
    const form = document.getElementById('servicesInquiryForm');
    if (!form) return;

    const statusElement = document.getElementById('servicesFormStatus');
    const submitButton = form.querySelector('button[type="submit"]');
    const defaultSubmitLabel = submitButton ? submitButton.textContent : '';

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        setFormStatus(statusElement, i18n[currentLanguage]['services.inquiry.sending'], null);

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = i18n[currentLanguage]['services.inquiry.sending'];
        }

        try {
            await submitFormToFormspree(form, {
                page: window.location.pathname,
                language: currentLanguage
            });

            setFormStatus(statusElement, i18n[currentLanguage]['services.inquiry.success'], 'success');

            form.reset();
        } catch (error) {
            setFormStatus(statusElement, i18n[currentLanguage]['services.inquiry.error.submit'], 'error');
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = i18n[currentLanguage]['services.inquiry.submit'] || defaultSubmitLabel;
            }
        }
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
// HERO IMAGE SLIDER
// ============================================

function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length < 2) return;

    let current = 0;
    const total = slides.length;
    const interval = 6000; // 6 seconds per slide

    // Make sure first slide is immediately visible with no transition
    slides[0].classList.add('hero-slide-no-transition');
    slides[0].classList.add('hero-slide-active');
    // Re-enable transition after paint
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            slides[0].classList.remove('hero-slide-no-transition');
        });
    });

    function nextSlide() {
        const prev = current;
        current = (current + 1) % total;

        slides[prev].classList.add('hero-slide-leaving');
        slides[prev].classList.remove('hero-slide-active');

        slides[current].classList.add('hero-slide-active');

        // Clean up leaving class after transition completes
        setTimeout(() => {
            slides[prev].classList.remove('hero-slide-leaving');
        }, 1400);
    }

    // Start auto-rotation
    let timer = setInterval(nextSlide, interval);

    // Pause when page is hidden (battery/performance)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearInterval(timer);
        } else {
            timer = setInterval(nextSlide, interval);
        }
    });

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        clearInterval(timer);
    }
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
    
    // Initialize hero slider
    initHeroSlider();
    
    // Initialize performance optimizations
    initSectionReveal();
    initLazyImages();
    
    // Initialize form validation
    initContactForm();
    initServicesInquiryForm();
    
    // Initialize smooth scroll
    initSmoothScroll();
    
    // Initialize scroll reveal (existing)
    initScrollReveal();
    
    // Initialize header scroll effect
    initHeaderScroll();
    
    // Initialize gallery lightbox
    initGalleryLightbox();

    // Initialize back to top button
    initBackToTop();
});

// ============================================
// BACK TO TOP BUTTON
// ============================================

function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

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
            // Get translated auto-fill message
            const currentLang = localStorage.getItem('maitea-lang') || 'sr';
            const defaultMessage = i18n[currentLang]['contact.form.message.autofill'];
            
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
