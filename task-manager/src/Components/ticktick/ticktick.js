import React from 'react';
import './ticktick.css'

export class Tick extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      button: true,

    }
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    this.setState({
      button: !this.state.button
    })
  }

  render() {
    return (
      <div className="container">
        <button name="complete" checked={this.state.complete} onChange={this.changeState} className={this.state.button ? "buttonTrue" : "buttonFalse"}
          onClick={this.changeColor}><i class="fas fa-check"></i></button>
      </div>
    )
  }
}
