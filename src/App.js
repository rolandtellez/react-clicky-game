import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import images from "./images.json";
import "./App.css";
import { ENGINE_METHOD_PKEY_ASN1_METHS } from "constants";

class App extends Component {

  state = {
    images,
    score: 0
  };

  clickCheck = id => {
    this.state.images.find((image, i) => {
      if (image.id === id) {
        if(images[i].count === 0){
          images[i].count = images[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.images.sort(() => Math.random() - 0.5)
          return true; 
        }
      } else {
        this.endGame();
      }
    });

  };

  render() {
    return (
      <Wrapper>
        <h1 className="title">Clicky Game</h1>
        {
          this.state.images.map(images =>
            <ImageCard
              id={images.id}
              image={images.image}
              count={images.count}
              clickCheck={this.clickCheck}
            />
          )
        }
      </Wrapper>

    )

  }

}

export default App;
