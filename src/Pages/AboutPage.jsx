import reiphoto from '../media/rei.svg'
import buttonarrow from '../media/button-arrow.svg'

function AboutPage() {
  return (
    <>
    <header className='about-header'>
      <div className="header-wrapper">
        <div className="about-left">
          <h1>About me</h1>
          <h2 className="h4-style">I’m a recent graduate of the KEA Multimedia Design AP degree and from August 2023 I will start the Web Development BA degree at Cphbusiness.</h2>
        </div>
        <div className="about-img">
          <img src={reiphoto} alt="black and white illustration of Rei" />
        </div>
      </div>
    </header>
    <main className='about-main'>
      <p>
      In the summer of 2021, after completing military service in my home country of Estonia I moved to Copenhagen to realize my goal of living abroad and pursue my passion for design and tech by studying Multimedia Design at KEA. I’ve long been interested in design and what makes design good, but during my studies I realised I am also captivated about the technical side of bringing designs into life with code. Coding is something that is very challenging and frustrating at times but the sense of accomplishment and joy you get when solving problems is so rewarding and motivating. I find that in this field the possibilities are endless and I’m motivated by the thought that good design and technological solutions can improve the lives of so many people. 
      </p>
      <section className="about-contact">
        <h3 className='h2-style'>Get in touch</h3>
        <div className="contact-wrapper">
          <div className="contact-item">
             <div className="item-left">
              <h4>Have a project or opportunity?</h4>
              <h5 className='h4-style'>Let’s chat.</h5>
             </div>
             <a href="mailto:sikkrei@gmail.com" rel='noreferrer' target='_blank'>
                <div className="item-right">
                <p className="big-btn">Email me</p>
                <span><img src={buttonarrow} alt="arrow pointing right"/></span>
              </div>
              </a>
          </div>
          <div className="contact-item">
             <div className="item-left">
              <h4>Interested in my CV?</h4>
              <h5 className='h4-style'>Have a look.</h5>
             </div>
             <a href="https://drive.google.com/file/d/1C0LNgyBQHgF86T_2ZqL9H8WKrYWRVuM4/view?usp=sharing" rel='noreferrer' target='_blank' className="big-btn">
              <div className="item-right">
                <p className="big-btn">Here is my CV</p>
                <span><img src={buttonarrow} alt="arrow pointing right"/></span>
              </div>
              </a>
          </div>
          <div className="contact-item">
             <div className="item-left">
              <h4>Want to take a look at my Github profile?</h4>
              <h5 className='h4-style'>Go ahead.</h5>
             </div>
             <a href="https://github.com/ReiSikk" rel='noreferrer' target='_blank' className="big-btn">
              <div className="item-right">
                <p className="big-btn">Github profile</p>
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