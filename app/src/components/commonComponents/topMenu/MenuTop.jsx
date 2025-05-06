import React from 'react'

import FolderHeader from '../dossiers/header/FolderHeader';
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
export default function MenuTop() {
  return (
    
    <div style={{ backgroundColor: "#ffffff", paddingBottom: "10px" }}>
        <FolderHeader />
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
    </div>

    

  )
}
