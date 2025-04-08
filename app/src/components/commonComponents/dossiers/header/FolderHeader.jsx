import React, { useState, useEffect, useRef } from 'react';

export default function FolderHeader() {
    const [dropdownOpenJournaux, setDropdownOpenJournaux] = useState(false);
    const [dropdownOpenComptes, setDropdownOpenComptes] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [fileOpen, setFileOpen] = useState(false);
    const [definitionOpen, setDefinitionOpen] = useState(false);
    const [saisirOpen, setSaisirOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);


    // Référence pour détecter les clics à l'extérieur du header
    const headerRef = useRef(null);

    const toggleFileMenu = () => {
        setFileOpen(prev => !prev);
        setDefinitionOpen(false);
        setSaisirOpen(false);
        setEditOpen(false);
        setSettingsOpen(false);
    };

    const toggleDefinitionMenu = () => {
        setDefinitionOpen(prev => !prev);
        setFileOpen(false);
        setSaisirOpen(false);
        setEditOpen(false);
        setSettingsOpen(false);
    };

    const toggleSaisirDropdown = () => {
        setSaisirOpen(prev => !prev);
        setFileOpen(false);
        setDefinitionOpen(false);
        setEditOpen(false);
        setSettingsOpen(false);
    };

    const toggleEditDropdown = () => {
        setEditOpen(prev => !prev);
        setFileOpen(false);
        setDefinitionOpen(false);
        setSaisirOpen(false);
        setSettingsOpen(false);

        setDropdownOpenJournaux(false);
        setDropdownOpenComptes(false);
    };

    const toggleSettingsDropdown = () => {
        setSettingsOpen(prev => !prev);
        setFileOpen(false);
        setDefinitionOpen(false);
        setSaisirOpen(false);
        setEditOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(prev => !prev);
    };
    const closeAllMenus = () => {
        setFileOpen(false);
        setDefinitionOpen(false);
        setSaisirOpen(false);
        setEditOpen(false);
        setSettingsOpen(false);
    };
    const toggleDropdownEdit = () => setDropdownOpenEdit(prev => !prev);
    const toggleDropdownJournaux = () => {
        setDropdownOpenJournaux(prev => !prev);
        setDropdownOpenComptes(false);
    }
    const toggleDropdownComptes = () => {
        setDropdownOpenComptes(prev => !prev);
        setDropdownOpenJournaux(false);
    }

    // Ferme les menus si clic en dehors du header
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                closeAllMenus();
            }
        };

        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const menuStyles = {
        header: {
            borderBottom: "1px solid #ddd",
            backgroundColor: "#f5f5f5",
            padding: "4px 0",
            height: "36px",
            display: "flex",
            alignItems: "center"
        },
        headerContainer: {
            display: "flex",
            alignItems: "center",
            width: "100%",
            padding: "0 8px"
        },
        menuGroup: {
            display: "flex",
            gap: "12px"
        },
        menuButton: {
            fontSize: "14px",
            padding: "6px 10px",
            color: "#6B7280",
            backgroundColor: "transparent",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "4px"
        },
        menuButtonHover: {
            backgroundColor: "#e5e7eb"
        },
        dropdownMenu: {
            padding: "4px 0",
            backgroundColor: "#ffffff",
            border: "1px solid #ddd",
            borderRadius: "4px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            minWidth: "220px",
            zIndex: 1000,
            position: "absolute",
            top: "36px"
        },
        dropdownItem: {
            fontSize: "14px",
            padding: "8px 12px",
            color: "#6B7280",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
            cursor: "pointer",
            borderBottom: "1px solid #eee"
        },
        dropdownItemLast: {
            borderBottom: "none"
        },
        submenu: {
            position: "absolute",
            left: "100%",
            top: "0",
            backgroundColor: "#ffffff",
            border: "1px solid #ddd",
            borderRadius: "4px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            minWidth: "180px",
            padding: "4px 0",
            marginLeft: "2px",
            zIndex: 1001
        },
        submenuItem: {
            fontSize: "14px",
            padding: "8px 12px",
            color: "#6B7280",
            display: "block",
            textDecoration: "none",
            borderBottom: "1px solid #eee"
        },
        submenuItemLast: {
            borderBottom: "none"
        },
        icon: {
            fontSize: "16px",
            marginRight: "8px"
        }
    };

    return (
        <header ref={headerRef} style={menuStyles.header}>
            <div style={menuStyles.headerContainer}>
                <div style={menuStyles.menuGroup}>
                    {/* Menu Fichier */}
                    <div style={{ position: 'relative' }}>
                        <div
                            onClick={toggleFileMenu}
                            style={fileOpen ? { ...menuStyles.menuButton, ...menuStyles.menuButtonHover } : menuStyles.menuButton}
                        >
                            Fichier <i className="ri-arrow-down-s-line" />
                        </div>
                        {fileOpen && (
                            <div style={menuStyles.dropdownMenu}>
                                <a style={menuStyles.dropdownItem}>
                                    <i className="bi bi-upload" style={menuStyles.icon} />
                                    Importer de fichier
                                </a>

                                {/* Sous-menu Exportation */}
                                <div style={{ position: 'relative' }}>
                                    <a

                                        onClick={toggleDropdown}
                                        style={menuStyles.dropdownItem}
                                    >
                                        <i className="bi bi-download" style={menuStyles.icon} />
                                        Exportation de fichier
                                        <i className="bi bi-chevron-right" style={{ marginLeft: 'auto' }} />
                                    </a>
                                    {dropdownOpen && (
                                        <div style={menuStyles.submenu}>
                                            <a href="#" style={menuStyles.submenuItem}>
                                                <i className="bi bi-file-excel" style={menuStyles.icon} />
                                                Fichier excel
                                            </a>
                                            <a href="#" style={menuStyles.submenuItem}>
                                                <i className="bi bi-file-pdf" style={menuStyles.icon} />
                                                Fichier pdf
                                            </a>
                                            <a href="#" style={menuStyles.submenuItem}>
                                                <i className="bi bi-file-word" style={menuStyles.icon} />
                                                Fichier word
                                            </a>
                                            <a href="#" style={{ ...menuStyles.submenuItem, ...menuStyles.submenuItemLast }}>
                                                <i className="bi bi-file-text" style={menuStyles.icon} />
                                                Fichier txt
                                            </a>
                                        </div>
                                    )}
                                </div>

                                <a href="#" style={menuStyles.dropdownItem}>
                                    <i className="bi bi-arrow-repeat" style={menuStyles.icon} />
                                    Importation d'une balance générale
                                </a>
                                <a href="#" style={menuStyles.dropdownItem}>
                                    <i className="bi bi-gear" style={menuStyles.icon} />
                                    Paramètre
                                </a>
                                <a href="#" style={menuStyles.dropdownItem}>
                                    <i className="bi bi-question-circle" style={menuStyles.icon} />
                                    Aide
                                </a>
                                <a href="#" style={{ ...menuStyles.dropdownItem, ...menuStyles.dropdownItemLast }}>
                                    <i className="bi bi-box-arrow-right" style={menuStyles.icon} />
                                    Quitter
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Menu Définition */}
                    <div style={{ position: 'relative' }}>
                        <div
                            onClick={toggleDefinitionMenu}
                            style={definitionOpen ? { ...menuStyles.menuButton, ...menuStyles.menuButtonHover } : menuStyles.menuButton}
                        >
                            Définition <i className="ri-arrow-down-s-line" />
                        </div>
                        {definitionOpen && (
                            <div style={menuStyles.dropdownMenu}>
                                <a href="#" style={menuStyles.dropdownItem}>
                                    <i className="bi bi-journal-text" style={menuStyles.icon} />
                                    Comptes généraux
                                </a>
                                <a href="#" style={menuStyles.dropdownItem}>
                                    <i className="bi bi-building" style={menuStyles.icon} />
                                    Sociétés
                                </a>
                                <a href="#" style={menuStyles.dropdownItem}>
                                    <i className="bi bi-folder" style={menuStyles.icon} />
                                    Dossiers
                                </a>
                                <a href="#" style={menuStyles.dropdownItem}>
                                    <i className="bi bi-journal" style={menuStyles.icon} />
                                    Journal
                                </a>
                                <a href="#" style={menuStyles.dropdownItem}>
                                    <i className="bi bi-person" style={menuStyles.icon} />
                                    Utilisateur
                                </a>
                                <a href="#" style={menuStyles.dropdownItem}>
                                    <i className="bi bi-geo-alt" style={menuStyles.icon} />
                                    Localisation des immobilisations
                                </a>
                                <a href="#" style={{ ...menuStyles.dropdownItem, ...menuStyles.dropdownItemLast }}>
                                    <i className="bi bi-box" style={menuStyles.icon} />
                                    Eléments immobilisés
                                </a>
                            </div>
                        )}
                    </div>
                    {/* Menu Saisir */}
                    <div style={{ position: 'relative' }}>
                        <div
                            onClick={toggleSaisirDropdown}
                            style={saisirOpen ? { ...menuStyles.menuButton, ...menuStyles.menuButtonHover } : menuStyles.menuButton}
                        >
                            Saisir <i className="ri-arrow-down-s-line" />
                        </div>
                        {saisirOpen && (
                            <div style={menuStyles.dropdownMenu}>
                                <a style={menuStyles.dropdownItem}>
                                    <i className="bi bi-pencil-square" style={menuStyles.icon} />
                                    Passer une écriture
                                </a>

                                <a href="#" style={menuStyles.dropdownItem}>
                                    <i className="bi bi-cash-stack" style={menuStyles.icon} />
                                    Opération de caisse en temps réel
                                </a>
                                <a href="#" style={menuStyles.dropdownItem}>
                                    <i className="bi bi-journal-check" style={menuStyles.icon} />
                                    Lettrage
                                </a>
                                <a href="#" style={menuStyles.dropdownItem}>
                                    <i className="bi bi-card-checklist" style={menuStyles.icon} />
                                    Pointage
                                </a>
                                <a href="#" style={{ ...menuStyles.dropdownItem, ...menuStyles.dropdownItemLast }}>
                                    <i className="bi bi-archive" style={menuStyles.icon} />
                                    Clôture des reports à nouveau
                                </a>
                                <a href="#" style={{ ...menuStyles.dropdownItem, ...menuStyles.dropdownItemLast }}>
                                    <i className="bi bi-bar-chart-line" style={menuStyles.icon} />
                                    Vérification des deux équilibres fondamentaux
                                </a>
                                <a href="#" style={{ ...menuStyles.dropdownItem, ...menuStyles.dropdownItemLast }}>
                                    <i className="bi bi-calculator" style={menuStyles.icon} />
                                    Calcul automatique des amortissements
                                </a>
                                <a href="#" style={{ ...menuStyles.dropdownItem, ...menuStyles.dropdownItemLast }}>
                                    <i className="bi bi-calendar3" style={menuStyles.icon} />
                                    Clôture périodique
                                </a>
                                <a href="#" style={{ ...menuStyles.dropdownItem, ...menuStyles.dropdownItemLast }}>
                                    <i className="bi bi-piggy-bank" style={menuStyles.icon} />
                                    Déduction et réintégration fiscale
                                </a>
                                <a href="#" style={{ ...menuStyles.dropdownItem, ...menuStyles.dropdownItemLast }}>
                                    <i className="bi bi-exclamation-circle" style={menuStyles.icon} />
                                    Charges suplétives avant résultat intermédiaire
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Menu Editions */}
                    <div style={{ position: 'relative' }}>
                        <div
                            onClick={toggleEditDropdown}
                            style={editOpen ? { ...menuStyles.menuButton, ...menuStyles.menuButtonHover } : menuStyles.menuButton}
                        >
                            Editions <i className="ri-arrow-down-s-line" />
                        </div>

                        {editOpen && (
                            <div style={menuStyles.dropdownMenu}>
                                {/* Sous-menu Journaux */}
                                <div style={{ position: 'relative' }}>
                                    <a onClick={toggleDropdownJournaux} style={menuStyles.dropdownItem}>
                                        <i className="bi bi-journal-bookmark-fill" style={menuStyles.icon} />
                                        Journaux
                                        <i className="bi bi-chevron-right" style={{ marginLeft: 'auto' }} />
                                    </a>
                                    {dropdownOpenJournaux && (
                                        <div style={menuStyles.submenu}>
                                            <a href="#" style={menuStyles.submenuItem}>
                                                <i className="bi bi-book" style={menuStyles.icon} />
                                                Journal des achats
                                            </a>
                                            <a href="#" style={menuStyles.submenuItem}>
                                                <i className="bi bi-book" style={menuStyles.icon} />
                                                Journal des ventes
                                            </a>
                                            <a href="#" style={menuStyles.submenuItem}>
                                                <i className="bi bi-book" style={menuStyles.icon} />
                                                Journal de caisse
                                            </a>
                                            <a href="#" style={menuStyles.submenuItem}>
                                                <i className="bi bi-book" style={menuStyles.icon} />
                                                Journal de banque
                                            </a>
                                            <a href="#" style={menuStyles.submenuItem}>
                                                <i className="bi bi-book" style={menuStyles.icon} />
                                                Journal des opérations diverses
                                            </a>
                                            <hr />
                                            <a href="#" style={menuStyles.submenuItem}>
                                                <i className="bi bi-file-earmark-excel" style={menuStyles.icon} />
                                                Exporter Excel
                                            </a>
                                            <a href="#" style={menuStyles.submenuItem}>
                                                <i className="bi bi-file-earmark-pdf" style={menuStyles.icon} />
                                                Exporter PDF
                                            </a>
                                            <a href="#" style={menuStyles.submenuItem}>
                                                <i className="bi bi-file-earmark-text" style={menuStyles.icon} />
                                                Exporter TXT
                                            </a>
                                        </div>
                                    )}
                                </div>

                                {/* Sous-menu Comptes Généraux */}
                                <div style={{ position: 'relative' }}>
                                    <a onClick={toggleDropdownComptes} style={menuStyles.dropdownItem}>
                                        <i className="bi bi-collection" style={menuStyles.icon} />
                                        Comptes Généraux
                                        <i className="bi bi-chevron-right" style={{ marginLeft: 'auto' }} />
                                    </a>
                                    {dropdownOpenComptes && (
                                        <div style={menuStyles.submenu}>
                                            <a href="#" style={menuStyles.submenuItem}>
                                                <i className="bi bi-file-earmark-check" style={menuStyles.icon} />
                                                Balance des comptes
                                            </a>
                                            <a href="#" style={menuStyles.submenuItem}>
                                                <i className="bi bi-file-earmark-bar-graph" style={menuStyles.icon} />
                                                Grand livre
                                            </a>
                                            <a href="#" style={menuStyles.submenuItem}>
                                                <i className="bi bi-diagram-3" style={menuStyles.icon} />
                                                Balance âgée
                                            </a>
                                            <hr />
                                            <a href="#" style={menuStyles.submenuItem}>
                                                <i className="bi bi-file-earmark-excel" style={menuStyles.icon} />
                                                Exporter Excel
                                            </a>
                                            <a href="#" style={menuStyles.submenuItem}>
                                                <i className="bi bi-file-earmark-pdf" style={menuStyles.icon} />
                                                Exporter PDF
                                            </a>
                                            <a href="#" style={menuStyles.submenuItem}>
                                                <i className="bi bi-file-earmark-text" style={menuStyles.icon} />
                                                Exporter TXT
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>



                    {/* Menu Paramètres */}
                    <div style={{ position: 'relative' }}>
                        <div
                            onClick={toggleSettingsDropdown}
                            style={settingsOpen ? { ...menuStyles.menuButton, ...menuStyles.menuButtonHover } : menuStyles.menuButton}
                        >
                            Paramètres <i className="ri-arrow-down-s-line" />
                        </div>
                        {settingsOpen && (
                            <div style={menuStyles.dropdownMenu}>
                                <a href="#" style={menuStyles.dropdownItem}>
                                    <i className="bi bi-sliders" style={menuStyles.icon} />
                                    Général
                                </a>
                                <a href="#" style={menuStyles.dropdownItem}>
                                    <i className="bi bi-palette" style={menuStyles.icon} />
                                    Apparence
                                </a>
                                <a href="#" style={menuStyles.dropdownItem}>
                                    <i className="bi bi-wifi" style={menuStyles.icon} />
                                    Réseau
                                </a>
                                <a href="#" style={menuStyles.dropdownItem}>
                                    <i className="bi bi-shield-lock" style={menuStyles.icon} />
                                    Sécurité
                                </a>
                                <a href="#" style={menuStyles.dropdownItem}>
                                    <i className="bi bi-keyboard" style={menuStyles.icon} />
                                    Raccourcis
                                </a>
                                <a href="#" style={menuStyles.dropdownItem}>
                                    <i className="bi bi-arrow-repeat" style={menuStyles.icon} />
                                    Mises à jour
                                </a>
                                <a href="#" style={menuStyles.dropdownItem}>
                                    <i className="bi bi-info-circle" style={menuStyles.icon} />
                                    À propos
                                </a>
                                <a href="#" style={{ ...menuStyles.dropdownItem, ...menuStyles.dropdownItemLast }}>
                                    <i className="bi bi-box-arrow-right" style={menuStyles.icon} />
                                    Quitter
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
