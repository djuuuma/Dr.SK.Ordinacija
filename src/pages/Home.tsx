import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Shield, Smile, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop"
                        alt="Moderna stomatološka ordinacija"
                        className="w-full h-full object-cover opacity-20 mix-blend-overlay"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm border border-white/30">
                            Vrhunska stomatologija u Sarajevu
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                            Vaš savršen osmijeh je naša misija.
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-10 font-light">
                            Pružamo brze, bezbolne i dugotrajne stomatološke usluge koristeći najmoderniju tehnologiju. Vratite samopouzdanje uz naš stručni tim.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/kontakt"
                                className="px-8 py-4 bg-cta text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                            >
                                Zakažite termin <ChevronRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/usluge"
                                className="px-8 py-4 bg-primary-dark/50 text-white rounded-full font-semibold text-lg border border-white/30 hover:bg-primary-dark transition-all backdrop-blur-sm"
                            >
                                Naše usluge
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Value Proposition / Features */}
            <section className="py-12 bg-white relative z-10 -mt-8 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-3xl shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Brzo i Bezbolno</h3>
                        <p className="text-slate-600 text-sm">Koristimo najnovije metode i anestetike kako bi svaki tretman bio potpuno ugodan i efikasan.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4">
                            <Shield className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Vrhunski Kvalitet</h3>
                        <p className="text-slate-600 text-sm">Materijali svjetske klase i dugogodišnje iskustvo garantuju dugotrajne rezultate.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4">
                            <Smile className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Estetika na Prvom Mjestu</h3>
                        <p className="text-slate-600 text-sm">Fokusirani smo na prirodan izgled vaših zuba, vraćajući vam blistav osmijeh.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-primary text-white overflow-hidden mt-12 mb-12 rounded-3xl mx-4 sm:mx-6 lg:mx-8 max-w-7xl lg:mx-auto">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-white/80 font-semibold tracking-wide uppercase text-sm mb-2">Iskustva Pacijenata</h2>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold">Šta kažu o nama</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Amira S.', text: 'Najbolje iskustvo kod zubara ikada! Dr. Sanela je izuzetno pažljiva i profesionalna. Ordinacija je prelijepa i moderna.' },
                            { name: 'Kenan M.', text: 'Godinama sam imao strah od zubara, ali ovdje sam se osjećao potpuno opušteno. Sve preporuke za ovaj divan tim!' },
                            { name: 'Lejla H.', text: 'Radila sam fasete i rezultat je iznad svih mojih očekivanja. Konačno se smijem sa samopouzdanjem. Hvala doktorici!' }
                        ].map((testimonial, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                                <div className="flex gap-1 text-yellow-400 mb-6">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                                </div>
                                <p className="text-lg font-serif italic mb-6">"{testimonial.text}"</p>
                                <p className="font-bold">{testimonial.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
