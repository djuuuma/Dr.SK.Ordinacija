import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

export default function Kontakt() {
    const { t } = useTranslation();
    const hours = t('contact_page.details.hours_lines', { returnObjects: true }) as string[];
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
                                        <p className="font-bold text-text-medical">{t('contact_page.details.phone_main')}</p>
                                        <p className="text-sm text-slate-500 mt-0.5">
                                            {t('contact_page.details.phone_mobile_label')}: {t('contact_page.details.phone_mobile')}
                                        </p>
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
                                        <p className="font-bold text-text-medical">
                                            {t('contact_page.details.address')}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h2 className="text-sm text-slate-500">{t('contact_page.hours')}</h2>
                                        <div className="mt-3 rounded-2xl bg-white/60 border border-slate-100 px-4 py-3 shadow-sm">
                                            <div className="space-y-1.5 text-sm font-semibold text-text-medical">
                                                {hours.map((line, index) => {
                                                    const [day, ...rest] = line.split(':');
                                                    const value = rest.join(':').trim();
                                                    const isClosed = value.toLowerCase().includes('zatvoreno') || value.toLowerCase().includes('closed');
                                                    return (
                                                        <div key={index} className="flex justify-between gap-6">
                                                            <span className="text-slate-500 min-w-[120px]">{day}</span>
                                                            <span className={isClosed ? 'text-red-500' : ''}>{value}</span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
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
