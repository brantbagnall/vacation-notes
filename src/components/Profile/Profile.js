import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header.js'

class Profile extends Component {
    render() {
        return (
            <div>
                <Header header='Profile' />
                <div>
                    <div>
                        
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, {})(Profile);