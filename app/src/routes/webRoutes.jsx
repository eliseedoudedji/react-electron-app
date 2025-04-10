import { Route, Navigate } from 'react-router-dom';
import WelcomeWeb from '../pages/startweb/WelcomeWeb';
import LoginPage from '../pages/startweb/LoginPage';
import { commonRoutes } from './commonRoutes';
import SignUpPage from '../pages/startweb/SignUpPage';
import ForgotPass from '../pages/startweb/ForgotPass';
import PricingPage from '../pages/startweb/pricing/PricingPage';
import ConfirmMail from '../pages/startweb/ConfirmMail';

export const webRoutes = [
  <Route key="welcome" path="/startweb" element={<WelcomeWeb />} />,
  <Route key="login" path="/login" element={<LoginPage />} />,
  <Route key="signup" path="/signup" element={<SignUpPage />} />,
  <Route key="forgot-password" path="/forgot-password" element={<ForgotPass />} />,
  <Route key="pricing" path="/pricing" element={<PricingPage />} />,
  <Route key="confirm-mail" path="/confirm-mail" element={<ConfirmMail />} />,

  ...commonRoutes,
  <Route key="default" path="*" element={<Navigate to="/startweb" />} />
]; 