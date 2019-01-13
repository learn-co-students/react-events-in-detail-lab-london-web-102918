// Code DelayedButton Component Here
// Code DelayedButton Component Here
import React, {Component} from 'react';

class DelayedButton extends React.Component {

handleClick = (event) =>{
  setTimeout(() => this.props.onDelayedClick(event), this.props.delay);
}

render (){
  return (
    <button onClick={this.handleClick}> DelayedButton </button>
  )
}

}

export default DelayedButton;
