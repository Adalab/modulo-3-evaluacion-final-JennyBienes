import '../stylesheets/layout/characterList.scss';
import CharacterCard from './CharacterCard';

function CharacterList(props) {
    const renderCharacters = props.characters.map((character) => (
            <li className= "card__class">
              <CharacterCard character={character}/>
            </li>
          ));
    return (
        <div>
            <h2>Personajes</h2>
            <ul className="list__class">{renderCharacters}</ul>
        </div>
    );
};

export default CharacterList;