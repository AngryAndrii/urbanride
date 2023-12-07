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
  return (
    <div>
      <div>
        <img src={img} alt={model} width={100} />
      </div>
      {model}
      {make}
      {year}
      {rentalPrice}
    </div>
  );
};
