import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { toast } from 'react-toastify';

const CreateCompanyModal = ({ show, onClose }) => {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [form, setForm] = useState({
        name: "",
        sigle: "",
        ifu: "",
        codeActivite: "",
        email: "",
        adresse: "",
        registre: "",
        contact: "",
        activite: "",
        date: "",
        autres: "",
        dirigeant: "",
        nationaliteDirigeant: "",
        capital: "",
        employes: "",
        remarques: ""
    });

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [show, onClose]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await fetch('https://talisman-pro-apis.onrender.com/api/v1/societies/create/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: form.name,
                    sigle: form.sigle,
                    ifu: form.ifu,
                    codeActivite: form.codeActivite,
                    email: form.email,
                    adresse: form.adresse,
                    registre: form.registre,
                    contact: form.contact,
                    activite: form.activite,
                    dateCreation: form.date,
                    autres: form.autres,
                    dirigeant: form.dirigeant,
                    nationaliteDirigeant: form.nationaliteDirigeant,
                    capital: form.capital,
                    employes: form.employes,
                    remarques: form.remarques
                })
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la création de la société');
            }

            const data = await response.json();
            toast.success('Société créée avec succès !', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            onClose();
        } catch (err) {
            toast.error(err.message || 'Une erreur est survenue lors de la création de la société', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!show) return null;

    return createPortal(
        <div onClick={handleBackdropClick} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1050
        }}>
            <div onClick={e => e.stopPropagation()} style={{
                backgroundColor: '#fff',
                borderRadius: '0.5rem',
                boxShadow: '0 0.5rem 1rem rgba(0,0,0,0.15)',
                width: '90%',
                maxWidth: '900px',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative'
            }}>
                <div style={{ padding: '1rem', borderBottom: '1px solid #dee2e6' }}>
                    <h5 style={{ margin: 0, fontWeight: 'bold' }}>Nouvelle société</h5>
                    <button onClick={onClose} style={{
                        position: 'absolute',
                        right: '1rem',
                        top: '1rem',
                        background: 'none',
                        border: 'none',
                        fontSize: '1.5rem',
                        cursor: 'pointer'
                    }}>×</button>
                </div>
                <form onSubmit={handleSubmit} style={{ padding: '1rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        {step === 1 && (
                            <>
                                <div>
                                    <label>Nom</label>
                                    <input name="name" type="text" value={form.name} onChange={handleChange} required style={inputStyle} />
                                </div>
                                <div>
                                    <label>Adresse</label>
                                    <input name="adresse" type="text" value={form.adresse} onChange={handleChange} required style={inputStyle} />
                                </div>
                                <div>
                                    <label>Sigle</label>
                                    <input name="sigle" type="text" value={form.sigle} onChange={handleChange} required style={inputStyle} />
                                </div>
                                <div>
                                    <label>Numéro du registre</label>
                                    <input name="registre" type="text" value={form.registre} onChange={handleChange} style={inputStyle} />
                                </div>
                                <div>
                                    <label>IFU</label>
                                    <input name="ifu" type="text" value={form.ifu} onChange={handleChange} required style={inputStyle} />
                                </div>
                                <div>
                                    <label>Contact</label>
                                    <input name="contact" type="text" value={form.contact} onChange={handleChange} required style={inputStyle} />
                                </div>
                                <div>
                                    <label>Code d'activité principale</label>
                                    <input name="codeActivite" type="text" value={form.codeActivite} onChange={handleChange} style={inputStyle} />
                                </div>
                                <div>
                                    <label>Activité principale</label>
                                    <input name="activite" type="text" value={form.activite} onChange={handleChange} style={inputStyle} />
                                </div>
                                <div>
                                    <label>Email</label>
                                    <input name="email" type="email" value={form.email} onChange={handleChange} required style={inputStyle} />
                                </div>
                                <div>
                                    <label>Date d'enregistrement</label>
                                    <input name="date" type="date" value={form.date} onChange={handleChange} required style={inputStyle} />
                                </div>

                                <div style={{ gridColumn: '1 / -1' }}>
                                    <label>Autres informations (Optionnel)</label>
                                    <textarea
                                        name="autres"
                                        value={form.autres}
                                        onChange={handleChange}
                                        placeholder="Taper votre adresse ici ..."
                                        style={{
                                            width: '100%',
                                            padding: '0.375rem 0.75rem',
                                            border: '1px solid #ced4da',
                                            borderRadius: '0.25rem',
                                            minHeight: '100px'
                                        }}
                                    />
                                </div>
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <div>
                                    <label>Nom du dirigeant principal</label>
                                    <input
                                        name="dirigeant"
                                        type="text"
                                        value={form.dirigeant}
                                        onChange={handleChange}
                                        style={inputStyle}
                                    />
                                </div>
                                <div>
                                    <label>Nationalité du dirigeant</label>
                                    <input
                                        name="nationaliteDirigeant"
                                        type="text"
                                        value={form.nationaliteDirigeant}
                                        onChange={handleChange}
                                        style={inputStyle}
                                    />
                                </div>
                                <div>
                                    <label>Capital social</label>
                                    <input
                                        name="capital"
                                        type="number"
                                        value={form.capital}
                                        onChange={handleChange}
                                        style={inputStyle}
                                    />
                                </div>
                                <div>
                                    <label>Nombre d'employés</label>
                                    <input
                                        name="employes"
                                        type="number"
                                        value={form.employes}
                                        onChange={handleChange}
                                        style={inputStyle}
                                    />
                                </div>
                                <div style={{ gridColumn: '1 / -1' }}>
                                    <label>Observations ou remarques</label>
                                    <textarea
                                        name="remarques"
                                        value={form.remarques}
                                        onChange={handleChange}
                                        placeholder="Remarques additionnelles sur la société"
                                        style={{
                                            width: '100%',
                                            padding: '0.375rem 0.75rem',
                                            border: '1px solid #ced4da',
                                            borderRadius: '0.25rem',
                                            minHeight: '80px'
                                        }}
                                    />
                                </div>
                            </>
                        )}
                    </div>

                    {error && (
                        <div style={{ color: 'red', marginTop: '1rem' }}>
                            {error}
                        </div>
                    )}

                    <div style={{
                        marginTop: '1rem',
                        paddingTop: '1rem',
                        borderTop: '1px solid #dee2e6',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '0.5rem'
                    }}>
                        <button type="button" onClick={onClose} style={cancelButtonStyle}>Annuler</button>
                        {step === 1 ? (
                            <button type="button" onClick={(e) => {
                                e.preventDefault();
                                setStep(2);
                            }} style={primaryButtonStyle}>Suivant</button>
                        ) : (
                            <button type="submit" disabled={loading} style={{
                                ...primaryButtonStyle,
                                opacity: loading ? 0.7 : 1
                            }}>
                                {loading ? 'Création...' : 'Créer'}
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>,
        document.body
    );
};

const inputStyle = {
    width: '100%',
    padding: '0.375rem 0.75rem',
    border: '1px solid #ced4da',
    borderRadius: '0.25rem'
};

const primaryButtonStyle = {
    padding: '0.375rem 0.75rem',
    border: '1px solid #0d6efd',
    borderRadius: '0.25rem',
    backgroundColor: '#0d6efd',
    color: 'white'
};

const cancelButtonStyle = {
    padding: '0.375rem 0.75rem',
    border: '1px solid #6c757d',
    borderRadius: '0.25rem',
    backgroundColor: 'transparent',
    color: '#6c757d'
};

export default CreateCompanyModal;
