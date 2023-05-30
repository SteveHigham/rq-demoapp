import './App.css';

function MenuItem ({label, href, ...rest})
{
  return (
    <li className='menu-item'>
      <a className='menu-link' href={href} {...rest}>{label}</a>
    </li>
  );
}

function Menu ()
{
  return (
    <nav className='navbar'>
      <h1 className='title'>TheMenuCompany</h1>
      <ul className='menu'>
        <MenuItem label='Home'  href='/'                                      />
        <MenuItem label='About' href='/about/' id='about-link'                />
        <MenuItem label='Blog'  href='/blog/'  id='blog-link' target='_blank' />
      </ul>
    </nav>
  );
}

function App () { return <main> <Menu /> </main>; }

export default App;

// End of App.js
