import React, {Component} from 'react';

import '../assets/css/login.css';
import logoImg from '../assets/images/logo.png'

class LoginLeft extends Component {
  
    render() {
        return (
            <div className="loginLeft">
                <div className="loginLeftBack">                    
                    <img className="loginlogoimg" src={logoImg} alt="" />                  
                </div>
            </div>
        );
    }
}

export default LoginLeft;
