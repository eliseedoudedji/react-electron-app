import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import './CreateJournal.css';

const CreateJournalModal = ({ show, onClose }) => {
    const [form, setForm] = useState({
        title: "",
        code: "",
        type: "Ventes",
        description: "",
        currency: "EUR",
        isDefault: false,
        closed: false,
    });

    // Empêcher le défilement du corps quand le modal est ouvert
    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Gestionnaire d'événement pour la touche Escape
        const handleEscKey = (e) => {
            if (e.key === 'Escape' && show) {
                onClose();
            }
        };

        // Ajouter l'écouteur d'événement
        document.addEventListener('keydown', handleEscKey);

        return () => {
            document.body.style.overflow = 'auto';
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [show, onClose]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("🧾 Journal à créer :", form);
        onClose();
    };

    // Gestionnaire pour fermer le modal quand on clique sur le backdrop
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!show) return null;

    // Utiliser createPortal pour rendre le modal directement dans le body


    return createPortal(
        <>
            <div className="modal fade show d-block" tabIndex="-1" role="dialog" onClick={handleBackdropClick}>
                <div className="modal-dialog modal-lg modal-dialog-centered" role="document" onClick={e => e.stopPropagation()}>
                    <div className="modal-content rounded-3 shadow">
                        <div className="modal-header border-bottom">
                            <h5 className="modal-title fw-bold">Créer un nouveau journal</h5>
                            <button type="button" className="btn-close" onClick={onClose} />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label">Intitulé du journal</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="title"
                                            required
                                            value={form.title}
                                            onChange={handleChange}
                                            placeholder="ex : Journal des ventes"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Code</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="code"
                                            required
                                            value={form.code}
                                            onChange={handleChange}
                                            placeholder="ex : VTE"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Type de journal</label>
                                        <select
                                            className="form-select"
                                            name="type"
                                            value={form.type}
                                            onChange={handleChange}
                                        >
                                            <option value="Ventes">Ventes</option>
                                            <option value="Achats">Achats</option>
                                            <option value="Caisse">Caisse</option>
                                            <option value="Banque">Banque</option>
                                            <option value="OD">Opérations Diverses</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label">Devise</label>
                                        <select
                                            className="form-select"
                                            name="currency"
                                            value={form.currency}
                                            onChange={handleChange}
                                        >
                                            <option value="EUR">EUR</option>
                                            <option value="USD">USD</option>
                                            <option value="XOF">XOF</option>
                                        </select>
                                    </div>

                                    <div className="col-md-12">
                                        <label className="form-label">Description</label>
                                        <textarea
                                            className="form-control"
                                            name="description"
                                            rows="2"
                                            value={form.description}
                                            onChange={handleChange}
                                            placeholder="Notes ou informations complémentaires"
                                        />
                                    </div>

                                    <div className="col-md-6 form-check mt-3">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="isDefault"
                                            checked={form.isDefault}
                                            onChange={handleChange}
                                            id="defaultCheck"
                                        />
                                        <label className="form-check-label" htmlFor="defaultCheck">
                                            Utiliser comme journal par défaut
                                        </label>
                                    </div>

                                    <div className="col-md-6 d-flex align-items-center">
                                        <label className="form-check-label me-2">Clôturé ?</label>
                                        <div className="form-check form-switch">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="closed"
                                                checked={form.closed}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer border-top">
                                <button type="button" className="btn btn-outline-secondary" onClick={onClose}>
                                    Annuler
                                </button>
                                <button type="submit" className="btn btn-primary">
                                    Enregistrer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>,
        document.body
    );


};

export default CreateJournalModal;
