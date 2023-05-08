import { getHerosPubllisher } from "../helpers";
import { HeroCard } from "./HeroCard";

// eslint-disable-next-line react/prop-types
export const HeroList = ({ publisher }) => {
   // eslint-disable-next-line no-unused-vars
   const heroes = getHerosPubllisher(publisher);

   return (
      <div className="row rows-cols-1 row-cols-md-3 row-cols-sm-1 g-3">
         {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
         ))}
         {/* <li></li>
        <li></li>
        <li></li>
        <li></li> */}
      </div>
   );
};
