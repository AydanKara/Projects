import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-title">
        <span>Find the best this season</span>
        <h2>Special collection for everyone</h2>
        <a href="/">Discover Now</a>
      </div>
      <div className="hero-image-container">
        <img className="hero-image" src="../../public/images/hero.png" alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
