import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from '../../assets/rightArrow.png'
import {Link} from 'react-scroll'

const Programs = () => {
  return (
    <div className="programs" id="programs">
      {/* Header */}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape youself</span>
      </div>
      <div className="program-categories">
        {programsData.map((program,i) => (
          <div className="category" key={i}>
            {program.image}
            <span>{program.heading}</span> <span>{program.details}</span>
            <div className="join-now"><span><Link 
              spy={true}
              smooth={true} to='email'>Join Now</Link></span><img src={RightArrow} alt=""/></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
