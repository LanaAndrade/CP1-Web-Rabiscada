import {} from 'react';
import '../css/style.css'

import estantetenis1 from '../assets/estantetenis1.svg'
import estantetenis2 from '../assets/estantetenis2.svg'


function Sobre() {
  

    return (
      <>
      <section id='texto1'>
        <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis ultricies enim. Ut vel ullamcorper dui. Quisque fringilla porttitor est sit amet viverra. Phasellus ac molestie libero. Proin
        eget congue nisl. Nunc auctor turpis ut lorem vehicula, vel ornare ligula hendrerit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus et
        risus molestie, sodales ligula sed, lobortis nisi. Phasellus efficitur eu ante luctus aliquet. Nullam sagittis varius lectus in ultricies. Aenean euismod, nisl sit amet consectetur dignissim, ex
        risus pellentesque nisl, quis laoreet magna elit euismod felis. Nullam dictum leo ac nunc pellentesque rhoncus. Etiam eleifend condimentum mollis.
        Nam ultrices magna ac massa eleifend, vel elementum metus placerat. Suspendisse luctus, nunc at viverra varius, dui erat dapibus nibh, id scelerisque nisl felis ac magna. Etiam non
        iaculis est, vel tincidunt enim. Nullam congue augue et nibh blandit, vitae faucibus orci tristique. Vivamus tempor dui arcu, non malesuada ipsum pulvinar quis. Integer mauris nisi
        consectetur quis leo finibus, consectetur convallis neque. Integer eu vulputate urna. Nam suscipit neque sed elit vulputate, a commodo turpis porttitor.
        Vestibulum facilisis nulla enim, scelerisque imperdiet neque hendrerit ac. Nam pretium diam quis mauris ornare, id ultrices libero hendrerit. Suspendisse ornare nisl et laoreet cursus.
        Praesent eleifend massa a egestas sollicitudin. Etiam tortor eros, posuere quis lectus quis, egestas faucibus dui. Aenean porta libero sit amet condimentum lobortis. Ut scelerisque, lorem
        sagittis ullamcorper posuere, dui nunc placerat nisi, quis fermentum massa neque et ante. Mauris id ligula id dui posuere posuere congue id tellus. Sed neque nisi, sagittis quis luctus quis,
        iaculis id arcu. Curabitur nunc orci, tincidunt eu nunc in, aliquam vehicula ante. Phasellus nisl dolor, consequat a convallis vel, egestas pulvinar purus.
        Integer consectetur, turpis vitae mattis consectetur, urna magna malesuada turpis, sed mollis mi est at libero. Quisque rhoncus tincidunt orci, vitae scelerisque orci. Ut vel sagittis felis,
        vitae dictum metus. Sed ex ante, volutpat sed purus vitae, ultricies consequat quam. Cras sit amet enim scelerisque odio imperdiet imperdiet tempus non ligula. Sed tempus interdum felis
        hendrerit fermentum. Vivamus nisl mi, posuere lobortis ante ut, semper tempor dui. Praesent sit amet ultricies lorem. Nulla mi dolor, tincidunt et nunc eu, mattis fringilla metus. </i>
      </section>

      <section id='info1'>
        
          <img className='imagemestante1' src={estantetenis1} alt="estante1" />
          <div id='textoimagem1'>
          <i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Vivamus ac lobortis dui. Mauris dolor dui, pretium nec felis sit amet,
              posuere ornare mauris.
             Aliquam et feugiat urna. Nulla tellus odio, lacinia eu dictum eget,
              porttitor at lectus. Morbi
             </i>

          </div>
      </section>

      <section id='info2'>
        <div id='textoimagem2'>
          <i>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac lobortis dui.
           Mauris dolor dui, pretium nec felis sit amet, posuere ornare mauris.
            Aliquam et feugiat urna. Nulla tellus odio, lacinia eu dictum eget, porttitor at lectus. Morbi
          </i>
        </div>

        <img  className='imagemestante2' src= {estantetenis2} alt="estante2" />
        
      </section>


      </>
    );
  }
  
  export default Sobre