import "../styles/components/depoimentos.css"
import pfp from "../assets/images/Default_pfp.png"


const Depoimentos = () => {
    return(
        <main className="depoimentos">
          <div className="depoimento">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
            <section className="heading">
             <img src={pfp} height={"30px"} alt='' />
              <b>Lorem ipsum dolor </b>
            </section>
          </div>
          <div className="depoimento">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
            <section className="heading">
              <img src={pfp} height={"30px"} alt='' />
              <b>Lorem ipsum dolor </b>
            </section>
          </div>
          <div className="depoimento">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
            <section className="heading">
              <img src={pfp} height={"30px"} alt='' />
              <b>Lorem ipsum dolor </b>
            </section>
          </div>
        </main>
    )

}
export default Depoimentos