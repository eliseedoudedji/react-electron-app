import React, { useState, useEffect } from 'react'
import Switcher from '../../components/commonComponents/Switcher'
import Header from '../../components/commonComponents/header'
import AppSidebar from '../../components/commonComponents/AppSidebar'
import AppContent from '../../components/commonComponents/AppContent'
import QuickstartPopup from '../../components/desktop/QuickstartPopup'
import { useEnvironment } from "../../Environement";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const { isElectron } = useEnvironment();
  const [selectedRow, setSelectedRow] = useState(null);

  // Affiche le popup après 1 seconde
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };
    // Fermer le modal
    const closeModal = () => {
      setShowModal(false);
      setSelectedRow(null);
  };
  return (
    <div style={{userSelect:"none"}}>
      {showPopup && isElectron && <QuickstartPopup onClose={handleClose} />}

     
      <AppContent />
      
    </div>
  )
}
