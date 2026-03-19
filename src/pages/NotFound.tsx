import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    const { t } = useTranslation();
    return (
        <div className="pt-32 pb-24 bg-white min-h-screen flex items-center justify-center">
            <div className="max-w-md mx-auto px-4 text-center">
                <div className="text-9xl font-serif font-bold text-primary/20 mb-4 select-none">404</div>
                <h1 className="text-3xl font-serif font-bold text-text-medical mb-4">
                    {t('not_found.title', 'Stranica nije pronađena')}
                </h1>
                <p className="text-slate-600 mb-8 text-lg">
                    {t('not_found.desc', 'Stranica koju tražite ne postoji ili je premještena.')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors shadow-md"
                    >
                        <Home className="w-5 h-5" />
                        {t('not_found.home_btn', 'Početna stranica')}
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-200 text-text-medical rounded-xl font-semibold hover:bg-slate-50 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        {t('not_found.back_btn', 'Nazad')}
                    </button>
                </div>
            </div>
        </div>
    );
}
