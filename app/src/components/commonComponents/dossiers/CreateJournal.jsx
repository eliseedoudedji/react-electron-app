import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import './CreateJournal.css';

const CreateJournalModal = ({ show, onClose, initialData }) => {
    const [form, setForm] = useState(initialData || {
        title: "",
        code: "",
        type: "Ventes",
        description: "",
        currency: "EUR",
        isDefault: false,
        closed: false,
    });

    useEffect(() => {
        if (initialData) {
            setForm(initialData);
        }
    }, [initialData]);

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        const handleEscKey = (e) => {
            if (e.key === 'Escape' && show) {
                onClose();
            }
        };

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

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!show) return null;

    return createPortal(
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1050
        }} onClick={handleBackdropClick}>
            <div style={{
                backgroundColor: 'white',
                borderRadius: '0.5rem',
                boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
                width: '90%',
                maxWidth: '800px',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                zIndex: 1051
            }} onClick={e => e.stopPropagation()}>
                <div style={{
                    padding: '1rem',
                    borderBottom: '1px solid #dee2e6'
                }}>
                    <h5 style={{ margin: 0, fontWeight: 'bold' }}>Créer un nouveau journal</h5>
                    <button 
                        type="button" 
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            right: '1rem',
                            top: '1rem',
                            background: 'none',
                            border: 'none',
                            fontSize: '1.5rem',
                            cursor: 'pointer'
                        }}
                    >
                        ×
                    </button>
                </div>
                <form onSubmit={handleSubmit} style={{ padding: '1rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Intitulé du journal</label>
                            <input
                                type="text"
                                style={{
                                    width: '100%',
                                    padding: '0.375rem 0.75rem',
                                    border: '1px solid #ced4da',
                                    borderRadius: '0.25rem'
                                }}
                                name="title"
                                required
                                value={form.title}
                                onChange={handleChange}
                                placeholder="ex : Journal des ventes"
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Code</label>
                            <input
                                type="text"
                                style={{
                                    width: '100%',
                                    padding: '0.375rem 0.75rem',
                                    border: '1px solid #ced4da',
                                    borderRadius: '0.25rem'
                                }}
                                name="code"
                                required
                                value={form.code}
                                onChange={handleChange}
                                placeholder="ex : VTE"
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Type de journal</label>
                            <select
                                style={{
                                    width: '100%',
                                    padding: '0.375rem 0.75rem',
                                    border: '1px solid #ced4da',
                                    borderRadius: '0.25rem'
                                }}
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
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Devise</label>
                            <select
                                style={{
                                    width: '100%',
                                    padding: '0.375rem 0.75rem',
                                    border: '1px solid #ced4da',
                                    borderRadius: '0.25rem'
                                }}
                                name="currency"
                                value={form.currency}
                                onChange={handleChange}
                            >
                                <option value="EUR">EUR</option>
                                <option value="USD">USD</option>
                                <option value="XOF">XOF</option>
                            </select>
                        </div>
                        <div style={{ gridColumn: '1 / -1' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Description</label>
                            <textarea
                                style={{
                                    width: '100%',
                                    padding: '0.375rem 0.75rem',
                                    border: '1px solid #ced4da',
                                    borderRadius: '0.25rem',
                                    minHeight: '100px'
                                }}
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                placeholder="Notes ou informations complémentaires"
                            />
                        </div>
                        <div>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <input
                                    type="checkbox"
                                    name="isDefault"
                                    checked={form.isDefault}
                                    onChange={handleChange}
                                />
                                Utiliser comme journal par défaut
                            </label>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <label>Clôturé ?</label>
                            <input
                                type="checkbox"
                                name="closed"
                                checked={form.closed}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div style={{
                        marginTop: '1rem',
                        paddingTop: '1rem',
                        borderTop: '1px solid #dee2e6',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '0.5rem'
                    }}>
                        <button
                            type="button"
                            onClick={onClose}
                            style={{
                                padding: '0.375rem 0.75rem',
                                border: '1px solid #6c757d',
                                borderRadius: '0.25rem',
                                backgroundColor: 'transparent',
                                color: '#6c757d'
                            }}
                        >
                            Annuler
                        </button>
                        <button
                            type="submit"
                            style={{
                                padding: '0.375rem 0.75rem',
                                border: '1px solid #0d6efd',
                                borderRadius: '0.25rem',
                                backgroundColor: '#0d6efd',
                                color: 'white'
                            }}
                        >
                            Enregistrer
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.body
    );
};

export default CreateJournalModal;
