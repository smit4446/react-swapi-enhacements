import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class People extends Component {
  render() {
    return (
        <div>
            <h1>People List</h1>
        <ul>
        {this.props.peopleList.map(people =>
          <li key={people.url}>
          <p>Name: {people.name}</p> 
          <p>Height: {people.height}</p>  
          <p>Hair Color: {people.hair_color}</p> 
          <p>...........</p> </li>
        )}
        </ul>
        </div>
    );
  }
}

export default People;