import SearchForm from './SearchForm';
import Navigation from '../navigation';
import './Header.css';

export default function Header({ history, handleSubmit }) {
  return (
    <header id="App__header">
      <h1>Snapshot Example</h1>

      <div className="Header__search">
        <SearchForm
          history={history}
          onSubmit={handleSubmit}
        />
      </div>

      <Navigation /> 
    </header>
  );
}
