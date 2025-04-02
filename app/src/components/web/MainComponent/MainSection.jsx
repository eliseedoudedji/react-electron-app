import React from 'react'
import MainImage from '@assets/web/main-image.svg'
export default function MainSection() {
    return (
        <div>
            <main className="container my-5 py-5">
                <div className="row align-items-center">
                    {/* Texte d'introduction */}
                    <div className="col-lg-6">
                        <h1 className="custom-title">
                            Bienvenue sur <br /> <span className="text-primary fw-bold ">TalismanPro</span>
                        </h1>
                        <p className="lead text-muted">
                            Simplifiez la gestion comptable avec une solution intuitive et puissante.
                            Conçu pour les professionnels, optimisé pour l'efficacité.
                        </p>
                        <button className="btn btn-primary px-5 py-3 rounded-pill shadow-lg transition-all hover:scale-105 hover:bg-blue-700">
                            Découvrir
                        </button>
                    </div>

                    {/* Image ou Illustration */}
                    <div className="col-lg-6 d-flex justify-content-center">
                        <img src={MainImage} alt="MainImage"
                            className="img-fluid rounded-4 " />
                    </div>
                </div>
            </main>



        </div>
    )
}
