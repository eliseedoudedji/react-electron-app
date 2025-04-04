import React from 'react'
import light from "@assets/light.svg";
import { FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function ForgotPass() {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

                <div className="card shadow-sm p-4" style={{ width: "400px", borderRadius: "12px" }}>
                    <div className="text-center mb-3">
                        <img src={light} alt="TalismanPro" width={75} />
                    </div>
                    <p className="text-center text-muted small">
                        Veuillez entrer votre adresse email pour réinitialiser votre mot de passe
                    </p>
                    <div className="mb-3">
                        <div className="input-group">
                            <span className="input-group-text bg-white">
                                <FaEnvelope className="text-muted" />
                            </span>
                            <input type="email" className="form-control" placeholder="Adresse email" />
                        </div>
                    </div>
                    <button className="btn btn-primary w-100 mb-3">Réinitialiser</button>
                    <div className="text-center">
                        <Link to="/login" className="small"> Se connecter</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
