import React from 'react';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div className="About">
                 <h1>About the Developer</h1>
                 <p>About me😋</p>
                 <p>param1 { this.props.match.params.other }</p>
                 <p>param2 { this.props.match.params.thing }</p>
                 <p>param3 { this.props.match.params.here }</p>
            </div>
        )
    }
}