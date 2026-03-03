# Design Guide: Dr. Sanela Kapić - Stomatološka Ordinacija

Ovaj dokument služi kao referentan vodič (Design System) za vizuelni identitet vašeg web sajta. Sadrži tačne vrijednosti boja, tipografiju i pravila korištenja elemenata, kako bi održavanje i buduće nadogradnje bile dosljedne.

---

## 🎨 Paleta Boja (Color Palette)

Website koristi smirujuće medicinske tonove prilagođene modernim stomatološkim ordinacijama. Akcenat je na plavim i zelenkastim nijansama (teal & cyan) koje ulivaju povjerenje i asociraju na čistoću i zdravlje.

### Osnovne medicinske boje:
- **Primary (Glavna boja):** `#0891B2` *(Koristi se za dugmiće, ikone u Layoutu i određene tekstove - klasa `bg-primary` ili `text-primary`)*
- **Primary Dark (Tamna varijanta):** `#134E4A` *(Koristi se za hover efekte glavne boje - klasa `bg-primary-dark`)*
- **Primary Light (Svijetla varijanta):** `#22D3EE` *(Koristi se za suptilne akcente i podvučene tekstove na tamnim pozadinama - klasa `text-primary-light`)*

### Pozadinske i tekstualne boje:
- **Background Medical (Blaga medicinska pozadina):** `#F0FDFA` *(Najčešće korištena pozadina koja vizuelno odvaja sekcije od čisto bijele boje - klasa `bg-bg-medical`)*
- **Text Medical (Tamno medicinski tekst):** `#134E4A` *(Boja koja se koristi za naslove (`h1`, `h2`, `h3`) preko obojenih pozadina kako bi bili oštri i čitki - klasa `text-text-medical`)*
- **Standardna bijela:** `#FFFFFF` *(Koristi se kao primarna pozadina za sekcije sa sadržajem)*
- **Pozadina teksta (Slate/Siva):** *Pored `Text Medical`, za običan prateći tekst često se koristi Tailwind-ova siva `text-slate-600` linija.*

### Specijalne / Akcentne boje:
- **CTA (Call to Action - Zelena):** `#22C55E` *(Koristi se ISKLJUČIVO za dugmiće od izuzetne važnosti, poput "Zakažite pregled", klasa `bg-cta`)*
- **Stars (Zvijezdice):** `#FACC15` *(Žuta, Tailwind default `text-yellow-400` koja se koristi za recenzije pacijenata)*

---

## 🖋 Tipografija (Typography)

Koriste se dva pažljivo odabrana Google (Web) Fonta. Kombinacija elegantnih Sans i zaobljenih Serif proporcija daje moderan i visoko-profesionalan izgled aplikaciji.

### 1. Radni tekst / Sans (Noto Sans)
- **Klase u Tailwindu:** `font-sans` ili ne treba stavljati ništa pošto je defaultni za body.
- **Težine:** 300, 400 (Body), 500, 700 (Bold)
- **Glavna svrha:** Koristi se za sve opisne tekstove, pasuse, navigaciju i male etikete. Noto Sans je dizajniran da bude nevjerovatno čitljiv i čist na svim uređajima.

### 2. Naslovi / Serif (Figtree)
- **Klase u Tailwindu:** `font-serif`
- **Težine:** 300, 400, 500, 600, 700 (Heading Bold)
- **Glavna svrha:** Koristi se za SVE glavne naslove (H1, H2, H3), za uvodne atraktivne rečenice i ključne elemente koji trebaju plijeniti pažnju.

---

## 📐 Komponente i Stilovi (UI Elements)

### 1. Dugmad (Buttons)
- **Glavno Action dugme (Zakaži):** Ima zaobljene ivice (`rounded-full`), unutrašnju sjenku i koristi se sa zelenom pozadinom na tamnim/bijelim stranama. Na hover dobija malu skalu (`hover:scale-105`) te dodatni sjajni outline fokus zelene boje (`focus:ring-green-400`).
- **Standardno dugme:** Prozračio dugme sa bijelom pozadinom, primarnom ivicom i tekstom, lagan efekat prelaska mišem.
- Sve bitne ikonice u dugmadima (kao strelica udesno) se pomjeraju animirano koristeći grupisane `group-hover:translate-x-1` klase iz Tailwinda.

### 2. Zaobljenja (Border Radius)
Web stranica koristi naglašena, moderna zaobljenja (`Border Radius = 3rem` ili `rounded-3xl` \ `rounded-[3rem]`), takozvani "Pill format". Ovo omekšava dizajn, asocira na sigurnost i prijateljski pristup ordinacije te izdvaja sajt od tipičnih pravouglastih korporativnih dizajna.

### 3. Ikonice
- Koristi se **Lucide React** biblioteka ikona koja savršeno odgovara medicinski minimalističkom "monoline" stilu u raznim veličinama (npr. ikonice Zuba, Munje, Štit).

### 4. Animacije i Prijelazi
- **Micro-interakcije:** Tekstualni linkovi se uljepšavaju prijelazom boja, a slike i kartice pri prelasku mišem izbliza (`scale`).
- **Scroll (Motion) Tranzicije:** Kompleksnije interakcije, poput hero sekcije na dnu ili FAQ pitanja pri otvaranju su ubačene korištenjem `motion/react` biblioteke.

---

*Za tehnički dio (Tailwind 4 config): Sve varijable su mapirane direktno u vašem `src/index.css` fajlu i dostupne su kroz čitav React projekat.*
