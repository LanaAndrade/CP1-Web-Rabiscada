import {} from 'react';
import '../css/style.css'
import img from '../assets/Produto.svg'
import img2 from '../assets/tenis1svg.svg'

function Produtos() {
  

    return (
      <>
        <img src={img}/> 
        <div className='tenis'>
          <div className='tenis'>
            <img src= {img2}></img>
          </div>
        </div>
      </>
    );
  }
  
  export default Produtos