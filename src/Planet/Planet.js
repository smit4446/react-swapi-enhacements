import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class Planet extends Component {

  render() {
    return (
        <div>
            <h1>Planet List</h1>
        <ul>
            {this.props.planetList.map(planet =>
            <li key={planet.url}>
            <p>Planet Name: {planet.name}</p> 
            <p>Diameter: {planet.diameter}</p>  
            <p>Population: {planet.population}</p> 
            <p>Terrain: {planet.terrain}</p> 
            <p>Orbital Period: {planet.orbital_period}</p>
            <p>...........</p> </li>
            )}
        </ul>
        </div>
    );
  }
}

export default Planet;
