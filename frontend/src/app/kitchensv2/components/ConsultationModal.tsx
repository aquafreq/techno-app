"use client";

import { useState } from "react";
import "./consultation-modal.css";

type Props = {
    open: boolean;
    onClose: () => void;
};

export default function ConsultationModal({ open, onClose }: Props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    if (!open) return null;

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await fetch("http://localhost:3001/api/consultation", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, phone, message }),
            });
            if (!res.ok) throw new Error("Something went wrong");
            setSuccess(true);
        } catch (err) {
            setError("Неуспешно изпращане. Опитайте отново.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <button className="modal-close" onClick={onClose}>✕</button>
                {success ? (
                    <div className="modal-success">
                        <h3>Благодарим ви ✨</h3>
                        <p>Ще се свържем с вас възможно най-скоро.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <h3>Консултация</h3>
                        <input placeholder="Име" value={name} onChange={(e) => setName(e.target.value)} required />
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input placeholder="Телефон" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <textarea placeholder="Съобщение" value={message} onChange={(e) => setMessage(e.target.value)} />
                        {error && <p className="error">{error}</p>}
                        <button type="submit" disabled={loading}>
                            {loading ? "Изпращане..." : "Изпрати"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
