import "../../styles/components/head.css"
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <main className="main">
        <img src={logo} alt='imagem' height="150px" width="150px"/>
        <h2 className="h2">Aprenda as Estratégias Essenciais para o Sucesso Empresarial no WhatsApp</h2>
        <h1 className="h1">Domine o WhatsApp Business para Alavancar seu Negócio</h1>
        <p>Assista ao vídeo e entenda tudo que será aprendido.</p>
        <iframe width="420" height="315" title='module0'
            src="https://drive.google.com/file/d/1G0U_jMYv9gGbLi5WprkzD1Gp8lPe2RMZ/preview">
        </iframe>
        <a href="#formulario" >
          <button>Quero me inscrever!</button>
        </a>
    </main>
  );
}

export default Header