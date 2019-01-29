import React from "react";
import Game from "./components/Game";
import Jumbotron from "./components/JumboTron";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

class App extends React.Component {

 

  render() {

    return (
      <>
      <Header/>
      <Jumbotron/>
      <div className="container d-flex flex-wrap">
  
      
        <Game/>
    
      </div>
      <Footer/>
      </>
    );
  }

}

export default App;
