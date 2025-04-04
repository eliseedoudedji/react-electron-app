import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import light from "@assets/light.svg";
import { Link } from "react-router-dom";
const SignUpPage = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow-sm p-4" style={{ width: "400px", borderRadius: "12px" }}>
                <div className="text-center mb-3">
                    <img src={light} alt="TalismanPro" width={75} />
                </div>
                <p className="text-center text-muted small">
                    Veuillez vous inscrire avec votre email ou votre google account pour accéder à votre compte
                </p>
                <div className="mb-3 d-flex gap-2">
                    <div className="input-group">
                        <span className="input-group-text bg-white">
                            <FaUser className="text-muted" />
                        </span>
                        <input type="text" className="form-control" placeholder="Nom" />
                    </div>
                    <div className="input-group">
                        <span className="input-group-text bg-white">
                            <FaUser className="text-muted" />
                        </span>
                        <input type="text" className="form-control" placeholder="Prénoms" />
                    </div>
                </div>
                <div className="mb-3">
                    <div className="input-group">
                        <span className="input-group-text bg-white">
                            <FaEnvelope className="text-muted" />
                        </span>
                        <input type="email" className="form-control" placeholder="Adresse email" />
                    </div>
                </div>
                <div className="mb-3">
                    <div className="input-group">
                        <span className="input-group-text bg-white">
                            <FaLock className="text-muted" />
                        </span>
                        <input type="password" className="form-control" placeholder="Mot de passe" />
                    </div>
                </div>
                <div className="mb-3">
                    <div className="input-group">
                        <span className="input-group-text bg-white">
                            <FaLock className="text-muted" />
                        </span>
                        <input type="password" className="form-control" placeholder="Confirmer le mot de passe" />
                    </div>
                </div>

                <p className="text-muted small text-center">
                    En vous inscrivant, vous acceptez les <a href="#">Termes d'utilisation</a> et la <a href="#">Politique de confidentialité</a> de TalismanPro.
                </p>
                <button className="btn btn-primary w-100 mb-3">S'inscrire</button>
                <div className="text-center">
                    <Link to='/login' className="small"> Se connecter</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
