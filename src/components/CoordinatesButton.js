import React, {Component} from 'react'

export default class CoordinatesButton extends Component {
  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }
  render () {
    return (
      <button type="button" name="button" onClick={this.handleClick}>Coordinate</button>
    )
  }
}
