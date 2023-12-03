import React, {Component} from 'react'

class Clock extends Component {
    
    constructor(){
    super();
    this.state = { time: new Date().toLocaleString() }
    }

    componentDidMount() {
        setInterval(() => { this.setState({time: new Date().toLocaleString()})}, 1000);
      }

    render () {
        const dateTime = new Date();
        return (
            <div>
                <h1>{this.state.time}</h1>
            </div>
        )
    };

};

export default Clock