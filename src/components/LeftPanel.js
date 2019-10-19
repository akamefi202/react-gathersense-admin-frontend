import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/leftpanel.css';
import logoImg from '../assets/images/logo.png'

class LeftPanel extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            selectTag: this.props.selectTag,
        }
    }

    selectSetting(item) {
        this.setState({ selectTag: item })
    }
  
    render() {
        return (
            <div className="Lcontainer">
                <div className="Ltitle">                    
                    <img className="logoimg" src={logoImg} alt="" />
                    <div className="logotxt">Admin</div>
                    
                </div>   
                <div className="Lbody">
                    <div style={{height: '57px'}}></div>
                    {this.props.menus.map((menu, index) =>
                        this.state.selectTag === menu.text ?
                        (<div key={index} className="selectpanel">
                            <div className="Lselecticon">{menu.icon}</div><Link to={'/'+ menu.text} className="clickmenu" >{menu.text}</Link>
                        </div>) :
                        (<div key={index} className="unselectpanel">
                            <div className="Lselecticon">{menu.icon}</div><Link to={'/'+ menu.text} className="clickmenu" >{menu.text}</Link>
                        </div>)
                    )}
                </div>
            </div>
        );
    }
}

export default LeftPanel;
