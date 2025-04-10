import React, { useState } from 'react';
import light from "@assets/light.svg";
import { FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgotPass() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('https://talisman-pro-apis.onrender.com/api/v1/auth/forgot/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success(`Un email a été envoyé à : ${email}`, {
                    position: "top-center",
                });
                setEmail('');
            } else {
                toast.error(`Erreur : ${data?.message || "Impossible d'envoyer l'email."}`, {
                    position: "top-center",
                });
            }
        } catch (error) {
            toast.error("Une erreur est survenue. Veuillez réessayer.", {
                position: "top-center",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <ToastContainer />
            <div className="card shadow-sm p-4" style={{ width: "400px", borderRadius: "12px" }}>
                <div className="text-center mb-3">
                    <img src={light} alt="TalismanPro" width={75} />
                </div>
                <p className="text-center text-muted small">
                    Veuillez entrer votre adresse email pour réinitialiser votre mot de passe
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <div className="input-group">
                            <span className="input-group-text bg-white">
                                <FaEnvelope className="text-muted" />
                            </span>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Adresse email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mb-3" disabled={loading}>
                        {loading ? 'Envoi en cours...' : 'Réinitialiser'}
                    </button>
                </form>
                <div className="text-center">
                    <Link to="/login" className="small">Se connecter</Link>
                </div>
            </div>
        </div>
    );
}
