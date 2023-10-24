import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carrosel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>Módulo 0 - Introdução ao Curso</h3>
        <lu>
          <li>
            Quem somos?
          </li>
          <li>
            O que é o curso de Whatsapp Business.
          </li>
        </lu>
      </div>
      <div>
        <h3>Módulo 1 - Instalando o Whatsapp Business</h3>
        <lu>
          <li>
            Instalação
          </li>
        </lu>
      </div>
      <div>
        <h3>Módulo 2 - Configurações do seu perfil Whatsapp Business</h3>
        <lu>
          <li>
            Configurando seu perfil
          </li>
          <li>
            Como usar links de contato
          </li>
        </lu>
      </div>
      <div>
        <h3>Módulo 3 - Mostrando sua cara! Compartilhando o que passa na sua empresa.</h3>
        <lu>
          <li>
            O que é o Status?
          </li>
          <li>
            Como compartilhar seu conteúdo
          </li>
        </lu>
      </div>
      <div>
        <h3>Módulo 4 - Automatizando seu Whatsapp Business</h3>
        <lu>
          <li>Etiquetas</li>
          <li>Mensagens de Ausência e Boas Vindas</li>
          <li>Respostas Rápidas</li>
        </lu>

      </div>
      <div>
        <h3>Módulo 5 - Compartilhando seu produto</h3>
        <lu>
          <li> Listas de transmissão </li>
          <li>Grupos</li>
          <li>Vinculando Contas</li>
        </lu>
      </div>
      <div>
        <h3>Módulo 6 - Catálogo do Whatsapp Business</h3>
        <lu>
          <li> Desenvolvendo seu Catálogo</li>
          <li>Enviando Catálogo o Produto ao Cliente</li>
        </lu>
      </div>
      <div>
        <h3>Módulo 7 - Segurança e privacidade</h3>
        <lu>
          <li> TFA - Two Factor Authentication ou Autenticação de dois fatores</li>
          <li>Configurações de privacidade</li>
        </lu>
      </div>
      <div>
        <h3>Módulo 8 - Dando uma cara para sua empresa </h3>
        <lu>
          <li> Introdução ao Canva e criação de pequenas artes.</li>
        </lu>
      </div>
    </Slider>
  );
}

export default Carrosel;