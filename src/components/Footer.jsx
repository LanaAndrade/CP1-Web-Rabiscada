function Nav() {
  

    return (
      <>
        <header className='menu'>
            <nav className='nav-menu'>
                <ul>
                    <Link to="/" className='link'>Home</Link>
                    <Link to="/sobre" className='link'>Sobre</Link>
                    <Link to="/portifolio" className='link'>Portifolio</Link>
                    <Link to="/contato" className='link'>Contato</Link>
                </ul>
            </nav>
        </header>
      </>
    )
  }
  
  export default Nav