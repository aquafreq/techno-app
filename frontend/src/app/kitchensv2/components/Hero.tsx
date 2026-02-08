"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "./hero.css";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
    {
        image: "/kitchens/hero-1.jpeg",
        title: "Timeless Kitchen Design",
        subtitle: "Where elegance meets functionality",
    },
    {
        image: "/kitchens/hero-2.jpeg",
        title: "Designed for Modern Living",
        subtitle: "Crafted for everyday inspiration",
    },
    {
        image: "/kitchens/hero-3.jpeg",
        title: "Premium Materials",
        subtitle: "Built to last for generations",
    },
];

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                loop
                className="hero-swiper w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="hero-slide-bg"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="hero-content-overlay">
                                <motion.div
                                    initial={{ opacity: 0, y: 30, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    className="hero-content p-4"
                                >
                                    <h1 className="text-4xl md:text-6xl font-light tracking-wide text-white">
                                        {slide.title}
                                    </h1>
                                    <p className="mt-6 text-lg md:text-xl text-white/80">
                                        {slide.subtitle}
                                    </p>
                                    <div className="mt-10">
                                        <button className="border border-white px-10 py-3 text-sm uppercase tracking-widest text-white transition hover:bg-white hover:text-black">
                                            View Projects
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
