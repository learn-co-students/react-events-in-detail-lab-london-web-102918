// Code CoordinatesButton Component Here
import React, {Component} from 'react';

class CoordinatesButton extends React.Component {

handleClick = (e) => {

  let coordsArray = [e.clientX, e.clientY]
  this.props.onReceiveCoordinates(coordsArray)
}


render (){


  return (
    <button onClick={this.handleClick}> CoordinatesButton </button>

  )
}

}

export default CoordinatesButton;
