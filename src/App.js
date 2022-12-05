import './App.css';
import Detail from "./components/detail/Detail"
import Eingabe from "./components/eingabe/Eingabe"
import Overview from "./components/overview/Overview"
import Maps from "./components/maps/Maps"
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
      <Maps />
    </div>
  );
}

export default App;
