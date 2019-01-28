import React, { Component } from "react";
import "./style.css";
import cats from "../../GrumpyCats.json";


class ImageCard extends Component {

  state = {
    cats: cats,

  }



  componentDidMount = () => {
    //  const shuffledCats = this.shuffleArray(cats)
    this.shuffleDeck(this.state.cats)
    this.setState({ cats: cats })

  }

  shuffleDeck = (array) => {

   const shuffledDeck = array.sort(function (a, b) { return 0.5 - Math.random() });

   this.setState({cats: shuffledDeck})


  }


  //  handleGuess = ()=>{

  //   //click if true, losing game - end game - set all back to false 
  //   //if false, score increases
  //   //click, wrong/ right .shuffle, reset

  //  }





  handleClick = (id) => {
 
    console.log(id)
    const newArray = this.state.cats;
  

    
    newArray.forEach((cat) =>{

      if (cat.id === id){
        cat.clicked = true
       
      } 

    })

    this.shuffleDeck(newArray)
    console.log(newArray)

  
  }


  render() {
    return (

      cats.map(cat => (

        <div className="card" >

          <img alt={cat.name} src={cat.image} key={cat.name} id={cat.id} onClick={() => this.handleClick(cat.id)} />

        </div>
      )

      )
    )
  }
}

export default ImageCard;