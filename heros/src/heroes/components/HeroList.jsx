
import { getHerosPubllisher } from '../helpers'

// eslint-disable-next-line react/prop-types
export const HeroList = ({publisher}) => {

    // eslint-disable-next-line no-unused-vars
    const heroes = getHerosPubllisher(publisher)

  return (
    
        <ul>
           {heroes.map((hero) => (
              <li key={hero.id}>
                 {hero.superhero}
              </li>
           ))}
           {/* <li></li>
        <li></li>
        <li></li>
        <li></li> */}
        </ul>
     
  )
}
