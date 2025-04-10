import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import light from "@assets/light.svg";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch("https://talisman-pro-apis.onrender.com/api/v1/auth/login/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            console.log(data);
            

            if (!response.ok) {
                throw new Error(data.message || "Erreur de connexion");
            }

            // Stocke le token ou utilisateur
            localStorage.setItem("token", data.access);
            // Redirige vers le dashboard
            navigate("/dashboard");

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow-sm p-4" style={{ width: "400px", borderRadius: "12px" }}>
                <div className="text-center mb-3">
                    <img src={light} alt="TalismanPro" width={75} />
                </div>
                <p className="text-center text-muted small">ESPACE DE CONNEXION</p>
                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <div className="input-group">
                            <span className="input-group-text bg-white"><FaEnvelope className="text-muted" /></span>
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
                    <div className="mb-3">
                        <div className="input-group">
                            <span className="input-group-text bg-white"><FaLock className="text-muted" /></span>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Mot de passe"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <p className="text-muted small text-center">
                        En vous inscrivant ou en vous connectant, vous acceptez les <Link to="/terms">Termes</Link> et la <Link to="/privacy">Confidentialité</Link>.
                    </p>
                    <button type="submit" className="btn btn-primary w-100 mb-3" disabled={loading}>
                        {loading ? "Connexion..." : "Se connecter"}
                    </button>
                </form>

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
