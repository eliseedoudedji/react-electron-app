import { Route, Navigate } from 'react-router-dom';
import WelcomeDesktop from '../pages/startdesktop/WelcomeDesktop';
import { commonRoutes } from './commonRoutes';

export const desktopRoutes = [
  <Route key="welcome" path="/startdesktop" element={<WelcomeDesktop />} />,
  ...commonRoutes,
  <Route key="default" path="*" element={<Navigate to="/startdesktop" />} />
]; 