import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Kushagra</span> <br />Website Designer</span>
                <p className="introPara">A Computer Science student passionate about web development, <br />problem-solving, and building smart. Always learning. Always creating.</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/> Download CV</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;