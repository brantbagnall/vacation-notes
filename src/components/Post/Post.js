import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header.js';
import axios from 'axios';
import './post.css';

class Post extends Component {

    submitJournal(){
        axios.post('/api/postjournal', {post_name: this.refs.name.value, post_activity: this.refs.aType.value, post_pal: this.refs.pal.value, post_env: this.refs.eType.value, post_content: this.refs.journalContent.value, user_id: this.props.profile.user_id, post_website: this.refs.web.value, post_time: this.refs.time.value, post_lat: 0.0, post_long: 0.0 }).then((id)=> {
            this.props.history.push('/journal/' + id.data)
    })
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
                                <option>None</option>
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