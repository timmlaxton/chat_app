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
    otherState: 'some other value'
  }


   switchNameHandler = (newName) => {
    //console.log("Was clicked");
    //this.state.persons[0].name="Timothy";
   this.setState( {
      persons: [
      { name: newName, age: 28},
      { name: 'Jim', age: 44},
      { name: 'Bob', age: 100}
      ] 
    })
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

    render () {
      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: "1px solid blue", 
        padding: '8px',
        cursor: 'pointer'
      };
    return (
    <div className="App">
      <h1>toot toot</h1>
        <p>Wopp wopp</p>
        <button 
        style={style}
        onClick={() => this.switchNameHandler("Timoteitei")}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, "Timotei")}
        changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>

        </div>
        );
    }
}



 
export default app;




