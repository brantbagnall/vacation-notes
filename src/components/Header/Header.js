import React, { Component } from 'react';
import {connect} from 'react-redux';
import suitcase from '../../assets/suitcase.png'
import './header.css';

class Header extends Component {
    render(props) {
        return (
            <div className='header-main' >
                <div className='header-pointer header-img-width' >
                    <img onClick={()=> {}} className='header-img' src={suitcase} alt='Site Logo' />
                </div>
                <div className='header-title' >
                    {this.props.header}
                </div>
                <div>
                    <a href='http://localhost:3005/auth0'><button className={this.props.logged ? 'header-button-disabled': 'header-button-enabled'} >
                        Login
                    </button></a>
                    <button className={this.props.logged ? 'header-button-enabled': 'header-button-disabled'} >
                        Profile
                    </button>
                    <button className={this.props.logged ? 'header-button-enabled': 'header-button-disabled'} >
                        Logout
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        logged: state.logged
    }
}

export default connect (mapStateToProps, {}) (Header)