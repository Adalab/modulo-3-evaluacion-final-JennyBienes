import '../stylesheets/layout/characterCard.scss';
import { Link } from 'react-router-dom';

function CharacterCard(props) {
// console.log('En CharacterCard entra con ', props.character.id);
  return (
    <Link to={`./user/${props.character.id}`}>
      <img
        src={props.character.image}
        alt="img" className="img__class"
        title={`Foto de ${props.character.name}`}
      />
      <p className="text__card__class">{props.character.name}</p>
      <p className="text__card__class">{props.character.species}</p>
    </Link>
  );
};
export default CharacterCard;