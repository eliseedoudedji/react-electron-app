import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook, faFolderOpen, faUsers, faTruck, faUserTie, faUser,
  faExchangeAlt, faFileAlt, faList, faBolt, faBuilding,
  faMapMarkerAlt, faMapPin, faThLarge, faUserShield, faFileSignature,
  faBars, faChevronLeft, faChevronDown, faChevronRight
} from '@fortawesome/free-solid-svg-icons';

const SidebarItem = ({ icon, label, isCollapsed, onClick, isOpen, hasSubmenu }) => (
  <li
    className="nav-item mb-2 d-flex align-items-center justify-content-between"
    title={label}
    style={{ cursor: 'pointer', padding: '4px 0' }}
    onClick={onClick}
  >
    <div className="d-flex align-items-center">
      <FontAwesomeIcon icon={icon} className="me-2" style={{ fontSize: isCollapsed ? '18px' : '14px' }} />
      {!isCollapsed && <span>{label}</span>}
    </div>
    {!isCollapsed && hasSubmenu && (
      <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronRight} className="me-2" />
    )}
  </li>
);

export default function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [openMenus, setOpenMenus] = useState({
      auxiliaires: true,
      journaux: true,
      immobilisations: true
    });
  
    const toggleSidebar = () => setIsCollapsed(!isCollapsed);
    const toggleSubmenu = (menu) => {
      setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
    };
  
    const handleMonthClick = (month) => {
      console.log(`Mois cliqué : ${month}`);
    };
  
    const months = ['Jan.', 'Fév.', 'Mar.', 'Avr.', 'Mai.', 'Jui.', 'Juil.', 'Aoû.', 'Sep.', 'Oct.', 'Nov.', 'Déc.'];
  
    return (
      <div
        style={{
          width: isCollapsed ? '60px' : '240px',
          height: '100vh',
          backgroundColor: '#fff',
          transition: 'width 0.3s ease',
          borderRight: '1px solid #ddd',
          fontFamily: "'Segoe UI', 'Roboto', sans-serif",
          fontSize: '14px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Header fixe */}
        <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
          {!isCollapsed && <h6 className="mb-0">Menu rapide</h6>}
          <button
            className="btn btn-link p-0"
            onClick={toggleSidebar}
            style={{ color: '#333', fontSize: '16px' }}
          >
            <FontAwesomeIcon icon={isCollapsed ? faBars : faChevronLeft} />
          </button>
        </div>
  
        {/* Zone scrollable */}
        <div style={{ overflowY: 'auto', flexGrow: 1, padding: '12px' }}>
          <ul className="nav flex-column">
            <SidebarItem icon={faBook} label="Plan comptable" isCollapsed={isCollapsed} />
            <SidebarItem icon={faFolderOpen} label="Comptes généraux" isCollapsed={isCollapsed} />
  
            <SidebarItem
              icon={faUsers}
              label="Comptes auxiliaires"
              isCollapsed={isCollapsed}
              onClick={() => toggleSubmenu('auxiliaires')}
              hasSubmenu
              isOpen={openMenus.auxiliaires}
            />
            {openMenus.auxiliaires && (
              <ul className="nav flex-column" style={{ paddingLeft: isCollapsed ? '0px' : '20px' }}>
                <SidebarItem icon={faTruck} label="Fournisseurs" isCollapsed={isCollapsed} />
                <SidebarItem icon={faUserTie} label="Clients" isCollapsed={isCollapsed} />
                <SidebarItem icon={faUser} label="Personnel" isCollapsed={isCollapsed} />
                <SidebarItem icon={faExchangeAlt} label="Débiteurs/Créditeurs" isCollapsed={isCollapsed} />
              </ul>
            )}
  
            <SidebarItem
              icon={faFileAlt}
              label="Journaux"
              isCollapsed={isCollapsed}
              onClick={() => toggleSubmenu('journaux')}
              hasSubmenu
              isOpen={openMenus.journaux}
            />
            {openMenus.journaux && (
              <ul className="nav flex-column" style={{ paddingLeft: isCollapsed ? '0px' : '20px' }}>
                <SidebarItem icon={faList} label="Tous les journaux" isCollapsed={isCollapsed} />
                <div
                  className="d-flex flex-wrap mt-2"
                  style={{
                    backgroundColor: '#f1f1f1',
                    borderRadius: '4px',
                    padding: '2px',
                    marginBottom: "6px",
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                  }}
                >
                  {months.map((mois, idx) => (
                    <button
                      key={idx}
                      className="btn btn-light btn-sm"
                      onClick={() => handleMonthClick(mois)}
                      title={mois}
                      style={{
                        fontSize: '12px',
                        fontWeight: 'bold',
                        margin: '2px 0px',
                        minWidth: isCollapsed ? '90%' : '32px',
                        textAlign: isCollapsed ? 'right' : 'left',
                        padding: '2px 6px',
                        border: '1px solid #ccc'
                      }}
                    >
                      {mois}
                    </button>
                  ))}
                </div>
              </ul>
            )}
  
            <SidebarItem
              icon={faBuilding}
              label="Immobilisations"
              isCollapsed={isCollapsed}
              onClick={() => toggleSubmenu('immobilisations')}
              hasSubmenu
              isOpen={openMenus.immobilisations}
            />
            {openMenus.immobilisations && (
              <ul className="nav flex-column" style={{ paddingLeft: isCollapsed ? '0px' : '20px' }}>
                <SidebarItem icon={faMapMarkerAlt} label="Localisations" isCollapsed={isCollapsed} />
                <ul className="nav flex-column" style={{ paddingLeft: isCollapsed ? '0px' : '20px' }}>
                  <SidebarItem icon={faMapPin} label="Sites" isCollapsed={isCollapsed} />
                  <SidebarItem icon={faThLarge} label="Emplacements" isCollapsed={isCollapsed} />
                  <SidebarItem icon={faUserShield} label="Responsables" isCollapsed={isCollapsed} />
                  <SidebarItem icon={faFileSignature} label="Éditions" isCollapsed={isCollapsed} />
                </ul>
              </ul>
            )}
          </ul>
        </div>
      </div>
    );
  }
  
