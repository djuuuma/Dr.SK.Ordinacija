const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements, useT = true) {
    let content = fs.readFileSync(filePath, 'utf-8');

    if (useT && !content.includes('useTranslation')) {
        content = content.replace(/(import React\b.*?;\n)/, '$1import { useTranslation } from \'react-i18next\';\n');
        content = content.replace(/(export default function \w+\(\) \{)/, '$1\n    const { t } = useTranslation();');
    }

    for (const [search, replace] of replacements) {
        content = content.split(search).join(replace);
    }
    fs.writeFileSync(filePath, content);
}


// O Meni
replaceInFile(path.join(process.cwd(), 'src', 'pages', 'OMeni.tsx'), [
    ['<h1 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">O Meni</h1>', '<h1 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">{t(\'about_page.tag\')}</h1>'],
    ['<h2 className="text-3xl md:text-4xl font-serif font-bold text-text-medical mb-6">Dr. Sanela Kapić</h2>', '<h2 className="text-3xl md:text-4xl font-serif font-bold text-text-medical mb-6">{t(\'about_page.name\')}</h2>'],
    ['Dobrodošli u moju ordinaciju. Sa preko 15 godina iskustva u stomatologiji, moja misija je da razbijem strah od zubara i pružim vam osmijeh kakav zaslužujete.', '{t(\'about_page.desc1\')}'],
    ['Svakom pacijentu pristupam s posebnom pažnjom, duboko svjesna da stomatološki zahvati mogu izazvati nelagodu. Zato je moj prioritet stvoriti opuštajuću atmosferu u kojoj ćete se osjećati sigurno i opušteno. Nastojim da svaka posjeta bude ugodno iskustvo.', '{t(\'about_page.desc2\')}'],
    ['<p className="font-serif font-bold text-text-medical">Dr. Sanela Kapić</p>', '<p className="font-serif font-bold text-text-medical">{t(\'about_page.name\')}</p>'],
    ['<p className="text-sm text-slate-500">Osnivač & Glavni Stomatolog</p>', '<p className="text-sm text-slate-500">{t(\'about_page.role\')}</p>'],
    ['<h3 className="text-xl font-bold text-text-medical mb-4">Obrazovanje</h3>', '<h3 className="text-xl font-bold text-text-medical mb-4">{t(\'about_page.edu_title\')}</h3>'],
    ['Završila sam Stomatološki fakultet u Sarajevu, gdje sam stekla čvrste temelje. Od tada kontinuirano ulažem u edukaciju i praćenje najnovijih svjetskih trendova u stomatologiji.', '{t(\'about_page.edu_desc\')}'],
    ['<h3 className="text-xl font-bold text-text-medical mb-4">Usavršavanje</h3>', '<h3 className="text-xl font-bold text-text-medical mb-4">{t(\'about_page.exp_title\')}</h3>'],
    ['Redovno učestvujem na domaćim i međunarodnim kongresima iz oblasti estetske stomatologije i protetike kako bih svojim pacijentima omogućila isključivo vrhunsku i modernu uslugu.', '{t(\'about_page.exp_desc\')}'],
    ['<h3 className="text-xl font-bold text-text-medical mb-4">Filozofija rada</h3>', '<h3 className="text-xl font-bold text-text-medical mb-4">{t(\'about_page.phil_title\')}</h3>'],
    ['Moj pristup je nježan, precizan i potpuno fokusiran na vas. Vjerujem da je uzajamno povjerenje ključno, zbog čega svakom problemu pristupam vrlo individualno i saosjećajno.', '{t(\'about_page.phil_desc\')}']
]);

// Galerija
replaceInFile(path.join(process.cwd(), 'src', 'pages', 'Galerija.tsx'), [
    ['<h1 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Naši Radovi</h1>', '<h1 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">{t(\'gallery_page.tag\')}</h1>'],
    ['<h2 className="text-3xl md:text-4xl font-serif font-bold text-text-medical mb-4">Dokaz našeg kvaliteta</h2>', '<h2 className="text-3xl md:text-4xl font-serif font-bold text-text-medical mb-4">{t(\'gallery_page.title\')}</h2>'],
    ['<p className="text-slate-600">Pogledajte rezultate našeg rada. Vaš osmijeh je naša najbolja reklama.</p>', '<p className="text-slate-600">{t(\'gallery_page.desc\')}</p>'],
    ['<span className="text-white font-serif text-xl font-bold">Prije & Poslije</span>', '<span className="text-white font-serif text-xl font-bold">{t(\'gallery_page.overlay\')}</span>']
]);

// Proces
replaceInFile(path.join(process.cwd(), 'src', 'pages', 'Proces.tsx'), [
    ['<h1 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Naš Proces</h1>', '<h1 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">{t(\'process_page.tag\')}</h1>'],
    ['<h2 className="text-3xl md:text-5xl font-serif font-bold text-text-medical mb-6">Put do vašeg novog osmijeha</h2>', '<h2 className="text-3xl md:text-5xl font-serif font-bold text-text-medical mb-6">{t(\'process_page.title\')}</h2>'],
    ['Znamo da posjeta stomatologu može biti stresna. Zbog toga smo kreirali transparentan proces u 4 koraka koji stavlja vašu udobnost i sigurnost na prvo mjesto.', '{t(\'process_page.desc\')}'],
    ['<h4 className="font-bold text-xl mb-2">Zašto nam pacijenti vjeruju?</h4>', '<h4 className="font-bold text-xl mb-2">{t(\'process_page.why_trust.title\')}</h4>'],
    ['<span className="text-sm">Empatičan pristup bez osuđivanja</span>', '<span className="text-sm">{t(\'process_page.why_trust.item1\')}</span>'],
    ['<span className="text-sm">Vrhunska higijena i sterilizacija</span>', '<span className="text-sm">{t(\'process_page.why_trust.item2\')}</span>'],
    ['<span className="text-sm">Poštovanje vašeg vremena (bez čekanja)</span>', '<span className="text-sm">{t(\'process_page.why_trust.item3\')}</span>'],
    ['<h3 className="text-2xl md:text-3xl font-bold text-text-medical mb-4">Spremni za prvi korak?</h3>', '<h3 className="text-2xl md:text-3xl font-bold text-text-medical mb-4">{t(\'process_page.cta.title\')}</h3>'],
    ['Nemojte odgađati brigu o svom zdravlju. Javite nam se danas i zakažite svoje besplatne konsultacije.', '{t(\'process_page.cta.desc\')}'],
    ['Zakažite Termin', '{t(\'process_page.cta.btn\')}'],
    ['{[\n                                { step: \'01\', title: \'Prvi kontakt i konsultacije\', desc: \'Sve počinje vašim pozivom ili porukom. Zakažemo termin koji vam odgovara. Na prvom pregledu pažljivo slušamo vaše želje i probleme, bez ikakvih obaveza.\' },\n                                { step: \'02\', title: \'Detaljna dijagnostika i plan\', desc: \'Koristimo modernu tehnologiju za preciznu dijagnostiku. Nakon toga, kreiramo jasan plan terapije sa ponuđenim opcijama i potpuno transparentnim cijenama.\' },\n                                { step: \'03\', title: \'Bezbolan tretman\', desc: \'Sam zahvat izvodimo u opuštajućoj atmosferi, koristeći moderne anestetike. Pratimo vaš ritam i pravimo pauze kad god su vam potrebne.\' },\n                                { step: \'04\', title: \'Oporavak i novi osmijeh\', desc: \'Dajemo vam detaljne upute za održavanje i uvijek smo dostupni za sva pitanja nakon zahvata. Vaš zdrav osmijeh je naš krajnji cilj.\' }\n                            ].map((item, idx) => (', '(t(\'process_page.steps\', { returnObjects: true }) as Array<any>).map((item, idx) => (']
]);

// Kontakt
replaceInFile(path.join(process.cwd(), 'src', 'pages', 'Kontakt.tsx'), [
    ['<h1 className="text-3xl md:text-4xl font-serif font-bold text-text-medical mb-6">Zakažite svoj termin</h1>', '<h1 className="text-3xl md:text-4xl font-serif font-bold text-text-medical mb-6">{t(\'contact_page.title\')}</h1>'],
    ['Spremni za savršen osmijeh? Kontaktirajte nas danas i zakažite besplatne konsultacije. Naš tim u Sarajevu vas očekuje.', '{t(\'contact_page.desc\')}'],
    ['<h2 className="text-sm text-slate-500">Telefon</h2>', '<h2 className="text-sm text-slate-500">{t(\'contact_page.phone\')}</h2>'],
    ['<h2 className="text-sm text-slate-500">Email</h2>', '<h2 className="text-sm text-slate-500">{t(\'contact_page.email\')}</h2>'],
    ['<h2 className="text-sm text-slate-500">Adresa</h2>', '<h2 className="text-sm text-slate-500">{t(\'contact_page.address\')}</h2>'],
    ['<h2 className="text-sm text-slate-500">Radno Vrijeme</h2>', '<h2 className="text-sm text-slate-500">{t(\'contact_page.hours\')}</h2>'],
    ['<label className="block text-sm font-medium text-text-medical mb-2">Ime i Prezime</label>', '<label className="block text-sm font-medium text-text-medical mb-2">{t(\'contact_page.form.name\')}</label>'],
    ['<label className="block text-sm font-medium text-text-medical mb-2">Broj Telefona</label>', '<label className="block text-sm font-medium text-text-medical mb-2">{t(\'contact_page.form.phone\')}</label>'],
    ['<label className="block text-sm font-medium text-text-medical mb-2">Usluga</label>', '<label className="block text-sm font-medium text-text-medical mb-2">{t(\'contact_page.form.service\')}</label>'],
    ['<label className="block text-sm font-medium text-text-medical mb-2">Poruka (Opciono)</label>', '<label className="block text-sm font-medium text-text-medical mb-2">{t(\'contact_page.form.message\')}</label>'],
    ['Pošalji Upit', '{t(\'contact_page.form.btn\')}'],
    ['placeholder="Vaše ime"', 'placeholder={t(\'contact_page.form.placeholders.name\')}'],
    ['placeholder="Vaš broj telefona"', 'placeholder={t(\'contact_page.form.placeholders.phone\')}'],
    ['placeholder="Kako vam možemo pomoći?"', 'placeholder={t(\'contact_page.form.placeholders.message\')}'],
    ['<option>Opšti pregled</option>\n                                        <option>Popravka zuba</option>\n                                        <option>Izbjeljivanje</option>\n                                        <option>Protetika</option>\n                                        <option>Drugo</option>', '{(t(\'contact_page.form.services\', { returnObjects: true }) as string[]).map((s, i) => <option key={i}>{s}</option>)}']
]);

replaceInFile(path.join(process.cwd(), 'src', 'pages', 'Usluge.tsx'), [
    ['<h1 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Naše Cijene</h1>', '<h1 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">{t(\'services_page.tag\')}</h1>'],
    ['<h2 className="text-3xl md:text-5xl font-serif font-bold text-text-medical mb-6">Cjenovnik Usluga</h2>', '<h2 className="text-3xl md:text-5xl font-serif font-bold text-text-medical mb-6">{t(\'services_page.title\')}</h2>'],
    ['Vjerujemo u potpunu transparentnost. Ispod se nalazi okvirni cjenovnik najčešćih usluga. Tačna cijena zavisi od individualnog plana liječenja koji se definiše na besplatnom pregledu.', '{t(\'services_page.desc\')}'],
    ['<h3 className="text-3xl font-serif font-bold mb-4">Niste sigurni šta Vam je potrebno?</h3>', '<h3 className="text-3xl font-serif font-bold mb-4">{t(\'services_page.cta_title\')}</h3>'],
    ['Svaki osmijeh je jedinstven. Zakažite besplatan pregled i dobit ćete potpuno personalizovan plan liječenja sa preciznim troškovima.', '{t(\'services_page.cta_desc\')}'],
    ['Zakažite Besplatan Pregled', '{t(\'services_page.cta_btn\')}'],
    ['    const cjenovnikKategorije = [\n        {\n            naziv: "Pregledi i Konzultacije",\n            usluge: [\n                { ime: "Opšti stomatološki pregled", cijena: "Besplatno" },\n                { ime: "Detaljni pregled i plan terapije", cijena: "50 KM" },\n                { ime: "Kontrolni pregled", cijena: "Besplatno" },\n                { ime: "Konsultacije za estetiku i protetiku", cijena: "Besplatno" }\n            ]\n        },\n        {\n            naziv: "Konzervativna Stomatologija",\n            usluge: [\n                { ime: "Kompozitni ispun (plomba) - jedna ploha", cijena: "50 KM" },\n                { ime: "Kompozitni ispun - dvije plohe", cijena: "60 KM" },\n                { ime: "Kompozitni ispun - tri i više ploha", cijena: "70 KM" },\n                { ime: "Liječenje korijenskog kanala (endodoncija)", cijena: "od 80 KM" },\n                { ime: "Vađenje zuba (rutinsko)", cijena: "40 KM" }\n            ]\n        },\n        {\n            naziv: "Protetika",\n            usluge: [\n                { ime: "Metalokeramička krunica", cijena: "250 KM" },\n                { ime: "Cirkon (bezmetalna) krunica", cijena: "450 KM" },\n                { ime: "Privremena krunica", cijena: "50 KM" },\n                { ime: "Totalna ili parcijalna akrilatna proteza", cijena: "500 KM" },\n                { ime: "Skeletirana wironit proteza", cijena: "800 KM" }\n            ]\n        },\n        {\n            naziv: "Estetska Stomatologija i Preventiva",\n            usluge: [\n                { ime: "Ultrazvučno uklanjanje zubnog kamenca i poliranje", cijena: "50 KM" },\n                { ime: "Pjeskarenje zuba (AirFlow metoda)", cijena: "60 KM" },\n                { ime: "Lasersko izbjeljivanje zuba (obadvije vilice)", cijena: "300 KM" },\n                { ime: "Kompozitna faseta (veneer)", cijena: "150 KM" },\n                { ime: "Zubni nakit (cirkon)", cijena: "80 KM" }\n            ]\n        }\n    ];\n', '    const cjenovnikKategorije = t(\'services_page.categories\', { returnObjects: true }) as Array<{ naziv: string, usluge: Array<{ ime: string, cijena: string }> }>;\n']
]);

console.log('done refactoring pages');
