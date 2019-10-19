import React, {Component} from 'react';

import '../assets/css/bodypanel.css';

import Header from '../components/Header';
import LeftPanel from '../components/LeftPanel';
import Overview from '../components/Overview';

import { connect } from 'react-redux';
import {
    GET_DATA_SUCCESS
} from '../common/ActionTypes'

import Data from '../common/dataAdmin';

class Dashboard extends Component {  
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render() { 
        if (this.props.getstate !== GET_DATA_SUCCESS){
            return (<div >...loading</div>)
        }  
        return (
            <div>
                <Header  menu={Data.menus[0]}  history={this.props.history} />
                <LeftPanel menus={Data.menus} selectTag={Data.menus[0].text} />
                <Overview 
                    admin_data={this.props.admin_data} 
                    organ_data={this.props.organ_data}
                    candi_data={this.props.candi_data}
                    train_data={this.props.train_data}
                />
            </div>
        );
    }
}

const mapStateToProps = ({Normal}) => {
    const {
        getstate,
        admin_data,
        organ_data,
        candi_data,
        train_data
    } = Normal;
    return {
        getstate,
        admin_data,
        organ_data,
        candi_data,
        train_data
    }
};
Dashboard = connect(mapStateToProps, null)(Dashboard)
export default Dashboard;
