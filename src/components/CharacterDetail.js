import React from 'react';
import '../stylesheets/layout/characterDetail.scss';
import ModalWindow from './ModalWindow';
import Morty from '../Images/morty-sad.png';


const CharacterDetail = (props) => {
  if (props.user === undefined) {
    return (
      <ModalWindow title='Personaje no encontrado'>
        <p>Intentalo de nuevo con otra búsqueda</p>
      </ModalWindow>
    );
  } else {
    return (
      <ModalWindow title={props.user.name}>
        <div className="character__detail">
        <img
          className='card__img'
          src={props.user.image}
          alt={props.user.name}
        />
        <ul className="text__detail__class">
          <li className="title_detail">{props.user.name}</li>
          <li>Status: {props.user.status}</li>
          <li>Specie: {props.user.species}</li>
          <li>Origin: {props.user.origin}</li>
          <li>Episodes: {props.user.episodes}</li>
        </ul>
        </div>
      </ModalWindow>
    );
  }
}

export default CharacterDetail;