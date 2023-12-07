import StyledCard from './VehicleCard.styled';

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

  const city = address.split(' ')[3].slice(0, -1);
  const country = address.split(' ')[4];

  return (
    <div>
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
              <li>{functionalities[1]}</li>
            </ul>
          </div>

          <button type="bytton">more</button>
        </div>
      </StyledCard>
    </div>
  );
};
