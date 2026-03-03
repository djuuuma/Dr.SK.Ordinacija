import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MapPin, Clock, Star, CheckCircle, ChevronRight, Mail, Instagram, Facebook, Smile, Shield, Zap } from 'lucide-react';

const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 35 C 20 15, 45 15, 50 30 C 55 15, 80 15, 75 35 C 70 55, 65 65, 60 85 C 55 65, 45 65, 40 85 C 35 65, 30 55, 25 35 Z" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Početna', href: '#home' },
    { name: 'Usluge', href: '#services' },
    { name: 'Proces', href: '#process' },
    { name: 'Galerija', href: '#portfolio' },
    { name: 'O meni', href: '#about' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-bg-medical font-sans text-text-medical selection:bg-primary selection:text-white">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-xl transition-colors ${isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
              <Logo className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-lg leading-tight ${isScrolled ? 'text-text-medical' : 'text-white'}`}>
                Dr. Sanela Kapić
              </span>
              <span className={`text-[10px] uppercase tracking-wider font-medium ${isScrolled ? 'text-slate-500' : 'text-white/80'}`}>
                Stomatološka ordinacija
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? 'text-slate-600' : 'text-white/90 hover:text-white'
                  }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 ${isScrolled
                ? 'bg-cta text-white hover:bg-green-600'
                : 'bg-white text-primary hover:bg-bg-medical'
                }`}
            >
              Zakažite pregled
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={isScrolled ? 'text-text-medical' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-text-medical' : 'text-white'} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 flex flex-col md:hidden"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif text-text-medical hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-6 py-4 bg-cta text-white rounded-2xl text-lg font-semibold shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              >
                Zakažite besplatan pregled
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop"
              alt="Moderna stomatološka ordinacija"
              className="w-full h-full object-cover opacity-20 mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm border border-white/30">
                Vrhunska stomatologija u Sarajevu
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                Vaš savršen osmijeh je naša misija.
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-10 font-light">
                Pružamo brze, bezbolne i dugotrajne stomatološke usluge koristeći najmoderniju tehnologiju. Vratite samopouzdanje uz naš stručni tim.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="px-8 py-4 bg-cta text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  Zakažite termin <ChevronRight className="w-5 h-5" />
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 bg-primary-dark/50 text-white rounded-full font-semibold text-lg border border-white/30 hover:bg-primary-dark transition-all backdrop-blur-sm"
                >
                  Naše usluge
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Value Proposition / Features */}
        <section className="py-12 bg-white relative z-10 -mt-8 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-3xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Brzo i Bezbolno</h3>
              <p className="text-slate-600 text-sm">Koristimo najnovije metode i anestetike kako bi svaki tretman bio potpuno ugodan i efikasan.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Vrhunski Kvalitet</h3>
              <p className="text-slate-600 text-sm">Materijali svjetske klase i dugogodišnje iskustvo garantuju dugotrajne rezultate.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4">
                <Smile className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Estetika na Prvom Mjestu</h3>
              <p className="text-slate-600 text-sm">Fokusirani smo na prirodan izgled vaših zuba, vraćajući vam blistav osmijeh.</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-bg-medical">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Šta nudimo</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-text-medical mb-4">Sveobuhvatne Stomatološke Usluge</h3>
              <p className="text-slate-600">Od preventivnih pregleda do složenih protetskih radova, naš tim je tu za zdravlje vaših zuba.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Estetska Stomatologija', desc: 'Izbjeljivanje zuba, fasete i kompozitne nadogradnje za savršen osmijeh.', img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop' },
                { title: 'Protetika', desc: 'Krunice, mostovi i proteze vrhunskog kvaliteta i prirodnog izgleda.', img: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop' },
                { title: 'Konzervativa', desc: 'Liječenje karijesa, endodoncija i popravke zuba najmodernijim materijalima.', img: 'https://images.unsplash.com/photo-1598256989800-fea5f95bc14c?q=80&w=800&auto=format&fit=crop' },
                { title: 'Preventiva', desc: 'Redovni pregledi, uklanjanje kamenca i poliranje za dugoročno zdravlje.', img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop' }
              ].map((service, idx) => (
                <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                  <div className="h-48 overflow-hidden">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 text-text-medical">{service.title}</h4>
                    <p className="text-slate-600 text-sm">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Naš Proces</h2>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-text-medical mb-6">Od prvog poziva do novog osmijeha</h3>
                <p className="text-slate-600 mb-8 text-lg">
                  Vjerujemo u transparentnost i jednostavnost. Naš proces je dizajniran tako da se osjećate sigurno i informisano u svakom trenutku.
                </p>

                <div className="space-y-8">
                  {[
                    { step: '01', title: 'Besplatne Konsultacije', desc: 'Zakažite termin. Pregledat ćemo vaše zube i saslušati vaše želje.' },
                    { step: '02', title: 'Plan Terapije', desc: 'Pravimo detaljan plan liječenja sa transparentnim cijenama i rokovima.' },
                    { step: '03', title: 'Tretman', desc: 'Izvodimo zahvate brzo, stručno i bezbolno u modernom ambijentu.' },
                    { step: '04', title: 'Novi Osmijeh', desc: 'Odlazite zadovoljni sa savršenim osmijehom i uputama za održavanje.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-text-medical mb-1">{item.title}</h4>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop" alt="Stomatološki pregled" className="w-full h-auto" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-white w-full">
                      <div className="flex items-center gap-4 mb-2">
                        <CheckCircle className="text-primary-light w-6 h-6" />
                        <span className="font-semibold text-lg">100% Posvećenost pacijentu</span>
                      </div>
                      <p className="text-white/80 text-sm">Svaki pacijent dobija individualan pristup i maksimalnu pažnju.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio / Gallery */}
        <section id="portfolio" className="py-24 bg-bg-medical text-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Naši Radovi</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-text-medical mb-4">Dokaz našeg kvaliteta</h3>
              <p className="text-slate-600">Pogledajte rezultate našeg rada. Vaš osmijeh je naša najbolja reklama.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1498843053639-170ff2122f35?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1588776813677-77f329977e2e?q=80&w=800&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop'
              ].map((img, idx) => (
                <div key={idx} className="relative group overflow-hidden rounded-2xl aspect-square">
                  <img src={img} alt={`Galerija ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-serif text-xl font-bold">Prije & Poslije</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="py-24 bg-bg-medical">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5 h-96 md:h-auto relative">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop" alt="Dr. Sanela Kapić" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center">
                <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">O Meni</h2>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-text-medical mb-6">Dr. Sanela Kapić</h3>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  Dobrodošli u moju ordinaciju. Sa preko 15 godina iskustva u stomatologiji, moja misija je da razbijem strah od zubara i pružim vam osmijeh kakav zaslužujete.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Kontinuirano se usavršavam na međunarodnim seminarima kako bih u Sarajevo donijela najnovije svjetske trendove i tehnologije. Moj pristup je nježan, precizan i uvijek fokusiran na vaše zdravlje i estetiku.
                </p>
                <div className="flex items-center gap-4">
                  <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&auto=format&fit=crop" alt="Potpis" className="h-12 w-12 rounded-full object-cover grayscale" referrerPolicy="no-referrer" />
                  <div>
                    <p className="font-serif font-bold text-text-medical">Dr. Sanela Kapić</p>
                    <p className="text-sm text-slate-500">Osnivač & Glavni Stomatolog</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-primary text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-white/80 font-semibold tracking-wide uppercase text-sm mb-2">Iskustva Pacijenata</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold">Šta kažu o nama</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Amira S.', text: 'Najbolje iskustvo kod zubara ikada! Dr. Sanela je izuzetno pažljiva i profesionalna. Ordinacija je prelijepa i moderna.' },
                { name: 'Kenan M.', text: 'Godinama sam imao strah od zubara, ali ovdje sam se osjećao potpuno opušteno. Sve preporuke za ovaj divan tim!' },
                { name: 'Lejla H.', text: 'Radila sam fasete i rezultat je iznad svih mojih očekivanja. Konačno se smijem sa samopouzdanjem. Hvala doktorici!' }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                  <div className="flex gap-1 text-yellow-400 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-lg font-serif italic mb-6">"{testimonial.text}"</p>
                  <p className="font-bold">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-bg-medical rounded-[3rem] p-8 md:p-16 shadow-sm border border-slate-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-medical mb-6">Zakažite svoj termin</h2>
                  <p className="text-slate-600 mb-10 text-lg">
                    Spremni za savršen osmijeh? Kontaktirajte nas danas i zakažite besplatne konsultacije. Naš tim u Sarajevu vas očekuje.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Telefon</p>
                        <p className="font-bold text-text-medical">+387 61 123 456</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Email</p>
                        <p className="font-bold text-text-medical">info@drsanelakapic.ba</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Adresa</p>
                        <p className="font-bold text-text-medical">Zmaja od Bosne bb, Sarajevo</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Radno Vrijeme</p>
                        <p className="font-bold text-text-medical">Pon - Pet: 09:00 - 17:00</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-lg">
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="block text-sm font-medium text-text-medical mb-2">Ime i Prezime</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Vaše ime" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-medical mb-2">Broj Telefona</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Vaš broj telefona" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-medical mb-2">Usluga</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white">
                        <option>Opšti pregled</option>
                        <option>Popravka zuba</option>
                        <option>Izbjeljivanje</option>
                        <option>Protetika</option>
                        <option>Drugo</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-medical mb-2">Poruka (Opciono)</label>
                      <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none" placeholder="Kako vam možemo pomoći?"></textarea>
                    </div>
                    <button type="submit" className="w-full py-4 bg-cta text-white rounded-xl font-bold text-lg hover:bg-green-600 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-green-400">
                      Pošalji Upit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white/90 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4 text-white">
                <Logo className="w-8 h-8 text-primary" />
                <span className="font-serif font-bold text-xl">Dr. Sanela Kapić</span>
              </div>
              <p className="mb-6 max-w-sm">
                Vrhunska stomatološka usluga u srcu Sarajeva. Vaš osmijeh je naša briga.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-secondary text-white">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-secondary text-white">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Brzi Linkovi</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-white transition-colors">Početna</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Usluge</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Galerija</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">O nama</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Usluge</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Estetska Stomatologija</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Protetika</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Konzervativa</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dječija Stomatologija</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Stomatološka ordinacija Dr. Sanela Kapić. Sva prava zadržana.</p>
            <p className="mt-2 md:mt-0">Dizajn i izrada: <a href="https://www.linkedin.com/in/anes-djumisic/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline">Anes Đumišić</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
