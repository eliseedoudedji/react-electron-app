import React from 'react'

// Import des images
import face6 from '../../pages/mainpages/assets/images/faces/6.jpg'
import face9 from '../../pages/mainpages/assets/images/faces/9.jpg'

export default function ChatModal() {
    return (
        <div className="modal fade" id="chatmodel" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-right chatbox" role="document">
                <div className="modal-content chat border-0">
                    <div className="card custom-card overflow-hidden mb-0 border-0">
                        {/* action-header */}
                        <div className="action-header clearfix">
                            <div className="float-start hidden-xs d-flex ms-2">
                                <div className="img_cont me-3">
                                    <img src={face6} className="rounded-circle user_img" alt="img" />
                                </div>
                                <div className="align-items-center mt-2">
                                    <h5 className="text-fixed-white mb-0 fw-semibold">Daneil Scott</h5>
                                    <span className="dot-label bg-success"></span><span
                                        className="me-3 text-fixed-white">online</span>
                                </div>
                            </div>
                            <ul className="ah-actions actions align-items-center">
                                <li className="call-icon  ms-5">
                                    <a href="#" className="d-done d-md-block phone-button" data-bs-toggle="modal"
                                        data-bs-target="#audiomodal">
                                        <i className="si si-phone"></i>
                                    </a>
                                </li>
                                <li className="video-icon">
                                    <a href="#" className="d-done d-md-block phone-button" data-bs-toggle="modal"
                                        data-bs-target="#videomodal">
                                        <i className="si si-camrecorder"></i>
                                    </a>
                                </li>
                                <li className="dropdown">
                                    <a href="#" data-bs-toggle="dropdown" aria-expanded="true">
                                        <i className="si si-options-vertical"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><i className="fa fa-user-circle"></i> View profile</li>
                                        <li><i className="fa fa-users"></i>Add friends</li>
                                        <li><i className="fa fa-plus"></i> Add to group</li>
                                        <li><i className="fa fa-ban"></i> Block</li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" className="" data-bs-dismiss="modal" aria-label="Close">
                                        <i className="si si-close text-white"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* action-header end */}

                        {/* msg_card_body */}
                        <div className="card-body msg_card_body" id="msg_card_body">
                            <div className="chat-box-single-line">
                                <abbr className="timestamp">February 1st, 2019</abbr>
                            </div>
                            <div className="d-flex justify-content-start">
                                <div className="img_cont_msg">
                                    <img src={face6} className="rounded-circle user_img_msg"
                                        alt="img" />
                                </div>
                                <div className="msg_cotainer">
                                    Hi, how are you Jenna Side?
                                    <span className="msg_time">8:40 AM, Today</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <div className="msg_cotainer_send">
                                    Hi Connor Paige i am good tnx how about you?
                                    <span className="msg_time_send">8:55 AM, Today</span>
                                </div>
                                <div className="img_cont_msg">
                                    <img src={face9} className="rounded-circle user_img_msg"
                                        alt="img" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-start">
                                <div className="img_cont_msg">
                                    <img src={face6} className="rounded-circle user_img_msg"
                                        alt="img" />
                                </div>
                                <div className="msg_cotainer">
                                    I am good too, thank you for your chat template
                                    <span className="msg_time">9:00 AM, Today</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <div className="msg_cotainer_send">
                                    You welcome Connor Paige
                                    <span className="msg_time_send">9:05 AM, Today</span>
                                </div>
                                <div className="img_cont_msg">
                                    <img src={face9} className="rounded-circle user_img_msg"
                                        alt="img" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-start">
                                <div className="img_cont_msg">
                                    <img src={face6} className="rounded-circle user_img_msg"
                                        alt="img" />
                                </div>
                                <div className="msg_cotainer">
                                    Yo, Can you update Views?
                                    <span className="msg_time">9:07 AM, Today</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end mb-4">
                                <div className="msg_cotainer_send">
                                    But I must explain to you how all this mistaken born and I
                                    will give
                                    <span className="msg_time_send">9:10 AM, Today</span>
                                </div>
                                <div className="img_cont_msg">
                                    <img src={face9} className="rounded-circle user_img_msg"
                                        alt="img" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-start">
                                <div className="img_cont_msg">
                                    <img src={face6} className="rounded-circle user_img_msg"
                                        alt="img" />
                                </div>
                                <div className="msg_cotainer">
                                    Yo, Can you update Views?
                                    <span className="msg_time">9:07 AM, Today</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end mb-4">
                                <div className="msg_cotainer_send">
                                    But I must explain to you how all this mistaken born and I
                                    will give
                                    <span className="msg_time_send">9:10 AM, Today</span>
                                </div>
                                <div className="img_cont_msg">
                                    <img src={face9} className="rounded-circle user_img_msg"
                                        alt="img" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-start">
                                <div className="img_cont_msg">
                                    <img src={face6} className="rounded-circle user_img_msg"
                                        alt="img" />
                                </div>
                                <div className="msg_cotainer">
                                    Yo, Can you update Views?
                                    <span className="msg_time">9:07 AM, Today</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end mb-4">
                                <div className="msg_cotainer_send">
                                    But I must explain to you how all this mistaken born and I
                                    will give
                                    <span className="msg_time_send">9:10 AM, Today</span>
                                </div>
                                <div className="img_cont_msg">
                                    <img src={face9} className="rounded-circle user_img_msg"
                                        alt="img" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-start">
                                <div className="img_cont_msg">
                                    <img src={face6} className="rounded-circle user_img_msg"
                                        alt="img" />
                                </div>
                                <div className="msg_cotainer">
                                    Okay Bye, text you later..
                                    <span className="msg_time">9:12 AM, Today</span>
                                </div>
                            </div>
                        </div>
                        {/* msg_card_body end */}
                        {/* card-footer */}
                        <div className="card-footer">
                            <div className="msb-reply d-flex">
                                <div className="input-group">
                                    <input className="form-control" placeholder="Typing...." type="text" />
                                    <button className="btn btn-primary br-ts-0 br-bs-0" type="button">
                                        <i className="fa fa-paper-plane" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* card-footer end */}
                    </div>
                </div>
            </div>
        </div>
    )
}
