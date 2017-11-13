import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header.js'
import {getJournal, likePost, dislikePost} from '../../ducks/reducer.js';
import './journal.css';

class Journal extends Component {

    componentDidMount(){
        // console.log(this.props.match.params.id);
        this.props.getJournal(this.props.match.params.id);
    }

    like(){
        this.props.likePost(this.props.journal[0].post_id);
    }

    dislike(){
        this.props.dislikePost(this.props.journal[0].post_id);
    }

    render() {
        // console.log(this.props.journal[0]);
            var journal = this.props.journal.map((e)=>{
                return (
                    <div key={e.post_id} className='journal-whole-journal' >
                        <div className='journal-header' >
                            <img src={e.profile_img} alt={`${e.user_name}'s profile art`} className='journal-profile-img' />
                            <div>
                                <p>Username: {e.user_name}</p>
                                <p>Journal name: {e.post_name}</p>
                                <div>
                                    <p>Activity: {e.post_activity}</p>
                                    <p>Environment: {e.post_env}</p>
                                    <p>Activity level: {e.post_pal}</p>
                                    <p>Likes: {e.post_likes}</p>
                                </div>
                            </div>
                            <div>
                                <button onClick={()=> {this.like()} } >Like</button>
                                <button onClick={()=> {this.dislike()} } >Dislike</button>
                            </div>
                        </div>
                        <div>
                            <p>Website Link: <a href={'http://' + e.post_website} >{e.post_website}</a></p>
                        </div>
                        <div className='' >
                            <p>
                                {e.post_content}
                            </p>
                        </div>
                    </div>
                )
            })
        return (
            <div>
                <Header header='Journal' />
                <div>
                    <div className='journal-centerer' >
                        <div className='journal-centered' >
                            {journal}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        journal: state.journal
    };
}

export default connect(mapStateToProps, {getJournal, likePost, dislikePost})(Journal);