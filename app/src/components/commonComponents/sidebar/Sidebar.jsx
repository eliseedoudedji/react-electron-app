
import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faHome, faFileAlt, faCog, faChartBar, faUsers, faBars, faChevronLeft, faBook, faFolderOpen, faTruck, faUserTie, faUser, faExchangeAlt, faList, faBolt, faBuilding, faMapMarkerAlt, faMapPin, faThLarge, faUserShield, faFileSignature } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    
    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };
    return (
        <div>
            {/* Sidebar */}
            <div className="text-dark position-relative"
                style={{
                    width: isSidebarCollapsed ? '60px' : '200px',
                    minHeight: '100vh',
                    backgroundColor: 'white',
                    transition: 'width 0.3s ease'
                }}>
                <div className="" style={{ paddingLeft: "20px", paddingTop: "10px" }}>
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
                        <li className="nav-item mb-3">
                            <span className="fw-bold d-flex align-items-center">
                                <FontAwesomeIcon icon={faBook} className="me-2" />
                                {!isSidebarCollapsed && 'Plan comptable'}
                            </span>
                        </li>
                        <li className="nav-item mb-3">
                            <span className="fw-bold d-flex align-items-center">
                                <FontAwesomeIcon icon={faFolderOpen} className="me-2" />
                                {!isSidebarCollapsed && 'Comptes généraux'}
                            </span>
                        </li>
                        <li className="nav-item mb-3">
                            {!isSidebarCollapsed &&
                                <span className="fw-bold d-flex align-items-center">
                                    <FontAwesomeIcon icon={faUsers} className="me-2" />
                                    Comptes auxiliaires
                                </span>}
                            {!isSidebarCollapsed && (
                                <ul className="nav flex-column ms-4">
                                    <li className="nav-item d-flex align-items-center mb-3 mt-3"><FontAwesomeIcon icon={faTruck} className="me-2" /><span>Fournisseurs</span></li>
                                    <li className="nav-item d-flex align-items-center mb-3"><FontAwesomeIcon icon={faUserTie} className="me-2" /><span>Clients</span></li>
                                    <li className="nav-item d-flex align-items-center mb-3"><FontAwesomeIcon icon={faUser} className="me-2" /><span>Personnel</span></li>
                                    <li className="nav-item d-flex align-items-center"><FontAwesomeIcon icon={faExchangeAlt} className="me-2" /><span>Débiteurs/Créditeurs divers</span></li>
                                </ul>
                            )}
                            {isSidebarCollapsed && (
                                <ul className="nav flex-column">
                                    <li className="nav-item d-flex align-items-center mb-3 mt-3"><FontAwesomeIcon icon={faTruck} className="me-2" /></li>
                                    <li className="nav-item d-flex align-items-center mb-3"><FontAwesomeIcon icon={faUserTie} className="me-2" /></li>
                                    <li className="nav-item d-flex align-items-center mb-3"><FontAwesomeIcon icon={faUser} className="me-2" /></li>
                                    <li className="nav-item d-flex align-items-center"><FontAwesomeIcon icon={faExchangeAlt} className="me-2" /></li>
                                </ul>
                            )}
                        </li>
                        <li className="nav-item mb-2">
                            {!isSidebarCollapsed &&
                                <span className="fw-bold d-flex align-items-center">
                                    <FontAwesomeIcon icon={faFileAlt} className="me-2" />
                                    Journaux
                                </span>}
                            {(!isSidebarCollapsed) ? (
                                <ul className="nav flex-column ms-4">
                                    <li className="nav-item d-flex align-items-center mb-2 mt-2"><FontAwesomeIcon icon={faList} className="me-2" /><span>Tous les journaux</span></li>
                                    <li className="nav-item">
                                        <span className="fw-bold d-flex align-items-center mb-2"><FontAwesomeIcon icon={faBolt} className="me-2" />Saisies rapides</span>
                                        <div className="d-flex flex-wrap gap-1 mt-1 ms-4 mb-2" style={{ maxWidth: '140px', backgroundColor: "#D9D9D9", alignContent: "center", borderRadius: "4px", paddingLeft: "3px", }}>
                                            {['Jan.', 'Fév.', 'Mar.', 'Avr.', 'Mai.', 'Jui.', 'Juil.', 'Aoû.', 'Sep.', 'Oct.', 'Nov.', 'Déc.'].map((mois, idx) => (
                                                <li>
                                                    <span key={idx} style={{ fontSize: '12px', minWidth: '32px', fontWeight: 'bold' }}>{mois}</span>
                                                </li>
                                            ))}
                                        </div>
                                    </li>
                                </ul>
                            ) : (

                                <div className="d-flex flex-column mt-2" >
                                    <li className="nav-item d-flex align-items-center mb-3 mt-2"><FontAwesomeIcon icon={faList} className="me-2" /></li>

                                    <div className="d-flex flex-column gap-1" style={{ backgroundColor: "#D9D9D9", paddingLeft: "3px", borderRadius: "4px 0px 0px 4px" }}>
                                        <ul style={{ listStyleType: 'none', paddingLeft: '0px' }}>
                                            {['Jan.', 'Fév.', 'Mar.', 'Avr.', 'Mai.', 'Jui.', 'Juil.', 'Aoû.', 'Sep.', 'Oct.', 'Nov.', 'Déc.'].map((mois, idx) => (
                                                <li key={idx} className="nav-item d-flex align-items-center mb-1">{mois}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li className="nav-item mb-2">
                            {!isSidebarCollapsed &&
                                <span className="fw-bold d-flex align-items-center">
                                    <FontAwesomeIcon icon={faBuilding} className="me-2" />
                                    Immobilisations
                                </span>}
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
                        {isSidebarCollapsed && (
                            <div>

                                <li className="nav-item fw-bold   mb-2"><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /></li>


                                <li className="nav-item   mb-2"><FontAwesomeIcon icon={faMapPin} className="" /></li>
                                <li className="nav-item   mb-2"><FontAwesomeIcon icon={faThLarge} className="" /></li>
                                <li className="nav-item   mb-2"><FontAwesomeIcon icon={faUserShield} className="" /> </li>
                                <li className="nav-item  "><FontAwesomeIcon icon={faFileSignature} className="" /></li>
                            </div>



                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}
