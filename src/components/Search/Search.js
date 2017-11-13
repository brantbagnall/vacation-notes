import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header.js';
import './search.css';
import {getSearch} from '../../ducks/reducer.js';

class Search extends Component {

    searchJournals(){
        this.props.getSearch(this.refs.act.value, this.refs.env.value, this.refs.actlev.value, this.refs.time.value, this.refs.keyword.value);
    }

    render() {
        return (
            <div>
                <Header header='Search' />
                <div className='search-center' >
                    <div className='search-centered' >
                        <div className='search-filter' >
                            <div>
                            Activity: <select ref='act' >
                                    <option>Any</option>
                                    <option>Academic</option>
                                    <option>Art</option>
                                    <option>Cultural</option>
                                    <option>Community</option>
                                    <option>Government</option>
                                    <option>Leadership</option>
                                    <option>Media</option>
                                    <option>Military</option>
                                    <option>Music</option>
                                    <option>Religious</option>
                                    <option>Roleplaying/Fantasy</option>
                                    <option>Social Activism</option>
                                    <option>Special Interest</option>
                                    <option>Political</option>
                                    <option>Recreation</option>
                                    <option>Technology</option>
                                    <option>Travel</option>
                                    <option>Volunteer</option>
                                </select>
                            </div>
                            <div>
                            Environment: <select ref='env' >
                                    <option>Any</option>
                                    <option>Indoors</option>
                                    <option>Outdoors</option>
                                </select>
                            </div>
                            <div>
                            Activity level: <select ref='actlev' >
                                    <option>Any</option>
                                    <option>Low</option>
                                    <option>Medium</option>
                                    <option>High</option>
                                </select>
                            </div>
                            <div>
                                Amount of Time: <select ref='time' >
                                    <option>Any</option>
                                    <option>0-2</option>
                                    <option>3-4</option>
                                    <option>5-6</option>
                                    <option>7-8</option>
                                    <option>9-10</option>
                                    <option>11-12</option>
                                    <option>13 or more</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <input ref='keyword' /> <button onClick={()=>{this.searchJournals()}} >Search Journals</button>
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

export default connect(mapStateToProps, {getSearch})(Search);