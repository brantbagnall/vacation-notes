import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header.js'

class Journal extends Component {
    render() {
        return (
            <div>
                <Header header='Journal' />
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

export default connect(mapStateToProps, {})(Journal);