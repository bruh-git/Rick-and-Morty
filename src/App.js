// App.js
import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        characters: [],
    };
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    })
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="corpo">
        <div className="App">
          <h1>
            Ricky and Morty Characters:
          </h1>
          <div className="body-container">
            {characters.map(({ name, image }) => {
              return (
                <div className="container" key={name}>
                  <h3>{name}</h3>
                  <img src={image} alt={name}/>
                </div>
              )
            })}
          </div>
          <Link to="/planet" style={{ textDecoration: 'none' }}><button id="btn">Dimensão C-137</button></Link>
        </div>
      </div>
    );
  }
}

export default App;
