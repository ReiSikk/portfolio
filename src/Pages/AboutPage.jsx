import reiphoto from '../media/rei.svg'
import buttonarrow from '../media/button-arrow.svg'
import { useTranslation } from "react-i18next";


function AboutPage() {
  
  const {t} = useTranslation();
  const { aboutMe, aboutMeText, aboutBody, getInTouch, email1, email2, emailCTA, cv1, cv2, cvCTA, github1, github2, githubCTA } = t("aboutPage");

  return (
    <>
    <header className='about-header'>
      <div className="header-wrapper">
        <div className="about-left">
          <h1>{aboutMe}</h1>
          <h2 className="h4-style">{aboutMeText}</h2>
        </div>
        <div className="about-img">
          <img src={reiphoto} alt="black and white illustration of Rei" />
        </div>
      </div>
    </header>
    <main className='about-main'>
      <p>
     {aboutBody}
      </p>
      <section className="about-contact">
        <h3 className='h2-style'>{getInTouch}</h3>
        <div className="contact-wrapper">
          <div className="contact-item">
             <div className="item-left">
              <h4>{email1}</h4>
              <h5 className='h4-style'>{email2}</h5>
             </div>
             <a href="mailto:sikkrei@gmail.com" rel='noreferrer' target='_blank'>
                <div className="item-right">
                <p className="big-btn">{emailCTA}</p>
                <span><img src={buttonarrow} alt="arrow pointing right"/></span>
              </div>
              </a>
          </div>
          <div className="contact-item">
             <div className="item-left">
              <h4>{cv1}</h4>
              <h5 className='h4-style'>{cv2}</h5>
             </div>
             <a href="https://drive.google.com/file/d/15Dy1-cenmJpTgnui7bMs5PeIa2-nm6Rf/view?usp=drive_link" rel='noreferrer' target='_blank' className="big-btn">
              <div className="item-right">
                <p className="big-btn">{cvCTA}</p>
                <span><img src={buttonarrow} alt="arrow pointing right"/></span>
              </div>
              </a>
          </div>
          <div className="contact-item">
             <div className="item-left">
              <h4>{github1}</h4>
              <h5 className='h4-style'>{github2}</h5>
             </div>
             <a href="https://github.com/ReiSikk" rel='noreferrer' target='_blank' className="big-btn">
              <div className="item-right">
                <p className="big-btn">{githubCTA}</p>
                <span><img src={buttonarrow} alt="arrow pointing right"/></span>
              </div>
              </a>
          </div>
        </div>
      </section>
    </main>
    </>

  )
}

export default AboutPage