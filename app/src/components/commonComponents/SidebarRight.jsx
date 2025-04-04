import React, { useState } from 'react'

// Import des images
import face1 from '../../pages/mainpages/assets/images/faces/1.jpg'
import face2 from '../../pages/mainpages/assets/images/faces/2.jpg'
import face3 from '../../pages/mainpages/assets/images/faces/3.jpg'
import face5 from '../../pages/mainpages/assets/images/faces/5.jpg'
import face6 from '../../pages/mainpages/assets/images/faces/6.jpg'
import face7 from '../../pages/mainpages/assets/images/faces/7.jpg'
import face8 from '../../pages/mainpages/assets/images/faces/8.jpg'
import face9 from '../../pages/mainpages/assets/images/faces/9.jpg'
import face10 from '../../pages/mainpages/assets/images/faces/10.jpg'
import face12 from '../../pages/mainpages/assets/images/faces/12.jpg'
import face13 from '../../pages/mainpages/assets/images/faces/13.jpg'
import face14 from '../../pages/mainpages/assets/images/faces/14.jpg'
import face19 from '../../pages/mainpages/assets/images/faces/19.jpg'

export default function SidebarRight() {
    // État pour gérer l'onglet actif
    const [activeTab, setActiveTab] = useState('side1');

    // Fonction pour changer d'onglet
    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="offcanvas offcanvas-end offcanvas-sidebar overflow-auto sidebar" tabIndex="-1"
            id="offcanvassidebar">
            {/* Sidebar-right */}
            <div className="card custom-card tab-heading shadow-none">
                <div className="card-header rounded-0">
                    <div className="card-title">
                        Notifications
                    </div>
                    <div className="card-options ms-auto" data-bs-theme="dark">
                        <button type="button" className="btn-close text-white" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                </div>
                <div className="panel-body tabs-menu-body latest-tasks p-0 border-0">
                    <div className="tabs-menu">
                        {/* Tabs */}
                        <ul className="nav panel-tabs">
                            <li className="">
                                <a href="#side1" 
                                   className={activeTab === 'side1' ? 'active' : ''} 
                                   onClick={() => handleTabChange('side1')} 
                                   data-bs-toggle="tab">
                                    <i className="fe fe-message-circle tx-15 me-2"></i> Chat
                                </a>
                            </li>
                            <li>
                                <a href="#side2" 
                                   className={activeTab === 'side2' ? 'active' : ''} 
                                   onClick={() => handleTabChange('side2')} 
                                   data-bs-toggle="tab">
                                    <i className="fe fe-bell tx-15 me-2"></i> Notifications
                                </a>
                            </li>
                            <li>
                                <a href="#side3" 
                                   className={activeTab === 'side3' ? 'active' : ''} 
                                   onClick={() => handleTabChange('side3')} 
                                   data-bs-toggle="tab">
                                    <i className="fe fe-users tx-15 me-2"></i> Friends
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div className={`tab-pane p-0 border-0 ${activeTab === 'side1' ? 'active' : ''}`} id="side1">
                            <div className="list d-flex align-items-center border-top border-bottom p-3">
                                <div className="">
                                    <span className="avatar bg-primary brround avatar-md">CH</span>
                                </div>
                                <a className="wrapper w-100 ms-3" href="javascript:void(0);">
                                    <p className="mb-0 d-flex">
                                        <b>New Websites is Created</b>
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <i className="mdi mdi-clock text-muted me-1"></i>
                                            <small className="text-muted ms-auto">30 mins ago</small>
                                            <p className="mb-0"></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="list d-flex align-items-center  border-bottom p-3">
                                <div className="">
                                    <span className="avatar bg-danger brround avatar-md">N</span>
                                </div>
                                <a className="wrapper w-100 ms-3" href="javascript:void(0);">
                                    <p className="mb-0 d-flex">
                                        <b>Prepare For the Next Project</b>
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <i className="mdi mdi-clock text-muted me-1"></i>
                                            <small className="text-muted ms-auto">2 hours ago</small>
                                            <p className="mb-0"></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="list d-flex align-items-center border-bottom p-3">
                                <div className="">
                                    <span className="avatar bg-info brround avatar-md">S</span>
                                </div>
                                <a className="wrapper w-100 ms-3" href="javascript:void(0);">
                                    <p className="mb-0 d-flex">
                                        <b>Decide the live Discussion</b>
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <i className="mdi mdi-clock text-muted me-1"></i>
                                            <small className="text-muted ms-auto">3 hours ago</small>
                                            <p className="mb-0"></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="list d-flex align-items-center border-bottom p-3">
                                <div className="">
                                    <span className="avatar bg-warning brround avatar-md">K</span>
                                </div>
                                <a className="wrapper w-100 ms-3" href="javascript:void(0);">
                                    <p className="mb-0 d-flex">
                                        <b>Meeting at 3:00 pm</b>
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <i className="mdi mdi-clock text-muted me-1"></i>
                                            <small className="text-muted ms-auto">4 hours ago</small>
                                            <p className="mb-0"></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="list d-flex align-items-center border-bottom p-3">
                                <div className="">
                                    <span className="avatar bg-success brround avatar-md">R</span>
                                </div>
                                <a className="wrapper w-100 ms-3" href="javascript:void(0);">
                                    <p className="mb-0 d-flex">
                                        <b>Prepare for Presentation</b>
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <i className="mdi mdi-clock text-muted me-1"></i>
                                            <small className="text-muted ms-auto">1 day ago</small>
                                            <p className="mb-0"></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="list d-flex align-items-center border-bottom p-3">
                                <div className="">
                                    <span className="avatar bg-pink brround avatar-md">MS</span>
                                </div>
                                <a className="wrapper w-100 ms-3" href="javascript:void(0);">
                                    <p className="mb-0 d-flex">
                                        <b>Prepare for Presentation</b>
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <i className="mdi mdi-clock text-muted me-1"></i>
                                            <small className="text-muted ms-auto">1 day ago</small>
                                            <p className="mb-0"></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="list d-flex align-items-center border-bottom p-3">
                                <div className="">
                                    <span className="avatar bg-purple brround avatar-md">L</span>
                                </div>
                                <a className="wrapper w-100 ms-3" href="javascript:void(0);">
                                    <p className="mb-0 d-flex">
                                        <b>Prepare for Presentation</b>
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <i className="mdi mdi-clock text-muted me-1"></i>
                                            <small className="text-muted ms-auto">45 minutes ago</small>
                                            <p className="mb-0"></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="list d-flex align-items-center p-3">
                                <div className="">
                                    <span className="avatar bg-blue brround avatar-md">U</span>
                                </div>
                                <a className="wrapper w-100 ms-3" href="javascript:void(0);">
                                    <p className="mb-0 d-flex">
                                        <b>Prepare for Presentation</b>
                                    </p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <i className="mdi mdi-clock text-muted me-1"></i>
                                            <small className="text-muted ms-auto">2 days ago</small>
                                            <p className="mb-0"></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className={`tab-pane p-0 ${activeTab === 'side2' ? 'active' : ''}`} id="side2">
                            <div className="list-group list-group-flush">
                                <div className="list-group-item d-flex align-items-center ">
                                    <div>
                                        <span className="avatar avatar-lg me-2 online avatar-rounded">
                                            <img src={face13} alt="img" />
                                        </span>
                                    </div>
                                    <div className="ms-3">
                                        <strong>Madeleine</strong> Hey! there I' am available....
                                        <div className="small text-muted">3 hours ago</div>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center border-top">
                                    <div>
                                        <span className="avatar avatar-lg me-2 online avatar-rounded">
                                            <img src={face12} alt="img" />
                                        </span>
                                    </div>
                                    <div className="ms-3">
                                        <strong>Anthony</strong> New product Launching...
                                        <div className="small text-muted">5 hour ago</div>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center border-top">
                                    <div>
                                        <span className="avatar avatar-lg me-2 online avatar-rounded">
                                            <img src={face1} alt="img" />
                                        </span>
                                    </div>
                                    <div className="ms-3">
                                        <strong>Olivia</strong> New Schedule Realease......
                                        <div className="small text-muted">45 minutes ago</div>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center border-top">
                                    <div>
                                        <span className="avatar avatar-lg me-2 online avatar-rounded">
                                            <img src={face10} alt="img" />
                                        </span>
                                    </div>
                                    <div className="ms-3">
                                        <strong>Madeleine</strong> Hey! there I' am available....
                                        <div className="small text-muted">3 hours ago</div>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center border-top">
                                    <div>
                                        <span className="avatar avatar-lg me-2 online avatar-rounded">
                                            <img src={face19} alt="img" />
                                        </span>
                                    </div>
                                    <div className="ms-3">
                                        <strong>Anthony</strong> New product Launching...
                                        <div className="small text-muted">5 hour ago</div>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center border-top">
                                    <div>
                                        <span className="avatar avatar-lg me-2 online avatar-rounded">
                                            <img src={face8} alt="img" />
                                        </span>
                                    </div>
                                    <div className="ms-3">
                                        <strong>Olivia</strong> New Schedule Realease......
                                        <div className="small text-muted">45 minutes ago</div>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center border-top">
                                    <div>
                                        <span className="avatar avatar-lg me-2 online avatar-rounded">
                                            <img src={face7} alt="img" />
                                        </span>
                                    </div>
                                    <div className="ms-3">
                                        <strong>Olivia</strong> Hey! there I' am available....
                                        <div className="small text-muted">12 minutes ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`tab-pane p-0 ${activeTab === 'side3' ? 'active' : ''}`} id="side3">
                            <div className="list-group list-group-flush">
                                <div className="list-group-item d-flex align-items-center ">
                                    <div>
                                        <span className="avatar avatar-md me-2 online avatar-rounded">
                                            <img src={face13} alt="img" />
                                        </span>
                                    </div>
                                    <div className="ms-2">
                                        <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">
                                            Mozelle Belt
                                        </div>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-light text-primary "
                                            data-bs-toggle="modal" data-bs-target="#chatmodel"><i
                                                className="fa fa-facebook"></i></a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center border-top">
                                    <div>
                                        <span className="avatar avatar-md me-2 online avatar-rounded">
                                            <img src={face3} alt="img" />
                                        </span>
                                    </div>
                                    <div className="ms-2">
                                        <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">
                                            Florinda Carasco
                                        </div>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-light text-primary "
                                            data-bs-toggle="modal" data-bs-target="#chatmodel"><i
                                                className="fa fa-facebook"></i></a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center border-top">
                                    <div>
                                        <span className="avatar avatar-md me-2 online avatar-rounded">
                                            <img src={face2} alt="img" />
                                        </span>
                                    </div>
                                    <div className="ms-2">
                                        <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">
                                            Alina Bernier
                                        </div>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-light text-primary "
                                            data-bs-toggle="modal" data-bs-target="#chatmodel"><i
                                                className="fa fa-facebook"></i></a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center border-top">
                                    <div>
                                        <span className="avatar avatar-md me-2 online avatar-rounded">
                                            <img src={face1} alt="img" />
                                        </span>
                                    </div>
                                    <div className="ms-2">
                                        <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">
                                            Zula Mclaughin
                                        </div>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-light text-primary "
                                            data-bs-toggle="modal" data-bs-target="#chatmodel"><i
                                                className="fa fa-facebook"></i></a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center border-top">
                                    <div>
                                        <span className="avatar avatar-md me-2 online avatar-rounded">
                                            <img src={face5} alt="img" />
                                        </span>
                                    </div>
                                    <div className="ms-2">
                                        <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">
                                            Isidro Heide
                                        </div>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-light text-primary "
                                            data-bs-toggle="modal" data-bs-target="#chatmodel"><i
                                                className="fa fa-facebook"></i></a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center border-top">
                                    <div>
                                        <span className="avatar avatar-md me-2 online avatar-rounded">
                                            <img src={face6} alt="img" />
                                        </span>
                                    </div>
                                    <div className="ms-2">
                                        <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">
                                            Mozelle Belt
                                        </div>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-light text-primary "><i
                                                className="fa fa-facebook"></i></a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center border-top">
                                    <div>
                                        <span className="avatar avatar-md me-2 online avatar-rounded">
                                            <img src={face7} alt="img" />
                                        </span>
                                    </div>
                                    <div className="ms-2">
                                        <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">
                                            Florinda Carasco
                                        </div>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-light text-primary "
                                            data-bs-toggle="modal" data-bs-target="#chatmodel"><i
                                                className="fa fa-facebook"></i></a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center border-top">
                                    <div>
                                        <span className="avatar avatar-md me-2 online avatar-rounded">
                                            <img src={face8} alt="img" />
                                        </span>
                                    </div>
                                    <div className="ms-2">
                                        <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">
                                            Alina Bernier
                                        </div>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-light  text-primary"><i
                                                className="fa fa-facebook"></i></a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center border-top">
                                    <div>
                                        <span className="avatar avatar-md me-2 online avatar-rounded">
                                            <img src={face9} alt="img" />
                                        </span>
                                    </div>
                                    <div className="ms-2">
                                        <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">
                                            Zula Mclaughin
                                        </div>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-light text-primary "
                                            data-bs-toggle="modal" data-bs-target="#chatmodel"><i
                                                className="fa fa-facebook"></i></a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center border-top">
                                    <div>
                                        <span className="avatar avatar-md me-2 online avatar-rounded">
                                            <img src={face10} alt="img" />
                                        </span>
                                    </div>
                                    <div className="ms-2">
                                        <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">
                                            Isidro Heide
                                        </div>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-light  text-primary"><i
                                                className="fa fa-facebook"></i></a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center border-top">
                                    <div>
                                        <span className="avatar avatar-md me-2 online avatar-rounded">
                                            <img src={face12} alt="img" />
                                        </span>
                                    </div>
                                    <div className="ms-2">
                                        <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">
                                            Florinda Carasco
                                        </div>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-light text-primary "
                                            data-bs-toggle="modal" data-bs-target="#chatmodel"><i
                                                className="fa fa-facebook"></i></a>
                                    </div>
                                </div>
                                <div className="list-group-item d-flex align-items-center border-top">
                                    <div>
                                        <span className="avatar avatar-md me-2 online avatar-rounded">
                                            <img src={face14} alt="img" />
                                        </span>
                                    </div>
                                    <div className="ms-2">
                                        <div className="fw-semibold" data-bs-toggle="modal" data-bs-target="#chatmodel">
                                            Alina Bernier
                                        </div>
                                    </div>
                                    <div className="ms-auto">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-light text-primary "
                                            data-bs-toggle="modal" data-bs-target="#chatmodel"><i
                                                className="fa fa-facebook"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sidebar-right */}
        </div>
    )
}
