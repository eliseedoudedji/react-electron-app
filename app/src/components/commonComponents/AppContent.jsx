import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import FoldersTable from './dossiers/FoldersTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFolder,
    faPlusCircle,
    faKeyboard,
    faLink,
    faUniversity,
    faPrint,
    faBook,
    faSearch,
    faLock,
    faSave,
    faFileExport,
    faCalendar,
    faEllipsisH,
    faEye,
    faEdit,
    faArchive,
    faTrash
} from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import CreateSociety from '../commonComponents/society/CreateSociety';
import MenuTop from './topMenu/MenuTop';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const styles = `
    .menu-item {
        transition: all 0.2s ease;
        padding: 5px 10px;
        border-radius: 4px;
    }
    .menu-item:hover {
        background-color: rgb(110, 110, 110);
    }
    .menu-item a {
        color: inherit;
        text-decoration: none;
    }
    .menu-item:hover a {
        color: white;
    }
`;

export default function AppContent() {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showSocietePopup, setShowSocietePopup] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);
    const [societies, setSocieties] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [form, setForm] = useState({
        intitule: 'SYSCOHADA Révisé',
        societyId: '',
        notes: ''
    });

    // Vérifier la connexion au backend
    useEffect(() => {
        const checkBackendConnection = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('Non authentifié');
                }

                const response = await fetch('https://talisman-pro-apis.onrender.com/api/v1/societies/', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    throw new Error('Le serveur backend n\'est pas accessible');
                }
                toast.success('Connexion au serveur établie', {
                    position: "top-right",
                    autoClose: 3000,
                });
            } catch (err) {
                toast.error(err.message === 'Non authentifié' ?
                    'Veuillez vous connecter pour accéder à cette fonctionnalité' :
                    'Impossible de se connecter au serveur backend', {
                    position: "top-right",
                    autoClose: 5000,
                });
                console.error('Erreur de connexion:', err);
            }
        };

        checkBackendConnection();
    }, []);

    const handleClick2 = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error('Veuillez vous connecter pour accéder à cette fonctionnalité', {
                    position: "top-right",
                    autoClose: 5000,
                });
                return;
            }

            setLoading(true);
            const response = await fetch('https://talisman-pro-apis.onrender.com/api/v1/societies/', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des sociétés');
            }
            const data = await response.json();
            console.log('Données reçues:', data); // Debug log

            // Vérifier si data est un tableau ou si les sociétés sont dans une propriété
            const societiesList = Array.isArray(data) ? data : (data.societies || data.results || []);
            setSocieties(societiesList);

            if (!societiesList || societiesList.length === 0) {
                toast.info('Veuillez d\'abord créer une société avant de créer un dossier', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                setShowSocietePopup(true);
                return;
            }

            setShowModal2(true);
        } catch (err) {
            console.error('Erreur lors de la récupération des sociétés:', err);
            toast.error(err.message, {
                position: "top-right",
                autoClose: 5000,
            });
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const closeModal2 = () => {
        setShowModal2(false);
        setError(null);
        // Réinitialiser le formulaire
        setForm({
            intitule: 'SYSCOHADA Révisé',
            societyId: '',
            notes: ''
        });
    };

    const handleRowClick1 = (row) => {
        setSelectedRow(row);
        setShowModal1(true);
    };

    const closeModal1 = () => {
        setShowModal1(false);
        setSelectedRow(null);
    };

    const openSocietePopup = () => {
        setShowSocietePopup(true);
    };

    const closeSocietePopup = () => {
        setShowSocietePopup(false);
    };

    const getSublistData = (code) => [
        {
            name: 'Voir les détails',
            url: `/details/${code}`,
            icon: 'fa fa-eye'
        },
        {
            name: 'Modifier',
            url: `/edit/${code}`,
            icon: 'fa fa-edit'
        },
        {
            name: 'Historique',
            url: `/history/${code}`,
            icon: 'fa fa-history'
        },
        {
            name: 'Exporter',
            url: `/export/${code}`,
            icon: 'fa fa-download'
        }
    ];

    const sublistData = selectedRow ? getSublistData(selectedRow) : [];
    const [showModal, setShowModal] = useState(false);

    const formatDate = (date) => {
        return date.toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const handleRowClick = () => {
        setSelectedRow({
            title: "",
            code: "",
            type: "Ventes",
            description: "",
            currency: "EUR",
            isDefault: false,
            closed: false
        });
        setShowModal(true);
    };
    // Fermer le modal
    const closeModal = () => {
        setShowModal(false);
        setSelectedRow(null);
    };
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal2();
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error('Veuillez vous connecter pour accéder à cette fonctionnalité', {
                    position: "top-right",
                    autoClose: 5000,
                });
                return;
            }

            setLoading(true);
            console.log('Envoi des données au backend:', form);

            const response = await fetch('https://talisman-pro-apis.onrender.com/api/v1/folders/create/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    intitule: form.intitule,
                    societyId: form.societyId,
                    notes: form.notes
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Erreur lors de la création du dossier');
            }

            const data = await response.json();
            console.log('Réponse du serveur:', data);

            toast.success('Dossier créé avec succès !', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            closeModal2();
        } catch (err) {
            console.error('Erreur lors de la création:', err);
            toast.error(err.message || 'Une erreur est survenue lors de la création du dossier', {
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
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
        console.log('Champ modifié:', name, value); // Debug log
    };



    return (

        <div>
            <ToastContainer />
            {showModal && <CreateSociety show={showModal} onClose={closeModal} initialData={selectedRow} />}
            <MenuTop />
            <div style={{ backgroundColor: "white", marginTop: "0px", paddingBottom: "2px", marginBottom: "20px" }}>




                <div className="d-sm-flex mb-4 justify-content-between" style={{ marginLeft: "40px", marginRight: "40px" }}>
                    <div className="d-flex gap-2 mt-1 mt-sm-0">

                        <div>
                            <h2>Logo</h2>
                        </div>
                    </div>
                    <div>

                        <div className="pageheader-btn">




                            <div className="d-flex me-2 align-items-center justify-content-center bg-dark  pe-3 ps-3  py-2" style={{ width: "150.24px", borderRadius: "4px" }}>

                                <Link className="text-fixed-white border-0 ps-2 me-2" to="#" style={{ whiteSpace: "nowrap", fontSize: "11px" }} onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    handleRowClick();
                                }}>
                                    Creer une société
                                </Link>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" >

                <div className="row container-fluid">
                    <div className="col-xl-12">
                        <div className="card custom-card">
                            <div className="card-body">
                                <div className="d-sm-flex mb-4 justify-content-between">
                                    <div className="d-flex gap-2 mt-1 mt-sm-0">
                                        <div className="input-group input-group-sm" style={{ maxWidth: '250px' }}>
                                            <span className="input-group-text bg-primary text-white border-0">
                                                <i className="ri-search-line"></i>
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control border-0"
                                                placeholder="Rechercher une société..."
                                                onChange={(e) => console.log(e.target.value)} 
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="pageheader-btn">
                                            <nav>
                                                <div className="breadcrumb mb-0">
                                                    <div className="d-flex" style={{ flexWrap: "nowrap", overflowX: "auto" }}>
                                                        <div className="d-flex me-4 align-items-center justify-content-center bg-danger ps-3 pe-3  py-1" style={{ width: "150.24px", borderRadius: "4px" }}>
                                                            <div className="-text text-muted text-fixed-white me-0 border-0 pe-0">
                                                                <i className="fa fa-trash mt-1" />
                                                            </div>
                                                            <Link className="text-fixed-white border-0 ps-2" to="#" style={{ whiteSpace: "nowrap", fontSize: "11px" }}>
                                                                Supprimer
                                                            </Link>
                                                        </div>
                                                        <div className="d-flex me-4 align-items-center justify-content-center bg-primary pe-3 ps-3  py-1" style={{ width: "150.24px", borderRadius: "4px" }}>
                                                            <div className="-text text-muted bg-primary text-fixed-white me-0 border-0 pe-0">
                                                                <i className="fa fa-clone mt-1" />
                                                            </div>
                                                            <Link className="text-fixed-white border-0 ps-2" to="#" style={{ whiteSpace: "nowrap", fontSize: "11px" }}>
                                                                Dupliquer
                                                            </Link>
                                                        </div>
                                                        <div className="d-flex me-2 align-items-center justify-content-center bg-success pe-3 ps-3  " style={{ cursor: "pointer", borderRadius: "4px" }}>
                                                            <div className="-text text-muted text-fixed-white me-0 border-0 pe-0">
                                                                <i className="fa fa-plus mt-1" />
                                                            </div>
                                                            <span className="text-fixed-white border-0 ps-2 me-2" onClick={() => handleClick2()} style={{ whiteSpace: "nowrap", fontSize: "11px", cursor: "pointer" }}>
                                                                Nouveau dossier
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-bordered text-nowrap mb-0 text-center" id="projectSummary">
                                        <thead>
                                            <tr >
                                                <th className="wd-5p tx-center  bg-primary text-light">Numéro</th>
                                                <th className="wd-25p  bg-primary text-light">Référentiel</th>
                                                <th className="text-center  bg-primary text-light">Société</th>
                                                <th className="text-center  bg-primary text-light">Dossiers/société</th>
                                                <th className=" bg-primary text-light">Statut</th>
                                                <th className=" bg-primary text-light">Dernière modification</th>
                                                <th className=" bg-primary text-light">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="tx-center">1</td>
                                                <td>
                                                    <span className="tx-14">SYSCOHADA révisé</span>
                                                </td>
                                                <td>
                                                    <div className="text-center">EPITECH</div>
                                                </td>
                                                <td className="text-center" >
                                                    <span className="badge badge-sm rounded-pill bg-info-transparent text-info">
                                                        05
                                                    </span>
                                                </td>

                                                <td className="text-center">
                                                    <span className="badge badge-sm rounded-pill bg-info-transparent text-success">
                                                        Active
                                                    </span>
                                                </td>

                                                <td className="text-center">20-04-2022 à 14:30</td>
                                                <td className="text-center" onClick={() => handleRowClick1()} style={{ textDecoration: "underline", color: 'blue', cursor: "pointer" }}>
                                                    Consulter
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="tx-center">2</td>
                                                <td>
                                                    <span className="tx-14">SYSCOHADA révisé</span>
                                                </td>
                                                <td>
                                                    <div className="text-center">Design SA</div>
                                                </td>
                                                <td className="text-center" >
                                                    <span className="badge badge-sm rounded-pill bg-info-transparent text-info">
                                                        01
                                                    </span>
                                                </td>

                                                <td className="text-center">
                                                    <span className="badge badge-sm rounded-pill bg-danger-transparent text-danger">
                                                        Accès interdit
                                                    </span>
                                                </td>

                                                <td className="text-center">20-04-2022 à 14:30</td>
                                                <td className="text-center" onClick={() => handleRowClick1()} style={{ textDecoration: "underline", color: 'blue', cursor: "pointer" }}>



                                                    Consulter
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex align-items-center">
                                    <div>
                                        Showing 5 Entries{" "}
                                        <i className="bi bi-arrow-right ms-2 fw-semibold" />
                                    </div>
                                    <div className="ms-auto">
                                        <nav aria-label="Page navigation" className="pagination-style-4">
                                            <ul className="pagination mb-0">
                                                <li className="page-item disabled">
                                                    <a className="page-link" href="#">
                                                        Prev
                                                    </a>
                                                </li>
                                                <li className="page-item active">
                                                    <a className="page-link" href="#">
                                                        1
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">
                                                        2
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link text-primary" href="#">
                                                        next
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {showModal1 && (
                    <div
                        className="modal d-block"
                        tabIndex="-1"
                        style={{
                            backgroundColor: "rgba(0,0,0,0.5)",
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: "flex",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            paddingTop: "20px"
                        }}
                    >
                        <div className="modal-dialog" style={{
                            minHeight: '100%',
                            minWidth: '90vw',
                            margin: '0 auto',
                            display: 'flex',
                            alignItems: 'flex-start'
                        }}>
                            <div className="modal-content">
                                <div className="modal-header d-flex justify-content-between">
                                    <h5 className="modal-title">Societé {selectedRow}</h5>
                                    <h5 className='me-3'>Référentiel : SYSCOHADA révisé</h5>

                                </div>
                                <div className="modal-body">
                                    <FoldersTable />
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={closeModal1}
                                    >
                                        Fermer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {showModal2 && (
                    <>
                        <div
                            style={{
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
                            }}
                            onClick={handleBackdropClick}
                        >
                            <div
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
                                    width: '90%',
                                    maxWidth: '800px',
                                    maxHeight: '90vh',
                                    overflowY: 'auto',
                                    position: 'relative',
                                    zIndex: 1051
                                }}
                                onClick={e => e.stopPropagation()}
                            >
                                <div style={{
                                    padding: '1rem',
                                    borderBottom: '1px solid #dee2e6',
                                    position: 'relative'
                                }}>
                                    <h5 style={{ margin: 0, fontWeight: 'bold' }}>Créer un nouveau dossier</h5>
                                    <button
                                        type="button"
                                        onClick={closeModal2}
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
                                        {/* Référentiel */}
                                        <div style={{ gridColumn: '1 / -1' }}>
                                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Référentiel</label>
                                            <select
                                                name="intitule"
                                                value={form.intitule}
                                                onChange={handleChange}
                                                style={{
                                                    width: '100%',
                                                    padding: '0.375rem 0.75rem',
                                                    border: '1px solid #ced4da',
                                                    borderRadius: '0.25rem'
                                                }}
                                            >
                                                <option value="SYSCOHADA Révisé">SYSCOHADA Révisé</option>
                                                <option value="IFRS">IFRS</option>
                                            </select>
                                        </div>

                                        {/* Société */}
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', gridColumn: '1 / -1' }}>
                                            <div style={{ flex: 1 }}>
                                                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Société</label>
                                                <select
                                                    name="societyId"
                                                    value={form.societyId}
                                                    onChange={handleChange}
                                                    style={{
                                                        width: '100%',
                                                        padding: '0.375rem 0.75rem',
                                                        border: '1px solid #ced4da',
                                                        borderRadius: '0.25rem'
                                                    }}
                                                >
                                                    <option value="">Sélectionnez une société</option>
                                                    {Array.isArray(societies) && societies.map((society) => (
                                                        <option key={society.id} value={society.id}>
                                                            {society.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={openSocietePopup}
                                                style={{
                                                    marginTop: '1.5rem',
                                                    padding: '0.375rem 0.75rem',
                                                    backgroundColor: '#0d6efd',
                                                    border: '1px solid #0d6efd',
                                                    borderRadius: '0.25rem',
                                                    color: 'white',
                                                    height: '38px',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                +
                                            </button>
                                        </div>

                                        {/* Note */}
                                        <div style={{ gridColumn: '1 / -1' }}>
                                            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Note</label>
                                            <textarea
                                                name="notes"
                                                value={form.notes}
                                                onChange={handleChange}
                                                placeholder="Ajoutez une note sur le dossier..."
                                                style={{
                                                    width: '100%',
                                                    padding: '0.375rem 0.75rem',
                                                    border: '1px solid #ced4da',
                                                    borderRadius: '0.25rem',
                                                    minHeight: '100px'
                                                }}
                                            />
                                        </div>
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
                                        <button
                                            type="button"
                                            onClick={closeModal2}
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
                                            disabled={loading}
                                            style={{
                                                padding: '0.375rem 0.75rem',
                                                border: '1px solid #0d6efd',
                                                borderRadius: '0.25rem',
                                                backgroundColor: '#0d6efd',
                                                color: 'white',
                                                opacity: loading ? 0.7 : 1
                                            }}
                                        >
                                            {loading ? 'Enregistrement...' : 'Enregistrer'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>



                        {/* Popup nouvelle société */}
                        {showSocietePopup && (
                            <div
                                style={{

                                }}
                            >
                                <div
                                    style={{
                                        background: "white",
                                        padding: "2rem",
                                        borderRadius: 8,
                                        minWidth: 300,
                                        textAlign: "center"
                                    }}
                                >
                                    <CreateSociety
                                        show={showSocietePopup}
                                        onClose={closeSocietePopup}
                                        initialData={selectedRow}
                                    />
                                </div>
                            </div>
                        )}
                    </>

                )}
            </div>
        </div>
    );
}
