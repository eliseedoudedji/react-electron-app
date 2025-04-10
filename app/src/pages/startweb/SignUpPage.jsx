import React, { useState, useRef } from "react";
import { FaEnvelope, FaUser, FaCloudUploadAlt, FaSortNumericDown, FaAddressBook, FaAddressCard } from "react-icons/fa";
import light from "@assets/light.svg";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        contact: "",
        ifu: "",
    });
    const [selectedImage, setSelectedImage] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const fileInputRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const form = new FormData();
        form.append("name", formData.name);
        form.append("email", formData.email);
        form.append("address", formData.address);
        form.append("contact", formData.contact);
        form.append("ifu", formData.ifu);
        if (selectedImage) {
            form.append("logo", selectedImage);
        }

        try {
            const response = await fetch("https://talisman-pro-apis.onrender.com/api/v1/companies/create/", {
                method: "POST",
                body: form,
            });

            const data = await response.json();
            console.log(data);

            if (!response.ok) {
                throw new Error(data.message || "Erreur lors de l'inscription.");
            }

            // Redirection après succès
            navigate("/pricing");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow-sm p-4" style={{ width: "700px", borderRadius: "12px" }}>
                <div className="text-center mb-3">
                    <img src={light} alt="TalismanPro" width={75} />
                </div>
                <p className="text-center text-muted small mb-4">ESPACE D'INSCRIPTION</p>

                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        {/* Colonne gauche - Image + Nom */}
                        <div className="col-md-5">
                            <div className="mb-4">
                                <label className="form-label small text-muted">Logo de l'entreprise</label>
                                <div
                                    className="d-flex flex-column align-items-center justify-content-center p-3 border rounded-3"
                                    style={{
                                        cursor: 'pointer',
                                        backgroundColor: '#f8f9fa',
                                        minHeight: '180px',
                                        borderStyle: 'dashed',
                                        borderColor: '#dee2e6'
                                    }}
                                    onClick={() => fileInputRef.current.click()}
                                >
                                    {selectedImage ? (
                                        <>
                                            <img
                                                src={URL.createObjectURL(selectedImage)}
                                                alt="logo"
                                                className="img-fluid mb-2"
                                                style={{ maxHeight: '120px' }}
                                            />
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-secondary mt-2"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedImage(null);
                                                    fileInputRef.current.value = "";
                                                }}
                                            >
                                                Changer l'image
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <FaCloudUploadAlt size={40} className="text-primary mb-2" />
                                            <p className="mb-0 text-center">Cliquez pour télécharger</p>
                                            <p className="small text-muted text-center">JPG, PNG, SVG</p>
                                        </>
                                    )}
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        className="d-none"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label small text-muted">Nom de l'entreprise</label>
                                <div className="input-group">
                                    <span className="input-group-text bg-white"><FaUser /></span>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Nom de l'entreprise"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Colonne droite - Email, adresse, contact, ifu */}
                        <div className="col-md-7">
                            <div className="ps-md-4">
                                <div className="mb-3">
                                    <label className="form-label small text-muted">Email</label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-white"><FaEnvelope /></span>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Adresse email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label small text-muted">Adresse</label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-white"><FaAddressCard /></span>
                                        <input
                                            type="text"
                                            name="address"
                                            className="form-control"
                                            placeholder="Adresse de l'entreprise"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label small text-muted">Contact</label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-white"><FaAddressBook /></span>
                                        <input
                                            type="text"
                                            name="contact"
                                            className="form-control"
                                            placeholder="Numéro de téléphone"
                                            value={formData.contact}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label small text-muted">IFU</label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-white"><FaSortNumericDown /></span>
                                        <input
                                            type="text"
                                            name="ifu"
                                            className="form-control"
                                            placeholder="Numéro IFU"
                                            value={formData.ifu}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-muted small text-center mt-3">
                        En vous inscrivant, vous acceptez les <a href="#">Termes</a> et la <a href="#">Politique de confidentialité</a>.
                    </p>

                    <button type="submit" className="btn btn-primary w-100 mb-3" disabled={loading}>
                        {loading ? "Enregistrement..." : "S'inscrire"}
                    </button>
                </form>

                <div className="text-center">
                    <Link to="/login" className="small">Se connecter</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
