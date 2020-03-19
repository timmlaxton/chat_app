import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';
import {Row, Col, Image} from 'react-bootstrap';
import Tim from "../images/Tim.JPG"



class Home extends Component {
  render () {
  return(


    <div style={{width: '100%', margin: 'auto'}}>
    <Grid className="home-grid">
    <Cell col={12}>
    <img src={Tim}
    alt="avatar"
    className="man-img"/>







    <div className="banner-text">
    <h1>Software Developer</h1>

    <hr/>
    <p>HTML/CSS | JavaScript | React | MongoDB | Java | Spring | NodeJS | Express |</p>

    <div className="social-links">

    {/* Logos */}
    <a href="http://github.com/timmlaxton" rel="noopener noreferrer" target="_blank">
    <i className="fa fa-github-square"  aria-hidden="true" />
    </a>

    <a href="https://www.linkedin.com/in/tim-laxton-b6b33862/" rel="opener noreferrer" target="_blank">
    <i className="fa fa-linkedin-square"  aria-hidden="true" />
    </a>

    </div>
    </div>
    </Cell>
    </Grid>
    </div>
        )
      }
    }


export default Home;
