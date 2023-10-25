import Carrosel from "../Carrosel";
import "../../styles/components/body.css"
import PeR from "../PeR";

const Body = () => {
    return (
      <main className="body">
        <section className="conteudo">
            <h2 className="H2">Conteúdo do curso</h2>
            <div className="carrosel">
                <Carrosel/>
            </div>
        </section>
        <section className="beneficios">
            <h2 className="H2">O que você ganha também</h2>
            <section className="central">
                <section className="grid">
                    <b className="beneficio">Acesso vitalício aos vídeos</b>
                    <b className="beneficio">Apostila em PDF para consultar todos os módulos do curso</b>
                </section>
            </section>
        </section>
        <section className="perguntas">
            <h2 className="H2">Perguntas frequentes</h2>
            <section className="central">
                <section>
                    <PeR pergunta="Quando posso assistir os conteúdos?"
                        resposta="Você pode assistir quando e como desejar! Todos os vídeos ficam disponíveis por tempo indeterminado"/>
                    <PeR pergunta="Quais as formas de pagamento?"
                        resposta="Cartão, boleto, débito em conta ou Pix."/>
                    <PeR pergunta="Qual o formato das aulas?"
                        resposta="As aulas são todas em vídeo!"/>
                    <PeR pergunta="Qual é a duração do curso?"
                        resposta="Não vamos gastar seu tempo! Nossas aulas são curtas e objetivas, o curso inteiro tem cerca de 2 horas de duração"/>
                </section>
            </section>
        </section>
        <section className="breve">
            <h1 className="h">Disponível em Breve! Garanta já sua vaga!</h1>
            <a href="#formulario" >
                <button>Quero receber notícias!</button>
            </a>
        </section>
      </main>
    );
  }
  
  export default Body;