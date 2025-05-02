import React from 'react'

export default function journalContent() {
  return (
    <>
  {/* Start Switcher */}
  <div
    className="offcanvas offcanvas-end"
    tabIndex={-1}
    id="switcher-canvas"
    aria-labelledby="offcanvasRightLabel"
  >
    <div className="offcanvas-header border-bottom">
      <h5 className="offcanvas-title text-default" id="offcanvasRightLabel">
        Switcher
      </h5>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body">
      <nav className="border-bottom border-block-end-dashed">
        <div
          className="nav nav-tabs nav-justified"
          id="switcher-main-tab"
          role="tablist"
        >
          <button
            className="nav-link active"
            id="switcher-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#switcher-home"
            type="button"
            role="tab"
            aria-controls="switcher-home"
            aria-selected="true"
          >
            Theme Styles
          </button>
          <button
            className="nav-link"
            id="switcher-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#switcher-profile"
            type="button"
            role="tab"
            aria-controls="switcher-profile"
            aria-selected="false"
          >
            Theme Colors
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active border-0"
          id="switcher-home"
          role="tabpanel"
          aria-labelledby="switcher-home-tab"
          tabIndex={0}
        >
          <div className="">
            <p className="switcher-style-head">Theme Color Mode:</p>
            <div className="row switcher-style gx-0">
              <div className="col-4">
                <div className="form-check switch-select">
                  <label
                    className="form-check-label"
                    htmlFor="switcher-light-theme"
                  >
                    Light
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="theme-style"
                    id="switcher-light-theme"
                    defaultChecked=""
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-check switch-select">
                  <label
                    className="form-check-label"
                    htmlFor="switcher-dark-theme"
                  >
                    Dark
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="theme-style"
                    id="switcher-dark-theme"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="switcher-style-head">Directions:</p>
            <div className="row switcher-style gx-0">
              <div className="col-4">
                <div className="form-check switch-select">
                  <label className="form-check-label" htmlFor="switcher-ltr">
                    LTR
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="direction"
                    id="switcher-ltr"
                    defaultChecked=""
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-check switch-select">
                  <label className="form-check-label" htmlFor="switcher-rtl">
                    RTL
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="direction"
                    id="switcher-rtl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="switcher-style-head">Navigation Styles:</p>
            <div className="row switcher-style gx-0">
              <div className="col-4">
                <div className="form-check switch-select">
                  <label
                    className="form-check-label"
                    htmlFor="switcher-vertical"
                  >
                    Vertical
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="navigation-style"
                    id="switcher-vertical"
                    defaultChecked=""
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-check switch-select">
                  <label
                    className="form-check-label"
                    htmlFor="switcher-horizontal"
                  >
                    Horizontal
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="navigation-style"
                    id="switcher-horizontal"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="navigation-menu-styles">
            <p className="switcher-style-head">
              Vertical &amp; Horizontal Menu Styles:
            </p>
            <div className="row switcher-style gx-0 pb-2 gy-2">
              <div className="col-4">
                <div className="form-check switch-select">
                  <label
                    className="form-check-label"
                    htmlFor="switcher-menu-click"
                  >
                    Menu Click
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="navigation-menu-styles"
                    id="switcher-menu-click"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-check switch-select">
                  <label
                    className="form-check-label"
                    htmlFor="switcher-menu-hover"
                  >
                    Menu Hover
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="navigation-menu-styles"
                    id="switcher-menu-hover"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-check switch-select">
                  <label
                    className="form-check-label"
                    htmlFor="switcher-icon-click"
                  >
                    Icon Click
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="navigation-menu-styles"
                    id="switcher-icon-click"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-check switch-select">
                  <label
                    className="form-check-label"
                    htmlFor="switcher-icon-hover"
                  >
                    Icon Hover
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="navigation-menu-styles"
                    id="switcher-icon-hover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="sidemenu-layout-styles">
            <p className="switcher-style-head">Sidemenu Layout Styles:</p>
            <div className="row switcher-style gx-0 pb-2 gy-2">
              <div className="col-sm-6">
                <div className="form-check switch-select">
                  <label
                    className="form-check-label"
                    htmlFor="switcher-default-menu"
                  >
                    Default Menu
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sidemenu-layout-styles"
                    id="switcher-default-menu"
                    defaultChecked=""
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-check switch-select">
                  <label
                    className="form-check-label"
                    htmlFor="switcher-closed-menu"
                  >
                    Closed Menu
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sidemenu-layout-styles"
                    id="switcher-closed-menu"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-check switch-select">
                  <label
                    className="form-check-label"
                    htmlFor="switcher-icontext-menu"
                  >
                    Icon Text
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sidemenu-layout-styles"
                    id="switcher-icontext-menu"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-check switch-select">
                  <label
                    className="form-check-label"
                    htmlFor="switcher-icon-overlay"
                  >
                    Icon Overlay
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sidemenu-layout-styles"
                    id="switcher-icon-overlay"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-check switch-select">
                  <label
                    className="form-check-label"
                    htmlFor="switcher-detached"
                  >
                    Detached
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sidemenu-layout-styles"
                    id="switcher-detached"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-check switch-select">
                  <label
                    className="form-check-label"
                    htmlFor="switcher-double-menu"
                  >
                    Double Menu
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="sidemenu-layout-styles"
                    id="switcher-double-menu"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="switcher-style-head">Page Styles:</p>
            <div className="row switcher-style gx-0">
              <div className="col-4">
                <div className="form-check switch-select">
                  <label
                    className="form-check-label"
                    htmlFor="switcher-regular"
                  >
                    Regular
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="page-styles"
                    id="switcher-regular"
                    defaultChecked=""
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-check switch-select">
                  <label
                    className="form-check-label"
                    htmlFor="switcher-classic"
                  >
                    Classic
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="page-styles"
                    id="switcher-classic"
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-check switch-select">
                  <label className="form-check-label" htmlFor="switcher-modern">
                    Modern
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="page-styles"
                    id="switcher-modern"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="switcher-style-head">Layout Width Styles:</p>
            <div className="row switcher-style gx-0">
              <div className="col-4">
                <div className="form-check switch-select">
                  <label
                    className="form-check-label"
                    htmlFor="switcher-full-width"
                  >
                    Full Width
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="layout-width"
                    id="switcher-full-width"
                    defaultChecked=""
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-check switch-select">
                  <label className="form-check-label" htmlFor="switcher-boxed">
                    Boxed
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="layout-width"
                    id="switcher-boxed"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="switcher-style-head">Menu Positions:</p>
            <div className="row switcher-style gx-0">
              <div className="col-4">
                <div className="form-check switch-select">
                  <label
                    className="form-check-label"
                    htmlFor="switcher-menu-fixed"
                  >
                    Fixed
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="menu-positions"
                    id="switcher-menu-fixed"
                    defaultChecked=""
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-check switch-select">
                  <label
                    className="form-check-label"
                    htmlFor="switcher-menu-scroll"
                  >
                    Scrollable
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="menu-positions"
                    id="switcher-menu-scroll"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="switcher-style-head">Header Positions:</p>
            <div className="row switcher-style gx-0">
              <div className="col-4">
                <div className="form-check switch-select">
                  <label
                    className="form-check-label"
                    htmlFor="switcher-header-fixed"
                  >
                    Fixed
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="header-positions"
                    id="switcher-header-fixed"
                    defaultChecked=""
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-check switch-select">
                  <label
                    className="form-check-label"
                    htmlFor="switcher-header-scroll"
                  >
                    Scrollable
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="header-positions"
                    id="switcher-header-scroll"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="switcher-style-head">Loader:</p>
            <div className="row switcher-style gx-0">
              <div className="col-4">
                <div className="form-check switch-select">
                  <label
                    className="form-check-label"
                    htmlFor="switcher-loader-enable"
                  >
                    Enable
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="page-loader"
                    id="switcher-loader-enable"
                    defaultChecked=""
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-check switch-select">
                  <label
                    className="form-check-label"
                    htmlFor="switcher-loader-disable"
                  >
                    Disable
                  </label>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="page-loader"
                    id="switcher-loader-disable"
                    defaultChecked=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade border-0"
          id="switcher-profile"
          role="tabpanel"
          aria-labelledby="switcher-profile-tab"
          tabIndex={0}
        >
          <div>
            <div className="theme-colors">
              <p className="switcher-style-head">Menu Colors:</p>
              <div className="d-flex switcher-style pb-2">
                <div className="form-check switch-select me-3">
                  <input
                    className="form-check-input color-input color-white"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Light Menu"
                    type="radio"
                    name="menu-colors"
                    id="switcher-menu-light"
                    defaultChecked=""
                  />
                </div>
                <div className="form-check switch-select me-3">
                  <input
                    className="form-check-input color-input color-dark"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Dark Menu"
                    type="radio"
                    name="menu-colors"
                    id="switcher-menu-dark"
                  />
                </div>
                <div className="form-check switch-select me-3">
                  <input
                    className="form-check-input color-input color-primary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Color Menu"
                    type="radio"
                    name="menu-colors"
                    id="switcher-menu-primary"
                  />
                </div>
                <div className="form-check switch-select me-3">
                  <input
                    className="form-check-input color-input color-gradient"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Gradient Menu"
                    type="radio"
                    name="menu-colors"
                    id="switcher-menu-gradient"
                  />
                </div>
                <div className="form-check switch-select me-3">
                  <input
                    className="form-check-input color-input color-transparent"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Transparent Menu"
                    type="radio"
                    name="menu-colors"
                    id="switcher-menu-transparent"
                  />
                </div>
              </div>
              <div className="px-4 pb-3 text-muted fs-11">
                Note:If you want to change color Menu dynamically change from
                below Theme Primary color picker
              </div>
            </div>
            <div className="theme-colors">
              <p className="switcher-style-head">Header Colors:</p>
              <div className="d-flex switcher-style pb-2">
                <div className="form-check switch-select me-3">
                  <input
                    className="form-check-input color-input color-white"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Light Header"
                    type="radio"
                    name="header-colors"
                    id="switcher-header-light"
                    defaultChecked=""
                  />
                </div>
                <div className="form-check switch-select me-3">
                  <input
                    className="form-check-input color-input color-dark"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Dark Header"
                    type="radio"
                    name="header-colors"
                    id="switcher-header-dark"
                  />
                </div>
                <div className="form-check switch-select me-3">
                  <input
                    className="form-check-input color-input color-primary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Color Header"
                    type="radio"
                    name="header-colors"
                    id="switcher-header-primary"
                  />
                </div>
                <div className="form-check switch-select me-3">
                  <input
                    className="form-check-input color-input color-gradient"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Gradient Header"
                    type="radio"
                    name="header-colors"
                    id="switcher-header-gradient"
                  />
                </div>
                <div className="form-check switch-select me-3">
                  <input
                    className="form-check-input color-input color-transparent"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Transparent Header"
                    type="radio"
                    name="header-colors"
                    id="switcher-header-transparent"
                  />
                </div>
              </div>
              <div className="px-4 pb-3 text-muted fs-11">
                Note:If you want to change color Header dynamically change from
                below Theme Primary color picker
              </div>
            </div>
            <div className="theme-colors">
              <p className="switcher-style-head">Theme Primary:</p>
              <div className="d-flex flex-wrap align-items-center switcher-style">
                <div className="form-check switch-select me-3">
                  <input
                    className="form-check-input color-input color-primary-1"
                    type="radio"
                    name="theme-primary"
                    id="switcher-primary"
                  />
                </div>
                <div className="form-check switch-select me-3">
                  <input
                    className="form-check-input color-input color-primary-2"
                    type="radio"
                    name="theme-primary"
                    id="switcher-primary1"
                  />
                </div>
                <div className="form-check switch-select me-3">
                  <input
                    className="form-check-input color-input color-primary-3"
                    type="radio"
                    name="theme-primary"
                    id="switcher-primary2"
                  />
                </div>
                <div className="form-check switch-select me-3">
                  <input
                    className="form-check-input color-input color-primary-4"
                    type="radio"
                    name="theme-primary"
                    id="switcher-primary3"
                  />
                </div>
                <div className="form-check switch-select me-3">
                  <input
                    className="form-check-input color-input color-primary-5"
                    type="radio"
                    name="theme-primary"
                    id="switcher-primary4"
                  />
                </div>
                <div className="form-check switch-select ps-0 mt-1 color-primary-light">
                  <div className="theme-container-primary" />
                  <div className="pickr-container-primary" />
                </div>
              </div>
            </div>
            <div className="theme-colors">
              <p className="switcher-style-head">Theme Background:</p>
              <div className="d-flex flex-wrap align-items-center switcher-style">
                <div className="form-check switch-select me-3">
                  <input
                    className="form-check-input color-input color-bg-1"
                    type="radio"
                    name="theme-background"
                    id="switcher-background"
                  />
                </div>
                <div className="form-check switch-select me-3">
                  <input
                    className="form-check-input color-input color-bg-2"
                    type="radio"
                    name="theme-background"
                    id="switcher-background1"
                  />
                </div>
                <div className="form-check switch-select me-3">
                  <input
                    className="form-check-input color-input color-bg-3"
                    type="radio"
                    name="theme-background"
                    id="switcher-background2"
                  />
                </div>
                <div className="form-check switch-select me-3">
                  <input
                    className="form-check-input color-input color-bg-4"
                    type="radio"
                    name="theme-background"
                    id="switcher-background3"
                  />
                </div>
                <div className="form-check switch-select me-3">
                  <input
                    className="form-check-input color-input color-bg-5"
                    type="radio"
                    name="theme-background"
                    id="switcher-background4"
                  />
                </div>
                <div className="form-check switch-select ps-0 mt-1 tooltip-static-demo color-bg-transparent">
                  <div className="theme-container-background" />
                  <div className="pickr-container-background" />
                </div>
              </div>
            </div>
            <div className="menu-image mb-3">
              <p className="switcher-style-head">Menu With Background Image:</p>
              <div className="d-flex flex-wrap align-items-center switcher-style">
                <div className="form-check switch-select m-2">
                  <input
                    className="form-check-input bgimage-input bg-img1"
                    type="radio"
                    name="theme-background"
                    id="switcher-bg-img"
                  />
                </div>
                <div className="form-check switch-select m-2">
                  <input
                    className="form-check-input bgimage-input bg-img2"
                    type="radio"
                    name="theme-background"
                    id="switcher-bg-img1"
                  />
                </div>
                <div className="form-check switch-select m-2">
                  <input
                    className="form-check-input bgimage-input bg-img3"
                    type="radio"
                    name="theme-background"
                    id="switcher-bg-img2"
                  />
                </div>
                <div className="form-check switch-select m-2">
                  <input
                    className="form-check-input bgimage-input bg-img4"
                    type="radio"
                    name="theme-background"
                    id="switcher-bg-img3"
                  />
                </div>
                <div className="form-check switch-select m-2">
                  <input
                    className="form-check-input bgimage-input bg-img5"
                    type="radio"
                    name="theme-background"
                    id="switcher-bg-img4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-grid  canvas-footer flex-wrap">
          <a
            href="javascript:void(0);"
            id="reset-all"
            className="btn btn-danger m-1"
          >
            Reset
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* End Switcher */}
  {/* Loader */}
  <div id="loader">
    <img src="../assets/images/media/loader.svg" alt="" />
  </div>
  {/* Loader */}
  <div className="page">
    {/* app-header */}
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
                  src="../assets/images/brand-logos/desktop-logo.png"
                  alt="logo"
                  className="desktop-logo"
                />
                <img
                  src="../assets/images/brand-logos/toggle-logo.png"
                  alt="logo"
                  className="toggle-logo"
                />
                <img
                  src="../assets/images/brand-logos/desktop-white.png"
                  alt="logo"
                  className="desktop-dark"
                />
                <img
                  src="../assets/images/brand-logos/toggle-dark.png"
                  alt="logo"
                  className="toggle-dark"
                />
                <img
                  src="../assets/images/brand-logos/desktop-white.png"
                  alt="logo"
                  className="desktop-white"
                />
                <img
                  src="../assets/images/brand-logos/toggle-white.png"
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
                            src="../assets/images/media/23.jpg"
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
                              <i className="bi bi-chevron-right text-muted me-1 fs-10" />{" "}
                              Edit Profile
                            </a>
                            <a
                              className="dropdown-item px-0 fs-12"
                              href="javascript:void(0);"
                            >
                              <i className="bi bi-chevron-right text-muted me-1 fs-10" />{" "}
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
                              <i className="bi bi-chevron-right text-muted me-1 fs-10" />{" "}
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
                              <i className="bi bi-chevron-right text-muted me-1 fs-10" />{" "}
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
                Settings{" "}
                <i className="ri-arrow-down-s-line  mg-l-3 align-bottom" />
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
                style={{}}
              >
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
                src="../assets/images/flags/us_flag.jpg"
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
                    <img src="../assets/images/flags/us_flag.jpg" alt="img" />
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
                    <img
                      src="../assets/images/flags/spain_flag.jpg"
                      alt="img"
                    />
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
                    <img
                      src="../assets/images/flags/french_flag.jpg"
                      alt="img"
                    />
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
                    <img
                      src="../assets/images/flags/germany_flag.jpg"
                      alt="img"
                    />
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
                    <img
                      src="../assets/images/flags/italy_flag.jpg"
                      alt="img"
                    />
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
                    <img
                      src="../assets/images/flags/russia_flag.jpg"
                      alt="img"
                    />
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
            <a
              href="javascript:void(0);"
              className="header-link layout-setting"
            >
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
              <ul
                className="list-unstyled mb-0"
                id="header-notification-scroll1"
              >
                <li className="dropdown-item">
                  <div className="d-flex align-items-start">
                    <div className="pe-2">
                      <img
                        src="../assets/images/faces/1.jpg"
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
                              6:45 am{" "}
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
                        src="../assets/images/faces/2.jpg"
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
                              5 hours ago{" "}
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
                        src="../assets/images/faces/3.jpg"
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
                              45 mintues ago{" "}
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
                        src="../assets/images/faces/4.jpg"
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
                              20 mintues ago{" "}
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
                        src="../assets/images/faces/2.jpg"
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
                              10 hours ago{" "}
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
                  <a
                    href="chat.html"
                    className="btn text-muted p-0 text-primary"
                  >
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
              <ul
                className="list-unstyled mb-0"
                id="header-notification-scroll"
              >
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
                          <a href="chat.html"> Updates Available </a>
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
                          <a href="chat.html"> New files available </a>
                        </p>
                        <span className="text-muted fw-normal fs-12 header-notification-text">
                          {" "}
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
                          <a href="chat.html"> New Order Received </a>
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
                  <a
                    href="chat.html"
                    className="btn text-muted p-0 text-primary"
                  >
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
                      src="../assets/images/ecommerce/1.jpg"
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
                      src="../assets/images/ecommerce/3.jpg"
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
                      src="../assets/images/ecommerce/5.jpg"
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
                      src="../assets/images/ecommerce/4.jpg"
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
                      src="../assets/images/ecommerce/6.jpg"
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
                src="../assets/images/faces/9.jpg"
                alt="img"
                width={32}
                height={32}
                className="rounded-circle"
              />
              {/* <div class="d-flex align-items-center">
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
                      src="../assets/images/faces/9.jpg"
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
    {/* /app-header */}
    {/* Start::app-sidebar */}
    <aside className="app-sidebar sticky" id="sidebar">
      {/* Start::main-sidebar-header */}
      <div className="main-sidebar-header">
        <a href="index.html" className="header-logo">
          <img
            src="../assets/images/brand-logos/desktop-logo.png"
            alt="logo"
            className="desktop-logo"
          />
          <img
            src="../assets/images/brand-logos/toggle-logo.png"
            alt="logo"
            className="toggle-logo"
          />
          <img
            src="../assets/images/brand-logos/desktop-white.png"
            alt="logo"
            className="desktop-dark"
          />
          <img
            src="../assets/images/brand-logos/toggle-dark.png"
            alt="logo"
            className="toggle-dark"
          />
          <img
            src="../assets/images/brand-logos/desktop-white.png"
            alt="logo"
            className="desktop-white"
          />
          <img
            src="../assets/images/brand-logos/toggle-white.png"
            alt="logo"
            className="toggle-white"
          />
        </a>
      </div>
      {/* End::main-sidebar-header */}
      {/* Start::main-sidebar */}
      <div className="main-sidebar" id="sidebar-scroll">
        {/* Start::nav */}
        <nav className="main-menu-container nav nav-pills flex-column sub-open">
          <div className="slide-left" id="slide-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#7b8191"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
            </svg>
          </div>
          <ul className="main-menu">
            {/* Start::slide__category */}
            <li className="slide__category">
              <span className="category-name">Main</span>
            </li>
            {/* End::slide__category */}
            {/* Start::slide */}
            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <i className="bx bx-desktop side-menu__icon" />
                <span className="side-menu__label">Index</span>
                <i className="fe fe-chevron-down side-menu__angle" />
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0)">Index</a>
                </li>
                <li className="slide">
                  <a href="index.html" className="side-menu__item">
                    Dashboard-1
                  </a>
                </li>
                <li className="slide">
                  <a href="index2.html" className="side-menu__item">
                    Dashboard-2
                  </a>
                </li>
                <li className="slide">
                  <a href="index3.html" className="side-menu__item">
                    Dashboard-3
                  </a>
                </li>
                <li className="slide">
                  <a href="index4.html" className="side-menu__item">
                    Dashboard-4
                  </a>
                </li>
                <li className="slide">
                  <a href="index5.html" className="side-menu__item">
                    Dashboard-5
                  </a>
                </li>
              </ul>
            </li>
            {/* End::slide */}
            {/* Start::slide__category */}
            <li className="slide__category">
              <span className="category-name">Web Apps</span>
            </li>
            {/* End::slide__category */}
            {/* Start::slide */}
            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <i className="bx bx-hourglass side-menu__icon" />
                <span className="side-menu__label">Advanced Ui</span>
                <i className="fe fe-chevron-down side-menu__angle" />
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0)">Advanced Ui</a>
                </li>
                <li className="slide">
                  <a href="accordions.html" className="side-menu__item">
                    Accordions
                  </a>
                </li>
                <li className="slide">
                  <a href="collpase.html" className="side-menu__item">
                    Collapse
                  </a>
                </li>
                <li className="slide">
                  <a href="carousel.html" className="side-menu__item">
                    Carousel
                  </a>
                </li>
                <li className="slide">
                  <a href="crypto-currencies.html" className="side-menu__item">
                    Crypto-currencies
                  </a>
                </li>
                <li className="slide">
                  <a href="modals_closes.html" className="side-menu__item">
                    Modals &amp; Closes
                  </a>
                </li>
                <li className="slide">
                  <a href="navbar.html" className="side-menu__item">
                    Navbar
                  </a>
                </li>
                <li className="slide">
                  <a href="offcanvas.html" className="side-menu__item">
                    Offcanvas
                  </a>
                </li>
                <li className="slide">
                  <a href="placeholders.html" className="side-menu__item">
                    Placeholders
                  </a>
                </li>
                <li className="slide">
                  <a href="ratings.html" className="side-menu__item">
                    Ratings
                  </a>
                </li>
                <li className="slide">
                  <a href="scrollspy.html" className="side-menu__item">
                    Scrollspy
                  </a>
                </li>
                <li className="slide">
                  <a href="search.html" className="side-menu__item">
                    Search
                  </a>
                </li>
                <li className="slide">
                  <a href="swiperjs.html" className="side-menu__item">
                    Swiper JS
                  </a>
                </li>
                <li className="slide">
                  <a href="users-list.html" className="side-menu__item">
                    User List
                  </a>
                </li>
              </ul>
            </li>
            {/* End::slide */}
            {/* Start::slide */}
            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <i className="bx bx-doughnut-chart side-menu__icon" />
                <span className="side-menu__label">Apps</span>
                <i className="fe fe-chevron-down side-menu__angle" />
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0)">Apps</a>
                </li>
                <li className="slide">
                  <a href="full-calendar.html" className="side-menu__item">
                    Full Calendar
                  </a>
                </li>
                <li className="slide">
                  <a href="gallery.html" className="side-menu__item">
                    Gallery
                  </a>
                </li>
                <li className="slide">
                  <a href="sweet_alerts.html" className="side-menu__item">
                    Sweet Alerts
                  </a>
                </li>
                <li className="slide">
                  <a href="timeline.html" className="side-menu__item">
                    Timeline
                  </a>
                </li>
                <li className="slide">
                  <a href="draggable-cards.html" className="side-menu__item">
                    Draggable-cards
                  </a>
                </li>
                <li className="slide">
                  <a href="tree-view.html" className="side-menu__item">
                    Tree-view
                  </a>
                </li>
              </ul>
            </li>
            {/* End::slide */}
            {/* Start::slide */}
            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <i className="bx bx-server side-menu__icon" />
                <span className="side-menu__label">Ui Elements</span>
                <i className="fe fe-chevron-down side-menu__angle" />
              </a>
              <ul className="slide-menu child1 mega-menu">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0)">Ui Elements</a>
                </li>
                <li className="slide">
                  <a href="alerts.html" className="side-menu__item">
                    Alerts
                  </a>
                </li>
                <li className="slide">
                  <a href="avatars.html" className="side-menu__item">
                    Avatars
                  </a>
                </li>
                <li className="slide">
                  <a href="badge.html" className="side-menu__item">
                    Badge
                  </a>
                </li>
                <li className="slide">
                  <a href="breadcrumb.html" className="side-menu__item">
                    Breadcrumb
                  </a>
                </li>
                <li className="slide">
                  <a href="buttons.html" className="side-menu__item">
                    Buttons
                  </a>
                </li>
                <li className="slide">
                  <a href="buttongroup.html" className="side-menu__item">
                    Button Group
                  </a>
                </li>
                <li className="slide">
                  <a href="cards.html" className="side-menu__item">
                    Cards
                  </a>
                </li>
                <li className="slide">
                  <a href="dropdowns.html" className="side-menu__item">
                    Dropdowns
                  </a>
                </li>
                <li className="slide">
                  <a href="images_figures.html" className="side-menu__item">
                    Images &amp; Figures
                  </a>
                </li>
                <li className="slide">
                  <a href="listgroup.html" className="side-menu__item">
                    List Group
                  </a>
                </li>
                <li className="slide">
                  <a href="navs_tabs.html" className="side-menu__item">
                    Navs &amp; Tabs
                  </a>
                </li>
                <li className="slide">
                  <a href="object-fit.html" className="side-menu__item">
                    Object Fit
                  </a>
                </li>
                <li className="slide">
                  <a href="pagination.html" className="side-menu__item">
                    Pagination
                  </a>
                </li>
                <li className="slide">
                  <a href="popovers.html" className="side-menu__item">
                    Popovers
                  </a>
                </li>
                <li className="slide">
                  <a href="progress.html" className="side-menu__item">
                    Progress
                  </a>
                </li>
                <li className="slide">
                  <a href="spinners.html" className="side-menu__item">
                    Spinners
                  </a>
                </li>
                <li className="slide">
                  <a href="toasts.html" className="side-menu__item">
                    Toasts
                  </a>
                </li>
                <li className="slide">
                  <a href="tags.html" className="side-menu__item">
                    Tags
                  </a>
                </li>
                <li className="slide">
                  <a href="tooltips.html" className="side-menu__item">
                    Tooltips
                  </a>
                </li>
                <li className="slide">
                  <a href="typography.html" className="side-menu__item">
                    Typography
                  </a>
                </li>
              </ul>
            </li>
            {/* End::slide */}
            {/* Start::slide__category */}
            <li className="slide__category">
              <span className="category-name">General</span>
            </li>
            {/* End::slide__category */}
            {/* Start::slide */}
            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <i className="bx bx-file side-menu__icon" />
                <span className="side-menu__label">Pages</span>
                <i className="fe fe-chevron-down side-menu__angle" />
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0)">Pages</a>
                </li>
                <li className="slide">
                  <a href="profile.html" className="side-menu__item">
                    {" "}
                    Profile
                  </a>
                </li>
                <li className="slide">
                  <a href="editprofile.html" className="side-menu__item">
                    {" "}
                    Edit Profile
                  </a>
                </li>
                <li className="slide">
                  <a href="faq.html" className="side-menu__item">
                    {" "}
                    FAQS
                  </a>
                </li>
                <li className="slide">
                  <a href="contacts.html" className="side-menu__item">
                    Contacts
                  </a>
                </li>
                <li className="slide">
                  <a href="notifications.html" className="side-menu__item">
                    Notifications
                  </a>
                </li>
                <li className="slide">
                  <a
                    href="widget-notification.html"
                    className="side-menu__item"
                  >
                    Widget-Notification
                  </a>
                </li>
                <li className="slide">
                  <a href="settings.html" className="side-menu__item">
                    Settings
                  </a>
                </li>
                <li className="slide">
                  <a href="todotask.html" className="side-menu__item">
                    Todotask
                  </a>
                </li>
                <li className="slide">
                  <a href="terms.html" className="side-menu__item">
                    {" "}
                    Terms
                  </a>
                </li>
                <li className="slide">
                  <a href="invoice.html" className="side-menu__item">
                    {" "}
                    Invoice
                  </a>
                </li>
                <li className="slide">
                  <a href="pricing.html" className="side-menu__item">
                    {" "}
                    Pricing
                  </a>
                </li>
                <li className="slide">
                  <a href="empty.html" className="side-menu__item">
                    {" "}
                    Empty Page
                  </a>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Mail
                    <i className="fe fe-chevron-down side-menu__angle" />
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="email.html" className="side-menu__item">
                        Mail-Inbox
                      </a>
                    </li>
                    <li className="slide">
                      <a href="mail-compose.html" className="side-menu__item">
                        Mail-Compose
                      </a>
                    </li>
                    <li className="slide">
                      <a href="mail-read.html" className="side-menu__item">
                        Read-Mail
                      </a>
                    </li>
                    <li className="slide">
                      <a href="mail-settings.html" className="side-menu__item">
                        Mail-Settings
                      </a>
                    </li>
                    <li className="slide">
                      <a href="chat.html" className="side-menu__item">
                        Chat
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Blog
                    <i className="fe fe-chevron-down side-menu__angle" />
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="blog.html" className="side-menu__item">
                        Blog
                      </a>
                    </li>
                    <li className="slide">
                      <a href="blog-details.html" className="side-menu__item">
                        Blog Details
                      </a>
                    </li>
                    <li className="slide">
                      <a href="blog-post.html" className="side-menu__item">
                        Blog Post
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    E-Commerce
                    <i className="fe fe-chevron-down side-menu__angle" />
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="shop.html" className="side-menu__item">
                        Shop
                      </a>
                    </li>
                    <li className="slide">
                      <a href="shop-details.html" className="side-menu__item">
                        Shopping Details
                      </a>
                    </li>
                    <li className="slide">
                      <a href="cart.html" className="side-menu__item">
                        Shopping Cart
                      </a>
                    </li>
                    <li className="slide">
                      <a href="wishlist.html" className="side-menu__item">
                        Wishlist
                      </a>
                    </li>
                    <li className="slide">
                      <a href="checkout.html" className="side-menu__item">
                        Checkout
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    File Manager
                    <i className="fe fe-chevron-down side-menu__angle" />
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="file-manager.html" className="side-menu__item">
                        File Manager
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="filemanager-list.html"
                        className="side-menu__item"
                      >
                        File Manager List
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="filemanager-details.html"
                        className="side-menu__item"
                      >
                        File Details
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* End::slide */}
            {/* Start::slide */}
            <li className="slide">
              <a href="icons.html" className="side-menu__item">
                <i className="bx bx-shape-square side-menu__icon" />
                <span className="side-menu__label">Icons</span>
              </a>
            </li>
            {/* End::slide */}
            {/* Start::slide */}
            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <i className="bx bx-line-chart side-menu__icon" />
                <span className="side-menu__label">Charts</span>
                <i className="fe fe-chevron-down side-menu__angle" />
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0)">Charts</a>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Apex Charts
                    <i className="fe fe-chevron-down side-menu__angle" />
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a
                        href="apex-line-charts.html"
                        className="side-menu__item"
                      >
                        Line Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-area-charts.html"
                        className="side-menu__item"
                      >
                        Area Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-column-charts.html"
                        className="side-menu__item"
                      >
                        Column Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-bar-charts.html"
                        className="side-menu__item"
                      >
                        Bar Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-mixed-charts.html"
                        className="side-menu__item"
                      >
                        Mixed Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-rangearea-charts.html"
                        className="side-menu__item"
                      >
                        Range Area Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-timeline-charts.html"
                        className="side-menu__item"
                      >
                        Timeline Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-candlestick-charts.html"
                        className="side-menu__item"
                      >
                        CandleStick Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-boxplot-charts.html"
                        className="side-menu__item"
                      >
                        Boxplot Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-bubble-charts.html"
                        className="side-menu__item"
                      >
                        Bubble Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-scatter-charts.html"
                        className="side-menu__item"
                      >
                        Scatter Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-heatmap-charts.html"
                        className="side-menu__item"
                      >
                        Heatmap Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-treemap-charts.html"
                        className="side-menu__item"
                      >
                        Treemap Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-pie-charts.html"
                        className="side-menu__item"
                      >
                        Pie Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-radialbar-charts.html"
                        className="side-menu__item"
                      >
                        Radialbar Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-radar-charts.html"
                        className="side-menu__item"
                      >
                        Radar Charts
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="apex-polararea-charts.html"
                        className="side-menu__item"
                      >
                        Polararea Charts
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide">
                  <a href="chartjs-charts.html" className="side-menu__item">
                    Chartjs Charts
                  </a>
                </li>
                <li className="slide">
                  <a href="echarts.html" className="side-menu__item">
                    Echart Charts
                  </a>
                </li>
              </ul>
            </li>
            {/* End::slide */}
            {/* Start::slide__category */}
            <li className="slide__category">
              <span className="category-name">Multi Level</span>
            </li>
            {/* End::slide__category */}
            {/* Start::slide */}
            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <i className="bx bx-list-ol side-menu__icon" />
                <span className="side-menu__label">Menu Level</span>
                <i className="fe fe-chevron-down side-menu__angle" />
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0)">Menu Level</a>
                </li>
                <li className="slide">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Level-1
                  </a>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Level-2
                    <i className="fe fe-chevron-down side-menu__angle" />
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="javascript:void(0);" className="side-menu__item">
                        Level-2-1
                      </a>
                    </li>
                    <li className="slide has-sub">
                      <a href="javascript:void(0);" className="side-menu__item">
                        Level-2-2
                        <i className="fe fe-chevron-down side-menu__angle" />
                      </a>
                      <ul className="slide-menu child3">
                        <li className="slide">
                          <a
                            href="javascript:void(0);"
                            className="side-menu__item"
                          >
                            Level-2-2-1
                          </a>
                        </li>
                        <li className="slide">
                          <a
                            href="javascript:void(0);"
                            className="side-menu__item"
                          >
                            Level-2-2-2
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            {/* End::slide */}
            {/* Start::slide__category */}
            <li className="slide__category">
              <span className="category-name">Components</span>
            </li>
            {/* End::slide__category */}
            {/* Start::slide */}
            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <i className="bx bx-folder-minus side-menu__icon" />
                <span className="side-menu__label">Forms</span>
                <i className="fe fe-chevron-down side-menu__angle" />
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0)">Forms</a>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Form Elements
                    <i className="fe fe-chevron-down side-menu__angle" />
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="form_inputs.html" className="side-menu__item">
                        Inputs
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="form_check_radios.html"
                        className="side-menu__item"
                      >
                        Checks &amp; Radios
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="form_input_group.html"
                        className="side-menu__item"
                      >
                        Input Group
                      </a>
                    </li>
                    <li className="slide">
                      <a href="form_select.html" className="side-menu__item">
                        Form Select
                      </a>
                    </li>
                    <li className="slide">
                      <a href="form_range.html" className="side-menu__item">
                        Range Slider
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="form_input_masks.html"
                        className="side-menu__item"
                      >
                        Input Masks
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="form_file_uploads.html"
                        className="side-menu__item"
                      >
                        File Uploads
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="form_dateTime_pickers.html"
                        className="side-menu__item"
                      >
                        Date,Time Picker
                      </a>
                    </li>
                    <li className="slide">
                      <a
                        href="form_color_pickers.html"
                        className="side-menu__item"
                      >
                        Color Pickers
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide">
                  <a href="floating_labels.html" className="side-menu__item">
                    Floating Labels
                  </a>
                </li>
                <li className="slide">
                  <a href="form_layout.html" className="side-menu__item">
                    Form Layouts
                  </a>
                </li>
                <li className="slide has-sub">
                  <a href="javascript:void(0);" className="side-menu__item">
                    Form Editors
                    <i className="fe fe-chevron-down side-menu__angle" />
                  </a>
                  <ul className="slide-menu child2">
                    <li className="slide">
                      <a href="quill_editor.html" className="side-menu__item">
                        Quill Editor
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="slide">
                  <a href="form_validation.html" className="side-menu__item">
                    Validation
                  </a>
                </li>
                <li className="slide">
                  <a href="form_select2.html" className="side-menu__item">
                    Select2
                  </a>
                </li>
              </ul>
            </li>
            {/* End::slide */}
            {/* Start::slide */}
            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <i className="bx bx-layout side-menu__icon" />
                <span className="side-menu__label">Tables</span>
                <i className="fe fe-chevron-down side-menu__angle" />
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0)">Tables</a>
                </li>
                <li className="slide">
                  <a href="tables.html" className="side-menu__item">
                    Tables
                  </a>
                </li>
                <li className="slide">
                  <a href="grid-tables.html" className="side-menu__item">
                    Grid JS Tables
                  </a>
                </li>
                <li className="slide">
                  <a href="data-tables.html" className="side-menu__item">
                    Data Tables
                  </a>
                </li>
              </ul>
            </li>
            {/* End::slide */}
            {/* Start::slide */}
            <li className="slide">
              <a href="widgets.html" className="side-menu__item">
                {" "}
                <i className="bx bx-category  side-menu__icon" />
                <span className="side-menu__label">Widgets</span>{" "}
              </a>
            </li>
            {/* End::slide */}
            {/* Start::slide__category */}
            <li className="slide__category">
              <span className="category-name">Utilities</span>
            </li>
            {/* End::slide__category */}
            {/* Start::slide */}
            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <i className="bx bx-underline side-menu__icon" />
                <span className="side-menu__label">Utilities</span>
                <i className="fe fe-chevron-down side-menu__angle" />
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0)">Utilities</a>
                </li>
                <li className="slide">
                  <a href="borders.html" className="side-menu__item">
                    Borders
                  </a>
                </li>
                <li className="slide">
                  <a href="breakpoints.html" className="side-menu__item">
                    Breakpoints
                  </a>
                </li>
                <li className="slide">
                  <a href="colors.html" className="side-menu__item">
                    Colors
                  </a>
                </li>
                <li className="slide">
                  <a href="columns.html" className="side-menu__item">
                    Columns
                  </a>
                </li>
                <li className="slide">
                  <a href="flex.html" className="side-menu__item">
                    Flex
                  </a>
                </li>
                <li className="slide">
                  <a href="gutters.html" className="side-menu__item">
                    Gutters
                  </a>
                </li>
                <li className="slide">
                  <a href="helpers.html" className="side-menu__item">
                    Helpers
                  </a>
                </li>
                <li className="slide">
                  <a href="position.html" className="side-menu__item">
                    Position
                  </a>
                </li>
                <li className="slide">
                  <a href="more.html" className="side-menu__item">
                    Additional Content
                  </a>
                </li>
              </ul>
            </li>
            {/* End::slide */}
            {/* Start::slide */}
            <li className="slide has-sub">
              <a href="javascript:void(0);" className="side-menu__item">
                <i className="bx bx-error side-menu__icon" />
                <span className="side-menu__label">Authentication</span>
                <i className="fe fe-chevron-down side-menu__angle" />
              </a>
              <ul className="slide-menu child1">
                <li className="slide side-menu__label1">
                  <a href="javascript:void(0)">Authentication</a>
                </li>
                <li className="slide">
                  <a href="signin.html" className="side-menu__item">
                    Signin
                  </a>
                </li>
                <li className="slide">
                  <a href="signup.html" className="side-menu__item">
                    Signup
                  </a>
                </li>
                <li className="slide">
                  <a href="forgot.html" className="side-menu__item">
                    Forgot Password
                  </a>
                </li>
                <li className="slide">
                  <a href="reset.html" className="side-menu__item">
                    Reset Password
                  </a>
                </li>
                <li className="slide">
                  <a href="lockscreen.html" className="side-menu__item">
                    Lockscreen
                  </a>
                </li>
                <li className="slide">
                  <a href="underconstruction.html" className="side-menu__item">
                    Underconstruction
                  </a>
                </li>
                <li className="slide">
                  <a href="404.html" className="side-menu__item">
                    404 Error
                  </a>
                </li>
                <li className="slide">
                  <a href="500.html" className="side-menu__item">
                    500 Error
                  </a>
                </li>
              </ul>
            </li>
            {/* End::slide */}
          </ul>
          <div className="slide-right" id="slide-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#7b8191"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
            </svg>
          </div>
        </nav>
        {/* End::nav */}
      </div>
      {/* End::main-sidebar */}
    </aside>
    {/* End::app-sidebar */}
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
                  <i className="fe fe-arrow-down  text-danger me-1" /> 05
                  Pendings
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
                    <h3 className="text-dark count mt-0 font-30 mb-0">
                      $18,963
                    </h3>
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
                  <i className="fe fe-trending-down  text-danger me-1" /> 5%
                  Loss
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
                        <span className="font-weight-semibold">Deadline:</span>{" "}
                        To Day 2:30 Pm
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
                        <span className="font-weight-semibold">Deadline:</span>{" "}
                        1 Week To Left
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
                        <span className="font-weight-semibold">Deadline:</span>{" "}
                        3 days To Left
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
                        <span className="font-weight-semibold">Deadline:</span>{" "}
                        3 days To Left
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
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            10
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            25
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
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
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            New
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Popular
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
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
    {/* Message Modal */}
    <div
      className="modal fade"
      id="chatmodel"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-right chatbox" role="document">
        <div className="modal-content chat border-0">
          <div className="card custom-card overflow-hidden mb-0 border-0">
            {/* action-header */}
            <div className="action-header clearfix">
              <div className="float-start hidden-xs d-flex ms-2">
                <div className="img_cont me-3">
                  <img
                    src="../assets/images/faces/6.jpg"
                    className="rounded-circle user_img"
                    alt="img"
                  />
                </div>
                <div className="align-items-center mt-2">
                  <h5 className="text-fixed-white mb-0 fw-semibold">
                    Daneil Scott
                  </h5>
                  <span className="dot-label bg-success" />
                  <span className="me-3 text-fixed-white">online</span>
                </div>
              </div>
              <ul className="ah-actions actions align-items-center">
                <li className="call-icon  ms-5">
                  <a
                    href=""
                    className="d-done d-md-block phone-button"
                    data-bs-toggle="modal"
                    data-bs-target="#audiomodal"
                  >
                    <i className="si si-phone" />
                  </a>
                </li>
                <li className="video-icon">
                  <a
                    href=""
                    className="d-done d-md-block phone-button"
                    data-bs-toggle="modal"
                    data-bs-target="#videomodal"
                  >
                    <i className="si si-camrecorder" />
                  </a>
                </li>
                <li className="dropdown">
                  <a href="" data-bs-toggle="dropdown" aria-expanded="true">
                    <i className="si si-options-vertical" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <i className="fa fa-user-circle" /> View profile
                    </li>
                    <li>
                      <i className="fa fa-users" />
                      Add friends
                    </li>
                    <li>
                      <i className="fa fa-plus" /> Add to group
                    </li>
                    <li>
                      <i className="fa fa-ban" /> Block
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href=""
                    className=""
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="si si-close text-white" />
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
                  <img
                    src="../assets/images/faces/6.jpg"
                    className="rounded-circle user_img_msg"
                    alt="img"
                  />
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
                  <img
                    src="../assets/images/faces/9.jpg"
                    className="rounded-circle user_img_msg"
                    alt="img"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-start">
                <div className="img_cont_msg">
                  <img
                    src="../assets/images/faces/6.jpg"
                    className="rounded-circle user_img_msg"
                    alt="img"
                  />
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
                  <img
                    src="../assets/images/faces/9.jpg"
                    className="rounded-circle user_img_msg"
                    alt="img"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-start">
                <div className="img_cont_msg">
                  <img
                    src="../assets/images/faces/6.jpg"
                    className="rounded-circle user_img_msg"
                    alt="img"
                  />
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
                  <img
                    src="../assets/images/faces/9.jpg"
                    className="rounded-circle user_img_msg"
                    alt="img"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-start">
                <div className="img_cont_msg">
                  <img
                    src="../assets/images/faces/6.jpg"
                    className="rounded-circle user_img_msg"
                    alt="img"
                  />
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
                  <img
                    src="../assets/images/faces/9.jpg"
                    className="rounded-circle user_img_msg"
                    alt="img"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-start">
                <div className="img_cont_msg">
                  <img
                    src="../assets/images/faces/6.jpg"
                    className="rounded-circle user_img_msg"
                    alt="img"
                  />
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
                  <img
                    src="../assets/images/faces/9.jpg"
                    className="rounded-circle user_img_msg"
                    alt="img"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-start">
                <div className="img_cont_msg">
                  <img
                    src="../assets/images/faces/6.jpg"
                    className="rounded-circle user_img_msg"
                    alt="img"
                  />
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
                  <input
                    className="form-control"
                    placeholder="Typing...."
                    type="text"
                  />
                  <button
                    className="btn btn-primary br-ts-0 br-bs-0"
                    type="button"
                  >
                    <i className="fa fa-paper-plane" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
            {/* card-footer end */}
          </div>
        </div>
      </div>
    </div>
    {/*Video Modal */}
    <div id="videomodal" className="modal fade">
      <div className="modal-dialog" role="document">
        <div className="modal-content border-0">
          <div className="modal-body mx-auto text-center p-5">
            <h5>Hogo Video call</h5>
            <img
              src="../assets/images/faces/6.jpg"
              className="rounded-circle user-img-circle h-8 w-8 mt-4 mb-3"
              alt="img"
            />
            <h4 className="mb-1 fw-semibold">Daneil Scott</h4>
            <h6 className="loading">Calling...</h6>
            <div className="mt-5">
              <div className="row">
                <div className="col-4">
                  <a
                    className="icon icon-shape rounded-circle mb-0"
                    href="javascript:void(0);"
                  >
                    <i className="fa fa-video-camera" />
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="icon icon-shape rounded-circle text-white mb-0"
                    href="javascript:void(0);"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="fa fa-phone bg-danger text-white" />
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="icon icon-shape rounded-circle mb-0"
                    href="javascript:void(0);"
                  >
                    <i className="fa fa-microphone-slash" />
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
    {/* modal */}
    {/* Audio Modal */}
    <div id="audiomodal" className="modal fade">
      <div className="modal-dialog" role="document">
        <div className="modal-content border-0">
          <div className="modal-body mx-auto text-center p-5">
            <h5>Hogo Voice call</h5>
            <img
              src="../assets/images/faces/6.jpg"
              className="rounded-circle user-img-circle h-8 w-8 mt-4 mb-3"
              alt="img"
            />
            <h4 className="mb-1 fw-semibold">Daneil Scott</h4>
            <h6 className="loading">Calling...</h6>
            <div className="mt-5">
              <div className="row">
                <div className="col-4">
                  <a
                    className="icon icon-shape rounded-circle mb-0"
                    href="javascript:void(0);"
                  >
                    <i className="fa fa-volume-up bg-light text-dark" />
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="icon icon-shape rounded-circle text-white mb-0"
                    href="javascript:void(0);"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="fa fa-phone text-white bg-success" />
                  </a>
                </div>
                <div className="col-4">
                  <a
                    className="icon icon-shape rounded-circle mb-0"
                    href="javascript:void(0);"
                  >
                    <i className="fa fa-microphone-slash bg-light text-dark" />
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
    {/* modal */}
    {/* Footer Start */}
    <footer className="footer mt-auto py-3 bg-white text-center">
      <div className="container">
        <span className="text-muted">
          {" "}
          Copyright © <span id="year" />{" "}
          <a href="javascript:void(0);" className="text-primary fw-semibold">
            Hogo
          </a>
          . Designed with <span className="bi bi-heart-fill text-danger" /> by{" "}
          <a href="javascript:void(0);">
            <span className="fw-semibold text-primary text-decoration-underline">
              Spruko
            </span>
          </a>{" "}
          All rights reserved
        </span>
      </div>
    </footer>
    {/* Footer End */}
    <div
      className="offcanvas offcanvas-end offcanvas-sidebar overflow-auto sidebar"
      tabIndex={-1}
      id="offcanvassidebar"
    >
      {/* Sidebar-right */}
      <div className="card custom-card tab-heading shadow-none">
        <div className="card-header rounded-0">
          <div className="card-title">Notifications</div>
          <div className="card-options ms-auto" data-bs-theme="dark">
            <button
              type="button"
              className="btn-close text-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
        </div>
        <div className="panel-body tabs-menu-body latest-tasks p-0 border-0">
          <div className="tabs-menu">
            {/* Tabs */}
            <ul className="nav panel-tabs">
              <li className="">
                <a href="#side1" className="active" data-bs-toggle="tab">
                  <i className="fe fe-message-circle tx-15 me-2" /> Chat
                </a>
              </li>
              <li>
                <a href="#side2" data-bs-toggle="tab">
                  <i className="fe fe-bell tx-15 me-2" />
                  Notifications
                </a>
              </li>
              <li>
                <a href="#side3" data-bs-toggle="tab">
                  <i className="fe fe-users tx-15 me-2" /> Friends
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div className="tab-pane p-0 active border-0" id="side1">
              <div className="list d-flex align-items-center border-top border-bottom p-3">
                <div className="">
                  <span className="avatar bg-primary brround avatar-md">
                    CH
                  </span>
                </div>
                <a className="wrapper w-100 ms-3" href="javascript:void(0);">
                  <p className="mb-0 d-flex">
                    <b>New Websites is Created</b>
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="mdi mdi-clock text-muted me-1" />
                      <small className="text-muted ms-auto">30 mins ago</small>
                      <p className="mb-0" />
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
                      <i className="mdi mdi-clock text-muted me-1" />
                      <small className="text-muted ms-auto">2 hours ago</small>
                      <p className="mb-0" />
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
                      <i className="mdi mdi-clock text-muted me-1" />
                      <small className="text-muted ms-auto">3 hours ago</small>
                      <p className="mb-0" />
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
                      <i className="mdi mdi-clock text-muted me-1" />
                      <small className="text-muted ms-auto">4 hours ago</small>
                      <p className="mb-0" />
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
                      <i className="mdi mdi-clock text-muted me-1" />
                      <small className="text-muted ms-auto">1 day ago</small>
                      <p className="mb-0" />
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
                      <i className="mdi mdi-clock text-muted me-1" />
                      <small className="text-muted ms-auto">1 day ago</small>
                      <p className="mb-0" />
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
                      <i className="mdi mdi-clock text-muted me-1" />
                      <small className="text-muted ms-auto">
                        45 minutes ago
                      </small>
                      <p className="mb-0" />
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
                      <i className="mdi mdi-clock text-muted me-1" />
                      <small className="text-muted ms-auto">2 days ago</small>
                      <p className="mb-0" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="tab-pane p-0" id="side2">
              <div className="list-group list-group-flush">
                <div className="list-group-item d-flex align-items-center ">
                  <div>
                    <span className="avatar avatar-lg me-2 online avatar-rounded">
                      <img src="../assets/images/faces/13.jpg" alt="img" />
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
                      <img src="../assets/images/faces/12.jpg" alt="img" />
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
                      <img src="../assets/images/faces/11.jpg" alt="img" />
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
                      <img src="../assets/images/faces/10.jpg" alt="img" />
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
                      <img src="../assets/images/faces/19.jpg" alt="img" />
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
                      <img src="../assets/images/faces/8.jpg" alt="img" />
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
                      <img src="../assets/images/faces/7.jpg" alt="img" />
                    </span>
                  </div>
                  <div className="ms-3">
                    <strong>Olivia</strong> Hey! there I' am available....
                    <div className="small text-muted">12 minutes ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane p-0" id="side3">
              <div className="list-group list-group-flush">
                <div className="list-group-item d-flex align-items-center ">
                  <div>
                    <span className="avatar avatar-md me-2 online avatar-rounded">
                      <img src="../assets/images/faces/13.jpg" alt="img" />
                    </span>
                  </div>
                  <div className="ms-2">
                    <div
                      className="fw-semibold"
                      data-bs-toggle="modal"
                      data-bs-target="#chatmodel"
                    >
                      Mozelle Belt
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-sm btn-light text-primary "
                      data-bs-toggle="modal"
                      data-bs-target="#chatmodel"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </div>
                </div>
                <div className="list-group-item d-flex align-items-center border-top">
                  <div>
                    <span className="avatar avatar-md me-2 online avatar-rounded">
                      <img src="../assets/images/faces/3.jpg" alt="img" />
                    </span>
                  </div>
                  <div className="ms-2">
                    <div
                      className="fw-semibold"
                      data-bs-toggle="modal"
                      data-bs-target="#chatmodel"
                    >
                      Florinda Carasco
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-sm btn-light text-primary "
                      data-bs-toggle="modal"
                      data-bs-target="#chatmodel"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </div>
                </div>
                <div className="list-group-item d-flex align-items-center border-top">
                  <div>
                    <span className="avatar avatar-md me-2 online avatar-rounded">
                      <img src="../assets/images/faces/2.jpg" alt="img" />
                    </span>
                  </div>
                  <div className="ms-2">
                    <div
                      className="fw-semibold"
                      data-bs-toggle="modal"
                      data-bs-target="#chatmodel"
                    >
                      Alina Bernier
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-sm btn-light text-primary "
                      data-bs-toggle="modal"
                      data-bs-target="#chatmodel"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </div>
                </div>
                <div className="list-group-item d-flex align-items-center border-top">
                  <div>
                    <span className="avatar avatar-md me-2 online avatar-rounded">
                      <img src="../assets/images/faces/1.jpg" alt="img" />
                    </span>
                  </div>
                  <div className="ms-2">
                    <div
                      className="fw-semibold"
                      data-bs-toggle="modal"
                      data-bs-target="#chatmodel"
                    >
                      Zula Mclaughin
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-sm btn-light text-primary "
                      data-bs-toggle="modal"
                      data-bs-target="#chatmodel"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </div>
                </div>
                <div className="list-group-item d-flex align-items-center border-top">
                  <div>
                    <span className="avatar avatar-md me-2 online avatar-rounded">
                      <img src="../assets/images/faces/5.jpg" alt="img" />
                    </span>
                  </div>
                  <div className="ms-2">
                    <div
                      className="fw-semibold"
                      data-bs-toggle="modal"
                      data-bs-target="#chatmodel"
                    >
                      Isidro Heide
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-sm btn-light text-primary "
                      data-bs-toggle="modal"
                      data-bs-target="#chatmodel"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </div>
                </div>
                <div className="list-group-item d-flex align-items-center border-top">
                  <div>
                    <span className="avatar avatar-md me-2 online avatar-rounded">
                      <img src="../assets/images/faces/6.jpg" alt="img" />
                    </span>
                  </div>
                  <div className="ms-2">
                    <div
                      className="fw-semibold"
                      data-bs-toggle="modal"
                      data-bs-target="#chatmodel"
                    >
                      Mozelle Belt
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-sm btn-light text-primary "
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </div>
                </div>
                <div className="list-group-item d-flex align-items-center border-top">
                  <div>
                    <span className="avatar avatar-md me-2 online avatar-rounded">
                      <img src="../assets/images/faces/7.jpg" alt="img" />
                    </span>
                  </div>
                  <div className="ms-2">
                    <div
                      className="fw-semibold"
                      data-bs-toggle="modal"
                      data-bs-target="#chatmodel"
                    >
                      Florinda Carasco
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-sm btn-light text-primary "
                      data-bs-toggle="modal"
                      data-bs-target="#chatmodel"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </div>
                </div>
                <div className="list-group-item d-flex align-items-center border-top">
                  <div>
                    <span className="avatar avatar-md me-2 online avatar-rounded">
                      <img src="../assets/images/faces/8.jpg" alt="img" />
                    </span>
                  </div>
                  <div className="ms-2">
                    <div
                      className="fw-semibold"
                      data-bs-toggle="modal"
                      data-bs-target="#chatmodel"
                    >
                      Alina Bernier
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-sm btn-light  text-primary"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </div>
                </div>
                <div className="list-group-item d-flex align-items-center border-top">
                  <div>
                    <span className="avatar avatar-md me-2 online avatar-rounded">
                      <img src="../assets/images/faces/9.jpg" alt="img" />
                    </span>
                  </div>
                  <div className="ms-2">
                    <div
                      className="fw-semibold"
                      data-bs-toggle="modal"
                      data-bs-target="#chatmodel"
                    >
                      Zula Mclaughin
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-sm btn-light text-primary "
                      data-bs-toggle="modal"
                      data-bs-target="#chatmodel"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </div>
                </div>
                <div className="list-group-item d-flex align-items-center border-top">
                  <div>
                    <span className="avatar avatar-md me-2 online avatar-rounded">
                      <img src="../assets/images/faces/10.jpg" alt="img" />
                    </span>
                  </div>
                  <div className="ms-2">
                    <div
                      className="fw-semibold"
                      data-bs-toggle="modal"
                      data-bs-target="#chatmodel"
                    >
                      Isidro Heide
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-sm btn-light  text-primary"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </div>
                </div>
                <div className="list-group-item d-flex align-items-center border-top">
                  <div>
                    <span className="avatar avatar-md me-2 online avatar-rounded">
                      <img src="../assets/images/faces/12.jpg" alt="img" />
                    </span>
                  </div>
                  <div className="ms-2">
                    <div
                      className="fw-semibold"
                      data-bs-toggle="modal"
                      data-bs-target="#chatmodel"
                    >
                      Florinda Carasco
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-sm btn-light text-primary "
                      data-bs-toggle="modal"
                      data-bs-target="#chatmodel"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </div>
                </div>
                <div className="list-group-item d-flex align-items-center border-top">
                  <div>
                    <span className="avatar avatar-md me-2 online avatar-rounded">
                      <img src="../assets/images/faces/14.jpg" alt="img" />
                    </span>
                  </div>
                  <div className="ms-2">
                    <div
                      className="fw-semibold"
                      data-bs-toggle="modal"
                      data-bs-target="#chatmodel"
                    >
                      Alina Bernier
                    </div>
                  </div>
                  <div className="ms-auto">
                    <a
                      href="javascript:void(0);"
                      className="btn btn-sm btn-light text-primary "
                      data-bs-toggle="modal"
                      data-bs-target="#chatmodel"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/Sidebar-right*/}
    </div>
  </div>
</>

  )
}
