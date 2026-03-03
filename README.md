# 🦷 Stomatološka Ordinacija Dr. Sanela Kapić - Web Aplikacija

Ovo je moderna, brza i responsivna web stranica izrađena za dentalnu ordinaciju Dr. Sanele Kapić. Građena je na **React-u** koristeći **Vite**, sa naglaskom na vrhunski UI/UX dizajn i glatke animacije kako bi se pacijentima pružio osjećaj profesionalnosti i udobnosti od prve sekunde.

---

## 🚀 Šta je do sada urađeno (Projektni Istorijat)

Aplikacija je postepeno nadograđivana iz jednostavnog prototipa u punokrvni moderni web sajt:

1. **Implementacija Dvojezičnosti (i18n):** 
   - Postavljen je **`react-i18next`** za lako prebacivanje između **Bosanskog i Engleskog jezika**. Prevedeni su navigacija, footer i svi bitni elementi početne stranice. Dugme za jezik (🌐) je dodano u glavni navbar kako za desktop tako i za mobilni meni.
   
2. **Razdvajanje u Multi-Page Aplikaciju:**
   - Putem **`react-router-dom`** biblioteke kreiran je moćan sistem rutiranja. Monolitna struktura je uspješno razdvojena na nezavisne stranice (`Home`, `Usluge`, `Proces`, `Galerija`, `O meni`, `Kontakt`), koje redom izlistavaju svoje specifične podatke.
   
3. **Bogate Komponente & Dizajn:**
   - Izgrađen je centralni `Layout` element koji dijeli Header i Footer kroz cijeli portal.
   - **Početna Stranica (Home):** Dopunjena sa animiranom hero sekcijom, istaknutim uslugama sa kratkim preview slikama, FAQ (Česta Pitanja) sa dinamičnim zatvaranjem, i izdvojenim vizualima za prezentovanje doktora.
   - Stranica `Usluge` je pretvorena u moderan i veoma pregledan **Cjenovnik** sa ikonicama.
   - Sve komponente se oslanjaju na dinamički **Tailwind** koji sadrži strogo precizirane parametre ubačene u poseban dokument pod nazivom **`Design-Guide.md`**.
   
4. **Alati za Ljepotu i Animiranje:**
   - Grafički obogaćeno sa **`lucide-react`** minijaturnim i elegantnim ikonama.
   - Scroll sekvence i otvaranje padajućih elemenata animirani su najnovijom **`motion/react`** (Framer Motion) tehnologijom.

---

## 🛠 Tehnologije

- **Frontend Framework:** React 18, Vite
- **Stilizovanje:** Tailwind CSS (v4)
- **Rutiranje:** React Router (v7)
- **Lokalizacija (Prevod):** React i18next & i18next Browser Language Detector
- **Animacije i Ikone:** Motion (Framer), Lucide-React

---