import React from 'react';

export default function Galerija() {
    return (
        <div className="pt-24 pb-24 bg-bg-medical text-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Naši Radovi</h1>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-medical mb-4">Dokaz našeg kvaliteta</h2>
                    <p className="text-slate-600">Pogledajte rezultate našeg rada. Vaš osmijeh je naša najbolja reklama.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=800&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1498843053639-170ff2122f35?q=80&w=800&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1588776813677-77f329977e2e?q=80&w=800&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop'
                    ].map((img, idx) => (
                        <div key={idx} className="relative group overflow-hidden rounded-2xl aspect-square">
                            <img src={img} alt={`Galerija ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-serif text-xl font-bold">Prije & Poslije</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
