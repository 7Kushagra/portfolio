import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Kushagra</span> <br />Website Designer</span>
                <p className="introPara">A Computer Science student passionate about web development, <br />problem-solving, and building smart. Always learning. Always creating.</p>
                <a href="/resume.pdf" download>
  <button className="btn">
    <img src={btnImg} alt="Download CV" className="btnImg" /> Download CV
  </button>
</a>

            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;