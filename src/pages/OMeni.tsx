import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award, BookOpen, Heart } from 'lucide-react';

export default function OMeni() {
    const { t } = useTranslation();
    return (
        <div className="pt-24 pb-24 bg-bg-medical">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col md:flex-row mb-16">
                    <div className="md:w-2/5 h-96 md:h-auto relative">
                        <img src="/photos/dr%20sanela.png" alt="Dr. Sanela Kapić" loading="lazy" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center">
                        <h1 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">{t('about_page.tag')}</h1>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-medical mb-6">{t('about_page.name')}</h2>
                        <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                            {t('about_page.desc1')}
                        </p>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            {t('about_page.desc2')}
                        </p>
                        <div className="flex items-center gap-4">
                            <img src="/photos/dr%20sanela.png" alt="Potpis" className="h-12 w-12 rounded-full object-cover grayscale" referrerPolicy="no-referrer" />
                            <div>
                                <p className="font-serif font-bold text-text-medical">{t('about_page.name')}</p>
                                <p className="text-sm text-slate-500">{t('about_page.role')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Info Sections */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                            <BookOpen className="text-primary w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-text-medical mb-4">{t('about_page.edu_title')}</h3>
                        <p className="text-slate-600">
                            {t('about_page.edu_desc')}
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                            <Award className="text-primary w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-text-medical mb-4">{t('about_page.exp_title')}</h3>
                        <p className="text-slate-600">
                            {t('about_page.exp_desc')}
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                            <Heart className="text-primary w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-text-medical mb-4">{t('about_page.phil_title')}</h3>
                        <p className="text-slate-600">
                            {t('about_page.phil_desc')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
