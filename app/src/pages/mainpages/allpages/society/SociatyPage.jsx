import React , { useState }from 'react'
import MenuTop from '../../../../components/commonComponents/topMenu/MenuTop'
import Sidebar from '../../../../components/commonComponents/sidebar/Sidebar';
import { Link } from 'react-router-dom';
import CreateSociety from '../../../../components/commonComponents/society/CreateSociety';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle, faEllipsisV , faEdit, faTrash, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

export default function SociatyPage() {
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
   
    const [showModal, setShowModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const sublistData = selectedRow ? getSublistData(selectedRow) : [];
    

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
    
  return (
    <div>
         {showModal && <CreateSociety show={showModal} onClose={closeModal} initialData={selectedRow} />}
        <MenuTop/>
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
                            <div className=''>
                                <div className="row" style={{ marginTop: "20px" }}>
                                    <div className="col-xl-12">
                                        <div className="card custom-card">
                                            <div className="card-body" >
                                                <div className="d-sm-flex mb-4 justify-content-between">
                                                    <div>
                                                        <div className="btn-group">
                                                            <h5>Les sociétés</h5>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex gap-2 mt-1 mt-sm-0">

                                                    
                                                     
                                                        <div className="" >
                                                            <span
                                                                className="btn bg-danger text-white btn-sm"
                                                            >
                                                                Supprimer
                                                            </span>
                                                        </div>



                                                        <div className="" >
                                                            <span
                                                                className="btn  btn-sm text-light" style={{backgroundColor:"#3F505D"}}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    e.stopPropagation();
                                                                    handleRowClick();
                                                                }}
                                                            >
                                                                Créer une société
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>


                                                {/* Table dynamique selon la vue */}










                                                <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                                                    <table className="table table-bordered text-nowrap mb-0" id="journalTable">
                                                        <thead style={{ position: 'sticky', top: 0, zIndex: 1, }}>
                                                            <tr>
                                                                <th className="text-center text-light bg-primary">N°</th>
                                                                <th className="text-light bg-primary">Intitulé</th>
                                                                <th className="text-center text-light bg-primary">Adresse</th>
                                                                <th className="text-end text-light bg-primary">IFU</th>
                                                                <th className="text-end text-light bg-primary"> Dossier</th>
                                                                <th className="text-center text-light bg-primary">Contact</th>
                                                                <th className="text-center text-light bg-primary">Descriptions</th>
                                                                <th className="text-center text-light bg-primary">Paramètre</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="text-center">1</td>
                                                                <td>EPITECH</td>
                                                                <td className="text-center">Cotonou ...</td>
                                                                <td className="text-end">1234567896321</td>
                                                                <td className="text-end">2</td>
                                                                <td className="text-center">0167153666</td>
                                                                <td className="text-center">
                                                                    <span className="">---</span>
                                                                </td>
                                                                <td className="text-center">
                                                                    <Link to=''><button className="btn btn-sm me-1">
                                                                        <FontAwesomeIcon icon={faEllipsisH} />
                                                                    </button></Link>
                                                                   
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-center">2</td>
                                                                <td>CSS</td>
                                                                <td className="text-center">Bohicon</td>
                                                                <td className="text-end">1234569874125</td>
                                                                <td className="text-end">0</td>
                                                                <td className="text-center">2365987412</td>
                                                                <td className="text-center">
                                                                    <span className="">---</span>
                                                                </td>
                                                                <td className="text-center">
                                                                <Link to=''><button className="btn btn-sm me-1">
                                                                        <FontAwesomeIcon icon={faEllipsisH} />
                                                                    </button></Link>
                                                                </td>
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

                        
                        {/* ROW-3 End */}
                    </div>
                </div>
            </div>
    </div>
  )
}
