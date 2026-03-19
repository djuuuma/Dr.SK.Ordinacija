import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, MapPin, Clock, Mail, CheckCircle } from 'lucide-react';

interface FormErrors {
    name?: string;
    phone?: string;
    message?: string;
}

export default function Kontakt() {
    const { t } = useTranslation();
    const hours = t('contact_page.details.hours_lines', { returnObjects: true }) as string[];

    const [formData, setFormData] = useState({ name: '', phone: '', service: '', message: '' });
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);

    const validate = (): boolean => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = t('contact_page.form.errors.name', 'Molimo unesite vaše ime');
        }
        if (!formData.phone.trim()) {
            newErrors.phone = t('contact_page.form.errors.phone', 'Molimo unesite broj telefona');
        } else if (!/^[\d\s\+\-\(\)]{7,20}$/.test(formData.phone.trim())) {
            newErrors.phone = t('contact_page.form.errors.phone_invalid', 'Unesite ispravan broj telefona');
        }
        if (!formData.message.trim()) {
            newErrors.message = t('contact_page.form.errors.message', 'Molimo unesite poruku');
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setSubmitted(true);
            setFormData({ name: '', phone: '', service: '', message: '' });
            setErrors({});
        }
    };

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error for field being edited
        if (errors[field as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

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
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                                    <CheckCircle className="w-16 h-16 text-cta mb-6" />
                                    <h3 className="text-2xl font-serif font-bold text-text-medical mb-3">
                                        {t('contact_page.form.success_title', 'Poruka poslana!')}
                                    </h3>
                                    <p className="text-slate-600 mb-8 max-w-sm">
                                        {t('contact_page.form.success_desc', 'Hvala vam na poruci. Kontaktirat ćemo vas u najkraćem mogućem roku.')}
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="px-8 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors"
                                    >
                                        {t('contact_page.form.send_another', 'Pošaljite novu poruku')}
                                    </button>
                                </div>
                            ) : (
                                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                                    <div>
                                        <label htmlFor="contact-name" className="block text-sm font-medium text-text-medical mb-2">{t('contact_page.form.name')}</label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => handleChange('name', e.target.value)}
                                            className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-400 ring-1 ring-red-400' : 'border-slate-200'} focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all`}
                                            placeholder={t('contact_page.form.placeholders.name')}
                                            aria-invalid={!!errors.name}
                                            aria-describedby={errors.name ? 'name-error' : undefined}
                                        />
                                        {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="contact-phone" className="block text-sm font-medium text-text-medical mb-2">{t('contact_page.form.phone')}</label>
                                        <input
                                            id="contact-phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => handleChange('phone', e.target.value)}
                                            className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-400 ring-1 ring-red-400' : 'border-slate-200'} focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all`}
                                            placeholder={t('contact_page.form.placeholders.phone')}
                                            aria-invalid={!!errors.phone}
                                            aria-describedby={errors.phone ? 'phone-error' : undefined}
                                        />
                                        {errors.phone && <p id="phone-error" className="text-red-500 text-sm mt-1" role="alert">{errors.phone}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="contact-service" className="block text-sm font-medium text-text-medical mb-2">{t('contact_page.form.service')}</label>
                                        <select
                                            id="contact-service"
                                            value={formData.service}
                                            onChange={(e) => handleChange('service', e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white"
                                        >
                                            {(t('contact_page.form.services', { returnObjects: true }) as string[]).map((service, index) => (
                                                <option key={index}>{service}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="contact-message" className="block text-sm font-medium text-text-medical mb-2">{t('contact_page.form.message')}</label>
                                        <textarea
                                            id="contact-message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => handleChange('message', e.target.value)}
                                            className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-red-400 ring-1 ring-red-400' : 'border-slate-200'} focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none`}
                                            placeholder={t('contact_page.form.placeholders.message')}
                                            aria-invalid={!!errors.message}
                                            aria-describedby={errors.message ? 'message-error' : undefined}
                                        ></textarea>
                                        {errors.message && <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">{errors.message}</p>}
                                    </div>
                                    <button type="submit" className="w-full py-4 bg-cta text-white rounded-xl font-bold text-lg hover:bg-green-600 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-green-400">
                                        {t('contact_page.form.btn')}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
