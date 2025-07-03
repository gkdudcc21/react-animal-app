import AnimalItem from './AnimalItem';
import style from './Favorites.module.css';

const Favorites = ({ favorites }) => {
  return (
    <ul className={style.favorites}>
      {favorites.map((animal, index) => <AnimalItem src={animal} key={index} />)}
    </ul>
  )
};
export default Favorites;