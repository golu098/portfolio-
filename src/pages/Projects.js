import React, { useEffect } from 'react';
import "./project.css";

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
        p_radians[index] += p_velocities[index] * 0.02;
      });

      moon.style.left = `${earthX() + (Math.cos(m_radians) * m_radius)}vmin`;
      moon.style.top = `${earthY() + (Math.sin(m_radians) * m_radius)}vmin`;
      m_radians += m_velocity * 0.02;

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
    <div className='skill'>
      <img className="object" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-pM_Ksom0MPrCasAFhD2RzrF3y5YE1wrHvA&usqp=CAU" alt="" id="sun" />
      <img className="object planet" src="https://www.pngitem.com/pimgs/m/355-3559358_c-and-c-logo-hd-png-download.png" alt="" id="mercury" />
      <img className="object planet" src="" alt="" id="venus" />
      <img className="object planet" src="earth.png" alt="" id="earth" />
      <img className="object planet" src="mars.png" alt="" id="mars" />
      <img className="object planet" src="jupiter.png" alt="" id="jupiter" />
      <img className="object planet" src="saturn.png" alt="" id="saturn" />
      <img className="object planet" src="uranus.png" alt="" id="uranus" />
      <img className="object planet" src="neptune.png" alt="" id="neptune" />
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
  );
};

export default Projects;
