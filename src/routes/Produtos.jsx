import {} from 'react';
import '../css/style.css'
import produto from '../assets/Produto.svg'
import tenis1 from '../assets/tenis1svg.svg'
import tenis2 from '../assets/tenis2.svg'
import tenis3 from '../assets/tenis3.svg'
import tenis4 from '../assets/tenis4.svg'
import tenis5 from '../assets/tenis5.svg'
import tenis6 from '../assets/tenis6.svg'

import promocao1 from '../assets/promocao1.svg'
import promocao2 from '../assets/promocao2.svg'
import promocao3 from '../assets/promocao3.svg'
import promocao4 from '../assets/promocao4.svg'
import promocao5 from '../assets/promocao5.svg'
import promocao6 from '../assets/promocao6.svg'

import promocoes from '../assets/promocoes.svg'

function Produtos() {
  

    return (
      <>
        <div id="pg-produtos-container">

          <img className='label' src={produto}/>

          <div className='produtos-container'>
            
            <div className="produtos-row">

              <div className='produtos'>

                <div className='img-container'>
                  <img className='img-produtos ' src= {tenis1}/>
                </div>

                <p className="titulo-produtos">Tênis Nike Vermelho</p>
                <p className="preco-produtos">R$ 200,00</p>
              </div>
              
              <div className='produtos'>
                <div className='img-container'>
                  <img className='img-produtos ' src= {tenis2}/>
                </div>
                <p className="titulo-produtos">Tênis Nike Femino</p>
                <p className="preco-produtos">R$ 300,00</p>
              </div>

              <div className='produtos'>
                <div className='img-container'>
                  <img className='img-produtos tenis3' src= {tenis3}/>
                </div>
                <p className="titulo-produtos">Tênis Nike Rosa</p>
                <p className="preco-produtos">R$ 250,00</p>
              </div>

            </div>

            <div className="produtos-row">

            <div className='produtos'>
                <div className='img-container'>
                  <img className='img-produtos' src= {tenis4}/>
                </div>
                <p className="titulo-produtos">Tênis Nike Corrida</p>
                <p className="preco-produtos">R$ 600,00</p>
              </div>
              
              <div className='produtos'>
                <div className='img-container'>
                  <img className='img-produtos' src= {tenis5}/>
                </div>
                <p className="titulo-produtos">Tênis Nike Preto</p>
                <p className="preco-produtos">R$ 650,00</p>
              </div>

              <div className='produtos'>
                <div className='img-container'>
                  <img className='img-produtos' src= {tenis6}/>
                </div>
                <p className="titulo-produtos">Tênis Nike Atletismo</p>
                <p className="preco-produtos">R$ 400,00</p>
              </div>

            </div>

          </div>

          <img className='label' src={promocoes}/>

          <div className='produtos-container'>
            
            <div className="produtos-row">

            <div className='produtos'>
                <div className='img-container'>
                  <img className='img-produtos' src= {promocao1}/>
                </div>
                <p className="titulo-produtos">Bolsa</p>
                <p className="preco-produtos">R$ 500,00</p>
              </div>
              
              <div className='produtos'>
                <div className='img-container'>
                  <img className='img-produtos' src= {promocao2}/>
                </div>
                <p className="titulo-produtos">Equipamento academia</p>
                <p className="preco-produtos">R$ 500,00</p>
              </div>

              <div className='produtos'>
                <div className='img-container'>
                  <img className='img-produtos' src= {promocao3}/>
                </div>
                <p className="titulo-produtos">Garrafa D'agua</p>
                <p className="preco-produtos">R$ 150,00</p>
              </div>

            </div>

            <div className="produtos-row">

              <div className='produtos'>
                <div className='img-container'>
                  <img className='img-produtos' src= {promocao4}/>
                </div>
                <p className="titulo-produtos">Bola Vôlei</p>
                <p className="preco-produtos">R$ 150,00</p>
              </div>
              
              <div className='produtos'>
                <div className='img-container'>
                  <img className='img-produtos' src= {promocao5}/>
                </div>
                <p className="titulo-produtos">Bola Golf</p>
                <p className="preco-produtos">R$ 50,00</p>
              </div>

              <div className='produtos'>
                <div className='img-container'>
                  <img className='img-produtos' src= {promocao6}/>
                </div>
                <p className="titulo-produtos">Equipamento Remo</p>
                <p className="preco-produtos">R$ 250,00</p>
              </div>

            </div>

          </div>

        </div>

      </>
    );
  }
  
  export default Produtos