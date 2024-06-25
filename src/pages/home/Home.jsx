import "./Home.css";

const Home = () => (
  <div id="page-home">
    <header>
      <nav>
        <div className="logo">SubZero</div>
        <ul>
          <li>
            <a href="/">Início</a>
          </li>
        </ul>
      </nav>
    </header>
    <main className="main">
      <section className="contact-section">
        <h1>Serviços</h1>
        <div className="all" id="page-home">
          <div className="container">
            <a href="/descritivo">
              <div className="card primary">
                Adicionar descritivos
              </div>
            </a>
            <a href="/inferencia">
              <div className="card second">
                Adicionar inferências
              </div>
            </a>
            <a href="/base">
              <div className="card third">
                Atualizar base única
              </div>
            </a>
            <a href="/clientes-impactados">
              <div className="card fourth">
                Clientes impactados
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default Home;
