import React, { useState } from 'react'
import { Link } from "react-router-dom";
import CreateJournalModal from '../dossiers/CreateJournal';


export default function ExercicesTable() {
    // État pour contrôler l'affichage du modal et stocker l'élément sélectionné
    const [showModal, setShowModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

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


            {/* Start::app-content */}
            <div className="" style={{ zIndex: 1000 }}>
                <div className="p-3 header-secondary row">
                    <div className="col">
                        <div className="d-flex justify-content-between">
                            <h6>Dossier en cours : CR004</h6>
                        </div>
                    </div>
                    <div className="col col-auto">
                        <div className="btn-list">
                            <a
                                className="btn btn-outline-light border"
                                href="javascript:void(0);"
                            >
                                <i className="fe fe-help-circle me-1 mt-1" />
                                Assistant
                            </a>
                            <a
                                onClick={() => handleRowClick()}
                                className="btn btn-success me-0"
                            >
                                <i className="fe fe-plus me-1 mt-1" /> Nouvel journal
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    {/* page-header */}
                    {/* Page Header */}
                    <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
                        <div>
                            <nav>
                                <ol className="breadcrumb mb-1 mb-md-0">
                                    <li className="breadcrumb-item">
                                        <a href="javascript:void(0);">CR004</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        liste des journaux
                                    </li>
                                </ol>
                            </nav>
                        </div>

                        <div className="ms-md-4 mt-3 mt-md-0 flex-grow-1">
                            <div className="d-flex">
                                <div className="input-group w-100" style={{ border: '1px solid #ccc', borderRadius: '6px', overflow: 'hidden' }}>
                                    <span className="input-group-text bg-white border-0">
                                        <i className="fas fa-calendar-alt text-dark" />
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control border-0 ps-2"
                                        id="daterange"
                                        placeholder="Recherche rapide : Choisir une date"
                                        style={{ outline: 'none' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card custom-card">

                                <div className="card-body">
                                    <div className="d-sm-flex mb-4 justify-content-between">
                                        <div>
                                            <span className="">Nombre de ligne par page </span>
                                            <div className="btn-group">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-light dropdown-toggle btn-sm"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    10
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a className="dropdown-item" href="javascript:void(0);">
                                                            10
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="javascript:void(0);">
                                                            25
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="javascript:void(0);">
                                                            50
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="d-flex gap-2 mt-1 mt-sm-0">
                                            <div className="">
                                                <a
                                                    href="javascript:void(0);"
                                                    className="btn btn-danger btn-sm btn-wave waves-effect waves-light"
                                                >
                                                    Exporter vers PDF
                                                </a>

                                            </div>
                                            <div className="">
                                                <a
                                                    href="javascript:void(0);"
                                                    className="btn btn-success btn-sm btn-wave waves-effect waves-light"
                                                >
                                                    Exporter vers Excel
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-bordered text-nowrap mb-0" id="journalTable">
                                            <thead>
                                                <tr>
                                                    <th className="wd-5p text-center fw-bold">No.</th>
                                                    <th className="wd-20p fw-bold">Intitulé</th>
                                                    <th className="fw-bold text-center">Notes</th>
                                                    <th className="text-center fw-bold">Nombre de pièces</th>
                                                    <th className="fw-bold text-end">Débit</th>
                                                    <th className="fw-bold text-end">Crédit</th>
                                                    <th className="fw-bold text-center">Dernière pièce</th>
                                                    <th className="fw-bold text-center">Clôture</th>
                                                    <th className="fw-bold text-center">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-center">1</td>
                                                    <td>Journal des ventes</td>
                                                    <td className="text-center">Mensuel</td>
                                                    <td className="text-center">12</td>
                                                    <td className="text-end">12 450,00 €</td>
                                                    <td className="text-end">12 450,00 €</td>
                                                    <td className="text-center">05/04/2025</td>
                                                    <td className="text-center">
                                                        <span className="badge bg-success-transparent text-success">Oui</span>
                                                    </td>
                                                    <td className="text-center">
                                                        <button className="btn btn-sm btn-primary me-1"><i className="fas fa-eye" /></button>
                                                        <button className="btn btn-sm btn-secondary"><i className="fas fa-edit" /></button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className="text-center">2</td>
                                                    <td>Journal des achats</td>
                                                    <td className="text-center">Trimestriel</td>
                                                    <td className="text-center">8</td>
                                                    <td className="text-end">5 900,00 €</td>
                                                    <td className="text-end">5 900,00 €</td>
                                                    <td className="text-center">03/04/2025</td>
                                                    <td className="text-center">
                                                        <span className="badge bg-danger-transparent text-danger">Non</span>
                                                    </td>
                                                    <td className="text-center">
                                                        <button className="btn btn-sm btn-primary me-1"><i className="fas fa-eye" /></button>
                                                        <button className="btn btn-sm btn-secondary"><i className="fas fa-edit" /></button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className="text-center">3</td>
                                                    <td>Journal de caisse</td>
                                                    <td className="text-center">Caisse principale</td>
                                                    <td className="text-center">15</td>
                                                    <td className="text-end">3 100,00 €</td>
                                                    <td className="text-end">3 100,00 €</td>
                                                    <td className="text-center">06/04/2025</td>
                                                    <td className="text-center">
                                                        <span className="badge bg-success-transparent text-success">Oui</span>
                                                    </td>
                                                    <td className="text-center">
                                                        <button className="btn btn-sm btn-primary me-1"><i className="fas fa-eye" /></button>
                                                        <button className="btn btn-sm btn-secondary"><i className="fas fa-edit" /></button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className="text-center">4</td>
                                                    <td>Journal de banque</td>
                                                    <td className="text-center">Opérations bancaires</td>
                                                    <td className="text-center">22</td>
                                                    <td className="text-end">8 780,00 €</td>
                                                    <td className="text-end">8 780,00 €</td>
                                                    <td className="text-center">04/04/2025</td>
                                                    <td className="text-center">
                                                        <span className="badge bg-danger-transparent text-danger">Non</span>
                                                    </td>
                                                    <td className="text-center">
                                                        <button className="btn btn-sm btn-primary me-1"><i className="fas fa-eye" /></button>
                                                        <button className="btn btn-sm btn-secondary"><i className="fas fa-edit" /></button>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td className="text-center">5</td>
                                                    <td>Journal des opérations diverses</td>
                                                    <td className="text-center">OD salaires / régul</td>
                                                    <td className="text-center">10</td>
                                                    <td className="text-end">2 500,00 €</td>
                                                    <td className="text-end">2 500,00 €</td>
                                                    <td className="text-center">02/04/2025</td>
                                                    <td className="text-center">
                                                        <span className="badge bg-success-transparent text-success">Oui</span>
                                                    </td>
                                                    <td className="text-center">
                                                        <button className="btn btn-sm btn-primary me-1"><i className="fas fa-eye" /></button>
                                                        <button className="btn btn-sm btn-secondary"><i className="fas fa-edit" /></button>
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
            {/* End::app-content */}
        </>


    )
}
