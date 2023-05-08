import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {

   const navigate = useNavigate()

   const handleLogout = () =>{
      // console.log('Logout');
      navigate('/login', {
         replace: true
      });
   }

   return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
         <Link className="navbar-brand" to="/">
            Asociaciones
         </Link>

         <div className="navbar-collapse">
            <div className="navbar-nav">
               <NavLink
                  className="nav-item nav-link"
                  to="/marvel"
               >
                  Marvel
               </NavLink>

               <NavLink
                  className={({ isActive }) =>
                     `nav-item nav-link ${
                        isActive ? "active" : ""
                     }`
                  }
                  to="/dc"
               >
                  DC
               </NavLink>

               <NavLink
                  className="nav-item nav-link"
                  to="/search"
               >
                  Search
               </NavLink>
               <NavLink
                  className="nav-item nav-link"
                  to="/heros"
               >
                  Heros
               </NavLink>
            </div>
         </div>

         <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
            <ul className="navbar-nav ml-auto">
               {/* <NavLink
                  className= { ({isActive}) =>  `nav-item nav-link ${ isActive ? 'active': ''}`}  
                  to="/login"
               >
                  Logout
               </NavLink> */}

               <span className="nav-item nav-link text-primary">
                  Diego Lopez
               </span>

               <button className="nav-item nav-link btn"
                  onClick={handleLogout}
               >
                  Logout
               </button>
            </ul>
         </div>
      </nav>
   );
};
