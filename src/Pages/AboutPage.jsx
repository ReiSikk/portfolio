import reiphoto from '../media/rei.svg'
function AboutPage() {
  return (
    <>
    <header className='about-header'>
      <div className="about-left">
        <h1>About me</h1>
        <h2 className="h4-style">I’m a recent graduate of the KEA Multimedia Design AP degree and from August 2023 I will start studying in the Web Development BA degree in Cphbusiness.</h2>
      </div>
      <div className="about-img">
        <img src={reiphoto} alt="black and white illustration of Rei" />
      </div>
    </header>
    <main className='about-main'>
      <p>
      In the summer of 2021, after completing military service in my home country of Estonia I moved to Copenhagen to realize my goal of living abroad and pursue my passion for design and tech by studying Multimedia Design at KEA. I’ve long been interested in design and what makes design good, but during my studies I realised I am also captivated about the technical side of bringing designs into life with code. Coding is something that is very challenging and frustrating at times but the sense of accomplishment and joy you get when solving problems is so rewarding and motivating. I find that in this field the possibilities are endless and I’m motivated by the thought that good design and technological solutions can improve the lives of so many people. 
      </p>
    </main>
    </>

  )
}

export default AboutPage