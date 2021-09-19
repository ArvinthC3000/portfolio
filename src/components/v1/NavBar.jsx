import logo from '../../images/logo.svg';

const NavBar = () => {
  return (
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
  );
};

export default NavBar;
