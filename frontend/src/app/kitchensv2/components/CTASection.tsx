"use client";
import "./cta-section.css";
import { useState } from "react";
import ConsultationModal from "./ConsultationModal";

export default function CTASection() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <section className="cta-section">
                <div className="cta-inner">
                    <h2>Нека създадем Вашата кухня</h2>
                    <p>
                        От концепцията до инсталацията – персонализирани решения,
                        висококачествени материали.
                    </p>
                    <button onClick={() => setOpen(true)}>
                        Запиши се за консултация
                    </button>
                </div>
            </section>
            <ConsultationModal open={open} onClose={() => setOpen(false)} />
        </>
    );
}
