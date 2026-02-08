"use client";
import "./intro-section.css";

export default function IntroSection() {
    return (
        <section className="intro-section">
            <div className="intro-grid">
                <div className="intro-item">
                    <h3>Design Philosophy</h3>
                    <p>
                        Създаваме кухни, които балансират естетика и функционалност,
                        съобразени с модерния начин на живот.
                    </p>
                </div>
                <div className="intro-item">
                    <h3>Premium Materials</h3>
                    <p>
                        Само внимателно подбрани материали, които издържат проверката на времето,
                        както визуално, така и структурно.
                    </p>
                </div>
                <div className="intro-item">
                    <h3>Tailored Process</h3>
                    <p>
                        От концепцията до инсталацията, всяка стъпка е персонализирана, прозрачна и прецизна.
                    </p>
                </div>
            </div>
        </section>
    );
}
