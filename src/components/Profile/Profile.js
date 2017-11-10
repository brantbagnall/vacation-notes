import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProfile, getRecent} from '../../ducks/reducer.js';
import Header from '../Header/Header.js';
import './profile.css';

class Profile extends Component {

    componentDidMount(){
        this.props.getProfile();
        this.props.getRecent();
        // this.props.getBest();
    }

    render() {
            console.log(this.props.recent[0]);
            var recentJournals = this.props.recent.map(e => {
                return (
                    <div key={e.post_id} className='profile-journals-recent' >
                        <p>{e.post_name}</p>
                        <p>{e.post_content}</p>
                        <p>{}</p>
                        <p>{}</p>
                        <p>{}</p>
                    </div>
                )
            })
        return (
            <div>
                <Header header='Profile' />
                <div className='profile-flex-center' >
                    <div className='profile-centered' >
                        <div className='profile-center-buddies profile-center-left' >
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
                        <div className='profile-center-buddies profile-center-right' >
                            test2
                        </div>
                    </div>
                    <div className='profile-all-recent' >
                        {recentJournals}
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        profile: state.profile,
        recent: state.recent_journal
    };
}

export default connect(mapStateToProps, {getProfile, getRecent})(Profile);