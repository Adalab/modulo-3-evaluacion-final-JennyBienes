//import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import GetApiData from '../services/ContactsApi';
//import CharacterDetail from './CharacterDetail';
import CharacterList from './CharacterList';
import '../stylesheets/App.scss';
import Filters from './Filters';
import Header from './Header';


const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterSpecie, setFilterSpecie] = useState('Human');


  useEffect(() => {
    GetApiData(filterSpecie).then((data) => setCharacters(data));
  }, [filterSpecie]);
  console.log('se ejecuta despues de UseEffect Character queda como sigue');
  console.log(characters);

  const handleFilterNameChild = (ev) => {
    setFilterSpecie(ev.target.value);
  };

  const renderCharacters = () => {
    return characters.map((character) => {
      return (
        <li>
          <img src={character.image} alt="img" className="img" />
          <p>{character.name}</p>
          <p>{character.species}</p>
        </li>
      );
    });
  };
  return (
    <form className="form__search">
      <Header />
      <Filters />
      <div className="select__filter">
        <label htmlFor="filterSpecie">Selecciona la especie </label>
        <select
          className="select__input"
          name="filterSpecie"
          id="filterSpecie"
          value="filterSpecie"
          onChange={handleFilterNameChild}
        >
          <option value="Human">Humano</option>
          <option value="Alien">Alien</option>
        </select>
      </div>
      <h2>Personajes</h2>
      <ul>{renderCharacters()}</ul>
      <CharacterList />
    </form>
  );
};

export default App;
