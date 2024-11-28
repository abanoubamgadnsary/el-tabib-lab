import "./hero.css";

function Hero() {
  function exploerButton() {
    const el = document.getElementById("about");
    el.scrollIntoView();
    console.log(el);
  }

  return (
    <section className="hero" id="main">
      <div className="text">
        <h1>Welcome to EL-TABEB|LAB</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit Dolorem
          similique eos eius ipsam pariatur voluptas, consequuntur ex eligendi
          perspiciatis odio optio ducimus molestiae tenetur consequatur modi
          animi facilis praesentium sit!
        </p>
        <button onClick={exploerButton}>Explore More</button>
      </div>
    </section>
  );
}

export default Hero;
