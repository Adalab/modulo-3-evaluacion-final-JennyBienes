import { Route, Switch, useRouteMatch, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GetApiData from '../services/contactsApi';
import ModalWindow from './ModalWindow';
import CharacterDetail from './CharacterDetail';
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

  const routeData = useRouteMatch('/user/:id');
  const characterId = (routeData !== null) ? routeData.params.id : '';

  const selectedContact = characters.find((character) => character.id === parseInt(characterId))

  console.log('El contacto seleccionado para card es', selectedContact);

  const handleFilterSpecie = (ev) => {
    setFilterSpecie(ev.target.value);
  };
  const handleFilterName = (ev) => {
    console.log('El criterio de búsqueda por nombre es ', ev.currentTarget.value);
    setFilterName(ev.currentTarget.value);
    console.log('Y filtername es', filterName);
  }

  return (
    <form className="form__search">
      <Header />
      <Switch>
        <Route path='/user/:id'>
          <section>
            <CharacterDetail
              user={selectedContact}
            />
          </section>
        </Route>
        <Route exact path='/'>
          <section>
            <Filters
              filterSpecie={filterSpecie}
              handleFilterSpecie={handleFilterSpecie}
              filterName={filterName}
              handleFilterName={handleFilterName}
            />
          </section>
          <section>
            <CharacterList characters={characters} />
          </section>
        </Route>
        <Route>
          <section>
            Oh! Página equivocada.
          </section>
        </Route>
      </Switch>
    </form>
  );
}

export default App;
