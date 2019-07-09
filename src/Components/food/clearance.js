import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

/*function Beauty() {
    return (<div className='nav-bg'>
        <h1>Clearance</h1>
        <p>It's crazy how fast time flies and how things progress.</p>
       
    </div>
    );
}

export default Beauty */


import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}