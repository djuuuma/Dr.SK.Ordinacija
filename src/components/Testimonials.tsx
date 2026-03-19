import React from "react";
import { TestimonialsColumn } from "./ui/testimonials-columns-1";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";





const Testimonials = () => {
    const { t } = useTranslation();
    const tData = t("testimonials_page_reviews", { returnObjects: true });
    const testimonials = Array.isArray(tData) ? tData as Array<{ name: string, text: string, image: string, role: string }> : [];

    const firstColumn = testimonials.slice(0, 3);
    const secondColumn = testimonials.slice(3, 6);
    const thirdColumn = testimonials.slice(6, 9);

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
                        {t("testimonials.desc")}
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
