import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function Proces() {
    return (
        <div className="pt-24 pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <h1 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Naš Proces</h1>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-medical mb-6">Od prvog poziva do novog osmijeha</h2>
                        <p className="text-slate-600 mb-8 text-lg">
                            Vjerujemo u transparentnost i jednostavnost. Naš proces je dizajniran tako da se osjećate sigurno i informisano u svakom trenutku.
                        </p>

                        <div className="space-y-8">
                            {[
                                { step: '01', title: 'Besplatne Konsultacije', desc: 'Zakažite termin. Pregledat ćemo vaše zube i saslušati vaše želje.' },
                                { step: '02', title: 'Plan Terapije', desc: 'Pravimo detaljan plan liječenja sa transparentnim cijenama i rokovima.' },
                                { step: '03', title: 'Tretman', desc: 'Izvodimo zahvate brzo, stručno i bezbolno u modernom ambijentu.' },
                                { step: '04', title: 'Novi Osmijeh', desc: 'Odlazite zadovoljni sa savršenim osmijehom i uputama za održavanje.' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-text-medical mb-1">{item.title}</h3>
                                        <p className="text-slate-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop" alt="Stomatološki pregled" className="w-full h-auto" referrerPolicy="no-referrer" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-white w-full">
                                    <div className="flex items-center gap-4 mb-2">
                                        <CheckCircle className="text-primary-light w-6 h-6" />
                                        <span className="font-semibold text-lg">100% Posvećenost pacijentu</span>
                                    </div>
                                    <p className="text-white/80 text-sm">Svaki pacijent dobija individualan pristup i maksimalnu pažnju.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
