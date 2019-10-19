import React, {Component} from 'react';

import '../assets/css/bodypanel.css';

import { connect } from 'react-redux';
import {
    GET_DATA_SUCCESS
} from '../common/ActionTypes'

import Header from '../components/Header';
import LeftPanel from '../components/LeftPanel';
import AdminTable from '../components/AdminTable';

import Data from '../common/dataAdmin';

class Admins extends Component {  
    constructor(props) {
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
                <Header menu={Data.menus[2]} history={this.props.history}  />
                <LeftPanel menus={Data.menus} selectTag={Data.menus[2].text} />
                <AdminTable data={this.props.admin_data} />
            </div>
        );
    }
}

const mapStateToProps = ({Normal}) => {
    const {
        getstate,
        admin_data
    } = Normal;
    return {
        getstate,
        admin_data
    }
};
//const mapDispatchToProps = { addclose: addClose,};
Admins = connect(mapStateToProps, null)(Admins)
export default Admins 