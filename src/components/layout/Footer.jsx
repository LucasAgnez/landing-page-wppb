import "../../styles/components/footer.css"

const Footer = () => {
  return (
    <footer className="footer" id="formulario">
      <section>
        <form>
          <input placeholder="e-mail"/>
          <input placeholder="nome"/>
          <button className="form-button" type="submit">Enviar</button>
        </form>
      </section>
      <section>
        <h1 className="sabermais">Quer saber mais?</h1>
        <p className="email">cursosaprendefacilcontato@gmail.com</p>
      </section>
      <section className="fim">
        <p>2020 - Todos os direitos reservados.</p>
      </section>
    </footer>
  );
}

export default Footer;