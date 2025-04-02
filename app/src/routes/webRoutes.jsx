import { Route, Navigate } from 'react-router-dom';
import WelcomeWeb from '../pages/startweb/WelcomeWeb';
import { commonRoutes } from './commonRoutes';

export const webRoutes = [
  <Route key="welcome" path="/startweb" element={<WelcomeWeb />} />,
  ...commonRoutes,
  <Route key="default" path="*" element={<Navigate to="/startweb" />} />
]; 