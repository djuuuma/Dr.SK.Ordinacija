import React from "react";
import { TestimonialsColumn } from "./ui/testimonials-columns-1";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const testimonials = [
    {
        text: "Mislila sam da će ugradnja implantata biti bolna i stresna, ali dr. Sanela i njen tim su učinili proces gotovo neprimjetnim. Veoma sam zadovoljna!",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop",
        name: "Amina K.",
        role: "Pacijent",
    },
    {
        text: "Profesionalnost na najvišem nivou. Ambijent u ordinaciji je veoma opuštajući, a rezultati izbjeljivanja zuba su fantastični!",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop",
        name: "Emir T.",
        role: "Pacijent",
    },
    {
        text: "Radila sam navlake i oduševljena sam kako prirodno izgledaju. Hvala cijelom timu na strpljenju i vrhunskoj usluzi.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
        name: "Selma O.",
        role: "Pacijent",
    },
    {
        text: "Jako ljubazno osoblje i moderna oprema. Doktorica mi je sve detaljno objasnila prije zahvata. Svaka preporuka!",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
        name: "Haris J.",
        role: "Pacijent",
    },
    {
        text: "Izuzetno sam zadovoljna! Doslovno su mi spasili zub koji sam mislila da ću morati izvaditi.",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=100&auto=format&fit=crop",
        name: "Lejla H.",
        role: "Pacijent",
    },
    {
        text: "Brza usluga bez boli. Moja krunica izgleda odlično i potpuno prirodno. Cijenim ovakav profesionalan pristup.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
        name: "Nedim B.",
        role: "Pacijent",
    },
    {
        text: "Sve pohvale za stručnost i pristupačnost. Napokon sam prestala ići kod zubara sa strahom.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
        name: "Kenan M.",
        role: "Pacijent",
    },
    {
        text: "Kvalitet i usluga za svaku pohvalu. Ugradnja faseta mi je potpuno promijenila osmijeh i vratila samopouzdanje.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop",
        name: "Emina R.",
        role: "Pacijent",
    },
    {
        text: "Nisam nikada bio na boljem pregledu. Tim je posvećen svakom pacijentu pojedinačno. Odlično iskustvo!",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
        name: "Dino S.",
        role: "Pacijent",
    }
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
    const { t } = useTranslation();

    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
                >
                    <div className="flex justify-center mb-4">
                        <h2 className="text-white/80 font-semibold tracking-wide uppercase text-sm">
                            {t("testimonials.tag")}
                        </h2>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-serif font-bold tracking-tighter">
                        {t("testimonials.title")}
                    </h3>
                    <p className="text-center mt-5 opacity-75">
                        Naši pacijenti su naša najbolja preporuka. Otkrijte zašto nam vjeruju već dugi niz godina.
                    </p>
                </motion.div>

                <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[700px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={15} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
