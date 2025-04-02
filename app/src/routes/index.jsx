import { HashRouter as Router, Routes } from 'react-router-dom';
import { useEnvironment } from '../Environement';
import { desktopRoutes } from './desktopRoutes';
import { webRoutes } from './webRoutes';

function AppRoutes() {
  const { isElectron } = useEnvironment();

  return (
    <Router>
      <Routes>
        {isElectron ? desktopRoutes : webRoutes}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
