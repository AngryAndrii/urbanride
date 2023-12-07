import { useEffect } from 'react';
import { fetchCars } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../../redux/selectors';
import { VehicleCard } from '../../components/vehhicleCard';

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
      <h1>Catalog</h1>
      <ul>
        {cars.map((el, id) => (
          <li key={id}>
            <VehicleCard data={el} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Catalog;
