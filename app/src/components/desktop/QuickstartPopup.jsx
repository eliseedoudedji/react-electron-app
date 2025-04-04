// QuickstartPopup.js
import React from "react";
import background from "@/assets/tests/test9.jpg";
import { Link } from "react-router-dom";

const QuickstartPopup = ({ onClose }) => {
    return (
        <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "rgba(0,0,0,0.7)", zIndex: 1050 }}
            onClick={onClose}
        >
            <div
                className="card shadow"
                style={{
                    paddingTop: "0px",
                    paddingBottom: "10px",
                    width: "600px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    background: "#fff",
                    color: "#000",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "13px",
                }}
            >
                <div className="row g-0" style={{ marginBottom: "10px" }}>
                    {/* Menu à gauche */}
                    <div className="col-md-5 border-end border-dark p-3">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <span className="nav-link active text-dark" onclick={onClose} style={{ textDecoration: "underline", cursor: "pointer" }}>
                                    <i className="bi bi-folder"></i>  <span className="ms-2">Dossier en cours</span>
                                </span>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" >
                                    <i className="bi bi-folder-plus"></i>  <span className="ms-2">Nouveau dossier</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" >
                                    <i className="bi bi-save"></i>  <span className="ms-2">Mes sauvegardes</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark" >
                                    <i className="bi bi-archive"></i>  <span className="ms-2">Mes Archives</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Image à droite */}
                    <div className="col-md-7 p-0">
                        <img
                            src={background}
                            alt="Desktop Illustration"
                            className="img-fluid"
                            style={{ height: "300px", width: "100%", objectFit: "cover", borderRadius: "4px" }}
                        />
                    </div>
                </div>
                {/* Bouton Fermer en bas à droite */}
                <div className="d-flex justify-content-between p-2">
                    <span className="ms-2 text-white">TalismanPro : Copyright © 2025. Tout droits reservés</span>
                    <span className="ms-2 " onclick={onClose}>
                        <span className="ms-2 text-danger" style={{ fontSize: "14px", fontWeight: "bold", cursor: "pointer" }}>Fermer</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default QuickstartPopup;
