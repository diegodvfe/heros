import { Route, Routes } from 'react-router-dom'

import { LoginPage } from '../auth/pages/LoginPage';
// import { Navbar } from '../UI';
import { HerosRoutes } from '../heroes/routes/HerosRoutes';



export const AppRouter = () => {
  return (
     <>
        {/* <Navbar /> */}
        <Routes>
           <Route
              path="login"
              element={<LoginPage />}
           />
           <Route
              path="/*"
              element={<HerosRoutes />}
           />
        </Routes>
     </>
  );
}
