import {} from 'react';
import '../css/style.css'

function Contato() {
  

    return (
      <>
      <section className="contato">
        <img src="./src/assets/Rabisca-em-TUDO.svg" alt="" className="Rabisca-em-TUDO"/>
        <form>
        <h1>Fala com a gente</h1>
          <p>
          <input type="text" placeholder='Assunto'/>
          </p>
          <textarea placeholder='Sua mensagem'></textarea>
        </form>
        <container>
          <div>
            <div className='redes-sociais'>
              <img src="./src/assets/instagram.svg" alt="" className='redes-sociais-icones'/>
              <p>@Rabiscada</p>
            </div>
            <div className='redes-sociais'>
              <img src="./src/assets/whatsapp.svg" alt="" className='redes-sociais-icones'/>
              <p className='telefone'>11 99645-6251</p>
            </div>
          </div>
          <div>
            <div className='redes-sociais'>
              <img src="./src/assets/tiktok.svg" alt="" className='redes-sociais-icones'/>
              <p>@Rabiscada.store</p>
            </div>
            <div className='redes-sociais'>
              <img src="./src/assets/X.svg" alt="" className='redes-sociais-icones'/>
              <p>@Rabiscada.promo</p>
            </div>
          </div>
        </container>
      </section>
    </>
    );
  }
  
  export default Contato