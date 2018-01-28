import React, {Component} from 'react'
import './App.css'

class Score extends Component {
    render() {
        return(
            <div className="row score">


                    <div className="col-4 col-md-6 col-sm-6">
                        <h5><img className="torpedo" src={require('./images/missile.jpeg')} /> Torpedos: <span className="weight">{this.props.torpedos}</span> </h5>
                    </div>
                    <div className="col-4 col-md-6 col-sm-6">
                        <h5><img className="xplode" src={require('./images/explosion.png')} /> Hits: <span className="weight">{this.props.hits}/24</span> </h5>
                    </div>
                    <div className="col-4 col-md-6 col-sm-6">
                    </div>


            </div>
        )
    }
}

export default Score;
