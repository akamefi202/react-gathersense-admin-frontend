import React, {Component} from 'react';
import {
    Card, 
    Grid,
} from '@material-ui/core';

import CardContent from '@material-ui/core/CardContent';

import { connect } from 'react-redux';

import {
    GET_DATA_SUCCESS
} from '../common/ActionTypes'

import '../assets/css/overview.css';
import '../assets/css/bodypanel.css';

class Overview extends Component {

    constructor(props) {
        super(props)
        this.state = {
            admin_data: this.props.admin_data,
            organ_data: this.props.organ_data,            
            candi_data: this.props.candi_data,
            train_data: this.props.train_data
        }
    }
  
    render() {

        if (this.props.getstate !== GET_DATA_SUCCESS){
            return (<div >...loading</div>)
        }
        
        return (
            <div className="Rcontainer" >
                <div className="container">
                    <Grid container className="root" >
                        <Grid item xs={12}>
                            <Grid container justify="center"  >
                                <Grid item xs={12} sm={6} xd={4} lg={3} container justify="center" style={{marginBottom: '20px'}} >
                                    <Card className="card">
                                        <CardContent className="middle">
                                            <div className="rounded-circle1 middle" style={{margin: 'auto', display: 'flex', verticalAlign: 'middle'}} > 
                                                <svg style={{margin: 'auto', display: 'table-cell', verticalAlign: 'middle'}} width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule ="evenodd" htmlFor="evenodd" d="M2 0H12.4142L18 5.58579V20C18 21.1046 17.1046 22 16 22H2C0.89543 22 0 21.1046 0 20V2C0 0.89543 0.89543 0 2 0ZM10 2H2V20H16V8H12C10.8954 8 10 7.10457 10 6V2ZM12 2.41421V6H15.5858L12 2.41421ZM5 16V14H11V16H5ZM5 10V12H13V10H5Z" fill="#009FFA"/>
                                                </svg>
                                            </div>
                                            <div className="h2txt">{this.state.train_data.length}</div>                                                                         
                                            <div className="h3txt">Trainings</div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6} xd={4} lg={3} container justify="center" style={{marginBottom: '20px'}} >
                                    <Card className="card">
                                        <CardContent className="middle">
                                            <div className="rounded-circle2 middle" style={{margin: 'auto', display: 'flex', verticalAlign: 'middle'}}>
                                                <svg  style={{margin: 'auto', display: 'table-cell', verticalAlign: 'middle'}} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule ="evenodd" htmlFor="evenodd" d="M0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11ZM20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11ZM11.0321 18C7.67459 18 5.80643 16.2316 5.80643 13V12H16.1158L16.1434 12.9715C16.2358 16.2145 14.4003 18 11.0321 18ZM14.0875 14C13.8526 15.3955 12.9089 16 11.0321 16C9.15627 16 8.18179 15.3902 7.89677 14H14.0875ZM13 7H16V9H13V7ZM9 7H6V9H9V7Z" fill="#00B187"/>
                                                </svg>
                                            </div>
                                            <div className="h2txt">{this.state.candi_data.length}</div>                                                                         
                                            <div className="h3txt">Candidates</div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6} xd={4} lg={3} container justify="center" style={{marginBottom: '20px'}} >
                                    <Card className="card">
                                        <CardContent className="middle">
                                            <div className="rounded-circle3 middle" style={{margin: 'auto', display: 'flex', verticalAlign: 'middle'}}>
                                                <svg  style={{margin: 'auto', display: 'table-cell', verticalAlign: 'middle'}} width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule ="evenodd" htmlFor="evenodd" d="M8 0H12C13.1046 0 14 0.89543 14 2V3H18C19.1046 3 20 3.89543 20 5V16C20 17.1046 19.1046 18 18 18H2C0.89543 18 0 17.1046 0 16V5C0 3.89543 0.89543 3 2 3H6V2C6 0.89543 6.89543 0 8 0ZM2 5H6H14H18V10H11H9H2V5ZM2 16V12H9V13H11V12H18V16H2ZM12 2V3H8V2H12Z" fill="#FF475B"/>
                                                </svg>
                                            </div>
                                            <div className="h2txt">{this.state.organ_data.length}</div>                                                                         
                                            <div className="h3txt">Organizations</div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6} xd={4} lg={3} container justify="center" style={{marginBottom: '20px'}} >
                                    <Card className="card">
                                        <CardContent className="middle" style={{alignItems: 'center'}}>
                                            <div className="rounded-circle4 middle" style={{margin: 'auto', display: 'flex', verticalAlign: 'middle'}}>                                            
                                                <svg  style={{margin: 'auto', display: 'table-cell', verticalAlign: 'middle'}} width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule ="evenodd" htmlFor="evenodd" d="M3 5V8H2C0.931649 8 0 8.77637 0 9.83333V18.1667C0 19.2236 0.931649 20 2 20H14C15.0684 20 16 19.2236 16 18.1667V9.83333C16 8.77637 15.0684 8 14 8H13V5C13 2.23858 10.7614 0 8 0C5.23858 0 3 2.23858 3 5ZM11 5V8H5V5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5ZM2 18V10H14V18H2ZM9 14C9 14.5523 8.55229 15 8 15C7.44772 15 7 14.5523 7 14C7 13.4477 7.44772 13 8 13C8.55229 13 9 13.4477 9 14Z" fill="#7F3CEE"/>
                                                </svg>
                                            </div>
                                            <div className="h2txt">{this.state.admin_data.length}</div>                                                                         
                                            <div className="h3txt">System Admins</div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <div className="middletxt"> Organizations </div>
                    <Grid container className="root" justify="flex-start">
                        {
                            this.state.organ_data.map(item => 
                                <Grid item xs={12} sm={6} xd={4} lg={3} container justify="center" style={{marginBottom: '20px'}} key={item.id}>
                                    <Card className="card">
                                        <CardContent>
                                            {/* <div className="dot3" onClick={(event) => this.onDotShow(event, item.id)}>
                                                <svg  width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M2 4C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2C4 3.10457 3.10457 4 2 4ZM9 4C7.89543 4 7 3.10457 7 2C7 0.89543 7.89543 0 9 0C10.1046 0 11 0.89543 11 2C11 3.10457 10.1046 4 9 4ZM14 2C14 3.10457 14.8954 4 16 4C17.1046 4 18 3.10457 18 2C18 0.89543 17.1046 0 16 0C14.8954 0 14 0.89543 14 2Z" fill="#CFCFCF"/>
                                                </svg>
                                            </div>                                        */}
                                            <br />
                                            <img
                                                src={item.photo}
                                                alt="user"
                                                className="rounded-circleimg"
                                                width="31"
                                            />
                                            <div className="h2txt"> {item.name} </div>                                                                         
                                            <div className="h3txt"> {item.trainings.length + " Trainings"}</div>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        }
                    </Grid>
                </div>
            </div>            
        );
    }
}

const mapStateToProps = ({Normal}) => {
    const {
        getstate,
    } = Normal;
    return {
        getstate,
    }
};

Overview = connect(mapStateToProps, null)(Overview)
export default Overview;