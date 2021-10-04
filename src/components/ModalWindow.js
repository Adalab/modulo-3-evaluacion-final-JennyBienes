import { Link } from 'react-router-dom';
import '../stylesheets/layout/modalWindow.scss';

function ModalWindow(props) {
  return (
        <div className='modal__window'>
          <div className='modal__header'>
          <header>
            <Link to='/'>
              <span className='modal__close'>&lt;  Volver</span>
            </Link>
          </header>
          <section className="modal">
            {props.children}
          </section>
          </div>
        </div>
  );
}

export default ModalWindow;
