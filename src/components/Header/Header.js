import React, { Component } from 'react';
import {connect} from 'react-redux';
import suitcase from '../../assets/suitcase.png'
import './header.css';

class Header extends Component {
    render(props) {
        var centerThing = '';
        if(this.props.centerProp){
            centerThing = this.props.centerProp;
        }
        return (
            <div className='header-main' >
                <div className='header-pointer header-img-width' >
                    <a href={process.env.REACT_APP_Home} ><img onClick={()=> {}} className='header-img' src={suitcase} alt='Site Logo' /></a>
                </div>
                <div className={`header-title ${centerThing}`} >
                    {this.props.header}
                </div>
                <div>
                    <a href={process.env.REACT_APP_LOGIN}><button className={this.props.profile.user_id ? 'header-button-disabled': 'header-button-enabled'} >
                        Login
                    </button></a>
                    <a href={process.env.REACT_APP_PROFILE} ><button className={this.props.profile.user_id ? 'header-button-enabled': 'header-button-disabled'} >
                        Profile
                    </button></a>
                    <a href={process.env.REACT_APP_NEW_JOURNAL} ><button className={this.props.profile.user_id ? 'header-button-enabled': 'header-button-disabled'} >
                        New Journal
                    </button></a>
                    <a href={process.env.REACT_APP_LOGOUT} ><button className={this.props.profile.user_id ? 'header-button-enabled': 'header-button-disabled'} >
                        Logout
                    </button></a>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        profile: state.profile
    }
}

export default connect (mapStateToProps, {}) (Header)