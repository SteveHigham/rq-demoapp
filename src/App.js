import './App.css';

function MenuItem ({href, label})
{
  return (
    <li className='menuItem'>
      <a className='menu-link' href={href}>{label}</a>
    </li>
  );
}

function Menu ()
{
  return (
    <nav className='navbar'>
      <h1 className='title'>TheMenuCompany</h1>
      <ul className='menu'>
        <MenuItem label='Home'  href='/' />
        <MenuItem label='About' href='/about/' />
        <MenuItem label='Blog'  href='/blog/' />
      </ul>
    </nav>
  );
}

function App () { return <main> <Menu /> </main>; }

export default App;

// End of App.js
