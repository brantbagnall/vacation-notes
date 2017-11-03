import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header.js';
import './search.css';

class Search extends Component {
    render() {
        return (
            <div>
                <Header header='Search' />
                <div className='search-center' >
                    <div className='search-centered' >
                        <div className='search-filter' >
                            <div>
                                Price: <select onChange={()=>{}} >
                                    <option>Free</option>

                                </select>
                            </div>
                            <div>
                                Age Group: <select onChange={()=>{}} >
                                    <option>Any</option>
                                </select>
                            </div>
                            <div>
                                Amount of Time: <select onChange={()=>{}} >
                                    <option>Any</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <input /> <button onClick={()=>{}} >Search Journals</button>
                        </div>
                        <div>
                            Results Go Here
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

export default connect(mapStateToProps, {})(Search);