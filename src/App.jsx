import bg from './images/neon-triangle-abstract.jpg';
import logo from './images/logo.svg';
import './App.scss';

function App() {
  return (
    <div className=''>
      <nav className='App-header'>
        <div className='navbar-header'>
          <img src={logo} className='developer-logo' alt='logo' />
          {'  '} Arvinth C
        </div>
        <ul className='link-container'>
          <li>About</li>
          <li>Passion</li>
          <li>Experience</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </nav>
      {/* <img src={bg} className='App-logo' alt='logo' /> */}
    </div>
  );
}

export default App;
