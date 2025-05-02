import React, { useState } from 'react'
import { Link } from "react-router-dom";
import CreateJournalModal from '../dossiers/CreateJournal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faHome, faFileAlt, faCog, faChartBar, faUsers, faBars, faChevronLeft, faBook, faFolderOpen, faTruck, faUserTie, faUser, faExchangeAlt, faList, faBolt, faBuilding, faMapMarkerAlt, faMapPin, faThLarge, faUserShield, faFileSignature } from '@fortawesome/free-solid-svg-icons';

export default function ExercicesTable() {
    // État pour contrôler l'affichage du modal et stocker l'élément sélectionné
    const [showModal, setShowModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    // Lorsque l'utilisateur clique sur une ligne, on enregistre l'élément et on affiche le modal
    const handleRowClick = () => {
        setSelectedRow();
        setShowModal(true);
    };

    // Fermer le modal
    const closeModal = () => {
        setShowModal(false);
        setSelectedRow(null);
    };

    return (
        <>
            {showModal && <CreateJournalModal show={showModal} onClose={closeModal} />}

            <div className="d-flex" style={{ minHeight: '100vh' }}>
                {/* Sidebar */}
                <div className="text-dark position-relative"
                    style={{
                        width: isSidebarCollapsed ? '60px' : '200px',
                        minHeight: '100vh',
                        backgroundColor: 'white',
                        transition: 'width 0.3s ease'
                    }}>
                    <div className="" style={{paddingLeft: "20px", paddingTop: "10px" }}>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            {!isSidebarCollapsed && <h6 className="text-center mb-0">Menu rapide</h6>}
                            <button
                                className="btn btn-link p-0"
                                onClick={toggleSidebar}
                                style={{ color: 'black' }}
                            >
                                <FontAwesomeIcon icon={isSidebarCollapsed ? faBars : faChevronLeft} />
                            </button>
                        </div>
                        <ul className="nav flex-column sidebar-menu">
                            <li className="nav-item mb-2">
                                <span className="fw-bold d-flex align-items-center">
                                    <FontAwesomeIcon icon={faBook} className="me-2" />
                                    {!isSidebarCollapsed && 'Plan comptable'}
                                </span>
                            </li>
                            <li className="nav-item mb-2">
                                <span className="fw-bold d-flex align-items-center">
                                    <FontAwesomeIcon icon={faFolderOpen} className="me-2" />
                                    {!isSidebarCollapsed && 'Comptes généraux'}
                                </span>
                            </li>
                            <li className="nav-item mb-2">
                                <span className="fw-bold d-flex align-items-center">
                                    <FontAwesomeIcon icon={faUsers} className="me-2" />
                                    {!isSidebarCollapsed && 'Comptes auxiliaires'}
                                </span>
                                {!isSidebarCollapsed && (
                                    <ul className="nav flex-column ms-4">
                                        <li className="nav-item d-flex align-items-center mb-1"><FontAwesomeIcon icon={faTruck} className="me-2" /><span>Fournisseurs</span></li>
                                        <li className="nav-item d-flex align-items-center mb-1"><FontAwesomeIcon icon={faUserTie} className="me-2" /><span>Clients</span></li>
                                        <li className="nav-item d-flex align-items-center mb-1"><FontAwesomeIcon icon={faUser} className="me-2" /><span>Personnel</span></li>
                                        <li className="nav-item d-flex align-items-center"><FontAwesomeIcon icon={faExchangeAlt} className="me-2" /><span>Débiteurs/Créditeurs divers</span></li>
                                    </ul>
                                )}
                            </li>
                            <li className="nav-item mb-2">
                                <span className="fw-bold d-flex align-items-center">
                                    <FontAwesomeIcon icon={faFileAlt} className="me-2" />
                                    {!isSidebarCollapsed && 'Journaux'}
                                </span>
                                {(!isSidebarCollapsed) ? (
                                    <ul className="nav flex-column ms-4">
                                        <li className="nav-item d-flex align-items-center mb-1"><FontAwesomeIcon icon={faList} className="me-2" /><span>Tous les journaux</span></li>
                                        <li className="nav-item">
                                            <span className="fw-bold d-flex align-items-center"><FontAwesomeIcon icon={faBolt} className="me-2" />Saisies rapides</span>
                                            <div className="d-flex flex-wrap gap-1 mt-1 ms-4" style={{maxWidth: '140px'}}>
                                                {['Jan.', 'Fév.', 'Mar.', 'Avr.', 'Mai.', 'Jui.', 'Juil.', 'Aoû.', 'Sep.', 'Oct.', 'Nov.', 'Déc.'].map((mois, idx) => (
                                                    <span key={idx} className="badge bg-light text-dark border text-center" style={{fontSize: '10px', minWidth: '32px'}}>{mois}</span>
                                                ))}
                                            </div>
                                        </li>
                                    </ul>
                                ) : (
                                    <div className="d-flex flex-column align-items-center mt-2">
                                       
                                        <div className="d-flex flex-column gap-1">
                                            {['Jan.', 'Fév.', 'Mar.', 'Avr.', 'Mai.', 'Jui.', 'Juil.', 'Aoû.', 'Sep.', 'Oct.', 'Nov.', 'Déc.'].map((mois, idx) => (
                                                <span key={idx} className="badge bg-light text-dark border text-center" style={{fontSize: '10px', minWidth: '32px', marginBottom: '2px'}}>{mois}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </li>
                            <li className="nav-item mb-2">
                                <span className="fw-bold d-flex align-items-center">
                                    <FontAwesomeIcon icon={faBuilding} className="me-2" />
                                    {!isSidebarCollapsed && 'Immobilisations'}
                                </span>
                                {!isSidebarCollapsed && (
                                    <ul className="nav flex-column ms-4">
                                        <li className="nav-item fw-bold d-flex align-items-center mb-1"><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />Localisations</li>
                                        <li className="nav-item ms-4">
                                            <ul className="nav flex-column">
                                                <li className="nav-item d-flex align-items-center mb-1"><FontAwesomeIcon icon={faMapPin} className="me-2" />site</li>
                                                <li className="nav-item d-flex align-items-center mb-1"><FontAwesomeIcon icon={faThLarge} className="me-2" />Emplacements</li>
                                                <li className="nav-item d-flex align-items-center mb-1"><FontAwesomeIcon icon={faUserShield} className="me-2" />Utilisateurs responsables</li>
                                                <li className="nav-item d-flex align-items-center"><FontAwesomeIcon icon={faFileSignature} className="me-2" />Editions</li>
                                            </ul>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-grow-1">
                    <div className="p-3   " style={{ backgroundColor: 'white', }}>

                        <div className="">                         
                                <div className="d-flex justify-content-between ">
                                    <div className="d-flex align-items-center " style={{ paddingLeft: "100px" }}>
                                        <i className="fe fe-search me-2" style={{ fontSize: "24px", paddingRight: "10px" }} />
                                        <input
                                            type="text"
                                            placeholder="Rechercher..."
                                            className="border-0 bg-transparent"
                                            style={{ outline: 'none' }}
                                        />
                                    </div>
                                    <div className="btn-list" style={{ paddingRight: "100px" }}>
                                        <h3>Logo</h3>
                                    </div>
                                </div>

                          

                        </div>
                    </div>
                    <div className="container-fluid">
                        {/* page-header */}
                        <div className="row" style={{ marginTop: "20px" }}>
                            <div className="col-xl-12">
                                <div className="card custom-card">
                                    <div className="card-body" >
                                        <div className="d-sm-flex mb-4 justify-content-between">
                                            <div>
                                                <div className="btn-group">
                                                </div>
                                            </div>
                                            <div className="d-flex gap-2 mt-1 mt-sm-0">
                                                <div className="">
                                                    <a
                                                        className="btn border border-dark btn-sm"
                                                    >
                                                        Vue par mois
                                                    </a>
                                                </div>
                                                <div className="">
                                                    <a
                                                        className="btn  bg-dark text-white btn-sm"
                                                    >
                                                        Nouvau journal
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table table-bordered text-nowrap mb-0" id="journalTable">
                                                <thead>
                                                    <tr>
                                                        <th className="wd-5p text-center fw-bold">Code</th>
                                                        <th className="wd-20p fw-bold">Intitulé</th>
                                                        <th className="fw-bold text-center">Pièces</th>
                                                        <th className="fw-bold text-end">Débit</th>
                                                        <th className="fw-bold text-end">Crédit</th>
                                                        <th className="fw-bold text-center">Dernière saisie</th>
                                                        <th className="fw-bold text-center">Clôture</th>
                                                        <th className="fw-bold text-center">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="text-center">V001</td>
                                                        <td>Ventes</td>
                                                        <td className="text-center">2</td>
                                                        <td className="text-end">12 450,00</td>
                                                        <td className="text-end">12 450,00</td>
                                                        <td className="text-center">05/04/2025</td>
                                                        <td className="text-center">
                                                            <span className="badge bg-success-transparent text-success">Oui</span>
                                                        </td>
                                                        <td className="text-center">
                                                            <button className="btn btn-sm me-1">
                                                                <FontAwesomeIcon icon={faEdit} />
                                                            </button>
                                                            <button className="btn btn-sm">
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">C001</td>
                                                        <td>Achats</td>
                                                        <td className="text-center">12</td>
                                                        <td className="text-end">5 900,00</td>
                                                        <td className="text-end">5 900,00 </td>
                                                        <td className="text-center">03/04/2025</td>
                                                        <td className="text-center">
                                                            <span className="badge bg-danger-transparent text-danger">Non</span>
                                                        </td>
                                                        <td className="text-center">
                                                            <button className="btn btn-sm me-1">
                                                                <FontAwesomeIcon icon={faEdit} />
                                                            </button>
                                                            <button className="btn btn-sm">
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="d-flex align-items-center">
                                            <div>
                                            </div>
                                            <div className="ms-auto">
                                                <nav
                                                    aria-label="Page navigation"
                                                    className="pagination-style-4"
                                                >
                                                    <ul className="pagination mb-0">
                                                        <li className="page-item disabled">
                                                            <a className="page-link" href="javascript:void(0);">
                                                                Prev
                                                            </a>
                                                        </li>
                                                        <li className="page-item active">
                                                            <a className="page-link" href="javascript:void(0);">
                                                                1
                                                            </a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link" href="javascript:void(0);">
                                                                2
                                                            </a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a
                                                                className="page-link text-primary"
                                                                href="javascript:void(0);"
                                                            >
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
                        {/* ROW-3 End */}
                    </div>
                </div>
            </div>
        </>
    )
}
