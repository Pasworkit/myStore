import { Link } from 'react-router-dom';

function BreadCrumbs() {
  return (
    <ul>
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
    </ul>
  );
}

export default BreadCrumbs;
