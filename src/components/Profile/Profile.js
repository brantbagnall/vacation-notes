import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProfile} from '../../ducks/reducer.js';
import Header from '../Header/Header.js';

class Profile extends Component {

    componentDidMount(){
        this.props.getProfile();
    }

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

export default connect(mapStateToProps, {getProfile})(Profile);