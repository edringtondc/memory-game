import React, { Component } from "react";
import "./style.css";
import cats from "../../GrumpyCats.json";


class ImageCard extends Component {

  state = {
    cats: cats,
    score: 0

  }

  componentDidMount = () => {
    //  const shuffledCats = this.shuffleArray(cats)
    this.shuffleDeck(this.state.cats)
    this.setState({ cats: cats })
  }

  shuffleDeck = (array) => {


    const shuffledDeck = array.sort(function (a, b) { return 0.5 - Math.random() });
    this.setState({ cats: shuffledDeck })
    
  }

  handleGuess = (guessedRight) => {

    if (guessedRight) {
      this.setState({ score: this.state.score + 1 })
      console.log("good guess! Your score is: " + this.state.score)
      if (this.state.score === 12) {
        this.wonGame()
      }


    } else {

      console.log("You already clicked that Grumpy Cat!!!!")
      this.loseGame()
    }

  }
  loseGame() {
    alert("you lose!");
    this.resetGame();

  }

  wonGame = () => {
    alert("you've won the game!")
    this.resetGame();

  }

  resetGame = () => {
    let array = this.state.cats

    const resetArray = array.map(cat => {

      cat.clicked = false;
      return cat;

    })

    this.setState({ cats: resetArray, score: 0 })
    this.shuffleDeck(this.state.cats)
  }

  handleClick = (id) => {

    console.log(id)
    // const newArray = this.state.cats;
    let guessedRight = false

    const newArray = this.state.cats.map(cat => {

      if (cat.id === id) {
        if (cat.clicked === false) {
          cat.clicked = true
          guessedRight = true
        }

      }
      return cat;

    })

    this.handleGuess(guessedRight)
    this.shuffleDeck(newArray)
    console.log(newArray)



  }


  render() {
    return (

      <>

        <div className="row d-flex justify-content-center"><h3> Correct Clicks: {this.state.score}</h3></div>


        <div className="row justify-content-around">
          {this.state.cats.map(cat => (

            <div className="card" >

              <img alt={cat.name} src={cat.image} key={cat.id.toString()} id={cat.id} onClick={() => this.handleClick(cat.id)} />

            </div>
          )

          )


          }
        </div>
      </>
    )
  }
}

export default ImageCard;