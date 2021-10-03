import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/layout/characterDetail.scss';

const CharacterDetail = (props) => {
    return (
        <div className="card__detail-container">
          <section className="card__container">
            <img src={props.image} alt={props.name} />
            <div className="card__text">
              <div className="card__title">
                <h2>{props.name}</h2>
              </div>
              <ul>
                <li>{`Estado: ${props.user.status}`}</li>
                <li>{`Especie: ${props.user.species}`}</li>
                <li>{`Planeta de origen: ${props.user.origin}`}</li>
                <li>{`Nº de episodios: ${props.user.episodes}`}</li>
              </ul>
            </div>
          </section>
          <Link className="btn__return" to="/">
            <i className="fas fa-angle-left"></i> Volver
          </Link>
        </div>
      );
    };

export default CharacterDetail;