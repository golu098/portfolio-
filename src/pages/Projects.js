import React, { useEffect } from 'react';
import "./project.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom as a,
  SiHtml5,
  SiMaterialui,
  SiChai as b,
  SiEthereum as c,
  SiExpress,
  SiSocketdotio as d,
  SiTailwindcss as e,
  SiReactrouter as f,
  SiJavascript as g,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";

const Projects = () => {

  useEffect(() => {
    const planets = document.querySelectorAll('.planet');
    const p_radii = [22, 33, 50, 70, 112, 138, 165, 190];
    let p_radians = new Array(8).fill(0);
    const p_velocities = [1.607, 1.174, 1, 0.802, 0.434, 0.323, 0.228, 0.182];

    const moon = document.querySelector('#moon');
    const m_radius = 8;
    let m_radians = 0;
    const m_velocity = 10;

    const p_orbits = document.querySelectorAll('.p-orbit');
    const m_orbit = document.querySelector('#m-orbit');

    p_orbits.forEach((p_orbit, index) => {
      p_orbit.style.height = `${p_radii[index]}vmin`;
      p_orbit.style.width = `${p_radii[index]}vmin`;
    });

    const animationInterval = setInterval(() => {
      planets.forEach((planet, index) => {
        planet.style.left = `${Math.cos(p_radians[index]) * p_radii[index]}vmin`;
        planet.style.top = `${Math.sin(p_radians[index]) * p_radii[index]}vmin`;
        p_radians[index] += p_velocities[index] * 0.01;
      });

      // moon.style.left = `${earthX() + (Math.cos(m_radians) * m_radius)}vmin`;
      // moon.style.top = `${earthY() + (Math.sin(m_radians) * m_radius)}vmin`;
      // m_radians += m_velocity * 0.02;

      m_orbit.style.left = `${earthX()}vmin`;
      m_orbit.style.top = `${earthY()}vmin`;
    }, 1000 / 60);

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  function earthX() {
    const earthIndex = 2;
    const planets = document.querySelectorAll('.planet');
    return Number(planets[earthIndex].style.left.split('vmin')[0]);
  }

  function earthY() {
    const earthIndex = 2;
    const planets = document.querySelectorAll('.planet');
    return Number(planets[earthIndex].style.top.split('vmin')[0]);
  }


  return (

    <div >
      <div className='skill'>

        <img className="object" src="https://www.pngfind.com/pngs/m/500-5002894_skill-development-png-skills-do-you-need-transparent.png" alt="a" id="sun" />
        <img className="object planet" src="data:image/png;base64,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" alt="a" id="mercury" />
        <img className="object planet" src="https://e7.pngegg.com/pngimages/826/162/png-clipart-website-development-javascript-html5-css3-cascading-style-sheets-html-logo-web-design-text.png" alt="" id="venus" />
        <img className="object planet" src="https://logopond.com/logos/4af2da033faf33f4f6a7527b5de2c770.png" alt="" id="earth" />
        <img className="object planet" src="https://www.pngfind.com/pngs/m/500-5002894_skill-development-png-skills-do-you-need-transparent.png" alt="" id="mars" />
        <img className="object planet" src="data:image/png;base64,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" alt="" id="jupiter" />
        <img className="object planet" src="https://topskilled.in/wp-content/uploads/2023/06/MERN_full_500px.png" alt="" id="saturn" />
        <img className="object planet" src="https://w7.pngwing.com/pngs/525/959/png-transparent-microsoft-azure-sql-database-microsoft-sql-server-cloud-computing-text-trademark-logo.png" alt="" id="uranus" />
        <img className="object planet" src="data:image/png;base64,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" alt="" id="neptune" />
        <div className="object" id="moon"></div>

        <div className="object p-orbit"></div>
        <div className="object p-orbit"></div>
        <div className="object p-orbit"></div>
        <div className="object p-orbit"></div>
        <div className="object p-orbit"></div>
        <div className="object p-orbit"></div>
        <div className="object p-orbit"></div>
        <div className="object p-orbit"></div>
        <div className="object" id="m-orbit"></div>

        <img src="asteroid.png" className="object" alt="" id="belt" />
      </div>

      {/* project */}
      <div className='work-container'>

        <div className="section">
        <h1 style={{ textAlign: 'center', fontWeight: 800 }} className="a2">
  Projects
</h1>
          <div className="allProjects">
            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://i.ibb.co/c3C6FvF/Screenshot-2023-11-17-17-25-59.png"
                      alt="Study Notion"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>Study Notion</h2>
                  <p>
                  StudyNotion is a fully functional EdTech platform that enables users to create, consume, and rate educational content.
                  StudyNotion aims to provide a seamless and interactive learning experience for students, making education more accessible and engaging. Additionally, the platform serves as a platform for instructors to showcase their expertise and connect with learners across the globe.


                  </p>
                  <div>
                    <SiNodedotjs />
                    <SiExpress />
                    <SiMongodb />
                    <FaReact />
                    {/* <SiMaterialui /> */}
                  </div>
                  <div>
                    <a
                      href="https://study-notion-2.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt onbt">
                        See this Live
                      </span>
                    </a>
                    <a
                      href="https://github.com/golu098/StudyNotionMERN"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt">
                        View Code
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://i.ibb.co/0KCTSNK/Screenshot-2023-11-17-17-35-54.png"
                      alt="Modern-Weather-App"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>Modern Weather App</h2>
                  <p>Developed a weather application by integrating an open API, showcasing real-time humidity data and a comprehensive 10-day weather forecast.
                  Created a distinctive visual representation of weather data by integrating color variations while ensuring accurate data integration.
                  </p>
                  <div>
                    <DiCss3 />
                    <SiHtml5 />
                    <IoLogoJavascript />
                  </div>
                  <div>
                    <a
                    href='https://modern-weather-app.vercel.app/'
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt">
                        See this Live
                      </span>
                    </a>
                    <a
                      href="https://github.com/golu098/Modern_weather_app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt">
                        View Code
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img src="https://i.ibb.co/2Nq2NKT/Screenshot-2023-11-17-17-40-59.png" alt="" />
                  </div>
                </div>
                <div className="project_information">
                  <h2>Vidyarthi Khata</h2>
                  <p>
                  Developed a web application enabling users to efficiently monitor and track their expenses. Implemented intuitive features for easy expense management, providing users with a seamless platform to oversee and analyze their financial activities in real-time.
                  Empowering financial control with a comprehensive expense monitoring web application.


                  </p>
                  <div>
                  <DiCss3 />
                    <SiHtml5 />
                    <IoLogoJavascript />
                  </div>
                  <div>
                    <a
                      href="https://vidyarthi-khata.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt onbt">
                        See this Live
                      </span>
                    </a>
                    <a
                      href="https://github.com/golu098/vidyarthi-khata"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt">
                        View Code
                      </span>
                    </a>
                   </div>
                </div>
              </div>
            </div>

            {/* <div className="projects_container" data-aos="fade-right"> 
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/branding/dropbox-logo@2x.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>DropBox Clone -Backend</h2>
                  <p>
                    Backend API for a google drive like app built using NodeJS,
                    Express, Mongoose, MongoDB Atlas and AWS S3 for storage. CRUD
                    operations for users, files and folders.
                  </p>
                  <div>
                    <SiNodedotjs />
                    <SiExpress />
                    <SiMongodb />
                  </div>
                  <div>
                    <a
                      href="https://drive-system.herokuapp.com/user/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt onbt">
                        URL for the API
                      </span>
                    </a>
                    <a
                      href="https://github.com/imbickydutta/file-system-backend"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt">
                        View Code
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://i.ibb.co/934WpdD/uniqlo-clone.png"
                      alt="Uniqlo-Clone"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>Uniqlo Clone</h2>
                  <p>
                    UNIQLO is a clothing apparel company, from Japan. They also
                    sell their products in online mode through their website. We
                    cloned their website.
                  </p>
                  <div>
                    <SiNodedotjs />
                    <SiExpress />
                    <SiMongodb />
                    <SiHtml5 />
                    <DiCss3 />
                  </div>
                  <div>
                    <a
                      href="https://uniqlo-clone.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt onbt">
                        See this Live
                      </span>
                    </a>
                    <a
                      href="https://github.com/Shreyasgkhakal100/uniqlo-backend-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt">
                        View Code
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects_container" data-aos="fade-right">
              <div className="project">
                <div className="project_videocontainer">
                  <div>
                    <img
                      src="https://i.ibb.co/KVBGkdy/FFD69103-C304-42-E8-BCCD-8836-AAEFEA9-C.jpg"
                      alt="PulsePlus-Clone"
                    />
                  </div>
                </div>
                <div className="project_information">
                  <h2>PulsePlus Clone</h2>
                  <p>
                    PulsePlus is an E-commerce web application for online Buying
                    Medicines and Consult to Doctor and Book a near Testlab.
                  </p>
                  <div>
                    <DiCss3 />
                    <SiHtml5 />
                    <IoLogoJavascript />
                  </div>
                  <div>
                    <a
                      href="https://pulseplus-clone.netlify.app/landing_page.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt onbt">
                        See this Live
                      </span>
                    </a>
                    <a
                      href="https://github.com/Shreyasgkhakal100/www.pulseplus.in-Clone"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span type="button" className="btns onbt">
                        View Code
                      </span>
                    </a>
                  </div>
                </div>
              </div> */}
            {/* </div>
          </div>
        </div> */}

</div>

</div>

      </div>
    </div>
  );
}


export default Projects;
