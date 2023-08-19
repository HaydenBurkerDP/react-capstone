import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./app.scss";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Products from "./components/pages/Products";
import Cart from "./components/pages/Cart";
import NavBar from "./components/navigation/NavBar";
import product from "./components/pages/Product";
import Footer from "./components/navigation/Footer";
import solidIcons from "./icons/solidIcons";

solidIcons();

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <div className="body-container">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/products" component={Products}></Route>
            <Route path="/product/:slug" component={product}></Route>
            <Route path="/cart" component={Cart}></Route>
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
