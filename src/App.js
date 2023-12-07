import "./App.css";
import logo from "./5988705.png";

import Resume from "./components/Resume/Resume";

function App() {
  return (
    <div className="App">
      <header class="header">
        <img src={logo} alt="Logo" class="logo" />
        <h1 class="header__title">CV Builder</h1>
      </header>
      <Resume />
    </div>
  );
}

export default App;
