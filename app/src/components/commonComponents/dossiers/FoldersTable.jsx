import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function FoldersTable() {
    const navigate = useNavigate();

    const handleRowClick = (code) => {
        // Navigation vers les dossiers de l'entreprise
        navigate(`/dossier/${code}`);
    };
    // Styles pour l'effet de hover
    const styles = `
        .hover-row {
            transition: all 0.2s ease;
        }
        .hover-row:hover {
            background-color: #f8f9fa;
            transform: translateY(-1px);
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
    `;

    return (
        <div className="row">
            <style>{styles}</style>
            <div className="col-xl-12">
                <div className="card custom-card border-0 shadow-none">
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
                                        <th className="wd-5p tx-center fw-bold">Code</th>
                                        <th className="wd-25p fw-bold">Référentiel</th>
                                        <th className="text-center fw-bold">Société</th>
                                        <th className="text-center fw-bold">Dossiers/société</th>
                                        <th className="text-center fw-bold">Exercice</th>
                                        <th className="fw-bold">Sessions</th>
                                        <th className="fw-bold">Mode</th>
                                        <th className="fw-bold">Dernière modification</th>
                                        <th className="fw-bold">Dernière sauvegarde</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        onClick={() => handleRowClick('CR000-3')}
                                        style={{ cursor: 'pointer' }}
                                        className="hover-row"
                                    >
                                        <td className="tx-center">CR000-3</td>
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
                                        <td>01-04-2022 à 31-12-2022</td>
                                        <td className="text-center">3</td>
                                        <td className="text-center">
                                            <span className="badge badge-sm rounded-pill bg-info-transparent text-success">
                                                Active
                                            </span>
                                        </td>
                                        <td className="text-center">20-04-2022 à 14:30</td>
                                        <td className="text-center">20-04-2022 à 14:30</td>

                                    </tr>
                                    <tr
                                        onClick={() => handleRowClick('CR000-2')}
                                        style={{ cursor: 'pointer' }}
                                        className="hover-row"
                                    >
                                        <td className="tx-center">CR000-2</td>
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
                                        <td>20-04-2022 à 20-04-2022</td>
                                        <td className="text-center">2</td>
                                        <td className="text-center">
                                            <span className="badge badge-sm rounded-pill bg-danger-transparent text-danger">
                                                Accès interdit
                                            </span>
                                        </td>
                                        <td className="text-center">20-04-2022 à 14:30</td>
                                        <td className="text-center">20-04-2022 à 14:30</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
