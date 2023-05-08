import { useNavigate } from "react-router-dom";

export const LoginPage = () => {

   const navigate = useNavigate()

   const onLogin =() => {
      // console.log('login');
      navigate('/marvel', {
         replace:true
      })
   }

  return (
     <>
        <div className="continer m-5 ">
           <h1>LoginPage</h1>
           <hr />

           <input type="text"
           placeholder="Nombre"
           
           />
          
        </div>
        <button
           className="btn btn-primary m-5 p-3"
           onClick={onLogin}
        >
           Login
        </button>
     </>
  );
}
