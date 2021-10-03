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

  const handleFilterSpecie = (ev) => {
    setFilterSpecie(ev.target.value);
  };

  
  return (
    <form className="form__search">
      <Header />
      <section>
      <Filters
        filterSpecie={filterSpecie}
        handleFilterSpecie={handleFilterSpecie}
      />
      </section>
      <section>
      <CharacterList characters= {characters} />
      </section>
    </form>
  );
};

export default App;
