import React, {Component} from 'react';

import '../assets/css/bodypanel.css';

import LoginLeft from '../components/LoginLeft';
import LoginRight from '../components/LoginRight';

class Login extends Component {  
  render() {   
    
    return (
      <div>
        <LoginLeft />
        <LoginRight  history={this.props.history} />
      </div>
    );
  }
}

export default Login;
