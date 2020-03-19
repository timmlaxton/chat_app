import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import image from "../images/Tim2.JPG";

class About extends Component {
  render () {
  return(
    <div className="about">
    <img className="profile-image" alt='icon' src={image}/>
    <div className= "about-me-header">
    </div>
    <div className= "about-me-text">
    <h2> About me </h2>
      <p> I have been learning to code since 2019, first through Code Clan
      and then from different tutorials and articles I've read online.
      My projects are predominantly written in JavaScript, with a MongoDB backend
      and React frontend. However, I am trying to do more coding in Java,
      with Spring backends. I'm intrested in developing what skills and experience I have
      and would love the oppurtunity to learn and work with others.</p>

    </div>
    </div>




   )
  }
}

export default About;
