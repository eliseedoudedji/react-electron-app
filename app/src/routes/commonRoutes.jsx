import { Route } from 'react-router-dom';
import Home from '../pages/mainpages/Dashboard';
import Dashboard from '../pages/mainpages/Dashboard';

export const commonRoutes = [
  <Route key="home" path="/mainpages" element={<Home />} />,
  <Route key="dashboard" path="/dashboard" element={<Dashboard />} />
]; 