import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Header from "./Header";
import ItemListContainer from "./ItemListContainer";
import Footer from "./Footer";

function App() {
    return(
        <>
        <Header/>
        <ItemListContainer nombre="Tom" apellido="Casserly" edad= {33}/>
        <Footer/>
        </>
    )
}

export default App;