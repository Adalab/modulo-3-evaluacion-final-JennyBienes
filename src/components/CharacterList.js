import '../stylesheets/layout/characterList.scss';
import CharacterCard from './CharacterCard';
import Morty from '../Images/morty-sad.png';

function CharacterList(props) {
  //  if (props.lenght === 0) {
  // return (
  // <div className="container-notfound">
  //    <img className="container-notfound__img" src={Morty} alt="Inténtalo de nuevo" />
  //    <div className="container-notfound__text">
  //      <h2>Personaje no encontrado</h2>
  //      <p>Inténtalo de nuevo con otra búsqueda</p>
  //    </div>
  //  </div>
  // ); 
  //} else {
    const renderCharacters = props.characters.map((character, index) => (
      <li className="card__class" key={index}>
        <CharacterCard character={character} />
      </li>
    ));
    return (
      <div>
        <h2>Personajes</h2>
        <ul className="list__class">{renderCharacters}</ul>
      </div>
    );
  };
//};
export default CharacterList;
