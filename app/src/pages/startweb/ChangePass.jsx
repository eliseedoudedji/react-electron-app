import React, { useState } from 'react';
import light from "@assets/light.svg";
import { FaLock } from "react-icons/fa";
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ChangePassword() {
    const { id } = useParams(); // récupère "id" depuis l'URL
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirm) {
            toast.error("Les mots de passe ne correspondent pas.");
            return;
        }

        setLoading(true);
        try {
          const res = await fetch(`https://talisman-pro-apis.onrender.com/api/v1/auth/reset/NQ/${id}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                password: password,
                confirm_password: confirm
            }),
        });
        

            const data = await res.json();

            if (res.ok) {
                toast.success("Mot de passe modifié avec succès !");
                setTimeout(() => navigate('/login'), 3000);
            } else {
                toast.error(data?.message || "Une erreur est survenue.");
            }
        } catch (error) {
            toast.error("Erreur serveur. Veuillez réessayer.");
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
                    Entrez votre nouveau mot de passe
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <div className="input-group">
                            <span className="input-group-text bg-white">
                                <FaLock className="text-muted" />
                            </span>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Nouveau mot de passe"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className="input-group">
                            <span className="input-group-text bg-white">
                                <FaLock className="text-muted" />
                            </span>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Répéter le mot de passe"
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mb-3" disabled={loading}>
                        {loading ? "Traitement..." : "Terminer"}
                    </button>
                </form>
            </div>
        </div>
    );
}
