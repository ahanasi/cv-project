import "./App.css";
import "bulma/css/bulma.min.css";
import Cv from "./components/Cv";

function App() {
  return (
    <div className="App">
      <header className="m-6">
        <h1 className="title no-print">Resume Builder</h1>
      </header>
      <section className="main">
        <div className="container box">
          <Cv />
        </div>
      </section>
    </div>
  );
}

export default App;
