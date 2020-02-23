import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class app extends Component {
  state = {
    persons: [
      { id: 'qwe', name: 'Tim', age: 28},
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
        border: "3px solid black", 
        padding: '8px',
        cursor: 'pointer',
        position: 'center',
        ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black'
        }
      };

      let persons = null;

      if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) =>  this.nameChangedHandler(event, person.id)}/>
            })}
         
          </div> 
        );
        style.backgroundColor = 'red';
        style[':hover'] = {
          backgroundColor: 'salmon',
          color: 'black'
        }
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
      <h1>Person</h1>
        <p className={classes.join('')}>Learning</p>
        <button 
        style={style}
        onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
        </div>
       
        );
    }
}



 
export default app;




