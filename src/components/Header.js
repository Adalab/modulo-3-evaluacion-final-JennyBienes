import logo from '../Images/Rick_and_Morty_-_logo_(English).png'
import {Link} from 'react-router-dom';

function Header() {
    return (
      <header className="header">
        <Link to="/">
          <img className="header__image" src={logo} alt="logo rick and morty" />
        </Link>
      </header>
    );
  }
  export default Header;