import React, { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 35 C 20 15, 45 15, 50 30 C 55 15, 80 15, 75 35 C 70 55, 65 65, 60 85 C 55 65, 45 65, 40 85 C 35 65, 30 55, 25 35 Z" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function Layout() {
    const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const footerServicesData = t('services.items', { returnObjects: true });
    const footerServices = Array.isArray(footerServicesData) ? footerServicesData as Array<{ title: string, desc: string }> : [];

    const toggleLanguage = () => {
        const newLang = i18n.language === 'bs' ? 'en' : 'bs';
        i18n.changeLanguage(newLang);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const navLinks = [
        { name: t('nav.home'), href: '/' },
        { name: t('nav.services'), href: '/usluge' },
        { name: t('nav.process'), href: '/proces' },
        { name: t('nav.gallery'), href: '/galerija' },
        { name: t('nav.about'), href: '/o-meni' },
        { name: t('nav.contact'), href: '/kontakt' },
    ];

    return (
        <div className="min-h-screen bg-bg-medical font-sans text-text-medical selection:bg-primary selection:text-white flex flex-col">
            {/* Navigation */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className={`p-2 rounded-xl transition-colors ${isScrolled || !isHomePage ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
                            <Logo className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <span className={`font-serif font-bold text-lg leading-tight ${isScrolled || !isHomePage ? 'text-text-medical' : 'text-white'}`}>
                                Dr. Sanela Kapić
                            </span>
                            <span className={`text-[10px] uppercase tracking-wider font-medium ${isScrolled || !isHomePage ? 'text-slate-500' : 'text-white/80'}`}>
                                {t('nav.subtitle', 'Stomatološka ordinacija')}
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label={t('nav.main_nav', 'Glavna navigacija')}>
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.href}
                                end={link.href === '/'}
                                className={({ isActive }) => `text-sm font-medium transition-colors hover:text-primary ${isActive
                                    ? (isScrolled || !isHomePage ? 'text-primary font-bold' : 'text-white font-bold')
                                    : (isScrolled || !isHomePage ? 'text-slate-600' : 'text-white/90 hover:text-white')
                                    }`}
                                aria-current={location.pathname === link.href ? 'page' : undefined}
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        <button onClick={toggleLanguage} className={`flex items-center gap-2 text-sm font-bold transition-all px-3 py-1.5 rounded-full border ${isScrolled || !isHomePage ? 'text-slate-700 border-slate-200 hover:bg-slate-100' : 'text-white border-white/30 hover:bg-white/10'}`}>
                            <Globe className="w-4 h-4" />
                            <span>{i18n.language === 'en' ? 'English' : 'Bosanski'}</span>
                        </button>

                        <Link
                            to="/kontakt"
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 ${isScrolled || !isHomePage
                                ? 'bg-cta text-white hover:bg-green-600'
                                : 'bg-white text-primary hover:bg-bg-medical'
                                }`}
                        >
                            {t('nav.book')}
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="flex items-center md:hidden gap-4">
                        <button onClick={toggleLanguage} className={`flex items-center gap-1 text-sm font-bold uppercase ${isScrolled || !isHomePage ? 'text-text-medical' : 'text-white'}`}>
                            <Globe className="w-5 h-5" />
                        </button>
                        <button
                            className="p-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-expanded={mobileMenuOpen}
                            aria-label={mobileMenuOpen ? t('nav.close_menu', 'Zatvori meni') : t('nav.open_menu', 'Otvori meni')}
                        >
                            {mobileMenuOpen ? (
                                <X className={isScrolled || !isHomePage ? 'text-text-medical' : 'text-white'} />
                            ) : (
                                <Menu className={isScrolled || !isHomePage ? 'text-text-medical' : 'text-white'} />
                            )}
                        </button>
                    </div>
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
                        <nav className="flex flex-col gap-6 text-center" aria-label={t('nav.mobile_nav', 'Mobilna navigacija')}>
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.href}
                                    end={link.href === '/'}
                                    className={({ isActive }) => `text-2xl font-serif hover:text-primary transition-colors ${isActive ? 'text-primary' : 'text-text-medical'
                                        }`}
                                    aria-current={location.pathname === link.href ? 'page' : undefined}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <div className="flex justify-center mt-2 border-t border-slate-100 pt-6">
                                <button onClick={toggleLanguage} className="flex items-center gap-2 text-lg font-bold uppercase text-primary bg-primary/10 px-6 py-2 rounded-full">
                                    <Globe className="w-5 h-5" />
                                    {i18n.language === 'en' ? 'Prebaci na Bosanski' : 'Switch to English'}
                                </button>
                            </div>
                            <Link
                                to="/kontakt"
                                className="mt-4 px-6 py-4 bg-cta text-white rounded-2xl text-lg font-semibold shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                            >
                                {t('nav.book')}
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Page Content */}
            <main className="flex-grow">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-primary text-white/90 py-12 border-t border-slate-800 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center gap-2 mb-4 text-white">
                                <Logo className="w-8 h-8 text-primary" />
                                <span className="font-serif font-bold text-xl">Dr. Sanela Kapić</span>
                            </div>
                            <p className="mb-6 max-w-sm">
                                {t('footer.desc')}
                            </p>
                            <div className="flex gap-4">
                                <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-secondary text-white">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-secondary text-white">
                                    <Facebook className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-4">{t('footer.links')}</h4>
                            <ul className="space-y-2">
                                <li><Link to="/" className="hover:text-white transition-colors">{t('nav.home')}</Link></li>
                                <li><Link to="/usluge" className="hover:text-white transition-colors">{t('nav.services')}</Link></li>
                                <li><Link to="/galerija" className="hover:text-white transition-colors">{t('nav.gallery')}</Link></li>
                                <li><Link to="/o-meni" className="hover:text-white transition-colors">{t('nav.about')}</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-4">{t('footer.services')}</h4>
                            <ul className="space-y-2">
                                {footerServices.map((service, idx) => (
                                    <li key={idx}><Link to="/usluge" className="hover:text-white transition-colors">{service.title}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
                        <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
                        <p>{t('footer.design')} <a href="https://www.linkedin.com/in/anes-djumisic/" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline">Anes Đumišić</a></p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
