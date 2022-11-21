// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  OnAccelerate = () => {
    const {speed} = this.state
    if (speed >= 0 && speed < 200) {
      this.setState(prev => ({speed: prev.speed + 10}))
    }
  }

  OnBreak = () => {
    const {speed} = this.state
    if (speed > 0 && speed <= 200) {
      this.setState(prev => ({speed: prev.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="Main-Container">
        <h1 className="heading">SPEEDOMETER</h1>
        <div>
          <img
            className="speedometerImg"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
            alt="speedometer"
          />
        </div>
        <div className="content-container">
          <h1 className="speed">speed is {speed}mph</h1>
          <p className="speed-description">
            Min limit is 0mph, Max limit is 200mph
          </p>
          <button
            type="button"
            className="accelerate"
            onClick={this.OnAccelerate}
          >
            Accelerate
          </button>
          <button type="button" className="break" onClick={this.OnBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
