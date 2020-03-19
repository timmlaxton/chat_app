import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'

class Contact extends Component {
  render () {
  return(
    <div className="contact-body">
    <div className="contact-grid">
      <h2>Contact Me</h2>


<List>
  <ListItem>
    <ListItemContent icon="email">timmlaxton@gmail.com</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent icon="phone">07563143254</ListItemContent>
  </ListItem>

</List>
      </div>
    </div>

   )
  }
}

export default Contact;
