import React from 'react'
// Import CSS files
import '../../pages/mainpages/assets/css/styles.min.css'
import '../../pages/mainpages/assets/css/icons.css'
import '../../pages/mainpages/assets/libs/node-waves/waves.min.css'
import '../../pages/mainpages/assets/libs/simplebar/simplebar.min.css'
import '../../pages/mainpages/assets/libs/flatpickr/flatpickr.min.css'
import '../../pages/mainpages/assets/libs/@simonwep/pickr/themes/nano.min.css'
import '../../pages/mainpages/assets/libs/choices.js/public/assets/styles/choices.min.css'
import '../../pages/mainpages/assets/libs/apexcharts/apexcharts.css'

// Import logo images
import desktopLogo from '../../pages/mainpages/assets/images/brand-logos/desktop-logo.png'
import toggleLogo from '../../pages/mainpages/assets/images/brand-logos/toggle-logo.png'
import desktopWhite from '../../pages/mainpages/assets/images/brand-logos/desktop-white.png'
import toggleDark from '../../pages/mainpages/assets/images/brand-logos/toggle-dark.png'
import toggleWhite from '../../pages/mainpages/assets/images/brand-logos/toggle-white.png'

// Import flag images
import usFlag from '../../pages/mainpages/assets/images/flags/us_flag.jpg'
import spainFlag from '../../pages/mainpages/assets/images/flags/spain_flag.jpg'
import frenchFlag from '../../pages/mainpages/assets/images/flags/french_flag.jpg'
import germanyFlag from '../../pages/mainpages/assets/images/flags/germany_flag.jpg'
import italyFlag from '../../pages/mainpages/assets/images/flags/italy_flag.jpg'
import russiaFlag from '../../pages/mainpages/assets/images/flags/russia_flag.jpg'

// Import faces/avatars
import face1 from '../../pages/mainpages/assets/images/faces/1.jpg'
import face2 from '../../pages/mainpages/assets/images/faces/2.jpg'
import face3 from '../../pages/mainpages/assets/images/faces/3.jpg'
import face4 from '../../pages/mainpages/assets/images/faces/4.jpg'
import face9 from '../../pages/mainpages/assets/images/faces/9.jpg'

// Import media images
import media23 from '../../pages/mainpages/assets/images/media/23.jpg'

// Import ecommerce images
import ecommerce1 from '../../pages/mainpages/assets/images/ecommerce/1.jpg'
import ecommerce3 from '../../pages/mainpages/assets/images/ecommerce/3.jpg'
import ecommerce4 from '../../pages/mainpages/assets/images/ecommerce/4.jpg'
import ecommerce5 from '../../pages/mainpages/assets/images/ecommerce/5.jpg'
import ecommerce6 from '../../pages/mainpages/assets/images/ecommerce/6.jpg'

// Note: JavaScript files should be imported differently or loaded in index.html
// import '../../pages/mainpages/assets/libs/choices.js/public/assets/scripts/choices.min.js'
export default function Header() {
    return (

        <header className="app-header">
            {/* Start::main-header-container */}
            <div className="main-header-container container-fluid">
                {/* Start::header-content-left */}
                <div className="header-content-left">
                    {/* Start::header-element */}
                    <div className="header-element">
                        <div className="horizontal-logo">
                            <a href="index.html" className="header-logo">
                                <img
                                    src={desktopLogo}
                                    alt="logo"
                                    className="desktop-logo"
                                />
                                <img
                                    src={toggleLogo}
                                    alt="logo"
                                    className="toggle-logo"
                                />
                                <img
                                    src={desktopWhite}
                                    alt="logo"
                                    className="desktop-dark"
                                />
                                <img
                                    src={toggleDark}
                                    alt="logo"
                                    className="toggle-dark"
                                />
                                <img
                                    src={desktopWhite}
                                    alt="logo"
                                    className="desktop-white"
                                />
                                <img
                                    src={toggleWhite}
                                    alt="logo"
                                    className="toggle-white"
                                />
                            </a>
                        </div>
                    </div>
                    {/* End::header-element */}
                    {/* Start::header-element */}
                    <div className="header-element">
                        {/* Start::header-link */}
                        <a
                            aria-label="Hide Sidebar"
                            className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle mx-0"
                            data-bs-toggle="sidebar"
                            href="javascript:void(0);"
                        >
                            <span />
                        </a>
                        {/* End::header-link */}
                    </div>
                    {/* End::header-element */}
                    {/* Start::header-element */}
                    <div className="header-element header-search">
                        {/* Start::header-link */}
                        <div className="main-header-search ms-3 d-none d-lg-block my-auto">
                            <input
                                className="form-control"
                                placeholder="Search..."
                                type="search"
                            />
                            <button className="btn">
                                <i className="fe fe-search" />
                            </button>
                        </div>
                        {/* End::header-link */}
                    </div>
                    {/* End::header-element */}
                    {/* Start::header-element */}
                    <div className="header-element dropdown-element">
                        {/* Start::header-link */}
                        <div className="dropdown my-auto mx-2">
                            <button
                                className="btn btn-outline-light dropdown-toggle fs-14"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fe fe-grid me-2 align-middle" /> UI Kit{" "}
                                <i className="ri-arrow-down-s-line  align-bottom" />
                            </button>
                            <div className="mega-dropdown nav-item">
                                <ul className="dropdown-menu mega-dropdown-menu container row">
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <div className="divOne">
                                                <div className="position-relative">
                                                    <div className="arrow-ribbon">Upcoming events</div>
                                                    <img
                                                        className="rounded-1 megamenu-img"
                                                        alt="img"
                                                        src={media23}
                                                    />
                                                    <div className="btn-absolute">
                                                        <a
                                                            className="btn btn-sm rounded-5 btn-primary"
                                                            href="javascript:void(0);"
                                                        >
                                                            More Info
                                                            <i className="bi bi-arrow-right ms-1" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-4">
                                                <div className="d-flex justify-content-between">
                                                    <div className="divTwo">
                                                        <div className="d-flex align-items-center mb-2">
                                                            <span className="legend bg-primary m-0 me-1 br-7" />
                                                            <h6 className="mb-0 fs-14">Pages</h6>
                                                        </div>
                                                        <a
                                                            className="dropdown-item px-0 fs-12"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="bi bi-chevron-right text-muted me-1 fs-10 angle" />
                                                            Documentation
                                                        </a>
                                                        <a
                                                            className="dropdown-item px-0 fs-12"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="bi bi-chevron-right text-muted me-1 fs-10" />
                                                            Multi Pages
                                                        </a>
                                                        <a
                                                            className="dropdown-item px-0 fs-12"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="bi bi-chevron-right text-muted me-1 fs-10" />
                                                            Edit Profile
                                                        </a>
                                                        <a
                                                            className="dropdown-item px-0 fs-12"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="bi bi-chevron-right text-muted me-1 fs-10" />
                                                            Mail Settings
                                                        </a>
                                                        <a
                                                            className="dropdown-item px-0 fs-12"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="bi bi-chevron-right text-muted me-1 fs-10" />
                                                            Default Settings
                                                        </a>
                                                        <a
                                                            className="dropdown-item px-0 fs-12"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="bi bi-chevron-right text-muted me-1 fs-10" />
                                                            More Settings
                                                        </a>
                                                    </div>
                                                    <div className="divThree">
                                                        <div className="d-flex align-items-center mb-2">
                                                            <span className="legend bg-secondary m-0 me-1 br-7" />
                                                            <h6 className="mb-0  fs-14">Engagement</h6>
                                                        </div>
                                                        <a
                                                            className="dropdown-item px-0 fs-12"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="bi bi-chevron-right text-muted me-1 fs-10" />
                                                            Searcher
                                                        </a>
                                                        <a
                                                            className="dropdown-item px-0 fs-12"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="bi bi-chevron-right text-muted me-1 fs-10" />
                                                            Companies
                                                        </a>
                                                        <a
                                                            className="dropdown-item px-0 fs-12"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="bi bi-chevron-right text-muted me-1 fs-10" />
                                                            Lists
                                                        </a>
                                                        <a
                                                            className="dropdown-item px-0 fs-12"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="bi bi-chevron-right text-muted me-1 fs-10" />
                                                            Saved Searches
                                                        </a>
                                                        <a
                                                            className="dropdown-item px-0 fs-12"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="bi bi-chevron-right text-muted me-1 fs-10" />
                                                            Enrichment
                                                        </a>
                                                        <a
                                                            className="dropdown-item px-0 fs-12"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="bi bi-chevron-right text-muted me-1 fs-10" />
                                                            Settings
                                                        </a>
                                                    </div>
                                                    <div className="divFour">
                                                        <div className="d-flex align-items-center mb-2">
                                                            <span className="legend bg-success m-0 me-1 br-7" />
                                                            <h6 className="mb-0 fs-14">Resources</h6>
                                                        </div>
                                                        <a
                                                            className="dropdown-item px-0 fs-12"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="bi bi-chevron-right text-muted me-1 fs-10" />
                                                            Blog
                                                        </a>
                                                        <a
                                                            className="dropdown-item px-0 fs-12"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="bi bi-chevron-right text-muted me-1 fs-10" />
                                                            Customer Stories
                                                        </a>
                                                        <a
                                                            className="dropdown-item px-0 fs-12"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="bi bi-chevron-right text-muted me-1 fs-10" />
                                                            Video Tutorials
                                                        </a>
                                                        <a
                                                            className="dropdown-item px-0 fs-12"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="bi bi-chevron-right text-muted me-1 fs-10" />
                                                            Documentation
                                                        </a>
                                                        <a
                                                            className="dropdown-item px-0 fs-12"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="bi bi-chevron-right text-muted me-1 fs-10" />
                                                            Legal
                                                        </a>
                                                        <a
                                                            className="dropdown-item px-0 fs-12"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="bi bi-chevron-right text-muted me-1 fs-10" />
                                                            More
                                                        </a>
                                                    </div>
                                                    <div className="divFive">
                                                        <div className="d-flex align-items-center mb-2">
                                                            <span className="legend bg-danger m-0 me-1 br-7" />
                                                            <h6 className="mb-0 fs-14">Company</h6>
                                                        </div>
                                                        <a
                                                            className="dropdown-item px-0 fs-12"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="bi bi-chevron-right text-muted me-1 fs-10" />
                                                            Press
                                                        </a>
                                                        <a
                                                            className="dropdown-item px-0 fs-12"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="bi bi-chevron-right text-muted me-1 fs-10" />
                                                            Careers
                                                        </a>
                                                        <a
                                                            className="dropdown-item px-0 fs-12"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="bi bi-chevron-right text-muted me-1 fs-10" />
                                                            Pages
                                                        </a>
                                                        <a
                                                            className="dropdown-item px-0 fs-12"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="bi bi-chevron-right text-muted me-1 fs-10" />
                                                            Comunity
                                                        </a>
                                                        <a
                                                            className="dropdown-item px-0 fs-12"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="bi bi-chevron-right text-muted me-1 fs-10" />
                                                            Work Culture
                                                        </a>
                                                        <a
                                                            className="dropdown-item px-0 fs-12"
                                                            href="javascript:void(0);"
                                                        >
                                                            <i className="bi bi-chevron-right text-muted me-1 fs-10" />
                                                            About Us
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* End::header-link */}
                    </div>
                    {/* End::header-element */}
                    {/* Start::header-element */}
                    <div className="header-element  dropdown-element">
                        {/* Start::header-link */}
                        <div className="dropdown my-auto">
                            <button
                                className="btn btn-outline-light dropdown-toggle fs-14"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Settings <i className="ri-arrow-down-s-line  mg-l-3 align-bottom" />
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <a className="dropdown-item" href="javascript:void(0);">
                                        Option 1
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="javascript:void(0);">
                                        Option 2
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="javascript:void(0);">
                                        Option 3
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="javascript:void(0);">
                                        Option 4
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="javascript:void(0);">
                                        Option 5
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* End::header-link */}
                    </div>
                    {/* End::header-element */}
                </div>
                {/* End::header-content-left */}
                {/* Start::header-content-right */}
                <div className="header-content-right">
                    <div className="header-element header-search  d-lg-none d-block">
                        {/* Start::header-link */}
                        <a
                            href="javascript:void(0);"
                            className="header-link search-icon"
                            id="searchButton"
                        >
                            <i className="bx bx-search-alt-2 header-link-icon" />
                        </a>
                        {/* End::header-link */}
                        <li className="nav-link ">
                            <form className="navbar-form" role="search" id="myNavbarForm">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search"
                                    />
                                    <span className="input-group-btn">
                                        <button
                                            type="reset"
                                            className="btn btn-default close-btn text-muted"
                                        >
                                            <i className="fa fa-times" />
                                        </button>
                                    </span>
                                </div>
                            </form>
                        </li>
                    </div>
                    {/* Start::header-element */}
                    <div className="header-element country-selector">
                        {/* Start::header-link|dropdown-toggle */}
                        <a
                            href="javascript:void(0);"
                            className="header-link dropdown-toggle"
                            data-bs-auto-close="outside"
                            data-bs-toggle="dropdown"
                        >
                            <img
                                src={usFlag}
                                alt="img"
                                className="rounded-circle"
                            />
                        </a>
                        {/* End::header-link|dropdown-toggle */}
                        <ul
                            className="main-header-dropdown dropdown-menu dropdown-menu-end"
                            data-popper-placement="none"
                        >
                            <li>
                                <a
                                    className="dropdown-item d-flex align-items-center"
                                    href="javascript:void(0);"
                                >
                                    <span className="avatar avatar-xs lh-1 me-2">
                                        <img src={usFlag} alt="img" />
                                    </span>
                                    English
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item d-flex align-items-center"
                                    href="javascript:void(0);"
                                >
                                    <span className="avatar avatar-xs lh-1 me-2">
                                        <img src={spainFlag} alt="img" />
                                    </span>
                                    Spanish
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item d-flex align-items-center"
                                    href="javascript:void(0);"
                                >
                                    <span className="avatar avatar-xs lh-1 me-2">
                                        <img src={frenchFlag} alt="img" />
                                    </span>
                                    French
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item d-flex align-items-center"
                                    href="javascript:void(0);"
                                >
                                    <span className="avatar avatar-xs lh-1 me-2">
                                        <img src={germanyFlag} alt="img" />
                                    </span>
                                    German
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item d-flex align-items-center"
                                    href="javascript:void(0);"
                                >
                                    <span className="avatar avatar-xs lh-1 me-2">
                                        <img src={italyFlag} alt="img" />
                                    </span>
                                    Italian
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item d-flex align-items-center"
                                    href="javascript:void(0);"
                                >
                                    <span className="avatar avatar-xs lh-1 me-2">
                                        <img src={russiaFlag} alt="img" />
                                    </span>
                                    Russian
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* End::header-element */}
                    {/* Start::header-element */}
                    <div className="header-element header-theme-mode">
                        {/* Start::header-link|layout-setting */}
                        <a href="javascript:void(0);" className="header-link layout-setting">
                            <span className="light-layout">
                                {/* Start::header-link-icon */}
                                <i className="bx bx-moon  fe-moon header-link-icon" />
                                {/* End::header-link-icon */}
                            </span>
                            <span className="dark-layout">
                                {/* Start::header-link-icon */}
                                <i className="bx bx-sun header-link-icon" />
                                {/* End::header-link-icon */}
                            </span>
                        </a>
                        {/* End::header-link|layout-setting */}
                    </div>
                    {/* End::header-element */}
                    {/* Start::header-element */}
                    <div className="header-element header-fullscreen">
                        {/* Start::header-link */}
                        <a
                            onclick="openFullscreen();"
                            href="javascript:void(0);"
                            className="header-link"
                        >
                            <i className="bx bx-fullscreen full-screen-open header-link-icon" />
                            <i className="bx bx-exit-fullscreen full-screen-close header-link-icon d-none" />
                            {/* <box-icon name='exit-fullscreen'></box-icon> */}
                        </a>
                        {/* End::header-link */}
                    </div>
                    {/* End::header-element */}
                    {/* Start::header-element */}
                    <div className="header-element meassage-dropdown">
                        {/* Start::header-link|dropdown-toggle */}
                        <a
                            href="javascript:void(0);"
                            className="header-link dropdown-toggle"
                            data-bs-auto-close="outside"
                            data-bs-toggle="dropdown"
                        >
                            <i className="bx bx-message-square-dots  header-link-icon" />
                            <span className="pulse-danger" />
                        </a>
                        {/* End::header-link|dropdown-toggle */}
                        {/* Start::main-header-dropdown */}
                        <div
                            className="main-header-dropdown dropdown-menu dropdown-menu-end overflow-hidden"
                            data-popper-placement="none"
                        >
                            <div className="p-3 bg-primary">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-17 fw-500">Messages</p>
                                    <span
                                        className="badge bg-success fw-normal rounded-pill"
                                        id="message-data"
                                    >
                                        5 Unread
                                    </span>
                                </div>
                            </div>
                            <div className="dropdown-divider" />
                            <ul className="list-unstyled mb-0" id="header-notification-scroll1">
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start">
                                        <div className="pe-2">
                                            <img
                                                src={face1}
                                                alt="img"
                                                className="rounded-circle avatar"
                                            />
                                        </div>
                                        <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-0 fw-semibold">
                                                    <a href="chat.html">
                                                        Gerninia
                                                        <span className="text-muted fs-12 fw-normal ps-1">
                                                            {" "}
                                                            6:45 am
                                                        </span>
                                                    </a>
                                                </p>
                                                <span className="text-muted fw-normal fs-12 header-notification-text">
                                                    Commented on file Guest list....
                                                </span>
                                            </div>
                                            <div>
                                                <a
                                                    href="javascript:void(0);"
                                                    className="min-w-fit-content text-muted me-1 dropdown-item-close3"
                                                >
                                                    <i className="ti ti-x fs-16" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start">
                                        <div className="pe-2">
                                            <img
                                                src={face2}
                                                alt="img"
                                                className="rounded-circle avatar"
                                            />
                                        </div>
                                        <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-0 fw-semibold">
                                                    <a href="chat.html">
                                                        Peter Theil
                                                        <span className="text-muted fs-12 fw-normal ps-1">
                                                            {" "}
                                                            5 hours ago
                                                        </span>
                                                    </a>
                                                </p>
                                                <span className="text-muted fw-normal fs-12 header-notification-text">
                                                    Brizid is in the Warehouse...
                                                </span>
                                            </div>
                                            <div>
                                                <a
                                                    href="javascript:void(0);"
                                                    className="min-w-fit-content text-muted me-1 dropdown-item-close3"
                                                >
                                                    <i className="ti ti-x fs-16" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start">
                                        <div className="pe-2">
                                            <img
                                                src={face3}
                                                alt="img"
                                                className="rounded-circle avatar"
                                            />
                                        </div>
                                        <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-0 fw-semibold">
                                                    <a href="chat.html">
                                                        John vally
                                                        <span className="text-muted fs-12 fw-normal ps-1">
                                                            45 mintues ago
                                                        </span>
                                                    </a>
                                                </p>
                                                <span className="text-muted fw-normal fs-12 header-notification-text">
                                                    New Product Realease......
                                                </span>
                                            </div>
                                            <div>
                                                <a
                                                    href="javascript:void(0);"
                                                    className="min-w-fit-content text-muted me-1 dropdown-item-close3"
                                                >
                                                    <i className="ti ti-x fs-16" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start">
                                        <div className="pe-2">
                                            <img
                                                src={face4}
                                                alt="img"
                                                className="rounded-circle avatar"
                                            />
                                        </div>
                                        <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-0 fw-semibold">
                                                    <a href="chat.html">
                                                        Samonu Show
                                                        <span className="text-muted fs-12 fw-normal ps-1">
                                                            20 mintues ago
                                                        </span>
                                                    </a>
                                                </p>
                                                <span className="text-muted fw-normal fs-12 header-notification-text">
                                                    New Meetup Started......
                                                </span>
                                            </div>
                                            <div>
                                                <a
                                                    href="javascript:void(0);"
                                                    className="min-w-fit-content text-muted me-1 dropdown-item-close3"
                                                >
                                                    <i className="ti ti-x fs-16" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start">
                                        <div className="pe-2">
                                            <img
                                                src={face2}
                                                alt="img"
                                                className="rounded-circle avatar"
                                            />
                                        </div>
                                        <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-0 fw-semibold">
                                                    <a href="chat.html">
                                                        Senrio
                                                        <span className="text-muted fs-12 fw-normal ps-1">
                                                            {" "}
                                                            10 hours ago
                                                        </span>
                                                    </a>
                                                </p>
                                                <span className="text-muted fw-normal fs-12 header-notification-text">
                                                    New product Launching...
                                                </span>
                                            </div>
                                            <div>
                                                <a
                                                    href="javascript:void(0);"
                                                    className="min-w-fit-content text-muted me-1 dropdown-item-close3"
                                                >
                                                    <i className="ti ti-x fs-16" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className=" p-3 empty-header-item1 border-top dropdown-footer">
                                <div className="d-grid">
                                    <a href="chat.html" className="btn text-muted p-0 text-primary">
                                        View all
                                    </a>
                                </div>
                            </div>
                            <div className="p-5 empty-item1 d-none">
                                <div className="text-center">
                                    <span className="avatar avatar-xl avatar-rounded bg-primary-transparent">
                                        <i className="ri-mail-close-line fs-2" />
                                    </span>
                                    <h6 className="fw-semibold mt-3">No New Messages</h6>
                                </div>
                            </div>
                        </div>
                        {/* End::main-header-dropdown */}
                    </div>
                    {/* End::header-element */}
                    {/* Start::header-element */}
                    <div className="header-element notifications-dropdown">
                        {/* Start::header-link|dropdown-toggle */}
                        <a
                            href="javascript:void(0);"
                            className="header-link dropdown-toggle"
                            data-bs-auto-close="outside"
                            data-bs-toggle="dropdown"
                        >
                            <i className="bx bx-bell  header-link-icon" />
                            <span
                                className="badge bg-secondary fw-normal rounded-pill cart-badge"
                                id="notifiation-data"
                            >
                                5
                            </span>
                        </a>
                        {/* End::header-link|dropdown-toggle */}
                        {/* Start::main-header-dropdown */}
                        <div
                            className="main-header-dropdown dropdown-menu dropdown-menu-end overflow-hidden"
                            data-popper-placement="none"
                        >
                            <div className="p-3 bg-primary overflow-hidden">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-17 fw-500">Notifications</p>
                                    <span className="badge bg-success fw-normal rounded-pill">
                                        Mark All Read
                                    </span>
                                </div>
                            </div>
                            <div className="dropdown-divider" />
                            <ul className="list-unstyled mb-0" id="header-notification-scroll">
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start">
                                        <div className="pe-2">
                                            <span className="avatar avatar-md bg-primary-transparent rounded-3">
                                                <i className="bx bx-duplicate fs-18" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-0 fw-semibold">
                                                    <a href="chat.html"> Updates Available</a>
                                                </p>
                                                <span className="text-muted fw-normal fs-12 header-notification-text">
                                                    2 days ago
                                                </span>
                                            </div>
                                            <div>
                                                <a
                                                    href="javascript:void(0);"
                                                    className="min-w-fit-content text-muted me-1 dropdown-item-close2"
                                                >
                                                    <i className="ti ti-x fs-16" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start">
                                        <div className="pe-2">
                                            <span className="avatar avatar-md bg-danger-transparent rounded-3">
                                                <i className="bx bx-folder-open fs-18" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-0 fw-semibold">
                                                    <a href="chat.html"> New files available</a>
                                                </p>
                                                <span className="text-muted fw-normal fs-12 header-notification-text">
                                                    10 hour ago{" "}
                                                </span>
                                            </div>
                                            <div>
                                                <a
                                                    href="javascript:void(0);"
                                                    className="min-w-fit-content text-muted me-1 dropdown-item-close2"
                                                >
                                                    <i className="ti ti-x fs-16" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start">
                                        <div className="pe-2">
                                            <span className="avatar avatar-md bg-success-transparent rounded-3">
                                                <i className="bx bx-cart fs-18" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-0 fw-semibold">
                                                    <a href="chat.html"> New Order Received</a>
                                                </p>
                                                <span className="text-muted fw-normal fs-12 header-notification-text">
                                                    1 hour ago
                                                </span>
                                            </div>
                                            <div>
                                                <a
                                                    href="javascript:void(0);"
                                                    className="min-w-fit-content text-muted me-1 dropdown-item-close2"
                                                >
                                                    <i className="ti ti-x fs-16" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start">
                                        <div className="pe-2">
                                            <span className="avatar avatar-md bg-warning-transparent rounded-3">
                                                <i className="bx bx-envelope fs-18" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-0 fw-semibold">
                                                    <a href="chat.html">New Updates available</a>
                                                </p>
                                                <span className="text-muted fw-normal fs-12 header-notification-text">
                                                    1 day ago
                                                </span>
                                            </div>
                                            <div>
                                                <a
                                                    href="javascript:void(0);"
                                                    className="min-w-fit-content text-muted me-1 dropdown-item-close2"
                                                >
                                                    <i className="ti ti-x fs-16" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start">
                                        <div className="pe-2">
                                            <span className="avatar avatar-md bg-danger-transparent rounded-3">
                                                <i className="bx bx-file fs-18" />
                                            </span>
                                        </div>
                                        <div className="flex-grow-1 d-flex align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-0 fw-semibold">
                                                    <a href="chat.html"> 2 verified registrations </a>
                                                </p>
                                                <span className="text-muted fw-normal fs-12 header-notification-text">
                                                    2 hour ago
                                                </span>
                                            </div>
                                            <div>
                                                <a
                                                    href="javascript:void(0);"
                                                    className="min-w-fit-content text-muted me-1 dropdown-item-close2"
                                                >
                                                    <i className="ti ti-x fs-16" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className=" p-3 empty-header-item2 border-top dropdown-footer">
                                <div className="d-grid">
                                    <a href="chat.html" className="btn text-muted p-0 text-primary">
                                        View all
                                    </a>
                                </div>
                            </div>
                            <div className="p-5 empty-item2 d-none">
                                <div className="text-center">
                                    <span className="avatar avatar-xl avatar-rounded bg-secondary-transparent">
                                        <i className="ri-notification-off-line fs-2" />
                                    </span>
                                    <h6 className="fw-semibold mt-3">No New Notifications</h6>
                                </div>
                            </div>
                        </div>
                        {/* End::main-header-dropdown */}
                    </div>
                    {/* End::header-element */}
                    {/* Start::header-element */}
                    <div className="header-element cart-dropdown">
                        {/* Start::header-link|dropdown-toggle */}
                        <a
                            href="javascript:void(0);"
                            className="header-link dropdown-toggle"
                            data-bs-auto-close="outside"
                            data-bs-toggle="dropdown"
                        >
                            <i className="bx bx-cart-alt  header-link-icon" />
                            <span
                                className="badge rounded-pill bg-success cart-badge fw-normal"
                                id="cart-badge"
                            >
                                5
                            </span>
                        </a>
                        {/* End::header-link|dropdown-toggle */}
                        {/* Start::main-header-dropdown */}
                        <div
                            className="main-header-dropdown dropdown-menu dropdown-menu-end overflow-hidden"
                            data-popper-placement="none"
                        >
                            <div className="p-3 bg-primary">
                                <div className="d-flex align-items-center justify-content-between">
                                    <p className="mb-0 fs-17 fw-500">Cart Items</p>
                                    <span
                                        className="badge bg-success fw-normal rounded-pill"
                                        id="cart-data"
                                    >
                                        5 Items
                                    </span>
                                </div>
                            </div>
                            <div>
                                <hr className="dropdown-divider" />
                            </div>
                            <ul className="list-unstyled mb-0" id="header-cart-items-scroll">
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start cart-dropdown-item">
                                        <img
                                            src={ecommerce1}
                                            alt="img"
                                            className="avatar avatar-md avatar-rounded br-5 me-3"
                                        />
                                        <div className="flex-grow-1">
                                            <div className="d-flex align-items-start justify-content-between mb-0">
                                                <div className="mb-0 fs-13 text-dark fw-semibold">
                                                    <a href="cart.html">Flower Pot</a>
                                                </div>
                                                <div className="my-auto">
                                                    <a
                                                        href="javascript:void(0);"
                                                        className="header-cart-remove float-end dropdown-item-close"
                                                    >
                                                        <i className="fe fe-trash text-danger" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="min-w-fit-content d-flex align-items-start justify-content-between">
                                                <ul className="header-product-item d-flex">
                                                    <li> Price: $ 39.99 </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start cart-dropdown-item">
                                        <img
                                            src={ecommerce3}
                                            alt="img"
                                            className="avatar avatar-md avatar-rounded br-5 me-3"
                                        />
                                        <div className="flex-grow-1">
                                            <div className="d-flex align-items-start justify-content-between mb-0">
                                                <div className="mb-0 fs-13 text-dark fw-semibold">
                                                    <a href="cart.html">AirPods</a>
                                                </div>
                                                <div className="my-auto">
                                                    <a
                                                        href="javascript:void(0);"
                                                        className="header-cart-remove float-end dropdown-item-close"
                                                    >
                                                        <i className="fe fe-trash text-danger" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="min-w-fit-content d-flex align-items-start justify-content-between">
                                                <ul className="header-product-item">
                                                    <li> Price: $ 29.99 </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start cart-dropdown-item">
                                        <img
                                            src={ecommerce5}
                                            alt="img"
                                            className="avatar avatar-md avatar-rounded br-5 me-3"
                                        />
                                        <div className="flex-grow-1">
                                            <div className="d-flex align-items-start justify-content-between mb-0">
                                                <div className="mb-0 fs-13 text-dark fw-semibold">
                                                    <a href="cart.html">HeadPhones</a>
                                                </div>
                                                <div className="my-auto">
                                                    <a
                                                        href="javascript:void(0);"
                                                        className="header-cart-remove float-end dropdown-item-close"
                                                    >
                                                        <i className="fe fe-trash text-danger" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="min-w-fit-content d-flex align-items-start justify-content-between">
                                                <ul className="header-product-item d-flex">
                                                    <li> Price: $ 20.99 </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start cart-dropdown-item">
                                        <img
                                            src={ecommerce4}
                                            alt="img"
                                            className="avatar avatar-md avatar-rounded br-5 me-3"
                                        />
                                        <div className="flex-grow-1">
                                            <div className="d-flex align-items-start justify-content-between mb-0">
                                                <div className="mb-0 fs-13 text-dark fw-semibold">
                                                    <a href="cart.html">Sports Shooes</a>
                                                </div>
                                                <div className="my-auto">
                                                    <a
                                                        href="javascript:void(0);"
                                                        className="header-cart-remove float-end dropdown-item-close"
                                                    >
                                                        <i className="fe fe-trash text-danger" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="min-w-fit-content d-flex align-items-start justify-content-between">
                                                <ul className="header-product-item d-flex">
                                                    <li> Price: $ 19.99 </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-item">
                                    <div className="d-flex align-items-start cart-dropdown-item">
                                        <img
                                            src={ecommerce6}
                                            alt="img"
                                            className="avatar avatar-md avatar-rounded br-5 me-3"
                                        />
                                        <div className="flex-grow-1">
                                            <div className="d-flex align-items-start justify-content-between mb-0">
                                                <div className="mb-0 fs-13 text-dark fw-semibold">
                                                    <a href="cart.html">Camera Lence</a>
                                                </div>
                                                <div className="my-auto">
                                                    <a
                                                        href="javascript:void(0);"
                                                        className="header-cart-remove float-end dropdown-item-close"
                                                    >
                                                        <i className="fe fe-trash text-danger" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-start justify-content-between">
                                                <ul className="header-product-item d-flex">
                                                    <li> Price: $ 59.99 </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="p-3 empty-header-item border-top dropdown-footer">
                                <div className="d-grid">
                                    <a
                                        href="checkout.html"
                                        className="btn text-muted p-0 text-primary"
                                    >
                                        Proceed to checkout
                                    </a>
                                </div>
                            </div>
                            <div className="p-5 empty-item d-none">
                                <div className="text-center">
                                    <span className="avatar avatar-xl avatar-rounded bg-warning-transparent">
                                        <i className="ri-shopping-cart-2-line fs-2" />
                                    </span>
                                    <h6 className="fw-bold mb-1 mt-3">Your Cart is Empty</h6>
                                    <span className="mb-3 fw-normal fs-13 d-block">
                                        Add some items to make me happy :)
                                    </span>
                                    <a
                                        href="shop.html"
                                        className="btn btn-primary btn-wave btn-sm m-1"
                                        data-abc="true"
                                    >
                                        continue shopping <i className="bi bi-arrow-right ms-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* End::main-header-dropdown */}
                    </div>
                    {/* End::header-element */}
                    {/* Start::header-element */}
                    <div className="header-element profile-1">
                        {/* Start::header-link|dropdown-toggle */}
                        <a
                            href="javascript:void(0);"
                            className=" dropdown-toggle leading-none header-link d-flex justify-content-center"
                            id="mainHeaderProfile"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-expanded="false"
                        >
                            <img
                                src={face9}
                                alt="img"
                                width={32}
                                height={32}
                                className="rounded-circle"
                            />
                            {/* <div className="d-flex align-items-center">
                                                                                                                          </div> */}
                        </a>
                        {/* End::header-link|dropdown-toggle */}
                        <div
                            className="main-header-dropdown dropdown-menu dropdown-menu-end overflow-hidden profile-dropdown"
                            data-popper-placement="none"
                        >
                            <div className="main-header-profile bg-primary border-bottom p-3">
                                <div className="d-flex wd-100p">
                                    <div className="main-img-user">
                                        <img
                                            alt=""
                                            src={face9}
                                            className="avatar avatar-md"
                                        />
                                    </div>
                                    <div className="ms-2 my-auto text-white">
                                        <h6 className="mb-0 text-fixed-white">Petey Cruiser</h6>
                                        <span className=" text-fixed-white op-7 fs-13">
                                            Premium Member
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <a className="dropdown-item d-flex" href="profile.html">
                                <i className="bx bx-user-circle fs-18  me-2" />
                                Profile
                            </a>
                            <a className="dropdown-item d-flex" href="editprofile.html">
                                <i className="bx bx-cog  fs-18  me-2" /> Edit Profile
                            </a>
                            <a className="dropdown-item d-flex" href="email.html">
                                <i className="bx bxs-inbox  fs-18  me-2" />
                                Inbox
                            </a>
                            <a className="dropdown-item d-flex" href="chat.html">
                                <i className="bx bx-envelope  fs-18  me-2" />
                                Messages
                            </a>
                            <a className="dropdown-item d-flex" href="settings.html">
                                <i className="bx bx-slider-alt  fs-18  me-2" /> Account Settings
                            </a>
                            <a className="dropdown-item d-flex" href="signin.html">
                                <i className="bx bx-log-out  fs-18  me-2" />
                                Sign Out
                            </a>
                        </div>
                    </div>
                    {/* End::header-element */}
                    {/* Start::header-element */}
                    <div className="header-element  d-none d-sm-block">
                        {/* Start::header-link|switcher-icon */}
                        <a
                            href="javascript:void(0);"
                            className="header-link"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvassidebar"
                        >
                            <i className="bx bx-grid-alt header-link-icon" />
                        </a>
                        {/* End::header-link|switcher-icon */}
                    </div>
                    {/* End::header-element */}
                    {/* Start::header-element */}
                    <div className="header-element">
                        {/* Start::header-link|switcher-icon */}
                        <a
                            href="javascript:void(0);"
                            className="header-link me-0"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#switcher-canvas"
                        >
                            <i className="bx bx-cog header-link-icon" />
                        </a>
                        {/* End::header-link|switcher-icon */}
                    </div>
                    {/* End::header-element */}
                </div>
                {/* End::header-content-right */}
            </div>
            {/* End::main-header-container */}
        </header>


    )
}
