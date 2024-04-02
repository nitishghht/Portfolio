import React from 'react';
import '../Home/Home.css';
import { Link } from 'react-scroll';
import profile from '../../assets/image.png';
import image from '../../assets/hireme.png';
import Resume from '../../assets/Resume.pdf';

export const Home = () => {
  const handleDownload = () => {
    window.open(Resume, '_blank');
  };

  return (
    <section id='Intro'>
      <div className="intropage">
        <span className='Hello'>Welcome,</span>
        <span className='Lines'>I'am  <span className="introname">Nitish</span> <br/>Web Developer</span>
        <p className="introline">A front-end developer specializes in creating visually compelling and responsive user interfaces for websites or applications.<br/> Proficient in HTML, CSS, and JavaScript, they translate design concepts into interactive and seamless digital experiences.</p>
        <Link><button className='btn' onClick={handleDownload}><img src={image} alt="image" className='btnImg'/>Hire Me</button></Link>

        <img src={profile} alt="Profile" className='bg' />
      </div>
    </section>
  );
};
