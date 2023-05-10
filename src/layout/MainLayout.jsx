import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';
import NavigationBar from '../pages/shared/NavigationBar';

const MainLayout = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
