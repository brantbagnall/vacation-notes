import React, { Component } from 'react';
import {connect} from 'react-redux';

class Landing extends Component {
    render() {
        return (
            <div>
                {this.props.test1}
            </div>
        )
    }
}


function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, {})(Landing);