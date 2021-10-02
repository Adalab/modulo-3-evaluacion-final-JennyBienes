//import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import getApiData from '../services/ContactsApi';
//import CharacterDetail from './CharacterDetail';
//import CharacterList from './CharacterList';
//import Filters from './Filters';
//import Header from './Header.js';
import '../stylesheets/App.scss';
import logo from '../Images/Rick_and_Morty_-_logo_(English).png';

//function App() {

  const App = () => {
    
    const [characters, setCharacters] = useState([]);
    const [input, setInput] = useState("");
    useEffect(() => {
      getApiData().then((data) => {
        setCharacters(data);
      });
    }, []);

  return (
    <div className="background">
    <header className="header">
      <img
      className="header__image"
      src={logo}
      alt="Logo Rick and Morty"
      title="Logo Rick and Morty"
    />
  </header>
  <main>
  </main>
      
  </div>
  );
};

export default App;
