import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../Header/Header.js';
import './landing.css';
import {getAllBest, getAllRecent} from '../../ducks/reducer.js';

class Landing extends Component {

    componentDidMount(){
        this.props.getAllBest();
        this.props.getAllRecent();
    }

    render() {
        
        var allBest= this.props.allBest.map((e)=>{
            return (
                <div key={e.post_id} className='landing-whole-journal' >
                    <div className='landing-header' >
                        <img src={e.profile_img} alt={`${e.user_name}'s profile art`} className='landing-profile-img' />
                        <div>
                            <p>Username: {e.user_name}</p>
                            <p>Journal name: {e.post_name}</p>
                            <div>
                                <p>Activity: {e.post_activity}</p>
                                <p>Environment: {e.post_env}</p>
                                <p>Activity level: {e.post_pal}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Website Link: <a href={e.post_website} >{e.post_website}</a></p>
                    </div>
                    <div className='' >
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
                        <div>
                            <p>Username: {e.user_name}</p>
                            <p>Journal name: {e.post_name}</p>
                            <div>
                                <p>Activity: {e.post_activity}</p>
                                <p>Environment: {e.post_env}</p>
                                <p>Activity level: {e.post_pal}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Website Link: <a href={e.post_website} >{e.post_website}</a></p>
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
                <Header header='Home' />
                <div className='landing-flex' >
                    <div className='landing-center' >
                        <div>
                            <h1>
                                Adventure Journals
                            </h1>
                        </div>
                        <div>
                            <h1>
                                Your adventure is just a click away!
                            </h1>
                        </div>
                        <div className='landing-search' >
                            <button onClick={()=>{this.props.history.push('/search')}} >Search Journals</button>
                        </div>
                        <div className='landing-featured-title' >
                            <h1>
                                Featured Journals
                            </h1>
                        </div>
                        <div className='landing-journals-shown' >
                            <div className='landing-all-best' >
                                {allBest}
                            </div>
                            <div className='landing-all-recent' >
                                {allRecent}
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
        allRecent: state.allRecent
    };
}

export default connect(mapStateToProps, {getAllBest, getAllRecent})(Landing);