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
  const [filterSpecie, setFilterSpecie] = useState('');


  useEffect(() => {
    GetApiData(filterSpecie, filterName).then((data) => setCharacters(data));
     }, [filterSpecie, filterName]);
  
  //   console.log(characters.lenght);
  //debugger;
  
  const handleFilterSpecie = (ev) => {
    setFilterSpecie(ev.target.value);
  };
  const handleFilterName = (ev) => {
    console.log('El criterio de búsqueda por nombre es ', ev.currentTarget.value);
    setFilterName ( ev.currentTarget.value );
    console.log( 'Y filtername es',filterName );
  }
  
  return (
    <form className="form__search">
      <Header />
      <section>
      <Filters
        filterSpecie={filterSpecie}
        handleFilterSpecie={handleFilterSpecie}
        filterName={filterName}
        handleFilterName={handleFilterName}
      />
      </section>
      <section>
      <CharacterList characters= {characters} />
      </section>
    </form>
  );
};

export default App;
