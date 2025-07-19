import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';


const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I design and develop responsive websites using HTML, CSS, and Python, with a strong focus on creating clean, user-friendly experiences.I build cool web stuff. Whether it’s a simple site or a smart web app, I love turning ideas into real, working projects that people can actually use.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>I design clean, user-friendly interfaces that make digital experiences simple, smooth, and impactful.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>I bring websites to life with clean design, thoughtful layouts, and a focus on user experience making sure every page feels smooth and looks great.

</p>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default Skills;