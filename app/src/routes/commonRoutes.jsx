import { Route } from 'react-router-dom';
import Home from '../pages/mainpages/Dashboard';
import Dashboard from '../pages/mainpages/Dashboard';
import JournalPage from '../pages/mainpages/allpages/JournalPage';
import SaisiePage from '../pages/mainpages/allpages/saisie/SaisiePage';

export const commonRoutes = [
  <Route key="home" path="/mainpages" element={<Home />} />,
  <Route key="dashboard" path="/dashboard" element={<Dashboard />} />,
  <Route key="dossier" path="/dossier/:id" element={<JournalPage />} />,
  <Route key="saisie" path="/saisie/:id" element={<SaisiePage />} />

]; 