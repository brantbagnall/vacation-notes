import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProfile, getRecent, getBest} from '../../ducks/reducer.js';
import Header from '../Header/Header.js';
import './profile.css';

class Profile extends Component {

    componentDidMount(){
        this.props.getProfile();
        this.props.getRecent();
        this.props.getBest();
    }

    render() {
        console.log(this.props.best)
            var bestJournal = this.props.best.map(e => {
                return (
                    <div key={e.post_id} className='profile-journals-recent' >
                        <div className='profile-journal-header' >
                            <img src={e.profile_img} alt={`${e.user_name}'s profile art`} className='profile-profile-img' />
                            <div>
                                <p>Username: {e.user_name}</p>
                                <p>Journal name: <a href={`${process.env.REACT_APP_Journal}${e.post_id}`} >{e.post_name}</a></p>
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
                        <div className='profile-journal-content' >
                            <p>
                                {e.post_content}
                            </p>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                )
            })
            var recentJournals = this.props.recent.map((e, i) => {
                return (
                    <div key={e.post_id} className={i <= 1 ? 'profile-journals-recent profile-underline' : 'profile-journals-recent'} >
                        <div className='profile-journal-header' >
                            <img src={e.profile_img} alt={`${e.user_name}'s profile art`} className='profile-profile-img' />
                            <div>
                                <p>Username: {e.user_name}</p>
                                <p>Journal name: <a href={`${process.env.REACT_APP_Journal}${e.post_id}`} >{e.post_name}</a></p>
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
                        <div className='profile-journal-content' >
                            <p>
                                {e.post_content}
                            </p>
                        </div>
                    </div>
                )
            })
        return (
            <div className='profile-background' >
                <Header header='Profile' />
                <div className='profile-flex-center' >
                    <div className='profile-centered profile-underline' >
                        <div className='profile-centered' >
                            <div>
                                <img className='profile-picture' src={this.props.profile.profile_img} alt='You' />
                            </div>
                            <div className='profile-text' >
                                <p className='profile-individual-text' >
                                    Full Name (private): {this.props.profile.first_name} {this.props.profile.last_name}
                                </p>
                                <p className='profile-individual-text' >
                                    User Name (public): {this.props.profile.user_name}
                                </p>
                                <p className='profile-individual-text' >
                                    Email (private): {this.props.profile.email}
                                </p>
                                <p className='profile-individual-text' >
                                    <a href='/#/editprofile' >
                                        <button>Edit Profile</button>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='profile-all-recent profile-underline' >
                        <h1 className='profile-all-recent-text' >Your best journals</h1>
                        <div className='profile-all-recent-flex' >
                            {bestJournal}
                        </div>
                    </div>
                    <div className='profile-all-recent' >
                        <h1 className='profile-all-recent-text' >Your recent journals</h1>
                        <div className='profile-all-recent-flex' >
                            {recentJournals}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        profile: state.profile,
        recent: state.recent_journal,
        best: state.bestJournal
    };
}

export default connect(mapStateToProps, {getProfile, getRecent, getBest})(Profile);