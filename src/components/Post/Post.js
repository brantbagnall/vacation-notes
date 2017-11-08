import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header.js';
import axios from 'axios';
import './post.css';

class Post extends Component {

    submitJournal(){
        axios.post('/api/postjournal', {post_name: this.refs.name, post_activity: this.refs.aType, post_pal: this.refs.pal, post_env: this.refs.eType, post_content: this.refs.journalcontent, user_id: this.props.profile.user_id, post_website: this.refs.web, post_time: this.refs.time, post_lat: 0.0, post_long: 0.0 })
    }

    render() {
        return (
            <div>
                <Header header='New Journal' />
                <div className='post-centerer' >
                    <div className='post-centered' >
                        <p>
                            Journal Name: <input ref='name' />
                        </p>
                        <p>
                            Activity Type: <select ref='aType' >
                                <option>Test</option>
                            </select>
                            Physical Activity Level: <select ref='pal' >
                                <option>Low</option>
                                <option selected >Medium</option>
                                <option>High</option>
                            </select>
                            Envirnment: <select ref='eType' >
                                <option>Indoors</option>
                                <option selected >Outdoors</option>
                            </select>
                        </p>
                        <p>
                            Time to complete in hours: <input ref='time' type='number' />
                        </p>
                        <p>
                            Related Website: <input ref='web' />
                        </p>
                        <p>
                            <p>Journal Story:</p> 
                            <textarea className='post-textarea' ref='journalContent' maxLength='2000' />
                        </p>
                        <button onClick={()=> {this.submitJournal()}} >Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        profile: state.profile
    };
}

export default connect(mapStateToProps, {})(Post);