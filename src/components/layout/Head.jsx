import "../../styles/components/head.css"

const Header = () => {
  return (
    <main className="main">
        <img src='../../assets/images/logo-af.png' alt='' />
        <h2>Inscrições abertas para o Curso:</h2>
        <h1>WhatsApp Bussines</h1>
        <p>Assista ao vídeo e entenda tudo que será aprendido.</p>
        <iframe width="420" height="315" title='module0'
            src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
        <button>Quero receber notícias</button>
    </main>
  );
}

export default Header