import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header.js';
import axios from 'axios';
import './post.css';
import Dropzone from 'react-dropzone';

class Post extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            imgURLS: []
        }
    }
    
    submitJournal(){

        var imgsString = [...this.state.imgURLS]
        imgsString = imgsString.join(',');

        axios.post(process.env.REACT_APP_POST_JOURNAL, {post_name: this.refs.name.value, post_activity: this.refs.aType.value, post_pal: this.refs.pal.value, post_env: this.refs.eType.value, post_content: this.refs.journalContent.value, user_id: this.props.profile.user_id, post_website: this.refs.web.value, post_time: this.refs.time.value, post_lat: 0.0, post_long: 0.0, imgs: imgsString }).then((id)=> {
            this.props.history.push(process.env.REACT_APP_Journal + id.data)
    })
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
                const fileURL = data.secure_url // You should store this URL for future references in your app
                var arr = [...this.state.imgURLS];
                arr.push(fileURL)
                console.log(fileURL)
                this.setState({
                    imgURLS: arr
                })
                // console.log(data);
            })
            });
        
            // Once all the files are uploaded 
            axios.all(uploaders).then(() => {
            // ... perform after upload is successful operation
            // console.log(uploaders)
            });
        }

    render() {
        console.log(this.state.imgURLS)
        var imgDisplay = this.state.imgURLS.map((e)=>{
            return (
                <img src={e} alt='your upload' />
            )
        })
        return (
            <div>
                <Header header='New Journal' />
                <div className='post-centerer' >
                    <div className='post-centered' >
                    <div>
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
                            </p>
                            <p>
                            Physical Activity Level: <select ref='pal' >
                                <option>Low</option>
                                <option selected >Medium</option>
                                <option>High</option>
                            </select>
                            </p>
                            <p>
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
                        </div>
                        <p>
                            <p>Journal Story:</p> 
                            <textarea className='post-textarea' ref='journalContent' maxLength='2000' />
                        </p>
                        <p>
                        <Dropzone 
                            onDrop={this.handleDrop}  
                            accept="image/*"
                            multiple 
                            // style={styles.dropzone}
                                >
                            <p>Drop your files or click here to upload images</p>
                        </Dropzone>
                        </p>
                        <div>
                            {imgDisplay}
                        </div>
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