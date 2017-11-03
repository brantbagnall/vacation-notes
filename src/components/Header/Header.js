import React, { Component } from 'react';
import {connect} from 'react-redux';
import './header.css';

class Header extends Component {
    render(props) {
        return (
            <div className='header-main' >
                <div>
                    Logo
                </div>
                <div className='header-title' >
                    {this.props.header}
                </div>
                <div>
                    <button className={this.props.logged ? 'header-button-disabled': 'header-button-enabled'} >
                        Login
                    </button>
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