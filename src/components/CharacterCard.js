import '../stylesheets/layout/characterCard.scss';

function CharacterCard (props) {
  console.log('CharacterCard', props);
  return (
    <>
    <img src={props.character.image} alt="img" className="img__class" />
    <p className="text__card__class">{props.character.name}</p>
    <p className="text__card__class">{props.character.species}</p>
    </>
  );
};
export default CharacterCard;