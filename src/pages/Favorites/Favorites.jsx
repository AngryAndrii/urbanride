import { useSelector } from 'react-redux';
import StyledList from '../Catalog/Catalog.styled';
import { selectFavorites } from '../../redux/favorites/favoritesSelectors';
import Filter from '../../components/Filter/Filter';
import { VehicleCard } from '../../components/VehicleCard/VehicleCard';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <div>
      <div>
        {favorites.length === 0 ? (
          <h1>Favorite list is empty</h1>
        ) : (
          <>
            <Filter />
            <StyledList className="container">
              {favorites.map((el, id) => (
                <li key={id}>
                  <VehicleCard data={el} />
                </li>
              ))}
            </StyledList>
          </>
        )}
      </div>
    </div>
  );
};

export default Favorites;
