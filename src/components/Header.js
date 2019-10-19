import React, {Component} from 'react';
import { Dropdown } from 'react-bootstrap';

import { connect } from 'react-redux';
import { addOpen, Logout } from '../actions';

import {
    GOTO_LOGIN_URL,
} from '../common/ActionTypes';

import '../assets/css/header.css';
import profilephoto from '../assets/images/avatar.jpg';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    onLogout = () => {
        this.props.history.push(GOTO_LOGIN_URL);
        this.props.logout();
    }
    
    render() {
        return (
            <header className="Hcontainer">  
                <div className="hdr">
                    <div className="hdrtxt">
                        {this.props.menu.titletxt}
                    </div>
                    <div className="hdr-bar">
                        <i className="fa fa-bars" aria-hidden="true" />
                    </div>
                    <div className="hdrnav">
                        {
                            this.props.menu.redtxt !== "" ? (
                                <div className="additem" >
                                    <div  onClick={this.props.addopen} style={{ cursor: 'pointer', paddingBottom: '3px' }}>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM12 7H9V4H7V7H4V9H7V12H9V9H12V7Z" fill="#FF475B"/>
                                        </svg>
                                    </div>
                                    <span onClick={this.props.addopen} className="h-addtxt" >{this.props.menu.redtxt}</span>
                                </div>
                            ) : (
                                <div className="hadditem"> </div>
                            )
                        }
                        
                        <Dropdown>
                            <div className="dropmenu">
                                <div style={{display: 'flex'}}>
                                    <img
                                        src={profilephoto}
                                        alt="user"
                                        className="rounded-circle"
                                        width="26"
                                    />
                                    <div>                      
                                        <p style={{margin:'1px', marginLeft: '15px', fontSize: '14px', fontWeight: 'bold'}}>{localStorage.getItem('GSAuserName')}</p>
                                        <p style={{margin:'1px', marginLeft: '15px', fontSize: '12px'}}>Adminstrator</p>
                                    </div>
                                </div>
                                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                                    
                                </Dropdown.Toggle>
                                </div>
                                <Dropdown.Menu className="drp_menu">
                                    <Dropdown.Item className="drp_item" onSelect={() => this.props.history.push('/My account')} >My account</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item className="drp_item" onSelect={this.onLogout}>Log out</Dropdown.Item>
                                </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>    
            </header>
        );
    }
}
// addopen: addOpen,
const mapDispatchToProps = { addopen: addOpen, logout:Logout};
const mapStateToProps = ({Auth}) => {
    let {userName} = Auth;
    return {userName}
};
Header = connect(mapStateToProps,mapDispatchToProps)(Header);
export default Header;
