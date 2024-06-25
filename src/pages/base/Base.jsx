import "./Base.css";
import "../../global.css"

const Base = () => (
  <div id="page-base">
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
        <h1>Adicionar base única</h1>
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Descrição do Lambda</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit sapiente ut dolorem quam molestiae corrupti deserunt ad voluptates accusamus, soluta, quaerat labore nulla at sint suscipit, illo esse? Aperiam, est?</p>
            </div>
            <div className="contact-form">
              <form>
                <label htmlFor="text">Query Splunk</label>
                <select id="query_splunk" name="query_splunk" >
                  <option value="" disabled selected>Selecione uma query</option>
                  <option value="query1">Query 1</option>
                  <option value="query2">Query 2</option>
                  <option value="query3">Query 3</option>
                </select>

                <label htmlFor="text">Data inicial</label>
                <input type="date" id="data_inicial" name="email" placeholder="Digite a data inicial" />

                <label htmlFor="text">Data final</label>
                <input type="date" id="data_final" placeholder="Digite a data final" />

                {/* <label htmlFor="file_upload">Upload de Arquivo CSV</label>
                <input type="file" id="file_upload" name="file_upload" /> */}

                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default Base;
