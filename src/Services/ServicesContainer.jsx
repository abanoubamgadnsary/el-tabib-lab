import "./servicesContainer.css";

function ServicesContainer({ image }) {
  return (
    <div className="servicesContainer">
      <img src={image} alt="" />
      <div className="text">
        <h1>Service Name</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium excepturi
        </p>
      </div>
    </div>
  );
}

export default ServicesContainer;
