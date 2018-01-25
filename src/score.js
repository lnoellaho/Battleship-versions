import React, {Component} from 'react'
import './App.css'

class Score extends Component {
    render() {
        return(
            <div>
                <h2><img className="torpedo" src={require('./images/missile.jpeg')} /> Left: {this.props.torpedos} </h2>
            </div>
        )
    }
}

export default Score;
