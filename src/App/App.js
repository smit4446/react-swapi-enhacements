import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from '../Header/Header'
import Planet from '../Planet/Planet'
import People from '../People/People'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      peopleList: [],
      planetList: []
    };
  }
  //This is similar to jQuery's onReady
  //It is called by React when the component is loaded and ready to go!
  componentDidMount() {
    this.getPeople('https://swapi.co/api/people/?format=json');
    this.getPlanets('https://swapi.co/api/planets/?format=json');
  }
  
  getPeople(url) {
    axios.get(url)
      .then( (response) => {
        this.setState({peopleList: [...this.state.peopleList, ...response.data.results]})
        this.getPeople(response.data.next);
      }).catch( (error) => {
        console.log(error);
      })
  }
  
  getPlanets(url) {
    axios.get(url)
      .then( (response) => {
        this.setState({planetList: [...this.state.planetList, ...response.data.results]})
        this.getPlanets(response.data.next);
      }).catch( (error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Planet planetList = {this.state.planetList}/>
        <People peopleList = {this.state.peopleList}/>
      </div>
    );
  }
}

export default App;
