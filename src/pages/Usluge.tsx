import React from 'react';

export default function Usluge() {
    return (
        <div className="pt-24 pb-24 bg-bg-medical">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Šta nudimo</h1>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-medical mb-4">Sveobuhvatne Stomatološke Usluge</h2>
                    <p className="text-slate-600">Od preventivnih pregleda do složenih protetskih radova, naš tim je tu za zdravlje vaših zuba.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: 'Estetska Stomatologija', desc: 'Izbjeljivanje zuba, fasete i kompozitne nadogradnje za savršen osmijeh.', img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop' },
                        { title: 'Protetika', desc: 'Krunice, mostovi i proteze vrhunskog kvaliteta i prirodnog izgleda.', img: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=800&auto=format&fit=crop' },
                        { title: 'Konzervativa', desc: 'Liječenje karijesa, endodoncija i popravke zuba najmodernijim materijalima.', img: 'https://images.unsplash.com/photo-1598256989800-fea5f95bc14c?q=80&w=800&auto=format&fit=crop' },
                        { title: 'Preventiva', desc: 'Redovni pregledi, uklanjanje kamenca i poliranje za dugoročno zdravlje.', img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop' }
                    ].map((service, idx) => (
                        <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                            <div className="h-48 overflow-hidden">
                                <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-text-medical">{service.title}</h3>
                                <p className="text-slate-600 text-sm">{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
