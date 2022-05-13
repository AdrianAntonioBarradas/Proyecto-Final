import { NavLink } from 'react-router-dom';
import './option.css';

export default function Option(props) {
    return (
      <NavLink className="nav-link" to="/prueba">
        <div className="option-container col-md-4">
        jesucristo
        </div>
      </NavLink>
      );
    }