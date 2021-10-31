import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from "react-router-dom";
import './style.css';
import Header from "./Header";
import ItemListContainer from "./ItemListContainer";
import Footer from "./Footer";

function App() {
    return(
        <BrowserRouter>
        <Header/>
        <Route path="/" component={ItemListContainer} exact/>
        {/* <Route path="/categoria/:id" component={ItemListContainer}/> */}
        <ItemListContainer/>
        <Footer/>
        </BrowserRouter>
    )
}

export default App;