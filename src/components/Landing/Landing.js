import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header.js';
import './landing.css';
import {getAllBest, getAllRecent, getEditor} from '../../ducks/reducer.js';

class Landing extends Component {

    componentDidMount(){
        this.props.getAllBest();
        this.props.getAllRecent();
        this.props.getEditor();
    }

    render() {
        
        var allBest= this.props.allBest.map((e)=>{
            return (
                <div key={e.post_id} className='landing-whole-journal' >
                    <div className='landing-header' >
                        <img src={e.profile_img} alt={`${e.user_name}'s profile art`} className='landing-profile-img' />
                        <div className='landing-post-title' >
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
                    <div className='landing-post-content' >
                        <p>
                            {e.post_content}
                        </p>
                    </div>
                </div>
            )
        })

        var allRecent= this.props.allRecent.map((e)=>{
            return (
                <div key={e.post_id} className='landing-whole-journal' >
                    <div className='landing-header' >
                        <img src={e.profile_img} alt={`${e.user_name}'s profile art`} className='landing-profile-img' />
                        <div className='landing-post-title' >
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
                    <div className='landing-post-content' >
                        <p>
                            {e.post_content}
                        </p>
                    </div>
                </div>
            )
        })

        var editor = this.props.editorsChoice.map ((e)=> {
            return (
                <div key={e.post_id} className='landing-whole-journal' >
                    <div className='landing-header' >
                        <img src={e.profile_img} alt={`${e.user_name}'s profile art`} className='landing-profile-img' />
                        <div className='landing-post-title' >
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
                    <div className='landing-post-content' >
                        <p>
                            {e.post_content}
                        </p>
                    </div>
                </div>
            )
        })

        return (
            <div className='landing-background' >
                <Header header='Adventure Society Journals' />
                <div className='landing-flex' >
                    <div className='landing-center' >
                        <div className='landing-margin' >
                            <h1>
                                Adventure Journals
                            </h1>
                        </div>
                        <div className='landing-margin'>
                            <h1>
                                Your adventure is just a click away!
                            </h1>
                        </div>
                        <div className='landing-search' >
                            <button onClick={()=>{this.props.history.push('/search')}} className='landing-search-button' >Search Journals</button>
                        </div>
                        <div>
                            <h1 className='landing-featured-title2' >
                                Featured Journals
                            </h1>
                        </div>
                        <div className='landing-journals-shown' >
                            <div className='landing-all-best' >
                                <h1 className='landing-featured-title landing-align landing-background-text' >Top Rated</h1>
                                {allBest}
                            </div>
                            <div className='landing-all-recent' >
                            <h1 className='landing-featured-title landing-align landing-background-text' >Most Recent</h1>
                                {allRecent}
                            </div>
                            <div className='landing-all-recent' >
                            <h1 className='landing-featured-title landing-align landing-background-text' >Editors Choice</h1>
                                {editor}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        allBest: state.allBest,
        allRecent: state.allRecent,
        editorsChoice: state.editorsChoice
    };
}

export default connect(mapStateToProps, {getAllBest, getAllRecent, getEditor})(Landing);