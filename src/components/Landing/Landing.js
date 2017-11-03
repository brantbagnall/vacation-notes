import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header.js';
import './landing.css';

class Landing extends Component {
    render() {

        return (
            <div>
                <Header header='Home' />
                <div className='landing-flex' >
                    <div className='landing-center' >
                        <div>
                            <h1>
                                Adventure Journals
                            </h1>
                        </div>
                        <div>
                            <h1>
                                Your adventure is just a click away!
                            </h1>
                        </div>
                        <div className='landing-search' >
                            <input ref='search' /> <button onClick={()=>{}} >Search Journals</button>
                        </div>
                        <div className='landing-featured-title' >
                            <h1>
                                Featured Journals
                            </h1>
                        </div>
                        <div>
                                this is where the adventures go
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, {})(Landing);