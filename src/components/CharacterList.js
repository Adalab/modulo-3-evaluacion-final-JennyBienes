import '../stylesheets/layout/characterlist.scss';

function CharacterList(props) {
    const renderCharacters = props.characters.map((character) => (
            <li className= "card__class">
              <img src={character.image} alt="img" className="img__class" />
              <p className="text__card__class">{character.name}</p>
              <p className="text__card__class">{character.species}</p>
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