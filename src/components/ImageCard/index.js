import React, { Component } from "react";
import "./style.css";
import cats from "../../GrumpyCats.json";


class ImageCard extends Component {

  state = {
    cats: cats,
    clickedIDs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    score: 0
  }

  handleClick = (id) => {

    console.log(`Clicked on ${id}`)
    //if the clicked ID is in the array, then score goes up, 
    const newClicked = this.state.clickedIDs.filter(cat => cat === id)

    this.setState({ clickedIDs: newClicked })

    //if the clicked ID is not in the array, then game over

  }

  render() {
    return (

      cats.map(cat => (

        <div className="card" >
         
            <img alt={cat.name} src={cat.image} key={cat.id} id={cat.id} onClick={() => this.handleClick(cat.id)} />
          
        </div>
      )

      )
    )}
}

  export default ImageCard;