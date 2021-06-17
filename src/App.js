import "./App.css";
import MenuMobile from "./components/menu/MenuMobile";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import "./sass/main.css";

function App() {
  return (
    <Router>
      <div className='app'>
        <MenuMobile />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
