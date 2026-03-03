import React from 'react';

export default function OMeni() {
    return (
        <div className="pt-24 pb-24 bg-bg-medical">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-2/5 h-96 md:h-auto relative">
                        <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop" alt="Dr. Sanela Kapić" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center">
                        <h1 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">O Meni</h1>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-medical mb-6">Dr. Sanela Kapić</h2>
                        <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                            Dobrodošli u moju ordinaciju. Sa preko 15 godina iskustva u stomatologiji, moja misija je da razbijem strah od zubara i pružim vam osmijeh kakav zaslužujete.
                        </p>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Kontinuirano se usavršavam na međunarodnim seminarima kako bih u Sarajevo donijela najnovije svjetske trendove i tehnologije. Moj pristup je nježan, precizan i uvijek fokusiran na vaše zdravlje i estetiku.
                        </p>
                        <div className="flex items-center gap-4">
                            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&auto=format&fit=crop" alt="Potpis" className="h-12 w-12 rounded-full object-cover grayscale" referrerPolicy="no-referrer" />
                            <div>
                                <p className="font-serif font-bold text-text-medical">Dr. Sanela Kapić</p>
                                <p className="text-sm text-slate-500">Osnivač & Glavni Stomatolog</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
