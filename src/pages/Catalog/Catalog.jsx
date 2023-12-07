import { useEffect } from 'react';
import { fetchCars } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../../redux/selectors';
import { VehicleCard } from '../../components/VehicleCard';
import StyledList from './Catalog.styled';

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(getCars);

  useEffect(() => {
    if (!cars.lengh) {
      dispatch(fetchCars());
    }
  }, [dispatch]);

  return (
    <>
      <StyledList className="container">
        {cars.map((el, id) => (
          <li key={id}>
            <VehicleCard data={el} />
          </li>
        ))}
      </StyledList>
    </>
  );
};

export default Catalog;
