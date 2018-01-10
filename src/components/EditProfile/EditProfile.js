import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProfile} from '../../ducks/reducer.js';
import Header from '../Header/Header.js';
import axios from 'axios';
import './editProfile.css';
import Dropzone from 'react-dropzone';

class EditProfile extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            imgURL: ''
        }
    }
    

    componentDidMount(){
        this.props.getProfile();
    }

    submitEdit(){
        var img = '';
        if (this.refs.userName.value){
            var editUName = this.refs.userName.value;
        } else {
            editUName = this.props.profile.user_name;
        }
        if(this.state.imgURL !== ''){
            img = this.state.imgURL;
        } else {
            img = this.props.profile.profile_img;
        }
        axios.put('/editprofile', {userName:editUName, id: this.props.profile.user_id, imgURL: img}).then(()=> this.props.history.push('/profile'));
    }

    handleDrop = files => {
        // Push all the axios request promise into a single array
        const uploaders = files.map(file => {
            // Initial FormData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `none`);
            formData.append("upload_preset", "uizviknq"); // Replace the preset name with your own
            formData.append("api_key", "423315934514724"); // Replace API key with your own Cloudinary key
            formData.append("timestamp", (Date.now() / 1000) | 0);
            
            // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
            return axios.post("https://api.cloudinary.com/v1_1/codeinfuse/image/upload", formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                const data = response.data;
                var fileURL = data.secure_url; // You should store this URL for future references in your app
                fileURL = fileURL.split("/");
                for (var i = 0; i < fileURL.length; ++i) {
                    if (fileURL[i] === "upload") {
                    fileURL.splice(i + 1, 0, "w_200,h_200,c_fill");
                    fileURL = fileURL.join("/");
                    this.setState({
                        coverURL: fileURL
                    });
                    i = fileURL.length;
                    }
                }
                this.setState({
                    imgURL: fileURL
                })
                console.log(data);
                alert('done');
            })
            });
        
            // Once all the files are uploaded 
            axios.all(uploaders).then(() => {
            // ... perform after upload is successful operation
            console.log(uploaders)
            });
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
                                <div>
                                <Dropzone 
                                    onDrop={this.handleDrop}  
                                    accept="image/*" 
                                    // style={styles.dropzone}
                                        >
                                    <p>Drop your files or click here to upload</p>
                                </Dropzone>
                                </div>
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