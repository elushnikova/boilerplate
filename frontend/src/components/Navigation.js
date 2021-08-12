import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navigation() {
  const profile = useSelector((state) => state.profile);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {profile
          ? (<li><Link to="/logout">Logout</Link></li>)
          : (<li><Link to="/register">Register</Link></li>)
        }
      </ul>
    </nav>
  );
}

export default Navigation;
