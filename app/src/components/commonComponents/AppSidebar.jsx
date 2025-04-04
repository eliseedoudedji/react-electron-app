import React, { useState } from 'react'

// Import logo images
import desktopLogo from '../../pages/mainpages/assets/images/brand-logos/desktop-logo.png'
import toggleLogo from '../../pages/mainpages/assets/images/brand-logos/toggle-logo.png'
import desktopWhite from '../../pages/mainpages/assets/images/brand-logos/desktop-white.png'
import toggleDark from '../../pages/mainpages/assets/images/brand-logos/toggle-dark.png'
import toggleWhite from '../../pages/mainpages/assets/images/brand-logos/toggle-white.png'

export default function AppSidebar() {
    // État pour gérer les menus déroulants
    const [openMenus, setOpenMenus] = useState({});
    
    // Fonction pour gérer l'ouverture/fermeture des menus
    const toggleMenu = (menuId) => {
        setOpenMenus(prevState => ({
            ...prevState,
            [menuId]: !prevState[menuId]
        }));
    };
    return (
        <aside className="app-sidebar sticky" id="sidebar">
            {/* Start::main-sidebar-header */}
            <div className="main-sidebar-header">
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
                        <li className={`slide has-sub ${openMenus['index'] ? 'open' : ''}`}>
                            <a 
                                href="javascript:void(0);" 
                                className="side-menu__item"
                                onClick={() => toggleMenu('index')}
                            >
                                <i className="bx bx-desktop side-menu__icon" />
                                <span className="side-menu__label">Index</span>
                                <i className="fe fe-chevron-down side-menu__angle" />
                            </a>
                            <ul className="slide-menu child1" style={{display: openMenus['index'] ? 'block' : 'none'}}>               <li className="slide side-menu__label1">
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
                        <li className={`slide has-sub ${openMenus['advanced-ui'] ? 'open' : ''}`}>
                            <a 
                                href="javascript:void(0);" 
                                className="side-menu__item"
                                onClick={() => toggleMenu('advanced-ui')}
                            >
                                <i className="bx bx-hourglass side-menu__icon" />
                                <span className="side-menu__label">Advanced Ui</span>
                                <i className="fe fe-chevron-down side-menu__angle" />
                            </a>
                            <ul className="slide-menu child1" style={{display: openMenus['advanced-ui'] ? 'block' : 'none'}}>               <li className="slide side-menu__label1">
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
                        <li className={`slide has-sub ${openMenus['apps'] ? 'open' : ''}`}>
                            <a 
                                href="javascript:void(0);" 
                                className="side-menu__item"
                                onClick={() => toggleMenu('apps')}
                            >
                                <i className="bx bx-doughnut-chart side-menu__icon" />
                                <span className="side-menu__label">Apps</span>
                                <i className="fe fe-chevron-down side-menu__angle" />
                            </a>
                            <ul className="slide-menu child1" style={{display: openMenus['apps'] ? 'block' : 'none'}}>
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
                        <li className={`slide has-sub ${openMenus['ui-elements'] ? 'open' : ''}`}>
                            <a 
                                href="javascript:void(0);" 
                                className="side-menu__item"
                                onClick={() => toggleMenu('ui-elements')}
                            >
                                <i className="bx bx-server side-menu__icon" />
                                <span className="side-menu__label">Ui Elements</span>
                                <i className="fe fe-chevron-down side-menu__angle" />
                            </a>
                            <ul className="slide-menu child1 mega-menu" style={{display: openMenus['ui-elements'] ? 'block' : 'none'}}>               <li className="slide side-menu__label1">
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
                            <a href="#" className="side-menu__item">
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
                                    <a href="widget-notification.html" className="side-menu__item">
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
                                    <a href="#" className="side-menu__item">
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
                                    <a href="#" className="side-menu__item">
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
                                    <a href="#" className="side-menu__item">
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
                                    <a href="#" className="side-menu__item">
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
                                            <a href="filemanager-list.html" className="side-menu__item">
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
                            <a href="#" className="side-menu__item">
                                <i className="bx bx-line-chart side-menu__icon" />
                                <span className="side-menu__label">Charts</span>
                                <i className="fe fe-chevron-down side-menu__angle" />
                            </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1">
                                    <a href="javascript:void(0)">Charts</a>
                                </li>
                                <li className="slide has-sub">
                                    <a href="#" className="side-menu__item">
                                        Apex Charts
                                        <i className="fe fe-chevron-down side-menu__angle" />
                                    </a>
                                    <ul className="slide-menu child2">
                                        <li className="slide">
                                            <a href="apex-line-charts.html" className="side-menu__item">
                                                Line Charts
                                            </a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-area-charts.html" className="side-menu__item">
                                                Area Charts
                                            </a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-column-charts.html" className="side-menu__item">
                                                Column Charts
                                            </a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-bar-charts.html" className="side-menu__item">
                                                Bar Charts
                                            </a>
                                        </li>
                                        <li className="slide">
                                            <a href="apex-mixed-charts.html" className="side-menu__item">
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
                                            <a href="apex-bubble-charts.html" className="side-menu__item">
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
                                            <a href="apex-pie-charts.html" className="side-menu__item">
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
                                            <a href="apex-radar-charts.html" className="side-menu__item">
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
                            <a href="#" className="side-menu__item">
                                <i className="bx bx-list-ol side-menu__icon" />
                                <span className="side-menu__label">Menu Level</span>
                                <i className="fe fe-chevron-down side-menu__angle" />
                            </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1">
                                    <a href="javascript:void(0)">Menu Level</a>
                                </li>
                                <li className="slide">
                                    <a href="#" className="side-menu__item">
                                        Level-1
                                    </a>
                                </li>
                                <li className="slide has-sub">
                                    <a href="#" className="side-menu__item">
                                        Level-2
                                        <i className="fe fe-chevron-down side-menu__angle" />
                                    </a>
                                    <ul className="slide-menu child2">
                                        <li className="slide">
                                            <a href="#" className="side-menu__item">
                                                Level-2-1
                                            </a>
                                        </li>
                                        <li className="slide has-sub">
                                            <a href="#" className="side-menu__item">
                                                Level-2-2
                                                <i className="fe fe-chevron-down side-menu__angle" />
                                            </a>
                                            <ul className="slide-menu child3">
                                                <li className="slide">
                                                    <a href="#" className="side-menu__item">
                                                        Level-2-2-1
                                                    </a>
                                                </li>
                                                <li className="slide">
                                                    <a href="#" className="side-menu__item">
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
                            <a href="#" className="side-menu__item">
                                <i className="bx bx-folder-minus side-menu__icon" />
                                <span className="side-menu__label">Forms</span>
                                <i className="fe fe-chevron-down side-menu__angle" />
                            </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1">
                                    <a href="javascript:void(0)">Forms</a>
                                </li>
                                <li className="slide has-sub">
                                    <a href="#" className="side-menu__item">
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
                                            <a href="form_check_radios.html" className="side-menu__item">
                                                Checks &amp; Radios
                                            </a>
                                        </li>
                                        <li className="slide">
                                            <a href="form_input_group.html" className="side-menu__item">
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
                                            <a href="form_input_masks.html" className="side-menu__item">
                                                Input Masks
                                            </a>
                                        </li>
                                        <li className="slide">
                                            <a href="form_file_uploads.html" className="side-menu__item">
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
                                            <a href="form_color_pickers.html" className="side-menu__item">
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
                                    <a href="#" className="side-menu__item">
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
                            <a href="#" className="side-menu__item">
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
                            <a href="#" className="side-menu__item">
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
                            <a href="#" className="side-menu__item">
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
                            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                        </svg>
                    </div>
                </nav>
                {/* End::nav */}
            </div>
            {/* End::main-sidebar */}
        </aside>

    )
}
