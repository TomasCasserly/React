import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./style.css";
import Header from "./Header";
import ItemListContainer from "./ItemListContainer";
import Footer from "./Footer";
import ItemDetailContainer from "./ItemDetailContainer";
import ContextComponent from "./CartContext";
import Cart from "./Cart";

function App() {
  return (
    <BrowserRouter>
      <ContextComponent>
      <Header />
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route exact path="/category/:id" component={ItemListContainer} />
        <Route path="/modelo/:id" component={ItemDetailContainer} />
        <Route path="/cart/" component={Cart} />
      </Switch>
      <Footer />
      </ContextComponent>
    </BrowserRouter>
  );
}

export default App;
