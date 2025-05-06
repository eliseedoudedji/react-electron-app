import React, { useState } from 'react'
import { Link } from "react-router-dom";
import CreateJournalModal from '../dossiers/CreateJournal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faHome, faFileAlt, faCog, faChartBar, faUsers, faBars, faChevronLeft, faBook, faFolderOpen, faTruck, faUserTie, faUser, faExchangeAlt, faList, faBolt, faBuilding, faMapMarkerAlt, faMapPin, faThLarge, faUserShield, faFileSignature } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../sidebar/Sidebar';
export default function ExercicesTable() {
    // État pour contrôler l'affichage du modal et stocker l'élément sélectionné
    const [showModal, setShowModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [showMonthly, setShowMonthly] = useState(false);
    const [showGenerally, setShowGenerally] = useState(true);


    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    // Lorsque l'utilisateur clique sur une ligne, on enregistre l'élément et on affiche le modal
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
    //Vu par mois
    const toShowMonthly = () => {
        setShowMonthly(true)
        setShowGenerally(false)
    }
    //vue générale
    const toShowGenerally = () => {
        setShowGenerally(true)
        setShowMonthly(false)
    }

    return (
        <>
            {showModal && <CreateJournalModal show={showModal} onClose={closeModal} initialData={selectedRow} />}

            <div className="d-flex" style={{ minHeight: '100vh' }}>
                {/* Sidebar */}
                <Sidebar/>

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
                                                {!showMonthly &&

                                                    <div className="" onClick={() => toShowMonthly()}>
                                                    <span
                                                            className="btn border border-dark btn-sm"
                                                    >
                                                        Vue par mois
                                                    </span>
                                                    </div>}

                                                {showMonthly &&

                                                    <div className="" onClick={() => toShowGenerally()}>
                                                        <span
                                                            className="btn border border-dark btn-sm"
                                                        >
                                                            Vue Globale
                                                        </span>
                                                </div>
                                                }



                                                <div className="" onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    handleRowClick();
                                                }}>
                                                    <span
                                                        className="btn bg-dark text-white btn-sm"
                                                    >
                                                        Nouveau journal
                                                    </span>
                                                </div>
                                            </div>
                                        </div>


                                        {/* Table dynamique selon la vue */}








                                        {showMonthly && (
                                            <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                                                <table className="table table-bordered text-nowrap mb-0" id="journalTable">
                                                    <thead style={{ position: 'sticky', top: 0, zIndex: 1 }}>
                                                    <tr>
                                                            <th className=" text-center bg-primary text-light">N°</th>
                                                            <th className="  bg-primary text-light">Mois</th>
                                                            <th className=" text-center bg-primary text-light">Années d'exercice</th>
                                                            <th className=" text-end bg-primary text-light">Nombre de journal</th>
                                                            <th className=" text-center bg-primary text-light">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-center">1</td>
                                                            <td>Janvier</td>
                                                            <td className="text-center">2024, 2025</td>
                                                            <td className="text-end">30</td>

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
                                                            <td className="text-center">2</td>
                                                            <td>Février</td>
                                                            <td className="text-center">2025</td>
                                                            <td className="text-end">15</td>

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
                                                            <td className="text-center">3</td>
                                                            <td>Mars</td>
                                                            <td className="text-center">2024, 2025, 2026</td>
                                                            <td className="text-end">100</td>

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
                                                            <td className="text-center">4</td>
                                                            <td>Avril</td>
                                                            <td className="text-center">2024, 2025</td>
                                                            <td className="text-end">10</td>

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
                                                            <td className="text-center">5</td>
                                                            <td>Mai</td>
                                                            <td className="text-center">2024, 2025</td>
                                                            <td className="text-end">18</td>

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
                                                            <td className="text-center">6</td>
                                                            <td>Juin</td>
                                                            <td className="text-center">2024, 2025</td>
                                                            <td className="text-end">30</td>

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
                                                            <td className="text-center">7</td>
                                                            <td>Juillet</td>
                                                            <td className="text-center">2024, 2025, 2026</td>
                                                            <td className="text-end">14</td>

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
                                                            <td className="text-center">8</td>
                                                            <td>Août</td>
                                                            <td className="text-center">2024, 2025</td>
                                                            <td className="text-end">30</td>

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
                                                            <td className="text-center">9</td>
                                                            <td>Septembre</td>
                                                            <td className="text-center">2025</td>
                                                            <td className="text-end">200</td>

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
                                                            <td className="text-center">10</td>
                                                            <td>Octobre</td>
                                                            <td className="text-center">2024, 2025</td>
                                                            <td className="text-end">30</td>

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
                                                            <td className="text-center">11</td>
                                                            <td>Novembre</td>
                                                            <td className="text-center">2024, 2025</td>
                                                            <td className="text-end">30</td>

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
                                                            <td className="text-center">12</td>
                                                            <td>Decembre</td>
                                                            <td className="text-center">2024, 2025</td>
                                                            <td className="text-end">20</td>

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
                                        )}

                                        {!showMonthly && (
                                            <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                                                <table className="table table-bordered text-nowrap mb-0" id="journalTable">
                                                    <thead style={{ position: 'sticky', top: 0, zIndex: 1, }}>
                                                        <tr>
                                                            <th className="text-center text-light bg-primary">Code</th>
                                                            <th className="text-light bg-primary">Intitulé</th>
                                                            <th className="text-center text-light bg-primary">Pièces</th>
                                                            <th className="text-end text-light bg-primary">Débit</th>
                                                            <th className="text-end text-light bg-primary">Crédit</th>
                                                            <th className="text-center text-light bg-primary">Dernière saisie</th>
                                                            <th className="text-center text-light bg-primary">Clôture</th>
                                                            <th className="text-center text-light bg-primary">Actions</th>
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
                                                                <Link to='/saisie/1'><button className="btn btn-sm me-1">
                                                                    <FontAwesomeIcon icon={faEdit} />
                                                                </button></Link>
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
                                        )}
                                    </div>


                                    {/* FOOTER */}
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
