import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header.js'
import {getJournal, likePost, dislikePost} from '../../ducks/reducer.js';
import './journal.css';

class Journal extends Component {

    componentDidMount(){
        // console.log(this.props.match.params.id);
        this.props.getJournal(this.props.match.params.id);
        // console.log(this.props.user)
    }

    like(){
        if(this.props.journal[0].post_liked == null){
            this.props.likePost(this.props.journal[0].post_id, this.props.user.user_id);
        } else {
            var user_ids = this.props.journal[0].post_liked;
            user_ids = user_ids.split(' ');
            if(!user_ids.includes(`${this.props.user.user_id}`)){
                user_ids.push(`${this.props.user.user_id}`);
                user_ids = user_ids.join(' ');
                this.props.likePost(this.props.journal[0].post_id, user_ids);
            }
        }
    }

    dislike(){
        this.props.dislikePost(this.props.journal[0].post_id, this.props.user.user_id);
    }

    render() {
        console.log(this.props.journal[0])
        var buttons = (<div></div>)
        var doneAlready = false;
        var likedSplit, dislikedSplit;
        if(this.props.journal[0] !== undefined){
            if(this.props.journal[0].post_liked == null && this.props.journal[0].post_disliked == null){
                doneAlready = false;
            }else {
                if(this.props.journal[0].post_liked != null){
                    likedSplit = this.props.journal[0].post_liked.split(' ');
                    if(likedSplit.includes(`${this.props.user.user_id}`)){
                        doneAlready = true;
                    }
                }
                if(this.props.journal[0].post_disliked != null){
                    dislikedSplit = this.props.journal[0].post_disliked.split(' ');
                    console.log('dislikedSplit',dislikedSplit)
                    if(dislikedSplit.includes(`${this.props.user.user_id}`)){
                        doneAlready = true;
                    }
                }
            }
                if (!doneAlready){
                    buttons = (
                        <div style={this.props.user.user_id ? {display: 'inline'} : {display: 'none'}} >
                            <button onClick={()=> {this.like()} } >Like</button>
                            <button onClick={()=> {this.dislike()} } >Dislike</button>
                        </div>
                    )
                }
        }
        console.log('User', this.props.user);
            var journal = this.props.journal.map((e)=>{
                var pics = e.post_imgs.split(' ');
                var allPics = pics.map((e, i)=> {
                    return (
                    <div key={i + 'pic'} >
                        <a href={e} className='journal-test' ><img src={e} alt='vacation!' className='journal-pic-styles' /></a>
                    </div>
                    )
                })
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
                            {buttons}
                        </div>
                        <div>
                            <p>Website Link: <a href={'http://' + e.post_website} >{e.post_website}</a></p>
                        </div>
                        <div className='' >
                            <p>
                                {e.post_content}
                            </p>
                            <div className='journal-pic-flex' >
                                {allPics}
                            </div>
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
        journal: state.journal,
        user: state.profile
    };
}

export default connect(mapStateToProps, {getJournal, likePost, dislikePost})(Journal);