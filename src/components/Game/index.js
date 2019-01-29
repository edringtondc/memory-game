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

    } else {
      console.log("You already clicked that Grumpy Cat!!!!")
    }

  }

  wonGame = () =>{
    alert("you've won the game!")
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


    // this.setState({score: this.state.score + 1})


    this.shuffleDeck(newArray)
    console.log(newArray)



  }


  render() {
    return (

      <>
      <div className="justify-content-center">{this.state.score}</div>

        {this.state.cats.map(cat => (

          <div className="card" >

            <img alt={cat.name} src={cat.image} key={cat.id.toString()} id={cat.id} onClick={() => this.handleClick(cat.id)} />

          </div>
        )

        )


        }
      </>
    )
  }
}

export default ImageCard;