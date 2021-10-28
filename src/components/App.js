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
        <ItemListContainer/>
        <Footer/>
        </>
    )
}

export default App;