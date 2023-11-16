import React from 'react'
import "./about.css";
const About = () => {
  return (
    <div>
      <div className='about-intro'>
        <div className='about-img'>
          <img src="https://media4.giphy.com/media/Vnk8f29XU6GSZK8uGJ/giphy.gif" alt="img" />
        </div>
        <div className='about-text'>
          <div className='box1'>
            <p className='text1'>
              Hi ! I am a Full Stack Developer with expertise in building scalable web applications. I have hands-on experience in designing, developing, and deploying software solutions using various programming languages, including Python, Java, and JavaScript. Additionally, I have a solid understanding of Machine Learning algorithms and their implementation in real life projects.As a Full Stack Developer, I have a strong foundation in Data Structures and Algorithms, which I have implemented using C++. With my knowledge, I can efficiently design and develop scalable solutions for complex problems.
              I have participated in multiple hackathons, where I have honed my skills in rapid prototyping, problem-solving, and collaboration. I am adept at developing innovative solutions within tight timeframes, using a variety of programming languages and tools.
            </p>
          </div>
          {/* <img src="https://www.meesho.io/img/home/vision/LadyInYellow.png" alt="img" height="50%" width="50%" /> */}
        </div>
      </div>
      <div className='educational'>
      <section class="timeline">
        <h2 className='text2'>Educational TimeLine</h2>
  <div class="container">
    <div class="timeline__wrapper">
      <div class="timeline__progressbar"></div>
      <div class="timeline__block">
        <div class="timeline__block__bullet-point">
          <span class="timeline__block__circle"></span>
        </div>
        <div class="timeline__block__head">
          <h1 class="timeline__block__title">July-2021-July 2024</h1>
        </div>
        <div class="timeline__block__body">
          <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
          <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
        </div>
      </div>
      <div class="timeline__block">
        <div class="timeline__block__bullet-point">
          <span class="timeline__block__circle"></span>
        </div>
        <div class="timeline__block__head">
          <h1 class="timeline__block__title">February 2020</h1>
        </div>
        <div class="timeline__block__body">
          <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
          <p class="timeline__block__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio nihil id animi et ipsum itaque veniam minima aliquid ad expedita.</p>
        </div>
      </div>
      ...
      <div class="timeline__hider"></div>
    </div>
  </div>
</section>

      </div>
    </div>
  )
}

export default About;