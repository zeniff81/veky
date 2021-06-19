import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import MenuMobile from "./components/menu/MenuMobile";
import About from "./pages/home/About";
import Contact from "./pages/home/Contact";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import "./sass/main.css";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <div className='app'>
        <MenuMobile />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/products' component={Products} />
          <Route path='/admin' component={Admin} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
