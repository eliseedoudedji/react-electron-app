import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEnvelope, FaLock } from "react-icons/fa";
import light from "@assets/light.svg";
import { Link } from "react-router-dom";
const LoginPage = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow-sm p-4" style={{ width: "400px", borderRadius: "12px" }}>
                <div className="text-center mb-3">
                    <img src={light} alt="TalismanPro" width={75} />
                </div>
                <p className="text-center text-muted small">
                    Veuillez vous connecter avec votre email ou votre google account pour accéder à votre compte
                </p>
                <div className="mb-3">
                    <div className="input-group">
                        <span className="input-group-text bg-white">
                            <FaEnvelope className="text-muted" />
                        </span>
                        <input type="text" className="form-control" placeholder="Adresse email" />
                    </div>
                </div>
                <div className="mb-3">
                    <div className="input-group">
                        <span className="input-group-text bg-white">
                            <FaLock className="text-muted" />
                        </span>
                        <input type="password" className="form-control" placeholder="Mot de passe" />
                        <span className="input-group-text bg-white">
                            <i className="bi bi-eye"></i>
                        </span>
                    </div>
                </div>
                <p className="text-muted small text-center">
                    En vous inscrivant ou en vous connectant, vous acceptez les <Link to="/terms" className="small">Termes d'utilisation</Link> et la <Link to="/privacy" className="small">Politique de confidentialité</Link> de TalismanPro.
                </p>
                <button className="btn btn-primary w-100 mb-3">Se connecter</button>
                <div className="d-flex justify-content-between">
                    <Link to="/forgot-password" className="small">Mot de passe oublié?</Link>
                    <Link to="/signup" className="small">S'inscrire</Link>
                </div>
                <div className="text-center my-3 text-muted">OU</div>
                <button className="btn btn-light w-100 border d-flex align-items-center justify-content-center">
                    <i className="bi bi-google me-2 text-danger"></i>
                    Se connecter avec Google
                </button>
            </div>
        </div>  
    );
};

export default LoginPage;
