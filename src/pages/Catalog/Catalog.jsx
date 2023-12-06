import { useEffect } from 'react';
import { fetchCars } from '../../redux/operations';
import { useDispatch, useSelector } from 'react-redux';

const Catalog = () => {
  const dispatch = useDispatch();
  const lol = useSelector(state => state.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      <h1>Catalog</h1>
      {console.log(lol)}
    </>
  );
};

export default Catalog;
