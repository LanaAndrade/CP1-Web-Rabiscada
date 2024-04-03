import {} from 'react';
import './Home.css';
import beach from './assets/beach.svg';
import chuteira from './assets/chuteira.svg';
import jordan from './assets/jordan.svg';
import football from './assets/football.svg';
import regador from './assets/regador.svg';
import lancamentos from './assets/lancamentos.svg';

function Home ()  {
  return (
    <>
    
    <div className="image-container">
      <img className="beach-img" src={beach} alt="Beach"/>
    </div>
    
    <div className="news">
      
      <img src={lancamentos} alt="" className="lancamentos-img" width="200px" height="65px"/>

      <div className="news-containers">
        
        <div className="container-imagem-texto">
          <div className="imagem-jordan">
            <img className="news-img"  src={football} alt="Jordan"/>
          </div>
          <div className="texto-jordan">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam quaerat perferendis, provident laborum recusandae</p> 
            <p>fugiat et deserunt quisquam quasi, esse ex quis cum a temporibus asperiores aspernatur! Recusandae, impedit reiciendis.</p>
          </div>
        </div>

        <div className="imagem-chuteira">
          <img className='news-img' src={chuteira} alt="Chuteira"/>
        </div>
        
      </div>
      
      <div className="news-containers2">
        
      <div className="imagem-football">
          <img className='news-img' src={jordan} alt="Chuteira"/>
        </div>
        
        <div className="container-imagem-texto">
          <div className="imagem-regador">
            <img className="news-img"  src={regador} alt="Jordan"/>
          </div>
          <div className="texto-regador">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam quaerat perferendis, provident laborum recusandae</p> 
            <p>fugiat et deserunt quisquam quasi, esse ex quis cum a temporibus asperiores aspernatur! Recusandae, impedit reiciendis.</p>
          </div>
        </div>

      </div>

    </div>
    
    </>
  );
}

export default Home;
