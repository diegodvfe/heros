import {
   Navigate,
   useNavigate,
   useParams,
} from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
   const {id} = useParams();
   // console.log(id)

   const navigate = useNavigate()

   const hero = useMemo(() => getHeroById(id), [id]);

   const onBack = () => {
      navigate( "/marvel ")
   }


   console.log(hero)

   if (!hero) {
      return <Navigate to="/marvel" />
   }

   return (
      <div className="row  mt-5">
         <div className="col-4">
            <img
               src={` /assets/heroes/${id}.jpg `}
               alt={hero.superhero}
               className="img-thumbnail"
            />
         </div>

         <div className="col-8">
            <h3 className="fs-1 text-dark">
               {hero.superhero}
            </h3>
            <ul className="list-group list-group-flush ">
               <li className="list-group-item">
                  <b>Alter ego: </b>
                  {hero.alter_ego}
               </li>
               <li className="list-group-item">
                  <b>Publisher: </b>
                  {hero.publisher}
               </li>
               <li className="list-group-item">
                  <b>Characters: </b>
                  {hero.characters}
               </li>
               <li className="list-group-item">
                  <b>First Movie: </b>
                  {hero.first_appearance}
               </li>
            </ul>

            <button className="btn btn-outline-primary mt-4"
               onClick={onBack}
            >
               Return
            </button>
         </div>

        
      </div>
      // <h1>HeroPage</h1>
   );
};
