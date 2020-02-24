import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';


class app extends Component {
  state = {
    persons: [
      { id: 'qwe', name: 'Fred', age: 28},
      { id: 'asd',name: 'Jim', age: 44},
      { id: 'zxc',name: 'Bob', age: 88}
    ],
    otherState: 'some other value',
    showPersons: false
  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    this.setState( {persons: persons} )      
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

togglePersonHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});

}

    render () {
      const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black'
        }
      };

      let persons = null;

      if (this.state.showPersons) {
        persons = (
          <div>
            <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
            
         
          </div> 
        );
     
      }

      const classes = [];
      if (this.state.persons.length <= 2) {
        classes.push('red');
      }
      if (this.state.persons.length <= 1) {
        classes.push('bold');
      }
      

    return (
      
    <div className="App">
      <h1>Hi, im a app</h1>
      <p className={classes.join('')}>This is working?</p>
      <button className="button" onClick={this.togglePersonHandler}>
      Toggle persons
      </button>
      {persons}
        </div>
       
        );
    }
}



 
export default app;




