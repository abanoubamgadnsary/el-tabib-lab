import "./main.css";

function Main({ img, header, direction }) {
  return (
    <section className="main" id="about">
      <div className={direction}>
        <div className="img-container">
          <img src={img} alt="" />
        </div>
        <div className="text-co">
          <h1> {header}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            nulla molestiae laudantium dolorum amet, neque perspiciatis ducimus
            sapiente molestias mollitia temporibus doloribus ex vel, nostrum
            distinctio sunt ea. Adipisci, quas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Main;
