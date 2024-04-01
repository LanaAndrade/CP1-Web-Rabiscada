import {} from 'react';
import {Link} from  'react-router-dom';
import '../css/style.css';

function Nav() {
  

    return ( 
      <>
        <header className='menu'>
            <nav className='nav-menu'>

              <ul>
                
                <div id="logo">
                    <img id="logo-img" src="./src/assets/2eTCKMTV4wtQuheCvh7pHonpqss-cropped.svg"/>
                </div>
                
                <Link to="/" className='link'>
                  Home
                </Link>{' '}
                {''}
                <Link to="/produtos" className='link'>
                  Produtos
                </Link>
                <Link to="/sobre" className='link'>
                  Sobre
                </Link>
                <Link to="/contato" className='link'>
                  Contato
                </Link>
              </ul>
              
            </nav>
        </header>
      </>
    );

  }
  
  export default Nav