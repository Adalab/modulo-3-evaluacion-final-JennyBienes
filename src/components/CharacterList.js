import '../stylesheets/layout/characterList.scss';
import CharacterCard from './CharacterCard';

function CharacterList(props) {
  const renderCharacters = props.characters.map((character, index) => (
    <li className="card__class" key={index}>
      <CharacterCard character={character} />
    </li>
  ));
  return (
    <div>
      <ul className="list__class">{renderCharacters}</ul>
    </div>
  );
};
//};
export default CharacterList;
