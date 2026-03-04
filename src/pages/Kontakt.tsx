import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

export default function Kontakt() {
    const { t } = useTranslation();
    return (
        <div className="pt-24 pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-bg-medical rounded-[3rem] p-8 md:p-16 shadow-sm border border-slate-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-serif font-bold text-text-medical mb-6">{t('contact_page.title')}</h1>
                            <p className="text-slate-600 mb-10 text-lg">
                                {t('contact_page.desc')}
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h2 className="text-sm text-slate-500">{t('contact_page.phone')}</h2>
                                        <p className="font-bold text-text-medical">+387 61 123 456</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h2 className="text-sm text-slate-500">{t('contact_page.email')}</h2>
                                        <p className="font-bold text-text-medical">info@drsanelakapic.ba</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h2 className="text-sm text-slate-500">{t('contact_page.address')}</h2>
                                        <p className="font-bold text-text-medical">Zmaja od Bosne bb, Sarajevo</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h2 className="text-sm text-slate-500">{t('contact_page.hours')}</h2>
                                        <p className="font-bold text-text-medical">Pon - Pet: 09:00 - 17:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg">
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-sm font-medium text-text-medical mb-2">{t('contact_page.form.name')}</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder={t('contact_page.form.placeholders.name')} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-medical mb-2">{t('contact_page.form.phone')}</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder={t('contact_page.form.placeholders.phone')} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-medical mb-2">{t('contact_page.form.service')}</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white">
                                        {(t('contact_page.form.services', { returnObjects: true }) as string[]).map((service, index) => (
                                            <option key={index}>{service}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-medical mb-2">{t('contact_page.form.message')}</label>
                                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none" placeholder={t('contact_page.form.placeholders.message')}></textarea>
                                </div>
                                <button type="submit" className="w-full py-4 bg-cta text-white rounded-xl font-bold text-lg hover:bg-green-600 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-green-400">
                                    {t('contact_page.form.btn')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
