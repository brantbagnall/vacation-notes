import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProfile} from '../../ducks/reducer.js';
import Header from '../Header/Header.js';
import axios from 'axios';
import './editProfile.css';

class EditProfile extends Component {

    componentDidMount(){
        this.props.getProfile();
    }

    submitEdit(){
        if (this.refs.userName.value){
            var editUName = this.refs.userName.value;
        } else {
            editUName = this.props.profile.user_name;
        }
        axios.put('/api/editprofile', {userName:editUName, id: this.props.profile.user_id})
    }

    render() {
        return (
            <div>
                <Header header='Edit Profile' />
                <div className='editprofile-flex-center' >
                    <div className='editprofile-centered' >
                        <div className='editprofile-center-buddies editprofile-center-left' >
                            <div>
                                <img className='editprofile-picture' src={this.props.profile.profile_img} alt='You' />
                            </div>
                            <div className='editprofile-text' >
                                <p className='editprofile-individual-text' >
                                    Full Name (private): {this.props.profile.first_name} {this.props.profile.last_name}
                                </p>
                                <p className='editprofile-individual-text' >
                                    User Name (public): <input ref='userName' placeholder={this.props.profile.user_name} />
                                </p>
                                <p className='editprofile-individual-text' >
                                    Email (private): {this.props.profile.email}
                                </p>
                                <p>
                                    <a>
                                        <button onClick={()=> {this.submitEdit()} } >Submit</button>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className='editprofile-center-buddies editprofile-center-right' >
                            test2
                        </div>
                    </div>
                    <div>
                        
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

export default connect(mapStateToProps, {getProfile})(EditProfile);