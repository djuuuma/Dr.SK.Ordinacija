# 🔧 Poboljšanja za web stranicu Dr. Sanela Kapić

## 🔴 Prioritet: Visok

### 1. SEO i Meta podaci
- `index.html` nema `<meta description>` tag
- Nedostaju Open Graph (OG) tagovi za dijeljenje na društvenim mrežama (Facebook, Instagram)
- Nedostaje `favicon` — treba koristiti logo ordinacije
- Nema `sitemap.xml` ni `robots.txt`

### 2. Kontakt forma ne šalje poruke
- Forma na `/kontakt` stranici nije spojena na backend
- **Rješenje:** Integrisati EmailJS, Formspree, ili vlastiti serverski endpoint
- Dodati validaciju forme (obavezna polja, format telefona)
- Dodati poruku potvrde nakon uspješnog slanja

### 3. Nedostaje 404 stranica
- Nepostojeći URL-ovi prikazuju praznu stranicu
- Kreirati custom 404 stranicu sa linkom nazad na početnu

---

## 🟡 Prioritet: Srednji

### 4. Optimizacija slika
- Before/after slike su >400KB — konvertovati u WebP format
- Dodati `loading="lazy"` na sve slike ispod folda (galerija, usluge, doktor)
- Dodati `width` i `height` atribute na slike za sprečavanje layout shift-a

### 5. Više before/after parova
- Trenutno postoji samo 1 par slika (before1/after1)
- Dodati još 2-3 para za razne tretmane:
  - Izbjeljivanje zuba
  - Cirkon krunice
  - Fasete/veneeri
- Slider na Galerija stranici bi mogao imati tabs ili carousel za prebacivanje između parova

### 6. "Saznaj više" linkovi na uslugama
- Kartice usluga na homepage-u imaju "Saznaj više" ali ne vode nigdje
- Povezati na odgovarajuće sekcije cjenovnika (`/usluge#protetika`, itd.)

### 7. Google Maps na kontakt stranici
- Dodati interaktivnu mapu sa lokacijom ordinacije
- Alternativa: statičan Google Maps embed

### 8. Testimonials pozadina
- Testimonials sekcija koristi teal gradijent koji je pomalo agresivan
- Razmotriti ublažavanje na svijetle tonove (slično NAŠI RADOVI sekciji nakon popravke)

---

## 🟢 Prioritet: Nizak (ali poželjno)

### 9. Animacije pri scrollu
- Dodati `motion` fade-in animacije na sekcije pri prvom scrollu (intersection observer)
- Trenutno samo Hero sekcija ima animaciju

### 10. Lightbox za galeriju
- Klik na slike u galeriji ne radi ništa
- Dodati lightbox modal za uvećavanje slika

### 11. WhatsApp/Viber dugme
- Plutajuće dugme za brzi kontakt putem WhatsApp-a ili Viber-a
- Bosnanski pacijenti najčešće koriste ove aplikacije

### 12. Radno vrijeme u footeru
- Footer nema informaciju o radnom vremenu
- Dodati kratku napomenu (npr. "Pon-Pet: 09:00 - 17:00")

### 13. Cookie consent banner
- Ako se koriste analitike (Google Analytics), potrebno je dodati cookie pristanak
- GDPR usklađenost

### 14. Schema.org strukturirani podaci
- Dodati JSON-LD za LocalBusiness (adresa, telefon, radno vrijeme, recenzije)
- Pomaže za Google pretragu i prikaz u rezultatima

### 15. Performance
- Razmotriti code splitting za rute (React lazy + Suspense)
- Preload kritičnih fontova (Figtree, Noto Sans)

---

*Generirano: 18.03.2026.*
