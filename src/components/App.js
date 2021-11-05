import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './style.css';
import Header from "./Header";
import ItemListContainer from "./ItemListContainer";
import Footer from "./Footer";
import ItemDetailContainer from "./ItemDetailContainer";

function App() {
    return(
        <BrowserRouter>
        <Header/>
        <Switch>
        <Route exact path="/" component={ItemListContainer}/>
        <Route path="/category/:id" component={ItemListContainer}/>
        <Route path="/item/:id" component={ItemDetailContainer}/>
        </Switch>
        <Footer/>
        </BrowserRouter>
    )
}

export default App;