"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props: {
    className?: string;
    testimonials: { text: string; image: string; name: string; role: string }[];
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6"
            >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {props.testimonials.map(({ text, image, name, role }, i) => (
                                <div className="p-8 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg shadow-black/5 max-w-xs w-full text-white" key={i}>
                                    <div className="italic font-serif leading-relaxed">"{text}"</div>
                                    <div className="flex items-center gap-4 mt-6">
                                        <img
                                            width={48}
                                            height={48}
                                            src={image}
                                            alt={name}
                                            className="h-12 w-12 rounded-full object-cover border-2 border-primary-light"
                                        />
                                        <div className="flex flex-col">
                                            <div className="font-bold tracking-tight leading-5">{name}</div>
                                            <div className="leading-5 opacity-80 tracking-tight text-sm">{role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    )),
                ]}
            </motion.div>
        </div>
    );
};
