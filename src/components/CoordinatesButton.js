// Code CoordinatesButton Component Here
import React, { Component } from 'react';


class CoordinatesButton extends Component {

  handleClick = (event) => {
    let mouseCoordinates = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(mouseCoordinates)
  }


  render() {
    return(
      <button onClick={this.handleClick} >Coordinates Button</button>
    )
  }

}

export default CoordinatesButton
