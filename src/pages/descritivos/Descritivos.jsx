import "./Descritivos.css";
import "../../global.css"

const Descritivos = () => (
    <div id="page-descriptive">
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
                <h1>Adicionar descritivos</h1>
                <div className="contact-container">
                    <div className="contact-content">
                        <div className="contact-info">
                            <h2>Descrição do Lambda</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit sapiente ut dolorem quam molestiae corrupti deserunt ad voluptates accusamus, soluta, quaerat labore nulla at sint suscipit, illo esse? Aperiam, est?</p>
                        </div>
                        <div className="contact-form">
                            <form>
                                <label htmlFor="file_upload">Upload de Arquivo CSV</label>
                                <input type="file" id="file_upload" name="file_upload" />

                                <button type="submit">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
);

export default Descritivos;
