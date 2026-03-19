import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Shield, Smile, Zap, Star, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Testimonials from '../components/Testimonials';
import { ImageComparison } from '../components/ui/image-comparison-slider';

export default function Home() {
    const { t } = useTranslation();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = t('faq.items', { returnObjects: true }) as Array<{ question: string, answer: string }>;
    const services = t('services.items', { returnObjects: true }) as Array<{ title: string, desc: string }>;
    const reviews = t('testimonials.reviews', { returnObjects: true }) as Array<{ name: string, text: string }>;

    const serviceImages = [
        '/photos/dr%20sanela%20on%20a%20seminar%202.jpg',
        '/photos/team%20image.jpg',
        '/photos/dr%20sanela%20on%20a%20seminar%203.jpg',
        '/photos/zirkonia2.jpg'
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary">
                <div className="absolute inset-0">
                    <img
                        src="/photos/dr%20sanela%20on%20a%20seminar.jpg"
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
                            {t('hero.tagline')}
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                            {t('hero.title')}
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-10 font-light">
                            {t('hero.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/kontakt"
                                className="px-8 py-4 bg-cta text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                            >
                                {t('hero.book_btn')} <ChevronRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/proces"
                                className="px-8 py-4 bg-primary-dark/50 text-white rounded-full font-semibold text-lg border border-white/30 hover:bg-primary-dark transition-all backdrop-blur-sm"
                            >
                                {t('hero.process_btn')}
                            </Link>
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
                        <h3 className="text-xl font-bold mb-2">{t('features.fast.title')}</h3>
                        <p className="text-slate-600 text-sm">{t('features.fast.desc')}</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4">
                            <Shield className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t('features.quality.title')}</h3>
                        <p className="text-slate-600 text-sm">{t('features.quality.desc')}</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4">
                            <Smile className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t('features.esthetic.title')}</h3>
                        <p className="text-slate-600 text-sm">{t('features.esthetic.desc')}</p>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-24 bg-bg-medical">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">{t('services.tag')}</h2>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-text-medical mb-4">{t('services.title')}</h3>
                        <p className="text-slate-600">{t('services.desc')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {services.map((service, idx) => (
                            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group flex flex-col">
                                <div className="h-48 overflow-hidden">
                                    <img src={serviceImages[idx]} alt={service.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <h4 className="text-xl font-bold mb-2 text-text-medical">{service.title}</h4>
                                    <p className="text-slate-600 text-sm mb-4 flex-grow">{service.desc}</p>
                                    <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:text-primary-dark transition-colors">
                                        {t('services.learn_more')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link to="/usluge" className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-dark transition-colors group text-lg bg-primary/10 px-8 py-3 rounded-full hover:bg-primary/20">
                            {t('services.price_btn')} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Meet the Doctor Preview */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="bg-bg-medical rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-sm border border-slate-100">
                        <div className="md:w-1/2 w-full">
                            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] md:h-[400px] shadow-lg">
                                <img src="/photos/dr%20sanela.png" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Dr. Sanela Kapić" referrerPolicy="no-referrer" />
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">{t('doctor.tag')}</h2>
                            <h3 className="text-3xl md:text-5xl font-serif font-bold text-text-medical mb-6">{t('doctor.title')}</h3>
                            <p className="text-slate-600 mb-8 text-lg leading-relaxed italic border-l-4 border-primary/30 pl-4">
                                {t('doctor.quote')}
                            </p>
                            <Link to="/o-meni" className="inline-flex items-center px-8 py-4 bg-white text-text-medical border border-slate-200 rounded-full font-bold text-lg hover:border-primary hover:text-primary transition-all shadow-sm group">
                                {t('doctor.btn')} <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Preview - Naši Radovi */}
            <section className="py-24 bg-bg-medical relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">{t('gallery.tag')}</h2>
                            <h3 className="text-3xl md:text-5xl font-serif font-bold text-text-medical mb-4">{t('gallery.title')}</h3>
                            <p className="text-slate-600 text-lg">{t('gallery.desc')}</p>
                        </div>
                        <Link to="/galerija" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors group whitespace-nowrap font-bold text-lg border-b-2 border-transparent hover:border-primary pb-1">
                            {t('gallery.btn')} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                        {/* Before / After Slider */}
                        <div className="lg:col-span-3">
                            <ImageComparison
                                beforeImage="/photos/before1.png"
                                afterImage="/photos/after1.png"
                                altBefore={t('gallery.before')}
                                altAfter={t('gallery.after')}
                            />
                        </div>

                        {/* Accent Image */}
                        <div className="lg:col-span-2 flex flex-col gap-6">
                            <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] shadow-lg">
                                <img src="/photos/zirkonia%201.jpg" alt="Cirkon krunice" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                                <div className="absolute inset-0 bg-gradient-to-t from-text-medical/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <span className="text-white font-serif text-xl font-bold">{t('gallery.overlay')}</span>
                                </div>
                            </div>
                            <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] shadow-lg">
                                <img src="/photos/zirkonia2.jpg" alt="Zirkonia rad" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                                <div className="absolute inset-0 bg-gradient-to-t from-text-medical/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <span className="text-white font-serif text-xl font-bold">{t('gallery.overlay')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />

            {/* FAQ Section */}
            <section className="py-24 bg-bg-medical">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">{t('faq.tag')}</h2>
                        <h3 className="text-3xl md:text-5xl font-serif font-bold text-text-medical">{t('faq.title')}</h3>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden text-left"
                            >
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full px-8 py-6 flex justify-between items-center focus:outline-none"
                                >
                                    <span className="font-bold text-lg text-text-medical text-left pr-4">{faq.question}</span>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-transform duration-300 ${openFaq === idx ? 'rotate-180 bg-primary text-white' : ''}`}>
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-8 pb-6 text-slate-600 text-lg border-t border-slate-50 mt-2 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-slate-600 mb-4">{t('faq.missing')}</p>
                        <Link to="/kontakt" className="font-bold text-primary hover:text-primary-dark transition-colors border-b-2 border-primary pb-1">
                            {t('faq.contact')}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
