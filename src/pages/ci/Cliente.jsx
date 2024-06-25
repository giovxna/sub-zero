import "./Cliente.css";
import "../../global.css"

const Cliente = () => (
  <div id="page-client">
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
        <h1>Clientes Impactados</h1>
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Descrição do Lambda</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit sapiente ut dolorem quam molestiae corrupti deserunt ad voluptates accusamus, soluta, quaerat labore nulla at sint suscipit, illo esse? Aperiam, est?</p>
            </div>
            <div className="contact-form">
              <form>
                <label htmlFor="text">Data inicial</label>
                <input type="date" id="data_inicial" name="email" placeholder="Digite a data inicial" />

                <label htmlFor="text">Data final</label>
                <input type="date" id="data_final" placeholder="Digite a data final" />

                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default Cliente;
