const fs = require('fs');
const path = require('path');

const bsPath = path.join(process.cwd(), 'src', 'i18n', 'locales', 'bs', 'translation.json');
const enPath = path.join(process.cwd(), 'src', 'i18n', 'locales', 'en', 'translation.json');

let bs = JSON.parse(fs.readFileSync(bsPath, 'utf-8'));
let en = JSON.parse(fs.readFileSync(enPath, 'utf-8'));

bs.gallery_page = { tag: 'Naši Radovi', title: 'Dokaz našeg kvaliteta', desc: 'Pogledajte rezultate našeg rada. Vaš osmijeh je naša najbolja reklama.', overlay: 'Prije & Poslije' };
en.gallery_page = { tag: 'Our Work', title: 'Proof of our Quality', desc: 'See the results of our work. Your smile is our best advertisement.', overlay: 'Before & After' };

bs.process_page = {
    tag: 'Naš Proces',
    title: 'Put do vašeg novog osmijeha',
    desc: 'Znamo da posjeta stomatologu može biti stresna. Zbog toga smo kreirali transparentan proces u 4 koraka koji stavlja vašu udobnost i sigurnost na prvo mjesto.',
    why_trust: { title: 'Zašto nam pacijenti vjeruju?', item1: 'Empatičan pristup bez osuđivanja', item2: 'Vrhunska higijena i sterilizacija', item3: 'Poštovanje vašeg vremena (bez čekanja)' },
    cta: { title: 'Spremni za prvi korak?', desc: 'Nemojte odgađati brigu o svom zdravlju. Javite nam se danas i zakažite svoje besplatne konsultacije.', btn: 'Zakažite Termin' },
    steps: [
        { step: '01', title: 'Prvi kontakt i konsultacije', desc: 'Sve počinje vašim pozivom ili porukom. Zakažemo termin koji vam odgovara. Na prvom pregledu pažljivo slušamo vaše želje i probleme, bez ikakvih obaveza.' },
        { step: '02', title: 'Detaljna dijagnostika i plan', desc: 'Koristimo modernu tehnologiju za preciznu dijagnostiku. Nakon toga, kreiramo jasan plan terapije sa ponuđenim opcijama i potpuno transparentnim cijenama.' },
        { step: '03', title: 'Bezbolan tretman', desc: 'Sam zahvat izvodimo u opuštajućoj atmosferi, koristeći moderne anestetike. Pratimo vaš ritam i pravimo pauze kad god su vam potrebne.' },
        { step: '04', title: 'Oporavak i novi osmijeh', desc: 'Dajemo vam detaljne upute za održavanje i uvijek smo dostupni za sva pitanja nakon zahvata. Vaš zdrav osmijeh je naš krajnji cilj.' }
    ]
};
en.process_page = {
    tag: 'Our Process',
    title: 'Path to your new smile',
    desc: 'We know a dentist visit can be stressful. That is why we created a transparent 4-step process prioritizing your comfort and safety.',
    why_trust: { title: 'Why do patients trust us?', item1: 'Empathetic approach without judgment', item2: 'Premium hygiene and sterilization', item3: 'Respect for your time (no waiting)' },
    cta: { title: 'Ready for the first step?', desc: 'Do not delay caring for your health. Contact us today and book your free consultation.', btn: 'Book Appointment' },
    steps: [
        { step: '01', title: 'First contact and consultation', desc: 'It all starts with your call or message. We schedule a convenient time. At the first visit, we carefully listen to your wishes and problems, without any obligation.' },
        { step: '02', title: 'Detailed diagnostics and plan', desc: 'We use modern technology for precise diagnostics. Then, we create a clear therapy plan with offered options and fully transparent prices.' },
        { step: '03', title: 'Painless treatment', desc: 'We perform the procedure in a relaxing atmosphere, using modern anesthetics. We follow your pace and take breaks whenever you need.' },
        { step: '04', title: 'Recovery and new smile', desc: 'We give you detailed maintenance instructions and are always available for questions post-procedure. Your healthy smile is our ultimate goal.' }
    ]
};

bs.about_page = {
    tag: 'O Meni', name: 'Dr. Sanela Kapić', role: 'Osnivač & Glavni Stomatolog',
    desc1: 'Dobrodošli u moju ordinaciju. Sa preko 15 godina iskustva u stomatologiji, moja misija je da razbijem strah od zubara i pružim vam osmijeh kakav zaslužujete.',
    desc2: 'Svakom pacijentu pristupam s posebnom pažnjom, duboko svjesna da stomatološki zahvati mogu izazvati nelagodu. Zato je moj prioritet stvoriti opuštajuću atmosferu u kojoj ćete se osjećati sigurno i opušteno. Nastojim da svaka posjeta bude ugodno iskustvo.',
    edu_title: 'Obrazovanje', edu_desc: 'Završila sam Stomatološki fakultet u Sarajevu, gdje sam stekla čvrste temelje. Od tada kontinuirano ulažem u edukaciju i praćenje najnovijih svjetskih trendova u stomatologiji.',
    exp_title: 'Usavršavanje', exp_desc: 'Redovno učestvujem na domaćim i međunarodnim kongresima iz oblasti estetske stomatologije i protetike kako bih svojim pacijentima omogućila isključivo vrhunsku i modernu uslugu.',
    phil_title: 'Filozofija rada', phil_desc: 'Moj pristup je nježan, precizan i potpuno fokusiran na vas. Vjerujem da je uzajamno povjerenje ključno, zbog čega svakom problemu pristupam vrlo individualno i saosjećajno.'
};
en.about_page = {
    tag: 'About Me', name: 'Dr. Sanela Kapić', role: 'Founder & Chief Dentist',
    desc1: 'Welcome to my clinic. With over 15 years of experience in dentistry, my mission is to break the fear of dentists and provide you with the smile you deserve.',
    desc2: 'I approach every patient with special care, deeply aware that dental procedures can cause discomfort. Therefore, my priority is to create a relaxing atmosphere where you will feel safe and comfortable. I strive to make each visit a pleasant experience.',
    edu_title: 'Education', edu_desc: 'I graduated from the Faculty of Dentistry in Sarajevo, where I gained a solid foundation. Since then, I continuously invest in education and tracking the latest global trends in dentistry.',
    exp_title: 'Training', exp_desc: 'I regularly participate in domestic and international congresses in aesthetic dentistry and prosthodontics to provide my patients exclusively with premium and modern services.',
    phil_title: 'Work Philosophy', phil_desc: 'My approach is gentle, precise, and entirely focused on you. I believe mutual trust is key, which is why I approach every problem highly individually and compassionately.'
};

bs.contact_page = {
    title: 'Zakažite svoj termin', desc: 'Spremni za savršen osmijeh? Kontaktirajte nas danas i zakažite besplatne konsultacije. Naš tim u Sarajevu vas očekuje.',
    phone: 'Telefon', email: 'Email', address: 'Adresa', hours: 'Radno Vrijeme',
    form: {
        name: 'Ime i Prezime', phone: 'Broj Telefona', service: 'Usluga', message: 'Poruka (Opciono)', btn: 'Pošalji Upit',
        placeholders: { name: 'Vaše ime', phone: 'Vaš broj telefona', message: 'Kako vam možemo pomoći?' },
        services: ['Opšti pregled', 'Popravka zuba', 'Izbjeljivanje', 'Protetika', 'Drugo']
    }
};
en.contact_page = {
    title: 'Book your appointment', desc: 'Ready for a perfect smile? Contact us today and book free consultations. Our team in Sarajevo is expecting you.',
    phone: 'Phone', email: 'Email', address: 'Address', hours: 'Working Hours',
    form: {
        name: 'Full Name', phone: 'Phone Number', service: 'Service', message: 'Message (Optional)', btn: 'Send Inquiry',
        placeholders: { name: 'Your name', phone: 'Your phone number', message: 'How can we help you?' },
        services: ['General checkup', 'Tooth repair', 'Whitening', 'Prosthetics', 'Other']
    }
};

bs.services_page = {
    tag: 'Naše Cijene', title: 'Cjenovnik Usluga',
    desc: 'Vjerujemo u potpunu transparentnost. Ispod se nalazi okvirni cjenovnik najčešćih usluga. Tačna cijena zavisi od individualnog plana liječenja koji se definiše na besplatnom pregledu.',
    cta_title: 'Niste sigurni šta Vam je potrebno?',
    cta_desc: 'Svaki osmijeh je jedinstven. Zakažite besplatan pregled i dobit ćete potpuno personalizovan plan liječenja sa preciznim troškovima.',
    cta_btn: 'Zakažite Besplatan Pregled',
    categories: [
        {
            naziv: 'Pregledi i Konzultacije',
            usluge: [
                { ime: 'Opšti stomatološki pregled', cijena: 'Besplatno' },
                { ime: 'Detaljni pregled i plan terapije', cijena: '50 KM' },
                { ime: 'Kontrolni pregled', cijena: 'Besplatno' },
                { ime: 'Konsultacije za estetiku i protetiku', cijena: 'Besplatno' }
            ]
        },
        {
            naziv: 'Konzervativna Stomatologija',
            usluge: [
                { ime: 'Kompozitni ispun (plomba) - jedna ploha', cijena: '50 KM' },
                { ime: 'Kompozitni ispun - dvije plohe', cijena: '60 KM' },
                { ime: 'Kompozitni ispun - tri i više ploha', cijena: '70 KM' },
                { ime: 'Liječenje korijenskog kanala (endodoncija)', cijena: 'od 80 KM' },
                { ime: 'Vađenje zuba (rutinsko)', cijena: '40 KM' }
            ]
        },
        {
            naziv: 'Protetika',
            usluge: [
                { ime: 'Metalokeramička krunica', cijena: '250 KM' },
                { ime: 'Cirkon (bezmetalna) krunica', cijena: '450 KM' },
                { ime: 'Privremena krunica', cijena: '50 KM' },
                { ime: 'Totalna ili parcijalna akrilatna proteza', cijena: '500 KM' },
                { ime: 'Skeletirana wironit proteza', cijena: '800 KM' }
            ]
        },
        {
            naziv: 'Estetska Stomatologija i Preventiva',
            usluge: [
                { ime: 'Ultrazvučno uklanjanje zubnog kamenca i poliranje', cijena: '50 KM' },
                { ime: 'Pjeskarenje zuba (AirFlow metoda)', cijena: '60 KM' },
                { ime: 'Lasersko izbjeljivanje zuba (obadvije vilice)', cijena: '300 KM' },
                { ime: 'Kompozitna faseta (veneer)', cijena: '150 KM' },
                { ime: 'Zubni nakit (cirkon)', cijena: '80 KM' }
            ]
        }
    ]
};
en.services_page = {
    tag: 'Our Prices', title: 'Service Pricing',
    desc: 'We believe in complete transparency. Below is a general pricing list for common services. The exact price depends on the individual treatment plan defined at the free consultation.',
    cta_title: 'Not sure what you need?',
    cta_desc: 'Every smile is unique. Book a free consultation and get a fully personalized treatment plan with precise costs.',
    cta_btn: 'Book a Free Checkup',
    categories: [
        {
            naziv: 'Checkups and Consultations',
            usluge: [
                { ime: 'General dental checkup', cijena: 'Free' },
                { ime: 'Detailed checkup and therapy plan', cijena: '50 KM' },
                { ime: 'Control checkup', cijena: 'Free' },
                { ime: 'Consultations for aesthetics and prosthetics', cijena: 'Free' }
            ]
        },
        {
            naziv: 'Conservative Dentistry',
            usluge: [
                { ime: 'Composite filling - one surface', cijena: '50 KM' },
                { ime: 'Composite filling - two surfaces', cijena: '60 KM' },
                { ime: 'Composite filling - three or more', cijena: '70 KM' },
                { ime: 'Root canal treatment (endodontics)', cijena: 'from 80 KM' },
                { ime: 'Tooth extraction (routine)', cijena: '40 KM' }
            ]
        },
        {
            naziv: 'Prosthetics',
            usluge: [
                { ime: 'Metal-ceramic crown', cijena: '250 KM' },
                { ime: 'Zirconia (metal-free) crown', cijena: '450 KM' },
                { ime: 'Temporary crown', cijena: '50 KM' },
                { ime: 'Full or partial acrylic denture', cijena: '500 KM' },
                { ime: 'Skeletal wironit denture', cijena: '800 KM' }
            ]
        },
        {
            naziv: 'Aesthetic Dentistry and Prevention',
            usluge: [
                { ime: 'Ultrasonic tartar removal and polishing', cijena: '50 KM' },
                { ime: 'Teeth sandblasting (AirFlow method)', cijena: '60 KM' },
                { ime: 'Laser teeth whitening (both jaws)', cijena: '300 KM' },
                { ime: 'Composite veneer', cijena: '150 KM' },
                { ime: 'Tooth jewelry (zircon)', cijena: '80 KM' }
            ]
        }
    ]
};

bs.testimonials_page_reviews = [
    { text: 'Preporučujem dr. Sanelu od srca! Njena toplina, strpljenje i poseban pristup djeci učinili su da moje dijete potpuno izgubi strah od zubara.', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop', name: 'Arnisa Z.', role: 'Pacijent' },
    { text: 'Zapanjen sam profesionalnošću i pristupom osoblja. Nisam osjetio uobičajenu nelagodu koju očekujem pri posjeti stomatologu.', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop', name: 'Gocuman A.', role: 'Pacijent' },
    { text: 'Sve pohvale za rad i odnos prema pacijentu, osim što otklanja probleme otklanja i strah kod pacijenta. Lijep pozdrav za tim!', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop', name: 'M. R.', role: 'Pacijent' },
    { text: 'Vrhunska usluga i profesionalnost, prezadovoljan pristupom i odnosom, sve za deset!', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop', name: 'Neo S.', role: 'Pacijent' },
    { text: 'Dr. Kapić ima odličan pristup pacijentima. Osjetite njenu humanost, brigu i želju da pronađe najbolje rješenje. Ne maskira problem već ga rješava.', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=100&auto=format&fit=crop', name: 'Ilma I.', role: 'Pacijent' },
    { text: 'Profesionalna, predivna i ljubazna doktorica! Preporuka od srca!', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop', name: 'Hurijeta N.', role: 'Pacijent' },
    { text: 'Nakon 10 zubara koje sam obišla sa djetetom napokon smo našli onu pravu. Atmosfera je više nego odlična, a doktorica je prije svega čovjek.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop', name: 'Arnela H.', role: 'Pacijent' },
    { text: 'Previše ljubazna i jako profesionalna! Tople preporuke.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop', name: 'Senka A.', role: 'Pacijent' },
    { text: 'Divno osoblje, posebna i profesionalna doktorica, a što je najbitnije ima veliko srce, za svaku preporuku i pohvalu.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop', name: 'Azra K.', role: 'Pacijent' }
];

en.testimonials_page_reviews = [
    { text: 'I wholeheartedly recommend Dr. Sanela! Her warmth, patience, and special approach to children made my child completely lose his fear of dentists.', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop', name: 'Arnisa Z.', role: 'Patient' },
    { text: 'I was stunned by the professionalism and the approach of the personnel. I didnt have the usual unpleasantness I expect when visiting a dentist.', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop', name: 'Gocuman A.', role: 'Patient' },
    { text: 'All praises for the work and approach to the patient; besides removing problems, she removes the patients fear. Best regards to the team!', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop', name: 'M. R.', role: 'Patient' },
    { text: 'Top service and professionalism, extremely satisfied with the approach and relationship, perfect ten!', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop', name: 'Neo S.', role: 'Patient' },
    { text: 'Dr. Kapić has an excellent approach to patients. You can feel her humanity, care and desire to find the best solution. She doesnt mask the problem but solves it.', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=100&auto=format&fit=crop', name: 'Ilma I.', role: 'Patient' },
    { text: 'Professional, wonderful and kind doctor! Recommended from the bottom of my heart!', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop', name: 'Hurijeta N.', role: 'Patient' },
    { text: 'After 10 dentists I visited with my child, we finally found the right one. The atmosphere is more than excellent, and the doctor is a wonderful human first.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop', name: 'Arnela H.', role: 'Patient' },
    { text: 'Too kind and very professional! Warm recommendations.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop', name: 'Senka A.', role: 'Patient' },
    { text: 'Wonderful staff, special and professional doctor, and most importantly she has a big heart, highly recommended.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop', name: 'Azra K.', role: 'Patient' }
];

fs.writeFileSync(bsPath, JSON.stringify(bs, null, 4));
fs.writeFileSync(enPath, JSON.stringify(en, null, 4));
console.log('JSONs patched!');
