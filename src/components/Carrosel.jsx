import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/components/carrosel.css"

const Carrosel = () => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]

  };
  return (
    <Slider {...settings}>
      <div className="modulo0">
        <h3>Módulo 0 - Introdução ao Curso</h3>
        <ul>
          <li>
            Quem somos?
          </li>
          <li>
            O que é o curso de Whatsapp Business.
          </li>
        </ul>
      </div>
      <div className="modulo">
        <h3>Módulo 1 - Instalando o Whatsapp Business</h3>
        <ul>
          <li>
            Instalação
          </li>
        </ul>
      </div>
      <div className="modulo">
        <h3>Módulo 2 - Configurações do seu perfil Whatsapp Business</h3>
        <ul>
          <li>
            Configurando seu perfil
          </li>
          <li>
            Como usar links de contato
          </li>
        </ul>
      </div>
      <div className="modulo">
        <h3>Módulo 3 - Mostrando sua cara! Compartilhando o que passa na sua empresa.</h3>
        <ul>
          <li>
            O que é o Status?
          </li>
          <li>
            Como compartilhar seu conteúdo
          </li>
        </ul>
      </div>
      <div className="modulo">
        <h3>Módulo 4 - Automatizando seu Whatsapp Business</h3>
        <ul>
          <li>Etiquetas</li>
          <li>Mensagens de Ausência e Boas Vindas</li>
          <li>Respostas Rápidas</li>
        </ul>

      </div>
      <div className="modulo">
        <h3>Módulo 5 - Compartilhando seu produto</h3>
        <ul>
          <li> Listas de transmissão </li>
          <li>Grupos</li>
          <li>Vinculando Contas</li>
        </ul>
      </div>
      <div className="modulo">
        <h3>Módulo 6 - Catálogo do Whatsapp Business</h3>
        <ul>
          <li> Desenvolvendo seu Catálogo</li>
          <li>Enviando Catálogo e Produtos ao Cliente</li>
        </ul>
      </div>
      <div className="modulo">
        <h3>Módulo 7 - Segurança e privacidade</h3>
        <ul>
          <li> TFA - Two Factor Authentication ou Autenticação de dois fatores</li>
          <li>Configurações de privacidade</li>
        </ul>
      </div>
      <div className="modulo">
        <h3>Módulo 8 - Dando uma cara para sua empresa </h3>
        <ul>
          <li> Introdução ao Canva e criação de pequenas artes.</li>
        </ul>
      </div>
    </Slider>
  );
}

export default Carrosel;