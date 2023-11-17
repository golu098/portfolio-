import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase,  faStar } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./about.css";
const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: 'black', color: 'white' }
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: 'black', color: 'white' }
};


const About = () => {
  const timeline = [
    {
      icon: workIcon,
      date: 'Nov 2021 - Feb 2022',
      title: 'Project Manager Intern',
      subtitle: 'Olcademy',
      desc: 'Orchestrated and effectively supervised a team specializing in Software Testing and Cyber Security during the internship tenure. Directed and optimized team performance, implementing strategies that significantly increased efficiency and productivity. Maintained consistent communication with the senior management team, providing regular project updates and swiftly addressing any concerns or hurdles that arose.',
    },
    {
      icon: workIcon,
      date: 'Oct 2020 - Nov 2020',
      title: 'Web Developer Intern',
      subtitle: 'Sarp MindFire Pvt.Ltd',
      desc: 'Spearheaded frontend development tasks as a Web Developer intern, contributing to the creation of user-centric interfaces. Demonstrated proficiency in handling two pivotal projects: the development of a Legal Advisory platform and a School Website, ensuring a seamless user experience. Conducted rigorous testing protocols to validate website functionalities, guaranteeing optimal performance and user-friendliness.',
    },
    // Add more objects as needed
    // { icon: workIcon, date: '2008 - 2010', title: 'Web Designer', subtitle: 'Los Angeles, CA', desc: 'User Experience, Visual Design' },
    { icon: starIcon }, // This entry seems incomplete; you might want to provide more details
  ];
  


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
      <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="Yearly-timeline">
                    <div class="timeline">
                      <div className='edu1'>
                        <h1>Education</h1>
                      {/* <h1 style={{ fontSize: '60px', padding:'40px 40px ',textAlign: 'center' }}>Heading 1</h1> */}
                      </div>
                        <a href="https://www.cuchd.in/" class="timeline-content">
                            <div class="timeline-icon"><i class="fa fa-instagram"></i></div>
                            <h3 class="title">2021-24</h3>
                            {/* <p  class="name"></p> */}
                            <h4>Chandigarh University</h4>
                            <p class="description">
                            Bachelor of Engineering in Computer Science and Engineering 
                            </p>
                        </a>
                    </div>



                    <div class="timeline">
                        <a href="https://www.gpp7.org.in/" class="timeline-content">
                            <div class="timeline-icon"><i class="fa fa-twitter"></i></div>    
                            <h3 class="title">2018-21</h3>
                            <h1 class="description">
                            Diploma in Computer Science & Engineering
                            </h1>
                        </a>
                    </div>
                    <div class="timeline">
                        <a href="http://www.shivaminternationalschool.com/index.html" class="timeline-content">
                            <div class="timeline-icon"><i class="fa fa-facebook"></i></div>    
                            <h3 class="title">2009-2018</h3>
                            <h1 class="description">
                              Primary and Secondary Education
                            </h1>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
      </div>



<div className='experience'>
<div className="App">
  <div className='exp'>
      <h1>Experience</h1>
      </div>
      <VerticalTimeline>
          {timeline.map((t, i) => {
            const contentStyle = t.icon.iconStyle || { background: 'white', color: 'black' };
            const arrowStyle = i === 0 ? { borderRight: '7px solid white' } : undefined;

            return (
              <VerticalTimelineElement
                key={i}
                className="vertical-timeline-element--work"
                contentStyle={contentStyle}
                contentArrowStyle={arrowStyle}
                date={t.date}
                {...t.icon}
              >
                {t.title ? (
                  <React.Fragment>
                    <h3 className="vertical-timeline-element-title">{t.title}</h3>
                    {t.subtitle && <h4 className="vertical-timeline-element-subtitle">{t.subtitle}</h4>}
                    {t.desc && <p>{t.desc}</p>}
                  </React.Fragment>
                ) : (
                  undefined
                )}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
    </div>
  )
}

export default About;