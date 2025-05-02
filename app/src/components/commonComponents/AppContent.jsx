import React, { useState } from 'react';
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
    faCalendar
} from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

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

    const handleClick2 = () => {
        setShowModal2(true);
    };

    const closeModal2 = () => {
        setShowModal2(false);
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

    const formatDate = (date) => {
        return date.toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    return (
        <div>
            <div style={{ backgroundColor: "white", marginTop: "0px", paddingBottom: "2px", marginBottom: "20px" }}>
                <div className="d-md-flex d-block align-items-center justify-content-between page-header-breadcrumb" style={{ marginLeft: "20px", marginTop: "5px" }}>
                    <div>
                        <nav>
                            <ol className="breadcrumb mb-1 mb-md-0">
                                <li className="me-3">
                                    <a href="#">Fichier</a>
                                </li>
                                <li className="me-3">
                                    <a href="#">Définition</a>
                                </li>
                                <li className="me-3">
                                    <a href="#">Saisir</a>
                                </li>
                                <li className="me-3">
                                    <a href="#">Editions</a>
                                </li> <li className="me-3">
                                    <a href="#">Outils</a>
                                </li> <li className="me-3">
                                    <a href="#">Paramètres</a>
                                </li>
                                <li className="me-3">
                                    <a href="#">Aides</a>
                                </li>

                            </ol>
                        </nav>
                    </div>

                </div>

                <div className="d-md-flex d-block align-items-center justify-content-between page-header-breadcrumb" style={{ marginLeft: "40px", marginTop: "10px" }}>
                    <div>
                        <nav>
                            <ol className="breadcrumb mb-1 mb-md-0">
                                <li className="me-3 menu-item">
                                    <FontAwesomeIcon icon={faFolder} className="me-1" />
                                    <a href="#" className="small">Dossier</a>
                                </li>
                                <li className="me-3 menu-item">
                                    <FontAwesomeIcon icon={faPlusCircle} className="me-1" />
                                    <a href="#" className="small">Nouvelle écriture</a>
                                </li>
                                <li className="me-3 menu-item">
                                    <FontAwesomeIcon icon={faKeyboard} className="me-1" />
                                    <a href="#" className="small">Saisir rapide</a>
                                </li>
                                <li className="me-3 menu-item">
                                    <FontAwesomeIcon icon={faLink} className="me-1" />
                                    <a href="#" className="small">Lettrage</a>
                                </li>
                                <li className="me-3 menu-item">
                                    <FontAwesomeIcon icon={faUniversity} className="me-1" />
                                    <a href="#" className="small">Rapprochement bancaire</a>
                                </li>
                                <li className="me-3 menu-item">
                                    <FontAwesomeIcon icon={faPrint} className="me-1" />
                                    <a href="#" className="small">Impression journal</a>
                                </li>
                                <li className="me-3 menu-item">
                                    <FontAwesomeIcon icon={faBook} className="me-1" />
                                    <a href="#" className="small">Grand livre</a>
                                </li>
                                <li className="me-3 menu-item">
                                    <FontAwesomeIcon icon={faSearch} className="me-1" />
                                    <a href="#" className="small">Recherche écriture</a>
                                </li>
                                <li className="me-3 menu-item">
                                    <FontAwesomeIcon icon={faLock} className="me-1" />
                                    <a href="#" className="small">Clôturer période</a>
                                </li>
                                <li className="me-3 menu-item">
                                    <FontAwesomeIcon icon={faSave} className="me-1" />
                                    <a href="#" className="small">Sauvegarde rapide</a>
                                </li>
                                <li className="me-3 menu-item">
                                    <FontAwesomeIcon icon={faFileExport} className="me-1" />
                                    <a href="#" className="small">Exporter PDF / Excel</a>
                                </li>
                            </ol>
                        </nav>
                    </div>

                </div>

                <div className="d-sm-flex mb-4 justify-content-between" style={{ marginLeft: "40px", marginTop: "40px", marginRight: "40px" }}>
                    <div className="d-flex gap-2 mt-1 mt-sm-0">

                        <div>
                            <h2>Logo</h2>
                        </div>
                    </div>
                    <div>

                        <div className="pageheader-btn">




                            <div className="d-flex me-2 align-items-center justify-content-center bg-dark  pe-3 ps-3 rounded py-2" style={{ width: "150.24px" }}>

                                <Link className="text-fixed-white border-0 ps-2 me-2" to="#" style={{ whiteSpace: "nowrap", fontSize: "11px" }}>
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

                                        <div className="dropdown">
                                            <a
                                                href="#"
                                                className="btn btn-primary btn-sm btn-wave waves-effect waves-light"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Tri par société
                                                <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block" />
                                            </a>
                                            <ul className="dropdown-menu" role="menu">
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        OA
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        UAC
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="#">
                                                        EPITECH
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="pageheader-btn">
                                            <nav>
                                                <div className="breadcrumb mb-0">
                                                    <div className="d-flex" style={{ flexWrap: "nowrap", overflowX: "auto" }}>
                                                        <div className="d-flex me-4 align-items-center justify-content-center bg-danger ps-3 pe-3 rounded py-1" style={{ width: "150.24px" }}>
                                                            <div className="-text text-muted text-fixed-white me-0 border-0 pe-0">
                                                                <i className="fa fa-trash mt-1" />
                                                            </div>
                                                            <Link className="text-fixed-white border-0 ps-2" to="#" style={{ whiteSpace: "nowrap", fontSize: "11px" }}>
                                                                Supprimer
                                                            </Link>
                                                        </div>
                                                        <div className="d-flex me-4 align-items-center justify-content-center bg-primary pe-3 ps-3 rounded py-1" style={{ width: "150.24px" }}>
                                                            <div className="-text text-muted bg-primary text-fixed-white me-0 border-0 pe-0">
                                                                <i className="fa fa-clone mt-1" />
                                                            </div>
                                                            <Link className="text-fixed-white border-0 ps-2" to="#" style={{ whiteSpace: "nowrap", fontSize: "11px" }}>
                                                                Dupliquer
                                                            </Link>
                                                        </div>
                                                        <div className="d-flex me-2 align-items-center justify-content-center bg-success pe-3 ps-3 rounded " style={{ cursor: "pointer" }}>
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
                                                <td className="text-center">
                                                    <div className="" onClick={() => handleRowClick1("EPITECH")}>
                                                        <span className='' style={{ textDecoration: "underline", color: "blue", cursor: "pointer" }}>Consulter</span>
                                                    </div>
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
                                                <td className="text-center">
                                                    <div className="" onClick={() => handleRowClick1("EPITECH")}>
                                                        <span className=' ' style={{ textDecoration: "underline", color: "blue", cursor: "pointer" }}>Consulter</span>
                                                    </div>
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
                            id="popup-overlay"
                            style={{
                                backgroundColor: "rgba(0,0,0,0.5)",
                                position: "fixed",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 1050
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    background: "white",
                                    borderRadius: 6,
                                    width: "60vw",
                                    height: "80vh",
                                    overflow: "hidden",
                                    position: "relative",
                                    margin: "0 auto"
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: "#2979ff",
                                        width: "20%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-end",
                                        alignItems: "center",
                                        padding: "1rem"
                                    }}
                                >
                                    <div
                                        style={{ marginBottom: "1rem", textAlign: "center", color: "white" }}
                                    >
                                        <div
                                            style={{
                                                backgroundColor: "white",
                                                borderRadius: "50%",
                                                width: 40,
                                                height: 40,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                marginBottom: 8
                                            }}
                                        >
                                            <span style={{ color: "#2979ff", fontWeight: "bold" }}>T</span>
                                        </div>
                                        <small>TalismanPro 0.0.1</small>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        width: "80%",
                                        padding: "2rem 3rem",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <div>
                                        <h4 style={{ color: "#1976d2", fontWeight: 600 }}>
                                            Créer un nouveau dossier
                                        </h4>
                                        <div style={{ marginTop: "2rem" }}>
                                            <label style={{ color: "#aaa", fontSize: "0.9rem" }}>
                                                Référentiel
                                            </label>
                                            <div style={{ borderBottom: "1px solid #ccc", position: "relative" }}>
                                                <select
                                                    style={{
                                                        width: "100%",
                                                        border: "none",
                                                        padding: "0.5rem 0",
                                                        fontSize: "1rem",
                                                        appearance: "none",
                                                        background: "transparent",
                                                        paddingRight: "2rem"
                                                    }}
                                                >
                                                    <option>SYSCOHADA Révisé</option>
                                                    <option>IFRS</option>
                                                </select>
                                                <span style={{
                                                    position: "absolute",
                                                    right: "0.5rem",
                                                    top: "50%",
                                                    transform: "translateY(-50%)",
                                                    pointerEvents: "none"
                                                }}>▼</span>
                                            </div>
                                        </div>
                                        <div style={{ marginTop: "2rem" }}>
                                            <label style={{ color: "#aaa", fontSize: "0.9rem" }}>Société</label>
                                            <div
                                                style={{
                                                    borderBottom: "1px solid #ccc",
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    position: "relative"
                                                }}
                                            >
                                                <select
                                                    style={{
                                                        border: "none",
                                                        flex: 1,
                                                        padding: "0.5rem 0",
                                                        fontSize: "1rem",
                                                        appearance: "none",
                                                        background: "transparent",
                                                        paddingRight: "2rem"
                                                    }}
                                                >
                                                    <option>CE2IG</option>
                                                    <option>Nouvelle société</option>
                                                </select>
                                                <span style={{
                                                    position: "absolute",
                                                    right: "2.5rem",
                                                    top: "50%",
                                                    transform: "translateY(-50%)",
                                                    pointerEvents: "none"
                                                }}>▼</span>
                                                <button
                                                    onClick={openSocietePopup}
                                                    style={{
                                                        backgroundColor: "#2979ff",
                                                        border: "none",
                                                        color: "white",
                                                        padding: "0.2rem 0.5rem",
                                                        borderRadius: 4,
                                                        marginLeft: "0.5rem",
                                                        cursor: "pointer"
                                                    }}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                marginTop: "2rem"
                                            }}
                                        >
                                            <div style={{ width: "48%" }}>
                                                <label style={{ color: "#aaa", fontSize: "0.9rem" }}>
                                                    Période de début
                                                </label>
                                                <div
                                                    style={{
                                                        borderBottom: "1px solid #ccc",
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                        position: "relative"
                                                    }}
                                                >
                                                    <input
                                                        type="text"
                                                        value={formatDate(startDate)}
                                                        readOnly
                                                        style={{
                                                            border: "none",
                                                            width: "100%",
                                                            padding: "0.5rem 0",
                                                            fontSize: "1rem",
                                                            background: "transparent"
                                                        }}
                                                        onClick={() => setShowStartDatePicker(true)}
                                                    />
                                                    <FontAwesomeIcon
                                                        icon={faCalendar}
                                                        style={{
                                                            position: "absolute",
                                                            right: "0.5rem",
                                                            top: "50%",
                                                            transform: "translateY(-50%)",
                                                            color: "#666",
                                                            cursor: "pointer"
                                                        }}
                                                        onClick={() => setShowStartDatePicker(true)}
                                                    />
                                                    {showStartDatePicker && (
                                                        <div style={{
                                                            position: "absolute",
                                                            top: "100%",
                                                            left: 0,
                                                            zIndex: 1000,
                                                            background: "white",
                                                            border: "1px solid #ccc",
                                                            borderRadius: "4px",
                                                            padding: "10px",
                                                            boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
                                                        }}>
                                                            <input
                                                                type="date"
                                                                value={startDate.toISOString().split('T')[0]}
                                                                onChange={(e) => {
                                                                    setStartDate(new Date(e.target.value));
                                                                    setShowStartDatePicker(false);
                                                                }}
                                                                style={{
                                                                    border: "1px solid #ccc",
                                                                    padding: "5px",
                                                                    borderRadius: "4px"
                                                                }}
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div style={{ width: "48%" }}>
                                                <label style={{ color: "#aaa", fontSize: "0.9rem" }}>
                                                    Période de fin
                                                </label>
                                                <div
                                                    style={{
                                                        borderBottom: "1px solid #ccc",
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                        position: "relative"
                                                    }}
                                                >
                                                    <input
                                                        type="text"
                                                        value={formatDate(endDate)}
                                                        readOnly
                                                        style={{
                                                            border: "none",
                                                            width: "100%",
                                                            padding: "0.5rem 0",
                                                            fontSize: "1rem",
                                                            background: "transparent"
                                                        }}
                                                        onClick={() => setShowEndDatePicker(true)}
                                                    />
                                                    <FontAwesomeIcon
                                                        icon={faCalendar}
                                                        style={{
                                                            position: "absolute",
                                                            right: "0.5rem",
                                                            top: "50%",
                                                            transform: "translateY(-50%)",
                                                            color: "#666",
                                                            cursor: "pointer"
                                                        }}
                                                        onClick={() => setShowEndDatePicker(true)}
                                                    />
                                                    {showEndDatePicker && (
                                                        <div style={{
                                                            position: "absolute",
                                                            top: "100%",
                                                            left: 0,
                                                            zIndex: 1000,
                                                            background: "white",
                                                            border: "1px solid #ccc",
                                                            borderRadius: "4px",
                                                            padding: "10px",
                                                            boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
                                                        }}>
                                                            <input
                                                                type="date"
                                                                value={endDate.toISOString().split('T')[0]}
                                                                onChange={(e) => {
                                                                    setEndDate(new Date(e.target.value));
                                                                    setShowEndDatePicker(false);
                                                                }}
                                                                style={{
                                                                    border: "1px solid #ccc",
                                                                    padding: "5px",
                                                                    borderRadius: "4px"
                                                                }}
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            borderTop: "1px solid #ccc",
                                            paddingTop: "1rem",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            gap: "1rem"
                                        }}
                                    >
                                        <button
                                            style={{
                                                flex: 1,
                                                backgroundColor: "#4caf50",
                                                color: "white",
                                                border: "none",
                                                padding: "0.75rem 0",
                                                borderRadius: 4
                                            }}
                                        >
                                            Valider
                                        </button>
                                        <button
                                            onClick={closeModal2}
                                            style={{
                                                flex: 1,
                                                backgroundColor: "#f44336",
                                                color: "white",
                                                border: "none",
                                                padding: "0.75rem 0",
                                                borderRadius: 4,
                                                cursor: "pointer"
                                            }}
                                        >
                                            Annuler
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {showSocietePopup && (
                            <div
                                style={{
                                    position: "fixed",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: "rgba(0,0,0,0.5)",
                                    zIndex: 2000,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
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
                                    <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>
                                        Créer une nouvelle société ?
                                    </p>
                                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
                                        <button
                                            onClick={closeSocietePopup}
                                            style={{
                                                backgroundColor: "#f44336",
                                                border: "none",
                                                color: "white",
                                                padding: "0.5rem 1rem",
                                                borderRadius: 4,
                                                cursor: "pointer"
                                            }}
                                        >
                                            Fermer
                                        </button>
                                        <button
                                            onClick={() => {
                                                // Ajouter ici la logique pour créer une nouvelle société
                                                closeSocietePopup();
                                            }}
                                            style={{
                                                backgroundColor: "#4caf50",
                                                border: "none",
                                                color: "white",
                                                padding: "0.5rem 1rem",
                                                borderRadius: 4,
                                                cursor: "pointer"
                                            }}
                                        >
                                            Valider
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
