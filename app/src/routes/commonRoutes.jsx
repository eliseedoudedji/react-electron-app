import { Route } from 'react-router-dom';
import Home from '../pages/mainpages/Dashboard';
import Dashboard from '../pages/mainpages/Dashboard';
import DossierPage from '../pages/mainpages/allpages/DossierPage';

export const commonRoutes = [
  <Route key="home" path="/mainpages" element={<Home />} />,
  <Route key="dashboard" path="/dashboard" element={<Dashboard />} />,
  <Route key="dossier" path="/dossier/:id" element={<DossierPage />} />
]; 