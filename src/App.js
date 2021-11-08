import "./App.css";
import "bulma/css/bulma.min.css";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cv from "./components/Cv";
import ViewToggle from "./components/ViewToggle";

function App() {
  return (
    <div className="App has-background-info-light p-2">
      <header className="mx-3 mb-3 is-flex is-flex-direction-column is-align-items-flex-end  no-print">
        <h1 className="title is-size-2 has-text-weight-light">Resume Builder</h1>
        <div className="button-container is-align-items-center">
          <ViewToggle />
          <button className="button is-ghost has-text-info-dark is-medium is-outlined ml-2" aria-label="Print Page" onClick={() => window.print()}>
            <FontAwesomeIcon icon={faPrint} />
          </button>
        </div>
      </header>
      <section className="main m-5">
        <div className="container box has-background-white">
          <Cv />
        </div>
      </section>
    </div>
  );
}

export default App;
