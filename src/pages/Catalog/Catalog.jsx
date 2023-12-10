import { useEffect, useState } from 'react';
import { fetchCars } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../../redux/selectors';
import { VehicleCard } from '../../components/VehicleCard/VehicleCard';
import CatalogStyled from './Catalog.styled';
import Filter from '../../components/Filter/Filter';

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);
  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (!cars.lengh) {
      dispatch(fetchCars(page));
      setShowButton(true);
    }
  }, [dispatch, page]);

  const showLoadMoreBtn = cars.length / 12 >= page && showButton;

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <CatalogStyled>
      <Filter cars={cars} />
      <ul className="container list">
        {cars.map((el, id) => (
          <li key={id}>
            <VehicleCard data={el} />
          </li>
        ))}
      </ul>
      {showLoadMoreBtn && (
        <button onClick={handleLoadMore} className="loadMoreBtn">
          Load more
        </button>
      )}
    </CatalogStyled>
  );
};

export default Catalog;
