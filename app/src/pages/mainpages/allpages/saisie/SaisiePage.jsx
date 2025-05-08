import React, { useState } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faHome, faFileAlt, faCog, faChartBar, faUsers, faBars, faChevronLeft, faBook, faFolderOpen, faTruck, faUserTie, faUser, faExchangeAlt, faList, faBolt, faBuilding, faMapMarkerAlt, faMapPin, faThLarge, faUserShield, faFileSignature } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";
import Sidebar from '../../../../components/commonComponents/sidebar/Sidebar'
import MenuTop from '../../../../components/commonComponents/topMenu/MenuTop'

export default function SaisiePage() {
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
        <div>
            <MenuTop />
            <div className="d-flex" style={{ minHeight: '100vh' }}>
                {/* Sidebar */}
                <Sidebar />

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
                        <div className='row'>
                            <div className="col-3">
                                <div style={{
                                    backgroundColor: "#fff",
                                    border: "1px solid #ccc",
                                    borderRadius: "8px",
                                    padding: "1.5rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    marginTop: "20px",
                                    gap: "1rem"
                                }}>
                                    <h4 style={{ fontWeight: "600" }}>Solde du compte</h4>
                                    <input
                                        type="text"
                                        placeholder="---"
                                        style={{ backgroundColor: "#b9fbc0", border: "1px solid #ccc", borderRadius: 4, padding: "0.5rem" }}
                                        readOnly
                                    />

                                    <div style={{ display: "flex", gap: "1rem" }}>
                                        <div style={{ flex: 1 }}>
                                            <label>Date</label>
                                            <input type="date" style={{ width: "100%", padding: "0.5rem", borderRadius: 4, border: "1px solid #ccc" }} />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <label>Pièces</label>
                                            <input type="text" placeholder="00003" style={{ width: "100%", padding: "0.5rem", borderRadius: 4, border: "1px solid #ccc" }} />
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", gap: "1rem" }}>
                                        <div style={{ flex: 1 }}>
                                            <label>Référence</label>
                                            <input type="text" placeholder="10-25-25" style={{ width: "100%", padding: "0.5rem", borderRadius: 4, border: "1px solid #ccc" }} />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <label>N° de compte</label>
                                            <input type="text" placeholder="00003" style={{ width: "100%", padding: "0.5rem", borderRadius: 4, border: "1px solid #ccc" }} />
                                        </div>
                                    </div>

                                    <div>
                                        <label>Libellé</label>
                                        <input type="text" placeholder="---" style={{ width: "100%", padding: "0.5rem", borderRadius: 4, border: "1px solid #ccc" }} />
                                    </div>

                                    <div>
                                        <label>Tiers</label>
                                        <input type="text" placeholder="---" style={{ width: "100%", padding: "0.5rem", borderRadius: 4, border: "1px solid #ccc" }} />
                                    </div>

                                    <div>
                                        <label>Date d’échéance</label>
                                        <input type="date" placeholder="---" style={{ width: "100%", padding: "0.5rem", borderRadius: 4, border: "1px solid #ccc" }} />
                                    </div>

                                    <div>
                                        <label>Débit</label>
                                        <input type="text" placeholder="---" style={{ width: "100%", padding: "0.5rem", borderRadius: 4, border: "1px solid #ccc" }} />
                                    </div>

                                    <div>
                                        <label>Crédit</label>
                                        <input type="text" placeholder="---" style={{ width: "100%", padding: "0.5rem", borderRadius: 4, border: "1px solid #ccc" }} />
                                    </div>

                                    <button style={{
                                        backgroundColor: "#374151",
                                        color: "white",
                                        border: "none",
                                        padding: "0.75rem",
                                        borderRadius: 6,
                                        marginTop: "1rem"
                                    }}>
                                        Validé
                                    </button>
                                </div>
                            </div>

                            <div className='col-9'>
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

                                                        <div className="" onClick={() => toShowMonthly()}>
                                                            <span
                                                                className="btn boder border-dark  btn-sm" style={{ backgroundColor: "#BDBDBD" }}
                                                            >
                                                                Nouvelle pièce
                                                            </span>
                                                        </div>
                                                        <div className="" onClick={() => toShowMonthly()}>
                                                            <span
                                                                className="btn border border-dark btn-sm"
                                                            >
                                                                Editer la fiche
                                                            </span>
                                                        </div>

                                                        <div className="" onClick={() => toShowGenerally()}>
                                                            <span
                                                                className="btn  bg-dark text-white btn-sm"
                                                            >
                                                                Recupérer
                                                            </span>
                                                        </div>
                                                        <div className="" onClick={() => toShowGenerally()}>
                                                            <span
                                                                className="btn bg-danger text-white btn-sm"
                                                            >
                                                                Supprimer
                                                            </span>
                                                        </div>



                                                        <div className="" >
                                                            <span
                                                                className="btn  btn-sm" style={{ backgroundColor: "#22C03C" }}
                                                            >
                                                                Modifier
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>


                                                {/* Table dynamique selon la vue */}










                                                <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                                                    <table className="table table-bordered text-nowrap mb-0" id="journalTable">
                                                        <thead style={{ position: 'sticky', top: 0, zIndex: 1, }}>
                                                            <tr>
                                                                <th className="text-center text-light bg-primary">Date</th>
                                                                <th className="text-light bg-primary">Pièces</th>
                                                                <th className="text-center text-light bg-primary">Reférence</th>
                                                                <th className="text-end text-light bg-primary">N° Compte</th>
                                                                <th className="text-end text-light bg-primary">Tiers</th>
                                                                <th className="text-center text-light bg-primary">libellé</th>
                                                                <th className="text-center text-light bg-primary">Date d’échéance</th>
                                                                <th className="text-center text-light bg-primary">Débit</th>
                                                                <th className="text-center text-light bg-primary">Crédit</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="text-center">08-12-2025</td>
                                                                <td>00001</td>
                                                                <td className="text-center">M. Thomas</td>
                                                                <td className="text-end">608</td>
                                                                <td className="text-end">---</td>
                                                                <td className="text-center">---</td>
                                                                <td className="text-center">02-03-25</td>
                                                                <td className="text-center">10.000.000</td>
                                                                <td className="text-center">---</td>

                                                            </tr>
                                                            <tr>
                                                                <td className="text-center">08-12-2025</td>
                                                                <td>00002</td>
                                                                <td className="text-center">Carburant</td>
                                                                <td className="text-end">508</td>
                                                                <td className="text-end">---</td>
                                                                <td className="text-center">---</td>
                                                                <td className="text-center">02-03-26</td>
                                                                <td className="text-center">---</td>
                                                                <td className="text-center">10.000.000</td>
                                                            </tr>
                                                            <tr style={{ backgroundColor: "#b9fbc0", }}>
                                                                <td colSpan="7">Total(Équilibre)</td>
                                                                <td className="text-center">10.000.000</td>
                                                                <td className="text-center">10.000.000</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

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
                            </div>

                        </div>
                        {/* ROW-3 End */}
                    </div>
                </div>
            </div>
        </div>
    )
}
