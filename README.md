# 🦷 Stomatološka Ordinacija Dr. Sanela Kapić - Web Aplikacija

Ovo je moderna, brza i responsivna web stranica izrađena za dentalnu ordinaciju Dr. Sanele Kapić. Građena je na **React-u** koristeći **Vite**, sa naglaskom na vrhunski UI/UX dizajn i glatke animacije kako bi se pacijentima pružio osjećaj profesionalnosti i udobnosti od prve sekunde.

---

## 🚀 Šta je do sada urađeno (Projektni Istorijat)

Aplikacija je postepeno nadograđivana iz jednostavnog prototipa u punokrvni moderni web sajt:

1. **Implementacija Dvojezičnosti (i18n):** 
   - Postavljen je **`react-i18next`** za lako prebacivanje između **Bosanskog i Engleskog jezika**. Prevedeni su navigacija, footer i svi bitni elementi početne stranice. Dugme za jezik (🌐) je dodano u glavni navbar.
   
2. **Razdvajanje u Multi-Page Aplikaciju:**
   - Putem **`react-router-dom`** biblioteke kreiran je moćan sistem rutiranja. Monolitna struktura je razdvojena na nezavisne stranice: `Home`, `Usluge`, `Proces`, `Galerija`, `O meni`, `Kontakt`.
   
3. **Bogate Komponente & Dizajn:**
   - Izgrađen je centralni `Layout` element.
   - **Početna Stranica (Home):** Animirana hero sekcija, FAQ sa dinamičnim otvaranjem, i sekcije za doktora i recenzije.
   - Stranica `Usluge` sadrži moderan i pregledan **Cjenovnik** sa ikonama.
   
4. **Alati za Ljepotu i Animiranje:**
   - Ikone: **`lucide-react`**.
   - Animacije: **`motion/react`** (Framer Motion).

5. **Vizualna Optimizacija i Interaktivni Slajderi (Novo!):**
   - **Redizajn "NAŠI RADOVI":** Sekcija na početnoj stranici je potpuno osvježena novom medicinskom paletom boja (mint/teal) za bolju čitljivost i profesionalniji izgled.
   - **Before/After Slajder:** Implementirana je custom `ImageComparison` komponenta koja omogućava pacijentima da interaktivno porede rezultate tretmana ("Prije" i "Poslije") povlačenjem ručke.
   - **Integracija:** Slajder je postavljen na `Home` stranicu i kao centralni dio `Galerije`.

---

## 🛠 Tehnologije

- **Frontend Framework:** React 19, Vite
- **Stilizovanje:** Tailwind CSS (v4)
- **Rutiranje:** React Router (v7)
- **Lokalizacija (Prevod):** React i18next
- **Animacije i Ikone:** Motion (Framer), Lucide-React

---

## 📅 Budući Planovi

Kompletan popis planiranih dorada (SEO, kontakt forma, optimizacija slika) nalazi se u dokumentu:
👉 **[POBOLJSANJA.md](./POBOLJSANJA.md)**