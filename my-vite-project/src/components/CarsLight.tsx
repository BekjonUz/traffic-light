import car from "../assets/bmw.jpg";
const CarsLight: React.FC = () => {
  return (
    <div className="w-[500px] mx-auto mt-[-22rem]">
      <img className="w-[500px] h-[28.7rem]" src={car} alt="" />
    </div>
  );
};

export default CarsLight;
