import React from 'react';
import Morty from '../Images/morty-sad.png';
//import '../stylesheets/characterNotFound.scss';
import { Link } from 'react-router-dom';

const CharacterNotFound = () => {
    return (
      <div className='container-notfound'>
        <img className='container-notfound__img' src={Morty} alt='Morty triste' />
        <div className='container-notfound__text'>
          <h2>Este personaje no existe!</h2>
          <p>Introduzca otra búsqueda</p>
        </div>
      </div>
    );
  };
  
  export default CharacterNotFound;