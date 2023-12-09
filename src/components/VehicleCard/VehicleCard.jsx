import { useDispatch, useSelector } from 'react-redux';
import StyledCard from './VehicleCard.styled';
import { FaRegHeart, FaHeart } from 'react-icons/fa6';
import { selectFavorites } from '../../redux/favorites/favoritesSelectors';
import { addToFav, rmFromFav } from '../../redux/favorites/favoritesSlise';
import Modal from '../Modal/Modal';
import ModalWindow from '../Modal/Modal';
import { useState } from 'react';

export const VehicleCard = ({ data }) => {
  const {
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
    functionalities,
    img,
  } = data;

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const city = address.split(' ')[3].slice(0, -1);
  const country = address.split(' ')[4];

  const handleLikeClick = data => {
    if (!favorites.some(el => el.id === data.id)) {
      dispatch(addToFav(data));
    } else {
      dispatch(rmFromFav(data));
    }
  };

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <button className="like_button" onClick={() => handleLikeClick(data)}>
        {favorites.some(car => car.id === data.id) ? (
          <FaHeart
            style={{
              fill: '#3470FF',
              width: '100%',
              height: '100%',
            }}
          />
        ) : (
          <FaRegHeart
            style={{
              fill: '#FFFFFFCC',
              width: '100%',
              height: '100%',
            }}
          />
        )}
      </button>
      <StyledCard>
        <div className="img_div">
          <img src={img} alt={model} width={100} />
        </div>
        <div style={{ width: '100%' }}>
          <div className="main_descr">
            <div>
              <p>
                {make} <span style={{ color: '#3470FF' }}>{model}</span>, {year}
              </p>
            </div>
            {rentalPrice}
          </div>
          <div className="secondary_descr">
            <ul>
              <li> {city}</li>
              <li>{country}</li>
              <li>{rentalCompany}</li>
            </ul>
            <ul>
              <li>{type}</li>
              <li>{model}</li>
              <li>{id}</li>
              <li>{functionalities[0]}</li>
            </ul>
          </div>

          <button type="bytton" className="info_button" onClick={openModal}>
            Learn more
          </button>
        </div>
      </StyledCard>
      <ModalWindow isOpen={modalIsOpen} closeModal={closeModal} data={data} />
    </div>
  );
};
