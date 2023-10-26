import "../../styles/components/footer.css"
import { IMaskInput } from "react-imask";

const Footer = () => {
  function Submit(e){
    const formEmelent = document.querySelector("form")
    e.preventDefault()
    const formData = new FormData(formEmelent)
    fetch("https://script.google.com/macros/s/AKfycbx6KbeNEcJLLzWv7P3YLExp0KA1xzrg7ZjtRexHf6ln-vaJreoguawbdLgB1b9S1CwBNw/exec", {
      method: "POST",
      body: formData
    })
  }

  return (
    <footer className="footer" id="formulario">
      <section>
        <form onSubmit={(e) => Submit(e)}>
          <input type="text" name="Nome" placeholder="nome"/>
          <input type="email" name="Email" placeholder="e-mail"/>
          <IMaskInput mask="(00) 00000-0000" name="Telefone" placeholder="telefone"/>
          <button className="form-button" type="submit">Enviar</button>
        </form>
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