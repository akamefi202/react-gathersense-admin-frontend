import React, {Component} from 'react';

import '../assets/css/bodypanel.css';

import { connect } from 'react-redux';
import {
    GET_DATA_SUCCESS
} from '../common/ActionTypes'

import Header from '../components/Header';
import LeftPanel from '../components/LeftPanel';
import Organizations from '../components/Organizations';

import Data from '../common/dataAdmin';

class Organization extends Component {  
  render() {  
    if (this.props.getstate !== GET_DATA_SUCCESS){
      return (<div >...loading</div>)
    } 
    return (
      <div>
        <Header menu={Data.menus[1]} history={this.props.history} />
        <LeftPanel menus={Data.menus} selectTag={Data.menus[1].text} />
        <Organizations data={this.props.organ_data} />
      </div>
    );
  }
}

const mapStateToProps = ({Normal}) => {
  const {
      getstate,
      organ_data
  } = Normal;
  return {
      getstate,
      organ_data
  }
};
//const mapDispatchToProps = { addclose: addClose,};
Organization = connect(mapStateToProps, null)(Organization)
export default Organization 