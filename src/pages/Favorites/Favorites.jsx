import { useSelector } from 'react-redux';
import CatalogStyled from '../Catalog/Catalog.styled';
import { selectFavorites } from '../../redux/favorites/favoritesSelectors';
import { VehicleCard } from '../../components/VehicleCard/VehicleCard';
import StyledFavPage from './Favorites.styled';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <StyledFavPage>
      <div>
        {favorites.length === 0 ? (
          <h1>Favorite list is empty</h1>
        ) : (
          <>
            <CatalogStyled>
              <ul className="container list">
                {favorites.map((el, id) => (
                  <li key={id}>
                    <VehicleCard data={el} />
                  </li>
                ))}
              </ul>
            </CatalogStyled>
          </>
        )}
      </div>
    </StyledFavPage>
  );
};

export default Favorites;
