import React from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Usluge() {
    const { t } = useTranslation();
    const cjenovnikData = t('services_page.categories', { returnObjects: true });
    const cjenovnikKategorije = Array.isArray(cjenovnikData)
        ? cjenovnikData as Array<{ naziv: string, usluge: Array<{ ime: string, cijena: string }> }>
        : [];

    return (
        <div className="pt-24 pb-24 bg-bg-medical">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Sekcija */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">{t('services_page.tag')}</h1>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-medical mb-6">{t('services_page.title')}</h2>
                    <p className="text-slate-600 text-lg">
                        {t('services_page.desc')}
                    </p>
                </div>

                {/* Cjenovnik Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {cjenovnikKategorije.map((kategorija, idx) => (
                        <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                            <h3 className="text-2xl font-bold text-text-medical mb-6 pb-4 border-b border-slate-100 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Check className="w-4 h-4 font-bold" />
                                </div>
                                {kategorija.naziv}
                            </h3>
                            <ul className="space-y-4">
                                {kategorija.usluge.map((usluga, i) => (
                                    <li key={i} className="flex justify-between items-center group">
                                        <span className="text-slate-600 font-medium group-hover:text-primary transition-colors">{usluga.ime}</span>
                                        <span className="font-bold text-text-medical ml-4 whitespace-nowrap bg-bg-medical px-3 py-1 rounded-lg">{usluga.cijena}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="bg-primary rounded-3xl p-10 text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/photos/dr%20sanela%20on%20a%20seminar.jpg')] opacity-10 mix-blend-overlay object-cover"></div>
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h3 className="text-3xl font-serif font-bold mb-4">{t('services_page.cta_title')}</h3>
                        <p className="text-white/80 mb-8 text-lg">
                            {t('services_page.cta_desc')}
                        </p>
                        <Link
                            to="/kontakt"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            {t('services_page.cta_btn')} <ChevronRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
