"use client";
import "./projects-section.css";

const projects = [
    { title: "Елегантен стил", image: "/kitchens/hero-1.jpeg" },
    { title: "Черната перла", image: "/kitchens/hero-2.jpeg" },
    { title: "Изящество от камък", image: "/kitchens/hero-3.jpeg" },
];

export default function ProjectsSection() {
    return (
        <section className="projects-section">
            <h2 className="projects-title">Проекти</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="project-card"
                        style={{ backgroundImage: `url(${project.image})` }}
                    >
                        <div className="project-overlay">
                            <h3>{project.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
