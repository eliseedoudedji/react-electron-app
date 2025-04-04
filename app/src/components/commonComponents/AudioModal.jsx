import React from 'react'

// Import des images
import face6 from '../../pages/mainpages/assets/images/faces/6.jpg'

export default function AudioModal() {
    return (
        <div id="audiomodal" className="modal fade">
            <div className="modal-dialog" role="document">
                <div className="modal-content border-0">
                    <div className="modal-body mx-auto text-center p-5">
                        <h5>Hogo Voice call</h5>
                        <img src={face6} className="rounded-circle user-img-circle h-8 w-8 mt-4 mb-3"
                            alt="img" />
                        <h4 className="mb-1 fw-semibold">Daneil Scott</h4>
                        <h6 className="loading">Calling...</h6>
                        <div className="mt-5">
                            <div className="row">
                                <div className="col-4">
                                    <a className="icon icon-shape rounded-circle mb-0" href="javascript:void(0);">
                                        <i className="fa fa-volume-up bg-light text-dark"></i>
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a className="icon icon-shape rounded-circle text-white mb-0" href="javascript:void(0);"
                                        data-bs-dismiss="modal" aria-label="Close">
                                        <i className="fa fa-phone text-white bg-success"></i>
                                    </a>
                                </div>
                                <div className="col-4">
                                    <a className="icon icon-shape rounded-circle mb-0" href="javascript:void(0);">
                                        <i className="fa fa-microphone-slash bg-light text-dark"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* modal-body */}
                </div>
            </div>
            {/* modal-dialog */}
        </div>
    )
}
