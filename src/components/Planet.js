import React from 'react';
import './Planet.css';
import { Link } from 'react-router-dom';
import nave from "./nave.png"
import portal from "./portal-164064.png"

function Planet() {
  return (
    <div>
    <Link to="/">
    <div className="globe"></div>
    </Link>
    <img src={nave}alt="nave" id="nave"/>
    <img src={portal}alt="portal dimensional" id="portal"/>
    </div>
  );
}

export default Planet;