import bg from './images/neon-triangle-abstract.jpg';
import logo from './images/logo.svg';
import './App.scss';

const App = () => {
  return (
    <div className=''>
      <nav className='App-header'>
        <div className='navbar-header'>
          <a href='#!'>
            <img src={logo} className='developer-logo' alt='logo' />
            {'  '} Arvinth C
          </a>
        </div>
        <ul className='link-container'>
          <li>
            <a href='#!'>About</a>
          </li>
          <li>
            <a href='#!'>Passion</a>
          </li>
          <li>
            <a href='#!'>Experience</a>
          </li>
          <li>
            <a href='#!'>Work</a>
          </li>
          <li>
            <a href='#!'>Contact</a>
          </li>
        </ul>
      </nav>
      {/* <img src={bg} className='App-logo' alt='logo' /> */}
    </div>
  );
};

export default App;
