import React, { useState } from 'react';
import Modal from 'react-modal';
import { customStyles } from './Modal.styled';
import { RxCross1 } from 'react-icons/rx';
import './modal.css';

Modal.setAppElement(document.getElementById('root'));

function ModalWindow({ isOpen, closeModal, data }) {
  //   function afterOpenModal() {
  //     subtitle.style.color = '#f00';
  //   }
  const {
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    accessories,
    type,
    id,
    functionalities,
    img,
    fuelConsumption,
    engineSize,
    description,
    rentalConditions,
    mileage,
  } = data;

  const city = address.split(' ')[3].slice(0, -1);
  const country = address.split(' ')[4];
  const conditionsArr = rentalConditions.split('\n');
  const ageNum = conditionsArr[0].slice(-2);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Car modal"
      >
        <div className="modalWrapper">
          <button onClick={closeModal} className="closeButton">
            <RxCross1 />
          </button>
          <div className="img_div">
            <img src={img} alt={model} width={'100%'} />
          </div>
          <div style={{ width: '100%' }}>
            <div className="main_descr">
              <div>
                <p>
                  {make} <span style={{ color: '#3470FF' }}>{model}</span>,
                  {year}
                </p>
              </div>
            </div>
            <div className="secondary_descr">
              <ul>
                <li> {city}</li>
                <li>{country}</li>
                <li>id: {id}</li>
                <li>Year: {year}</li>
                <li>Type:{type}</li>
              </ul>
              <ul>
                <li>Fuel Consumption: {fuelConsumption}</li>
                <li>Engine Size: {engineSize}</li>
              </ul>
            </div>
            <div className="carPromo">{description}</div>
            <div className="funcDescr">
              <h3>Accessories and functionalities:</h3>
              <ul>
                <li>{accessories[0]}</li>
                <li>{accessories[1]}</li>
                <li>{accessories[2]}</li>
              </ul>
              <ul>
                <li>{functionalities[0]}</li>
                <li>{functionalities[1]}</li>
                <li>{functionalities[2]}</li>
              </ul>
            </div>
            <div className="rentCond">
              <h3>Rental Conditions: </h3>
              <ul>
                <li>
                  Minimum age:
                  <span style={{ color: '#3470FF' }}> {ageNum}</span>
                </li>
                <li>{conditionsArr[1]}</li>
                <li>{conditionsArr[2]}</li>
                <li>
                  Mileage: <span>{mileage}</span>
                </li>
                <li>
                  Price: <span>{rentalPrice}</span>
                </li>
              </ul>
            </div>
            <a className="rentButton" href="tel:+380730000000">
              Rental car
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ModalWindow;
