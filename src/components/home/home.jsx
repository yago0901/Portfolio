import './home.css';
import img from '../props/img2.jpg';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>Sobre</span> <br />
        <p>
          Meu nome é Yago, também conhecido como Yago Assina.
          Sou desenvolvedor Front-end e atuo com React ts e js, React Native, Ui Design.
          Desenvolvo interfaces modernas com alta qualidade e alta performance.
          Diferenciais em animações, responsividade e SEO.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
