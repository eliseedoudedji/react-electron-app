import React, { useState } from 'react';
import { Link } from "react-router-dom";
import FoldersTable from './dossiers/FoldersTable';

export default function AppContent() {
    // État pour contrôler l'affichage du modal et stocker l'élément sélectionné
    const [showModal, setShowModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    // Lorsque l'utilisateur clique sur une ligne, on enregistre l'élément et on affiche le modal
    const handleRowClick = (row) => {
        setSelectedRow(row);
        setShowModal(true);
    };

    // Fermer le modal
    const closeModal = () => {
        setShowModal(false);
        setSelectedRow(null);
    };

    // Génération des données de sous-liste en fonction de l'élément sélectionné
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

    return (
        <div style={{ margin: "0 200px" }}>
            <div className="container-fluid">
                <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
                    <div>
                        <nav>
                            <ol className="breadcrumb mb-1 mb-md-0">
                                <li className="breadcrumb-item">
                                    <a href="#">Aceuil</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Bienvenue
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="pageheader-btn">
                        <nav>
                            <div className="breadcrumb mb-0">
                                <div className="d-flex" style={{ flexWrap: "nowrap", overflowX: "auto" }}>
                                    <div className="d-flex me-2 align-items-center bg-danger ps-3 pe-3 rounded">
                                        <div className="-text text-muted text-fixed-white me-0 border-0 pe-0">
                                            <i className="fa fa-trash mt-1" />
                                        </div>
                                        <Link className="text-fixed-white border-0 ps-2" to="#" style={{ whiteSpace: "nowrap" }}>
                                            Supprimer
                                        </Link>
                                    </div>
                                    <div className="d-flex me-2 align-items-center bg-primary pe-3 ps-3 rounded">
                                        <div className="-text text-muted bg-primary text-fixed-white me-0 border-0 pe-0">
                                            <i className="fa fa-clone mt-1" />
                                        </div>
                                        <Link className="text-fixed-white border-0 ps-2" to="#" style={{ whiteSpace: "nowrap" }}>
                                            Dupliquer
                                        </Link>
                                    </div>
                                    <div className="d-flex me-2 align-items-center bg-success pe-3 ps-3 rounded">
                                        <div className="-text text-muted text-fixed-white me-0 border-0 pe-0">
                                            <i className="fa fa-plus mt-1" />
                                        </div>
                                        <Link className="text-fixed-white border-0 ps-2 me-2" to="#" style={{ whiteSpace: "nowrap" }}>
                                            Nouveau dossier
                                        </Link>
                                    </div>
                                    <a href="#" className="btn text-fixed-dark">
                                        <span>
                                            <i className="fa fa-cog mt-1" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12">
                        <div className="card custom-card">
                            <div className="card-body">
                                <div className="d-sm-flex mb-4 justify-content-between">
                                    <div className="d-flex gap-2 mt-1 mt-sm-0">
                                        <div>
                                            <input
                                                className="form-control form-control-sm"
                                                type="text"
                                                placeholder="Recherche rapide"
                                                aria-label=".form-control-sm example"
                                            />
                                        </div>
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
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-bordered text-nowrap mb-0" id="projectSummary">
                                        <thead>
                                            <tr>
                                                <th className="wd-5p tx-center fw-bold">Numéro</th>
                                                <th className="wd-25p fw-bold">Référentiel</th>
                                                <th className="text-center fw-bold">Société</th>
                                                <th className="text-center fw-bold">Dossiers/société</th>
                                                <th className="fw-bold">Mode</th>
                                                <th className="fw-bold">Dernière modification</th>
                                                <th className="fw-bold">Actions</th>
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
                                                    <div className="btn btn-sm" onClick={() => handleRowClick("EPITECH")}>
                                                        <button className='btn btn-sm btn-success'>Consulter</button>
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
                                                    <div className="btn btn-sm" onClick={() => handleRowClick("Design SA")}>
                                                        <button className='btn btn-sm btn-success'>Consulter</button>
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

                {/* Modal pour afficher la sous-liste */}
                {showModal && (
                    <div
                        className="modal d-block"
                        tabIndex="-1"
                        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                    >
                        <div className="modal-dialog" style={{ minHeight: '100%', minWidth: '90vw', justifyContent: 'center' }}>
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
                                        onClick={closeModal}
                                    >
                                        Fermer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
