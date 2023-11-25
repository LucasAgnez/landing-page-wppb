import Modulos from "../Modulos";
import "../../styles/components/body.css"
import PeR from "../PeR";
import Depoimentos from "../Depoimentos";

const Body = () => {
    return (
      <main className="body">
        <section className="importancia">
            <h2 className="H2">Importância</h2>
            <b className="b">
                Você já percebeu como o WhatsApp Business se tornou uma ferramenta 
                indispensável para empresas em todo o mundo? Não fique para trás! 
                Aproveite a oportunidade de impulsionar o seu negócio, aumentar suas 
                vendas e melhorar a comunicação com seus clientes.
            </b>

            <b className="b">
                No nosso curso de WhatsApp Business, você terá acesso a insights e 
                técnicas valiosas que o ajudarão a se destacar no mundo dos negócios. 
                Nossos especialistas vão te guiar passo a passo, independentemente do 
                seu nível de experiência. Desde iniciantes até empreendedores 
                experientes, todos podem se beneficiar deste curso abrangente.
            </b>
        </section>
        <section className="conteudo">
            <h2 className="H2">Conteúdo do curso</h2>
            <div className="modulos">
                <Modulos/>
            </div>
        </section>
        <section className="quem">
            <h2 className="H2">Para quem é o curso</h2>
            <h3> Este curso é para VOCÊ se: </h3>
            <section className="central">
                <section className="grid">
                    <b className="beneficio">Deseja alavancar seu negócio usando o WhatsApp Business.</b>
                    <b className="beneficio">Busca aumentar suas vendas e conquistar mais clientes.</b>
                    <b className="beneficio">Quer dominar estratégias avançadas de marketing no WhatsApp.</b>
                    <b className="beneficio">Precisa otimizar seu atendimento ao cliente e economizar tempo.</b>
                </section>
            </section>
        </section>
        <section className="beneficios">
            <h2 className="H2"> Pagamento Único e acesso vitalício! </h2>
            <b> 
                Se o não gostar ou por algum motivo você queira desistir/cancelar
                 a compra, você faz isso com um clique dentro da plataforma. Rápido e 
                 sem burocracia nenhuma.
            </b>
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
            <h1 className="h">Não espere mais! Entenda a chave para o sucesso no WhatsApp Business. Junte-se a nós e transforme a maneira como você faz negócios AGORA!</h1>
            <a href="#formulario" >
                <button>Quero me inscrever!</button>
            </a>
        </section>
      </main>
    );
  }
  
  export default Body;