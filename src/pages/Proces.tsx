import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Clock, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function Proces() {
    const { t } = useTranslation();
    return (
        <div className="pt-24 pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Intro Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">{t('process_page.tag')}</h1>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-medical mb-6">{t('process_page.title')}</h2>
                    <p className="text-slate-600 text-lg">
                        {t('process_page.desc')}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 items-center mb-20">
                    <div className="lg:w-1/2">
                        <div className="space-y-8">
                            {[
                                { step: '01', title: 'Prvi kontakt i konsultacije', desc: 'Sve počinje vašim pozivom ili porukom. Zakažemo termin koji vam odgovara. Na prvom pregledu pažljivo slušamo vaše želje i probleme, bez ikakvih obaveza.' },
                                { step: '02', title: 'Detaljna dijagnostika i plan', desc: 'Koristimo modernu tehnologiju za preciznu dijagnostiku. Nakon toga, kreiramo jasan plan terapije sa ponuđenim opcijama i potpuno transparentnim cijenama.' },
                                { step: '03', title: 'Bezbolan tretman', desc: 'Sam zahvat izvodimo u opuštajućoj atmosferi, koristeći moderne anestetike. Pratimo vaš ritam i pravimo pauze kad god su vam potrebne.' },
                                { step: '04', title: 'Oporavak i novi osmijeh', desc: 'Dajemo vam detaljne upute za održavanje i uvijek smo dostupni za sva pitanja nakon zahvata. Vaš zdrav osmijeh je naš krajnji cilj.' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 relative">
                                    {idx !== 3 && <div className="absolute left-6 top-14 bottom-[-2rem] w-[2px] bg-slate-100 z-0"></div>}
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg relative z-10">
                                        {item.step}
                                    </div>
                                    <div className="pb-8">
                                        <h3 className="text-xl font-bold text-text-medical mb-2">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full min-h-[500px]">
                            <img src="/photos/team%20image.jpg" alt="Stomatološki pregled" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-white w-full space-y-4">
                                    <h4 className="font-bold text-xl mb-2">{t('process_page.why_trust.title')}</h4>
                                    <div className="flex items-center gap-3">
                                        <HeartHandshake className="text-primary-light w-5 h-5 flex-shrink-0" />
                                        <span className="text-sm">{t('process_page.why_trust.item1')}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="text-primary-light w-5 h-5 flex-shrink-0" />
                                        <span className="text-sm">{t('process_page.why_trust.item2')}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock className="text-primary-light w-5 h-5 flex-shrink-0" />
                                        <span className="text-sm">{t('process_page.why_trust.item3')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-primary/5 rounded-[3rem] p-12 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-text-medical mb-4">{t('process_page.cta.title')}</h3>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                        {t('process_page.cta.desc')}
                    </p>
                    <a href="/kontakt" className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl">
                        {t('process_page.cta.btn')}
                    </a>
                </div>
            </div>
        </div>
    );
}
