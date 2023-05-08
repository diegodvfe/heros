
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../UI';

import { DcPage, HeroPage, Marvel, SearchPage } from '../pages';

export const HerosRoutes = () => {
  return (
     <>
        <Navbar />

        <div className="container p-2">
           <Routes>
              <Route path="marvel" element={<Marvel />} />
              <Route path="dc" element={<DcPage />}  />

              <Route path="search" element={<SearchPage />} />

              <Route  path="heros:/heroId"  element={<HeroPage />}  />

              <Route
                 path="/"
                 element={
                    <Navigate to={"/marvel"} />
                 }
              />
           </Routes>
        </div>
     </>
  );
}
