import MainImg from "../assets/images/main.jpg";

import "../styles/main.sass"

const Home = () => {
  return (
    <main className="home">
      <header className="header">
        <img src={MainImg} alt="" />
        <h1>Entre no mercado digital</h1>
        <button>Inscreva-se</button>
      </header>
      <main className="main">
        <section className="presentation">
          <div className="image">
            <img src="" alt="" />
          </div>
          <div className="content">
            <img src="" alt="" />
            <h3>Titulo 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              eos, eveniet, sunt libero totam dignissimos fugit expedita aliquam
              nulla tempora enim, ea error officia et autem? Sequi consequatur
              fugit quam?
            </p>
          </div>
        </section>
        <section className="presentation reverse">
          <div className="image">
            <img src="" alt="" />
          </div>
          <div className="content">
            <img src="" alt="" />
            <h3>Titulo 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              quibusdam illo sunt nisi doloribus omnis iusto laboriosam a
              pariatur autem, voluptatum est quae! Non illum exercitationem,
              voluptas in repellendus dolorum.
            </p>
          </div>
        </section>
        <section className="presentation">
          <div className="image">
            <img src="" alt="" />
          </div>
          <div className="content">
            <img src="" alt="" />
            <h3>Titulo 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              maiores voluptate hic optio totam exercitationem quos aliquid
              deleniti pariatur perferendis, ullam iste tempore aspernatur vitae
              deserunt aut eaque reprehenderit sequi!
            </p>
          </div>
        </section>
      </main>
    </main>
  );
};

export default Home;
