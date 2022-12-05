import './App.css';
import Detail from "./components/detail/Detail"
import Eingabe from "./components/eingabe/Eingabe"
import Overview from "./components/overview/Overview"
import Button from "./components/button/Button"

function App() {
  return (
    <div className="App">
      <p>
        Sofias Wetter App
      </p>
      <Overview />
      <Detail />
      <Eingabe />
      <Button />
    </div>
  );
}

export default App;
