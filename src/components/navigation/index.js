import './Nav.css';

export default function Navigation(props) {
  return (
    <div className="Navigation">
      <ul className="Nav">
        <li className="Nav__item">
          <a href="/mountain" className="Nav__link">Mountain</a>
        </li>
        <li className="Nav__item">
          <a href="/beach" className="Nav__link">Beaches</a>
        </li>
        <li className="Nav__item">
          <a href="/bird" className="Nav__link">Birds</a>
        </li>
        <li className="Nav__item">
          <a href="/food" className="Nav__link">Food</a>
        </li>
      </ul>
    </div>
  );
}
