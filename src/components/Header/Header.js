import React, { Component } from 'react';
import {connect} from 'react-redux';
import suitcase from '../../assets/suitcase.png'
import './header.css';

class Header extends Component {
    render(props) {
        return (
            <div className='header-main' >
                <div className='header-pointer header-img-width' >
                    <a href='/#/' ><img onClick={()=> {}} className='header-img' src={suitcase} alt='Site Logo' /></a>
                </div>
                <div className='header-title' >
                    {this.props.header}
                </div>
                <div>
                    <a href={process.env.REACT_APP_LOGIN ? process.env.REACT_APP_LOGIN : 'http://localhost:3005/auth0' }><button className={this.props.profile.user_id ? 'header-button-disabled': 'header-button-enabled'} >
                        Login
                    </button></a>
                    <button className={this.props.profile.user_id ? 'header-button-enabled': 'header-button-disabled'} >
                        Profile
                    </button>
                    <a href={process.env.REACT_APP_NEW_JOURNAL ? process.env.REACT_APP_NEW_JOURNAL : 'http://localhost:3005/#/newjournal'} ><button className={this.props.profile.user_id ? 'header-button-enabled': 'header-button-disabled'} >
                        New Journal
                    </button></a>
                    <a href={process.env.REACT_APP_LOGOUT ? process.env.REACT_APP_LOGOUT : 'http://localhost:3005/logout'} ><button className={this.props.profile.user_id ? 'header-button-enabled': 'header-button-disabled'} >
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