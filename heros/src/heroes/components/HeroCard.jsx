/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
export const HeroCard = ({
   id,
   superhero,
   // eslint-disable-next-line no-unused-vars
   publisher,
   // eslint-disable-next-line react/prop-types
   alter_ego,
   first_appearance,
   characters,
}) => {
   const heroImage = `/assets/heroes/${id}.jpg`;

   const CharacterHeros = ({
      alter_ego,
      characters,
   }) => {
      if (alter_ego === characters) return <></>;

      return <p> {characters} </p>;
   };

   return (
      <div className="col ">
         <div className="card">
            <div className="row no-gutters">
               <div className="col-4">
                  <img
                     src={heroImage}
                     alt={superhero}
                     className="card-img"
                  />
               </div>

               <div className="col-8">
                  <h5 className="card-title">
                     {superhero}
                  </h5>
                  <p className="card-text">
                     {alter_ego}
                  </p>
                  {/* {
                        (alter_ego !== characters) && ( <p>{characters}</p> )
                    } */}
                  <CharacterHeros
                     characters={characters}
                     alter_ego={alter_ego}
                  />
                  <p className="card-text">
                     <small className="text-muted">
                        {first_appearance}
                     </small>
                  </p>
                  <Link to={`/hero/${id}`} className="btn btn-primary ">
                     Mas...{" "}
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};
