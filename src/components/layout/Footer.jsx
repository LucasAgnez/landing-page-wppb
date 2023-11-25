import "../../styles/components/footer.css"
import { IMaskInput } from "react-imask";

const Footer = () => {
  return (
    <footer className="footer" id="formulario">
      <section className="inscreva">
        <h2 className="h">Inscreva-se agora e esteja pronto para impulsionar 
          o seu negócio com o WhatsApp Business. Junte-se a 
          dezenas de empresários que já estão colhendo os benefícios 
          dessa ferramenta revolucionária.
        </h2>
      </section>
      <section className="venda" id="formulario">
        <section>
          <h1 className="h1">OFERTA LIMITADA! APROVEITE!</h1>
          <section>
            <h3 className="h3"> APENAS POR</h3>
            <h2 className="h2">R$ 89.99</h2>
          </section>
          <a href="">
            <button>GARANTIR MINHA VAGA</button>
          </a>
        </section>
      </section>
      <section>
        <h1 className="sabermais">Quer saber mais?</h1>
        <p className="email">cursosaprendefacilcontato@gmail.com</p>
      </section>
      <section className="fim">
        <p>2023 - Todos os direitos reservados.</p>
      </section>
    </footer>
  );
}

export default Footer;