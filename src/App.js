import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import MenuMobile from "./components/menu/MenuMobile";
import About from "./pages/home/About";
import Contact from "./pages/home/Contact";
import Home from "./pages/home/Home";
import "./sass/main.css";

function App() {
  return (
    <Router>
      <div className='app'>
        <MenuMobile />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
