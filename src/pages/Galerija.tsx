import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Galerija() {
    const { t } = useTranslation();
    return (
        <div className="pt-24 pb-24 bg-bg-medical text-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">{t('gallery_page.tag')}</h1>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-medical mb-4">{t('gallery_page.title')}</h2>
                    <p className="text-slate-600">{t('gallery_page.desc')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        '/photos/before1.png',
                        '/photos/after1.png',
                        '/photos/zirkonia%201.jpg',
                        '/photos/zirkonia2.jpg',
                        '/photos/dr%20sanela%20on%20a%20seminar%203.jpg',
                        '/photos/dr%20sanela%20on%20a%20seminar%202.jpg'
                    ].map((img, idx) => (
                        <div key={idx} className="relative group overflow-hidden rounded-2xl aspect-square">
                            <img src={img} alt={`Galerija ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-serif text-xl font-bold">{t('gallery_page.overlay')}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
