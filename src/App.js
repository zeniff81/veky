import "./sass/main.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/home/About";
import Admin from "./pages/admin/Admin";
import ContactUs from "./pages/home/ContactUs";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./auth/Login";
import MenuMobile from "./components/menu/MenuMobile";
import Products from "./pages/Products";
import React from "react";
import SignUp from "./auth/SignUp";
import { AuthProvider } from "./auth/Auth";
import AdminProducts from "./pages/admin/AdminProducts";
import WhatsappIcon from "./components/socialmedia/WhatsappIcon";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className='app'>
          <MenuMobile />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' exact component={Login} />
            <Route path='/signup' exact component={SignUp} />
            <Route path='/contactus' exact component={ContactUs} />
            <Route path='/about' exact component={About} />
            <Route path='/products' exact component={Products} />
            <Route path='/admin' exact component={Admin} />
            <Route
              path='/admin/adminproducts'
              exact
              component={AdminProducts}
            />
          </Switch>
          <WhatsappIcon />
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
