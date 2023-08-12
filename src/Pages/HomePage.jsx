import  reiPhoto from "../media/rei.svg";

function HomePage() {
  return (
    <>
    <header>
        <div className="hero-wrapper">
            <div className="hero-text">
                <h1>Rei Sikk</h1>
                <h2 className="h1-style">Web Designer/Developer</h2> 
            </div>
            <div className="hero-media">
                <img src={reiPhoto} alt="illustration of Rei, the author of the portfolio website" />
            </div>
        </div>
    </header>
    </>
  )
}

export default HomePage