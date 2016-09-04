import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const baseUrl = 'http://pokeapi.co/api/v2';
//const baseUrlSprite = 'http://pokeapi.co/media/sprites/pokemon';
const baseUrlSprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

ReactDOM.render(
  <App baseUrl={baseUrl} baseUrlSprite={baseUrlSprite}/>,
  document.getElementById('root')
);
