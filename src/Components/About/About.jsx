import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt='' className='about-img' />
        <img src={play_icon} alt='' className='play-icon' />
      </div>
      <div className='about-right'>
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quibusdam error nesciunt eligendi atque maxime consequuntur odio voluptatum aperiam accusantium ipsa cum, nostrum delectus nulla illo quidem iure velit voluptatem.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non culpa fuga autem soluta, labore nisi, suscipit possimus commodi sapiente debitis iusto voluptate doloribus sequi pariatur sed eaque nesciunt enim maiores! </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita temporibus est magnam labore consequuntur cumque quo maxime in. Nobis corporis facilis nam quos eligendi quasi illum, nesciunt quisquam nemo omnis.</p>
      </div>
    </div>
  );
};

export default About;
