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
import { AuthProvider } from "./auth/Auth";
import PrivateRoute from "./auth/PrivateRoute";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className='app'>
          <MenuMobile />
          <Switch>
            <Route path='/' exact component={Home} />
            <PrivateRoute path='/loginpage' exact component={Login} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/products' component={Products} />
            <Route path='/admin' component={Admin} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
