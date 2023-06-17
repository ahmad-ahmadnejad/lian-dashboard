import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Users from '../../Pages/Users/Users';

const ProtectedRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='users' element={<Users />} />
    </Routes>
  );
};

export default ProtectedRoute;
