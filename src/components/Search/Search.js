import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header.js';
import './search.css';
import {getSearch} from '../../ducks/reducer.js';

class Search extends Component {

    searchJournals(){
        console.log(this.refs.time.value);
        this.props.getSearch(this.refs.act.value, this.refs.env.value, this.refs.actlev.value, this.refs.time.value, this.refs.keyword.value);
    }

    render() {

        var search = this.props.search.map((e)=>{
            return (
                <div key={e.post_id} className='search-whole-journal' >
                    <div className='search-header' >
                        <img src={e.profile_img} alt={`${e.user_name}'s profile art`} className='search-profile-img' />
                        <div>
                            <p>Username: {e.user_name}</p>
                            <p>Journal name: <a href={`/#/journal/${e.post_id}`} >{e.post_name}</a></p>
                            <div>
                                <p>Activity: {e.post_activity}</p>
                                <p>Environment: {e.post_env}</p>
                                <p>Activity level: {e.post_pal}</p>
                                <p>Likes: {e.post_likes}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Website Link: <a href={'http://' + e.post_website} >{e.post_website}</a></p>
                    </div>
                    <div className='search-post-content' >
                        <p>
                            {e.post_content}
                        </p>
                    </div>
                </div>
            )
        })

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
                                Hours to complete: <select ref='time' >
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
                            <input ref='keyword' /> <button onClick={()=>{this.searchJournals()}} >Search Journal Titles</button>
                        </div>
                        <div className='search-all-journals' >
                            {search}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        search: state.search
    };
}

export default connect(mapStateToProps, {getSearch})(Search);