import React, { useState, useRef } from "react";
import { FaEnvelope, FaUser, FaCloudUploadAlt, FaSortNumericDown, FaAddressBook, FaAddressCard } from "react-icons/fa";
import light from "@assets/light.svg";
import { Link } from "react-router-dom";
const SignUpPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow-sm p-4" style={{ width: "700px", borderRadius: "12px" }}>
                <div className="text-center mb-3">
                    <img src={light} alt="TalismanPro" width={75} />
                </div>
                <p className="text-center text-muted small mb-4">
                    ESPACE D'INSCRIPTION
                </p>
                {/* Formulaire en deux colonnes */}
                <div className="row">
                    {/* Colonne de gauche */}
                    <div className="col-md-5">
                        {/* input to upload image*/}
                        <div className="mb-4">
                            <label className="form-label small text-muted mb-2">Logo de l'entreprise</label>
                            <div
                                className="d-flex flex-column align-items-center justify-content-center p-3 border rounded-3 position-relative"
                                style={{
                                    cursor: 'pointer',
                                    backgroundColor: '#f8f9fa',
                                    minHeight: '180px',
                                    borderStyle: 'dashed',
                                    borderColor: '#dee2e6'
                                }}
                                onClick={() => document.getElementById('company-logo-upload').click()}
                            >
                                {selectedImage ? (
                                    <>
                                        <img
                                            src={selectedImage}
                                            alt="Logo de l'entreprise"
                                            className="img-fluid mb-2"
                                            style={{ maxHeight: '120px', maxWidth: '100%' }}
                                        />
                                        <button
                                            className="btn btn-sm btn-outline-secondary mt-2"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedImage(null);
                                                fileInputRef.current.value = '';
                                            }}
                                        >
                                            Changer l'image
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <FaCloudUploadAlt size={40} className="text-primary mb-2" />
                                        <p className="mb-0 text-center">Cliquez pour télécharger le logo</p>
                                        <p className="small text-muted text-center">Formats: JPG, PNG, SVG</p>
                                    </>
                                )}
                                <input
                                    id="company-logo-upload"
                                    ref={fileInputRef}
                                    type="file"
                                    className="d-none"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label small text-muted mb-2">Nom de l'entreprise</label>
                            <div className="input-group">
                                <span className="input-group-text bg-white">
                                    <FaUser className="text-muted" />
                                </span>
                                <input type="text" className="form-control" placeholder="Nom de l'entreprise" />
                            </div>
                        </div>
                    </div>

                    {/* Colonne de droite */}
                    <div className="col-md-7">
                        <div className="ps-md-4">
                            <div className="mb-3">
                                <label className="form-label small text-muted mb-2">Email</label>
                                <div className="input-group">
                                    <span className="input-group-text bg-white">
                                        <FaEnvelope className="text-muted" />
                                    </span>
                                    <input type="email" className="form-control" placeholder="Adresse email de l'entreprise" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label small text-muted mb-2">Adresse</label>
                                <div className="input-group">
                                    <span className="input-group-text bg-white">
                                        <FaAddressCard className="text-muted" />
                                    </span>
                                    <input type="text" className="form-control" placeholder="Adresse de l'entreprise" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label small text-muted mb-2">Contact</label>
                                <div className="input-group">
                                    <span className="input-group-text bg-white">
                                        <FaAddressBook className="text-muted" />
                                    </span>
                                    <input type="text" className="form-control" placeholder="Contact" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label small text-muted mb-2">IFU</label>
                                <div className="input-group">
                                    <span className="input-group-text bg-white">
                                        <FaSortNumericDown className="text-muted" />
                                    </span>
                                    <input type="number" className="form-control" placeholder="Numéro IFU" />
                                </div>
                            </div>
                        </div>
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
