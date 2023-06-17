import MainLayout from './Layouts/MainLayout/MainLayout';
import './Assets/Styles/Fonts/fontiran.css';
import './Assets/Styles/Global/globals.css';
import './Assets/Styles/Tailwind/output.css';
import ProtectedRoute from './Routes/ProtectedRoutes/ProtectedRoutes';
const App = () => {
  // in this location I Can Check User Auth , And Switch Between ProtectedRoute & UnProtectedRoute
  return (
    <MainLayout>
      <ProtectedRoute />
    </MainLayout>
  );
};

export default App;
