import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class app extends Component {
  state = {
    persons: [
      { name: 'Tim', age: 28},
      { name: 'Jim', age: 44},
      { name: 'Bob', age: 88}
    ],
    otherState: 'some other value',
    showPersons: false
  }


  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "tim", age: 28},
        { name: event.target.value, age: 44},
        { name: 'Bob', age: 100}
        ] 
    })
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
        backgroundColor: 'white',
        font: 'inherit',
        border: "3px solid black", 
        padding: '8px',
        cursor: 'pointer',
        position: 'center'
      };

      let persons = null;

      if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}/>
            })}
         
          </div> 
        );
      }

    return (
    <div className="App">
      <h1>Person</h1>
        <p>Learning</p>
        <button 
        style={style}
        onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
        </div>
        );
    }
}



 
export default app;




