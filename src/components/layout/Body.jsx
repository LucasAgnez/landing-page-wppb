import Carrosel from "../Carrosel";

const Body = () => {
    return (
      <main className="Body">
        <section>
            <h1>Conteudo do curso</h1>
            <Carrosel/>
        </section>
        <section>
            <h2>O que voce ganha tambem</h2>
            <section>
                <p>acesso vitalicio aos videos</p>
                <p>Apostila em PDF para consultar todos os modulos do curso</p>
            </section>
        </section>
        <section>
            <h2>Perguntas frequentes</h2>
            <section>
                <b>Quando posso assistir os conteúdos?</b>
                <p>Você pode assistir quando e como desejar! Todos os vídeos ficam disponíveis por tempo indeterminado</p>
                <b>Quais as formas de pagamento?</b>
                <p>Cartão, boleto, débito em conta ou Pix.</p>
                <b>Qual o formato das aulas?</b>
                <p>As aulas são todas em vídeo!</p>
                <b>Qual é a duração do curso?</b>
                <p>Não vamos gastar seu tempo! Nossas aulas são curtas e objetivas, o curso inteiro tem cerca de 2 horas de duração</p>
            </section>
        </section>
        <section>
            <h1>Disponível em Breve! Garanta já sua vaga!</h1>
            <button>Quero receber notícias</button>
        </section>
      </main>
    );
  }
  
  export default Body;