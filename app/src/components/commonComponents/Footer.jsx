import React, { useEffect } from 'react'

export default function Footer() {
    // Pour mettre à jour l'année automatiquement
    useEffect(() => {
        const yearElement = document.getElementById('year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear().toString();
        }
    }, []);

    return (
        <footer className="footer mt-auto py-3 bg-white text-center">
            <div className="container">
                <span className="text-muted"> Copyright © <span id="year"></span> <a href="javascript:void(0);"
                    className="text-primary fw-semibold">Hogo</a>.
                    Designed with <span className="bi bi-heart-fill text-danger"></span> by <a href="javascript:void(0);">
                        <span className="fw-semibold text-primary text-decoration-underline">Spruko</span>
                    </a> All
                    rights
                    reserved
                </span>
            </div>
        </footer>
    )
}
