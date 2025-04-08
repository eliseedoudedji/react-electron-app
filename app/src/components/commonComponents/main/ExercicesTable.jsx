import React, { useState } from 'react'
import { Link } from "react-router-dom";


export default function ExercicesTable() {

    return (
        <>
            {/* Start::app-content */}
            <div className="main-content app-content">
                <div className="p-3 header-secondary row">
                    <div className="col">
                        <div className="d-flex">
                            <a className="btn btn-danger d-flex" href="javascript:void(0);">
                                <i className="fe fe-rotate-cw me-2 mt-1" /> Upgrade{" "}
                            </a>
                        </div>
                    </div>
                    <div className="col col-auto">
                        <div className="btn-list">
                            <a
                                className="btn btn-outline-light border"
                                href="javascript:void(0);"
                            >
                                <i className="fe fe-help-circle me-1 mt-1" />
                                Support
                            </a>
                            <a className="btn btn-success me-0" href="javascript:void(0);">
                                <i className="fe fe-plus me-1 mt-1" /> Add New
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    {/* page-header */}
                    {/* Page Header */}
                    <div className="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
                        <div className="">
                            <div className="">
                                <nav>
                                    <ol className="breadcrumb mb-1 mb-md-0">
                                        <li className="breadcrumb-item">
                                            <a href="javascript:void(0);">Index</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            {" "}
                                            Dashboard-3
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="ms-auto pageheader-btn">
                            <nav>
                                <div className="breadcrumb mb-0">
                                    <div className="d-flex">
                                        <div className="input-group me-2">
                                            <div className="input-group-text text-muted bg-primary text-fixed-white me-0 border-0 pe-0">
                                                {" "}
                                                <i className="ri-calendar-line mt-1" />{" "}
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control flatpickr-input bg-primary text-fixed-white border-0 ps-2"
                                                id="daterange"
                                                placeholder="Events Settings"
                                            />
                                        </div>
                                        <a
                                            href="javascript:void(0);"
                                            className="btn btn-secondary text-fixed-white"
                                            data-bs-toggle="tooltip"
                                            title=""
                                            data-placement="bottom"
                                            data-original-title="Rating"
                                        >
                                            <span>
                                                <i className="fe fe-star" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    {/* Page Header Close */}
                    {/* End page-header */}
                    {/* ROW-1 */}
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xxl-3">
                            <div className="card custom-card">
                                <div className="card-header justify-content-between">
                                    <div>
                                        <div className="card-title">Projects</div>
                                    </div>
                                    <div className="card-options">
                                        <div className="form-check form-check-md form-switch">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                role="switch"
                                                id="flexSwitchCheckCheckedp"
                                                defaultChecked=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <div className="d-flex">
                                        <div>
                                            <h6 className="text-muted">Total Projects</h6>
                                            <h3 className="text-dark count mt-0 font-30 mb-0">3,456</h3>
                                        </div>
                                        <span className="ms-auto" id="total-projects" />
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <span className="text-start">
                                        <i className="fe fe-arrow-up  text-success me-1" /> 24 Uploads
                                    </span>
                                    <span className="float-end">
                                        <i className="fe fe-arrow-down  text-danger me-1" /> 05 Pendings
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xxl-3">
                            <div className="card custom-card">
                                <div className="card-header justify-content-between">
                                    <div>
                                        <div className="card-title">Employess</div>
                                    </div>
                                    <div className="card-options">
                                        <div className="form-check form-check-md form-switch">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                role="switch"
                                                id="flexSwitchCheckChecked"
                                                defaultChecked=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <div className="d-flex">
                                        <div>
                                            <h6 className="text-muted">Total Employess</h6>
                                            <h3 className="text-dark count mt-0 font-30 mb-0">4,738</h3>
                                        </div>
                                        <span className="ms-auto" id="total-employee" />
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <span className="text-start">
                                        <i className="fe fe-user  text-success me-1" /> 42 Male
                                    </span>
                                    <span className="float-end">
                                        <i className="fe fe-user  text-danger me-1" /> 35 Female
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xxl-3">
                            <div className="card custom-card">
                                <div className="card-header justify-content-between">
                                    <div>
                                        <div className="card-title">Task</div>
                                    </div>
                                    <div className="card-options">
                                        <div className="form-check form-check-md form-switch">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                role="switch"
                                                id="flexSwitchCheckChecked1"
                                                defaultChecked=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <div className="d-flex">
                                        <div>
                                            <h6 className="text-muted">Total Tasks</h6>
                                            <h3 className="text-dark count mt-0 font-30 mb-0">6,738</h3>
                                        </div>
                                        <span className="ms-auto" id="total-tasks" />
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <span className="text-start">
                                        <i className="fe fe-corner-left-up  text-success me-1" /> 08
                                        Active
                                    </span>
                                    <span className="float-end">
                                        <i className="fe fe-corner-left-down  text-danger me-1" /> 01
                                        Inactive
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xxl-3">
                            <div className="card custom-card">
                                <div className="card-header justify-content-between">
                                    <div>
                                        <div className="card-title">Earnings</div>
                                    </div>
                                    <div className="card-options">
                                        <div className="form-check form-check-md form-switch">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                role="switch"
                                                id="flexSwitchCheckCheckede"
                                                defaultChecked=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <div className="d-flex">
                                        <div>
                                            <h6 className="text-muted">Total Earnings</h6>
                                            <h3 className="text-dark count mt-0 font-30 mb-0">$18,963</h3>
                                        </div>
                                        <span className="ms-auto" id="total-earnings" />
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <span className="text-start">
                                        <i className="fe fe-dollar-sign  text-success me-1" /> 22%
                                        Profits
                                    </span>
                                    <span className="float-end">
                                        <i className="fe fe-trending-down  text-danger me-1" /> 5% Loss
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ROW-1 END */}
                    {/* ROW-2 START */}
                    <div className="row">
                        <div className="col-sm-12 col-lg-12 col-xl-7 col-xxl-8">
                            <div className="card custom-card">
                                <div className="card-header justify-content-between">
                                    <div>
                                        <div className="card-title">Project Report</div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row py-1">
                                        <div className="col-3 d-flex align-items-center justify-content-center flex-wrap">
                                            <p className="text-muted mb-0 me-2">
                                                <span className="legend bg-primary br-7" />
                                                Products
                                            </p>
                                            <span className="badge bg-danger-transparent">
                                                <i className="bx bx-trending-down me-1" />
                                                5%
                                            </span>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center flex-wrap">
                                            <p className="text-muted mb-0 me-2">
                                                <span className="legend bg-secondary br-7" />
                                                Sales Month
                                            </p>
                                            <span className="badge bg-success-transparent">
                                                <i className="bx bx-trending-up me-1" />
                                                22%
                                            </span>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center flex-wrap">
                                            <p className="text-muted mb-0 me-2">
                                                <span className="legend bg-success br-7" />
                                                Cost
                                            </p>
                                            <span className="badge bg-success-transparent">
                                                <i className="bx bx-trending-up me-1" />
                                                33%
                                            </span>
                                        </div>
                                        <div className="col-3 d-flex align-items-center justify-content-center flex-wrap">
                                            <p className="text-muted mb-0 me-2">
                                                <span className="legend bg-danger br-7" />
                                                Revenue
                                            </p>
                                            <span className="badge bg-danger-transparent">
                                                <i className="bx bx-trending-down me-1" />
                                                13%
                                            </span>
                                        </div>
                                    </div>
                                    <div id="salesOverview" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-5 col-lg-6">
                            <div className="card custom-card">
                                <div className="card-header">
                                    <div className="card-title">Activity</div>
                                    <div className="dropdown ms-auto dropdown-menu-end">
                                        <button
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                            className="btn ripple btn-sm btn-outline-light"
                                            data-bs-toggle="dropdown"
                                            id="dropdownMenuButton7"
                                            type="button"
                                        >
                                            View All
                                            <i className="fa fa-caret-down ms-1" />
                                        </button>
                                        <div className="dropdown-menu tx-12">
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                Weekly
                                            </a>
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                Monthly
                                            </a>
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                Annually
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <div className="list-group-item d-flex p-0 align-items-center border-0">
                                            <div className="d-flex">
                                                <a href="javascript:void(0);">
                                                    <img
                                                        className="media-object avatar avatar-md me-3 avatar-rounded"
                                                        alt="64x64"
                                                        src="../assets/images/faces/14.jpg"
                                                    />
                                                </a>
                                                <div className="mt-1">
                                                    <h6 className="mb-1 fs-14">
                                                        James Paig
                                                        <span className="fw-normal text-muted">
                                                            Updated
                                                        </span>{" "}
                                                        New project
                                                    </h6>
                                                    <span className="clearfix" />
                                                    <span className="fs-12 text-muted">20 mins ago </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="list-group-item d-flex p-0 align-items-center border-0">
                                            <div className="d-flex">
                                                <a href="javascript:void(0);">
                                                    <img
                                                        className="media-object avatar avatar-md me-3 avatar-rounded"
                                                        alt="64x64"
                                                        src="../assets/images/faces/8.jpg"
                                                    />
                                                </a>
                                                <div className="mt-1">
                                                    <h6 className="mb-1 fs-14">
                                                        Faith Harrits
                                                        <span className="fw-normal text-muted">
                                                            Completed Project
                                                        </span>
                                                        Ui Development
                                                    </h6>
                                                    <span className="clearfix" />
                                                    <span className="fs-12 text-muted">Just Now</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="list-group-item d-flex p-0 align-items-center border-0">
                                            <div className="d-flex">
                                                <a href="javascript:void(0);">
                                                    <img
                                                        className="media-object avatar avatar-md me-3 avatar-rounded"
                                                        alt="64x64"
                                                        src="../assets/images/faces/7.jpg"
                                                    />
                                                </a>
                                                <div className="mt-1">
                                                    <h6 className="mb-1 fs-14">
                                                        Liam Mille
                                                        <span className="fw-normal text-muted">
                                                            Attached design file in a project
                                                        </span>
                                                    </h6>
                                                    <span className="clearfix" />
                                                    <span className="fs-12 text-muted">1 day ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="list-group-item d-flex p-0 align-items-center border-0">
                                            <div className="d-flex">
                                                <a href="javascript:void(0);">
                                                    <img
                                                        className="media-object avatar avatar-md me-3 avatar-rounded"
                                                        alt="64x64"
                                                        src="../assets/images/faces/5.jpg"
                                                    />
                                                </a>
                                                <div className="mt-1">
                                                    <h6 className="mb-1 fs-14">
                                                        Kimberly Berry
                                                        <span className="fw-normal text-muted">
                                                            Completed Project
                                                        </span>
                                                        Ui Development
                                                    </h6>
                                                    <span className="clearfix" />
                                                    <span className="fs-12 text-muted">Just Now</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="list-group-item d-flex p-0 align-items-center border-0">
                                            <div className="d-flex">
                                                <a href="javascript:void(0);">
                                                    <img
                                                        className="media-object avatar avatar-md me-3 avatar-rounded"
                                                        alt="64x64"
                                                        src="../assets/images/faces/11.jpg"
                                                    />
                                                </a>
                                                <div className="mt-1">
                                                    <h6 className="mb-1 fs-14">
                                                        Andi Harrits
                                                        <span className="fw-normal text-muted">
                                                            html upload New file to server
                                                        </span>
                                                    </h6>
                                                    <span className="clearfix" />
                                                    <span className="fs-12 text-muted">1 day ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-0">
                                        <div className="list-group-item d-flex p-0 align-items-center border-0">
                                            <div className="d-flex">
                                                <a href="javascript:void(0);">
                                                    <img
                                                        className="media-object avatar avatar-md me-3 avatar-rounded"
                                                        alt="64x64"
                                                        src="../assets/images/faces/10.jpg"
                                                    />
                                                </a>
                                                <div className="mt-1">
                                                    <h6 className="mb-1 fs-14">
                                                        Forum Arri
                                                        <span className="fw-normal text-muted">
                                                            Theme Design And Styles Updated
                                                        </span>
                                                    </h6>
                                                    <span className="clearfix" />
                                                    <span className="fs-12 text-muted">2 Days ago</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="card custom-card">
                                <div className="card-header">
                                    <div className="card-title">Milestones</div>
                                    <div className="dropdown ms-auto dropdown-menu-end">
                                        <button
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                            className="btn ripple btn-sm btn-outline-light"
                                            data-bs-toggle="dropdown"
                                            id="dropdownMenuButton8"
                                            type="button"
                                        >
                                            View All
                                            <i className="fa fa-caret-down ms-1" />
                                        </button>
                                        <div className="dropdown-menu tx-12">
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                Weekly
                                            </a>
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                Monthly
                                            </a>
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                Annually
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-md rounded-circle bg-success-transparent text-success me-3">
                                                <i className="fe fe-airplay fs-14" />
                                            </div>
                                            <div className="mt-1">
                                                <h6 className="mb-1 font-weight-semibold fs-14">
                                                    Ui Update
                                                </h6>
                                                <span className="clearfix" />
                                                <span className="fs-14 text-muted">
                                                    <span className="font-weight-semibold">Deadline:</span> To
                                                    Day 2:30 Pm
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="d-flex">
                                            <div className="avatar avatar-md rounded-circle bg-orange-transparent text-orange me-3">
                                                <i className="fe fe-file" />
                                            </div>
                                            <div className="mt-1">
                                                <h6 className="mb-1 font-weight-semibold fs-14">
                                                    Psd Template
                                                </h6>
                                                <span className="clearfix" />
                                                <span className="fs-14 text-muted">
                                                    <span className="font-weight-semibold">Deadline:</span>{" "}
                                                    Tomorrow 11:00 Am
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="d-flex">
                                            <div className="avatar avatar-md rounded-circle bg-info-transparent text-info me-3">
                                                <i className="fe fe-trending-up" />
                                            </div>
                                            <div className="mt-1">
                                                <h6 className="mb-1 font-weight-semibold fs-14">
                                                    Version Update
                                                </h6>
                                                <span className="clearfix" />
                                                <span className="fs-14 text-muted">
                                                    <span className="font-weight-semibold">Deadline:</span> 1
                                                    Week To Left
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="d-flex">
                                            <div className="avatar avatar-md rounded-circle bg-primary-transparent text-primary me-3">
                                                <i className="fe fe-smartphone" />
                                            </div>
                                            <div className="mt-1">
                                                <h6 className="mb-1 font-weight-semibold fs-14">
                                                    Mobile App
                                                </h6>
                                                <span className="clearfix" />
                                                <span className="fs-14 text-muted">
                                                    <span className="font-weight-semibold">Deadline:</span> 3
                                                    days To Left
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-0">
                                        <div className="d-flex">
                                            <div className="avatar avatar-md rounded-circle bg-danger-transparent text-danger me-3">
                                                <i className="fe fe-trending-down" />
                                            </div>
                                            <div className="mt-1">
                                                <h6 className="mb-1 font-weight-semibold fs-14">
                                                    Androide Update
                                                </h6>
                                                <span className="clearfix" />
                                                <span className="fs-14 text-muted">
                                                    <span className="font-weight-semibold">Deadline:</span> 3
                                                    days To Left
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="card custom-card">
                                <div className="card-header">
                                    <div className="card-title">Tasks</div>
                                    <div className="dropdown ms-auto dropdown-menu-end">
                                        <button
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                            className="btn ripple btn-sm btn-outline-light"
                                            data-bs-toggle="dropdown"
                                            id="dropdownMenuButton9"
                                            type="button"
                                        >
                                            View All
                                            <i className="fa fa-caret-down ms-1" />
                                        </button>
                                        <div className="dropdown-menu tx-12">
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                Weekly
                                            </a>
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                Monthly
                                            </a>
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                Annually
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-item-spacing1">
                                        <li className="list-group-item px-0 pt-0 d-sm-flex align-items-center border-0">
                                            <img
                                                className="avatar avatar-lg avatar-rounded me-1 my-auto"
                                                src="../assets/images/faces/11.jpg"
                                                alt="Image description"
                                            />
                                            <div className="ms-sm-3 flex-grow-1">
                                                <h6 className="fw-senibold mb-0 mt-1 fs-14">
                                                    Nathaniel Bustos
                                                </h6>
                                                <span className="text-muted">Manager</span>
                                                <a href="" className="text-primary tx-13">
                                                    Reply
                                                </a>
                                            </div>
                                            <span className="badge bg-primary">pending</span>
                                        </li>
                                        <li className="list-group-item px-0  d-sm-flex align-items-center border-0">
                                            <img
                                                className="avatar avatar-lg avatar-rounded me-1 my-auto"
                                                src="../assets/images/faces/1.jpg"
                                                alt="Image description"
                                            />
                                            <div className="ms-sm-3 flex-grow-1">
                                                <h6 className="fw-senibold mb-0 mt-1 fs-14">
                                                    Latanya Kinard
                                                </h6>
                                                <span className="text-muted">Web Designer</span>
                                                <a href="" className="text-primary tx-13">
                                                    Reply
                                                </a>
                                            </div>
                                            <span className="badge bg-secondary">Completed</span>
                                        </li>
                                        <li className="list-group-item px-0 d-sm-flex align-items-center border-0">
                                            <img
                                                className="avatar avatar-lg avatar-rounded me-1 my-auto"
                                                src="../assets/images/faces/2.jpg"
                                                alt="Image description"
                                            />
                                            <div className="ms-sm-3 flex-grow-1">
                                                <h6 className="fw-senibold mb-0 mt-1 fs-14">
                                                    George Lujan
                                                </h6>
                                                <span className="text-muted">Founder</span>
                                                <a href="" className="text-primary tx-13">
                                                    Reply
                                                </a>
                                            </div>
                                            <span className="badge bg-success">Completed</span>
                                        </li>
                                        <li className="list-group-item px-0  d-sm-flex align-items-center border-0">
                                            <img
                                                className="avatar avatar-lg avatar-rounded me-1 my-auto"
                                                src="../assets/images/faces/3.jpg"
                                                alt="Image description"
                                            />
                                            <div className="ms-sm-3 flex-grow-1">
                                                <h6 className="fw-senibold mb-0 mt-1 fs-14">
                                                    Lujan arijan
                                                </h6>
                                                <span className="text-muted">Founder</span>
                                                <a href="" className="text-primary tx-13">
                                                    Reply
                                                </a>
                                            </div>
                                            <span className="badge bg-info">pending</span>
                                        </li>
                                        <li className="list-group-item px-0 pb-0 d-sm-flex align-items-center border-0">
                                            <img
                                                className="avatar avatar-lg avatar-rounded me-1 my-auto"
                                                src="../assets/images/faces/4.jpg"
                                                alt="Image description"
                                            />
                                            <div className="ms-sm-3 flex-grow-1">
                                                <h6 className="fw-senibold mb-0 mt-1 fs-14">
                                                    Varinel arijan
                                                </h6>
                                                <span className="text-muted">Sales Manager</span>
                                                <a href="" className="text-primary tx-13">
                                                    Reply
                                                </a>
                                            </div>
                                            <span className="badge bg-success">completed</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="card custom-card">
                                <div className="card-header">
                                    <div className="card-title">Upcoming Updates</div>
                                    <div className="dropdown ms-auto dropdown-menu-end">
                                        <button
                                            aria-expanded="false"
                                            aria-haspopup="true"
                                            className="btn ripple btn-sm btn-outline-light"
                                            data-bs-toggle="dropdown"
                                            id="dropdownMenuButton10"
                                            type="button"
                                        >
                                            View All
                                            <i className="fa fa-caret-down ms-1" />
                                        </button>
                                        <div className="dropdown-menu tx-12">
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                Weekly
                                            </a>
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                Monthly
                                            </a>
                                            <a className="dropdown-item" href="javascript:void(0);">
                                                Annually
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body py-4">
                                    <div className="mb-4">
                                        <div className="d-sm-flex justify-content-between flex-wrap">
                                            <div className="d-flex">
                                                <div className="avatar rounded-circle bg-primary-transparent me-2">
                                                    <i className="bi bi-people fs-16" />
                                                </div>
                                                <div className="">
                                                    <h5 className="mb-1 mb-0 fs-14 font-weight-semibold">
                                                        Meeting with client
                                                    </h5>
                                                    <span className="text-muted">video conference</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div className="min-w-fit-content font-weight-semibold d-inline-flex">
                                                    <span className="text-muted">
                                                        <i className="fe fe-clock d-inline-block me-1 tx-13" />
                                                        09:00
                                                    </span>
                                                    <span className="mx-2">To</span>
                                                    <span className="text-muted">
                                                        <i className="fe fe-clock d-inline-block me-1 tx-13" />
                                                        12:00
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="d-sm-flex justify-content-between flex-wrap">
                                            <div className="d-flex">
                                                <div className="avatar rounded-circle bg-secondary-transparent me-2">
                                                    <i className="bi bi-gift  fs-16" />
                                                </div>
                                                <div className="">
                                                    <h5 className="mb-1 mb-0 fs-14 font-weight-semibold">
                                                        Jack's Birthday
                                                    </h5>
                                                    <span className="text-muted">Down Town</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div className="min-w-fit-content font-weight-semibold d-inline-flex">
                                                    <span className="text-muted">
                                                        <i className="fe fe-clock d-inline-block me-1 tx-13" />
                                                        08:00
                                                    </span>
                                                    <span className="mx-2">To</span>
                                                    <span className="text-muted">
                                                        <i className="fe fe-clock d-inline-block me-1 tx-13" />
                                                        12:00
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="d-sm-flex justify-content-between flex-wrap">
                                            <div className="d-flex">
                                                <div className="avatar rounded-circle bg-orange-transparent me-2">
                                                    <i className="bi bi-camera-video  fs-16" />
                                                </div>
                                                <div className="">
                                                    <h5 className="mb-1 mb-0 fs-14 font-weight-semibold">
                                                        Video Conference
                                                    </h5>
                                                    <span className="text-muted">Labore nonumy eos</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div className="min-w-fit-content font-weight-semibold d-inline-flex">
                                                    <span className="text-muted">
                                                        <i className="fe fe-clock d-inline-block me-1 tx-13" />
                                                        12:00
                                                    </span>
                                                    <span className="mx-2">To</span>
                                                    <span className="text-muted">
                                                        <i className="fe fe-clock d-inline-block me-1 tx-13" />
                                                        10:00
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="d-sm-flex justify-content-between flex-wrap">
                                            <div className="d-flex">
                                                <div className="avatar rounded-circle bg-info-transparent me-2">
                                                    <i className="bi bi-calendar  fs-16" />
                                                </div>
                                                <div className="">
                                                    <h5 className="mb-1 mb-0 fs-14 font-weight-semibold">
                                                        Appointment With Client
                                                    </h5>
                                                    <span className="text-muted">video conference</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div className="min-w-fit-content font-weight-semibold d-inline-flex">
                                                    <span className="text-muted">
                                                        <i className="fe fe-clock d-inline-block me-1 tx-13" />
                                                        12:00
                                                    </span>
                                                    <span className="mx-2">To</span>
                                                    <span className="text-muted">
                                                        <i className="fe fe-clock d-inline-block me-1 tx-13" />
                                                        10:00
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-0">
                                        <div className="d-sm-flex justify-content-between flex-wrap">
                                            <div className="d-flex">
                                                <div className="avatar rounded-circle bg-warning-transparent me-2">
                                                    <i className="bi bi-megaphone  fs-16" />
                                                </div>
                                                <div className="">
                                                    <h5 className="mb-1 mb-0 fs-14 font-weight-semibold">
                                                        Important Announcements
                                                    </h5>
                                                    <span className="text-muted">Golden Park</span>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div className="min-w-fit-content font-weight-semibold d-inline-flex">
                                                    <span className="text-muted">
                                                        <i className="fe fe-clock d-inline-block me-1 tx-13" />
                                                        12:00
                                                    </span>
                                                    <span className="mx-2">To</span>
                                                    <span className="text-muted">
                                                        <i className="fe fe-clock d-inline-block me-1 tx-13" />
                                                        10:00
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ROW-2 END */}
                    {/* ROW-3  Start*/}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card custom-card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Product Summary</div>
                                    <div className="btn-group btn-sm">
                                        <button type="button" className="btn btn-light btn-sm">
                                            <span className="">Today</span>
                                        </button>
                                        <button type="button" className="btn btn-light btn-sm">
                                            <span className="">Month</span>
                                        </button>
                                        <button type="button" className="btn btn-light btn-sm">
                                            <span className="">Year</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-sm-flex mb-4 justify-content-between">
                                        <div>
                                            <span className="">Show</span>
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
                                            <span className="">Entries</span>
                                        </div>
                                        <div className="d-flex gap-2 mt-1 mt-sm-0">
                                            <div>
                                                <input
                                                    className="form-control form-control-sm"
                                                    type="text"
                                                    placeholder="Search Here"
                                                    aria-label=".form-control-sm example"
                                                />
                                            </div>
                                            <div className="dropdown">
                                                <a
                                                    href="javascript:void(0);"
                                                    className="btn btn-primary btn-sm btn-wave waves-effect waves-light"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Sort By
                                                    <i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block" />
                                                </a>
                                                <ul className="dropdown-menu" role="menu">
                                                    <li>
                                                        <a className="dropdown-item" href="javascript:void(0);">
                                                            New
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="javascript:void(0);">
                                                            Popular
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="javascript:void(0);">
                                                            Relevant
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table
                                            className="table table-bordered text-nowrap mb-0"
                                            id="projectSummary"
                                        >
                                            <thead>
                                                <tr>
                                                    <th className="wd-5p tx-center fw-bold">S.No.</th>
                                                    <th className="wd-25p fw-bold">Title</th>
                                                    <th className="text-center fw-bold">Progress</th>
                                                    <th className="text-center fw-bold">Status</th>
                                                    <th className="fw-bold">Start Date</th>
                                                    <th className="fw-bold">End Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="tx-center">1</td>
                                                    <td>
                                                        <span className="tx-14">Home Page</span>
                                                    </td>
                                                    <td>
                                                        <div className="text-center">
                                                            <span className="btn btn-outline-primary btn-sm">
                                                                76%
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <span className="badge badge-sm rounded-pill bg-info-transparent text-info">
                                                            in progress
                                                        </span>
                                                    </td>
                                                    <td>14-04-2022</td>
                                                    <td>20-07-2022</td>
                                                </tr>
                                                <tr>
                                                    <td className="tx-center">2</td>
                                                    <td>
                                                        <span className="tx-14">Landing Design</span>
                                                    </td>
                                                    <td>
                                                        <div className="text-center">
                                                            <span className="btn btn-outline-warning btn-sm">
                                                                76%
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <span className="badge badge-sm rounded-pill bg-info-transparent text-info">
                                                            in progress
                                                        </span>
                                                    </td>
                                                    <td>20-04-2022</td>
                                                    <td>15-08-2022</td>
                                                </tr>
                                                <tr>
                                                    <td className="tx-center">3</td>
                                                    <td>
                                                        <span className="tx-14">New Template Design</span>
                                                    </td>
                                                    <td>
                                                        <div className="text-center">
                                                            <span className="btn btn-outline-info btn-sm">
                                                                96%
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <span className="badge badge-sm rounded-pill bg-danger-transparent text-danger">
                                                            pending
                                                        </span>
                                                    </td>
                                                    <td>29-05-2022</td>
                                                    <td>20-09-2022</td>
                                                </tr>
                                                <tr>
                                                    <td className="tx-center">4</td>
                                                    <td>
                                                        <span className="tx-14">
                                                            HR Management Template Design
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className="text-center">
                                                            <span className="btn btn-outline-success btn-sm">
                                                                76%
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <span className="badge badge-sm rounded-pill bg-info-transparent text-info">
                                                            in progress
                                                        </span>
                                                    </td>
                                                    <td>18-04-2022</td>
                                                    <td>14-09-2022</td>
                                                </tr>
                                                <tr>
                                                    <td className="tx-center">5</td>
                                                    <td>
                                                        <span className="tx-14">Designing New Template</span>
                                                    </td>
                                                    <td>
                                                        <div className="text-center">
                                                            <span className="btn btn-outline-primary btn-sm">
                                                                53%
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <span className="badge badge-sm rounded-pill bg-success-transparent text-success">
                                                            completed
                                                        </span>
                                                    </td>
                                                    <td>11-04-2022</td>
                                                    <td>10-07-2022</td>
                                                </tr>
                                                <tr>
                                                    <td className="tx-center">6</td>
                                                    <td>
                                                        <span className="tx-14">Documentation Project</span>
                                                    </td>
                                                    <td>
                                                        <div className="text-center">
                                                            <span className="btn btn-outline-danger btn-sm text-dsnger">
                                                                96%
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <span className="badge badge-sm rounded-pill bg-info-transparent text-info">
                                                            in progress
                                                        </span>
                                                    </td>
                                                    <td>18-04-2022</td>
                                                    <td>12-10-2022</td>
                                                </tr>
                                                <tr>
                                                    <td className="tx-center">7</td>
                                                    <td>
                                                        <span className="tx-14">Developing Backend</span>
                                                    </td>
                                                    <td>
                                                        <div className="text-center">
                                                            <span className="btn btn-outline-info btn-sm">
                                                                49%
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <span className="badge badge-sm rounded-pill bg-success-transparent text-success">
                                                            completed
                                                        </span>
                                                    </td>
                                                    <td>12-04-2022</td>
                                                    <td>17-10-2022</td>
                                                </tr>
                                                <tr>
                                                    <td className="tx-center">8</td>
                                                    <td>
                                                        <span className="tx-14">
                                                            Multipurpose Dashboard Template
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className="text-center">
                                                            <span className="btn btn-outline-success btn-sm text-seccess">
                                                                82%
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <span className="badge badge-sm rounded-pill bg-danger-transparent text-danger">
                                                            pending
                                                        </span>
                                                    </td>
                                                    <td>16-05-2022</td>
                                                    <td>27-10-2022</td>
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
