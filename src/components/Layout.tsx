import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 35 C 20 15, 45 15, 50 30 C 55 15, 80 15, 75 35 C 70 55, 65 65, 60 85 C 55 65, 45 65, 40 85 C 35 65, 30 55, 25 35 Z" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function Layout() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

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
        { name: 'Početna', href: '/' },
        { name: 'Usluge', href: '/usluge' },
        { name: 'Proces', href: '/proces' },
        { name: 'Galerija', href: '/galerija' },
        { name: 'O meni', href: '/o-meni' },
        { name: 'Kontakt', href: '/kontakt' },
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
                                Stomatološka ordinacija
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.href
                                        ? (isScrolled || !isHomePage ? 'text-primary' : 'text-white font-bold')
                                        : (isScrolled || !isHomePage ? 'text-slate-600' : 'text-white/90 hover:text-white')
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/kontakt"
                            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 ${isScrolled || !isHomePage
                                ? 'bg-cta text-white hover:bg-green-600'
                                : 'bg-white text-primary hover:bg-bg-medical'
                                }`}
                        >
                            Zakažite pregled
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className={isScrolled || !isHomePage ? 'text-text-medical' : 'text-white'} />
                        ) : (
                            <Menu className={isScrolled || !isHomePage ? 'text-text-medical' : 'text-white'} />
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
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`text-2xl font-serif hover:text-primary transition-colors ${location.pathname === link.href ? 'text-primary' : 'text-text-medical'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/kontakt"
                                className="mt-4 px-6 py-4 bg-cta text-white rounded-2xl text-lg font-semibold shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
                            >
                                Zakažite besplatan pregled
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
                                <li><Link to="/" className="hover:text-white transition-colors">Početna</Link></li>
                                <li><Link to="/usluge" className="hover:text-white transition-colors">Usluge</Link></li>
                                <li><Link to="/galerija" className="hover:text-white transition-colors">Galerija</Link></li>
                                <li><Link to="/o-meni" className="hover:text-white transition-colors">O nama</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-4">Usluge</h4>
                            <ul className="space-y-2">
                                <li><Link to="/usluge" className="hover:text-white transition-colors">Estetska Stomatologija</Link></li>
                                <li><Link to="/usluge" className="hover:text-white transition-colors">Protetika</Link></li>
                                <li><Link to="/usluge" className="hover:text-white transition-colors">Konzervativa</Link></li>
                                <li><Link to="/usluge" className="hover:text-white transition-colors">Dječija Stomatologija</Link></li>
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
