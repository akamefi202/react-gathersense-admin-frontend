import React, {Component} from 'react';
import {
    Card, 
    CardContent,
} from '@material-ui/core';

import {
    Form,
    Button,
    Alert,
} from 'react-bootstrap';
import { connect } from 'react-redux'
import { 
    editAdmin,
    getData,
    setUserName,
} from '../actions';
import '../assets/css/updateaccount.css';
import '../assets/css/bodypanel.css';


class UpdateAccount extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            new_name: localStorage.getItem('GSAuserName'),
            new_email: localStorage.getItem('GSAuserEmail'),
            new_pw: '',
        }
    }

    callback = () => {
        localStorage.setItem('GSAuserName', this.state.new_name)
        localStorage.setItem('GSAuserEmail', this.state.new_email)
        this.props.setusername(this.state.new_name);
        this.props.getAllData();
    }

    validateEmail = (email) => {
        var re = /\S+@\S+.\S+\S/;
        return re.test(email);
    }

    onEditUpdata = () => {
        if (
            this.state.new_name === '' ||
            this.state.new_email === '' ||
            this.state.new_pw === ''
        ){
            this.setState({errorshow: true})
            return;
        }
        
        if (!this.validateEmail(this.state.new_email)){
            this.setState({errorshow: true})
            return;
        }
        var data = {
            id: localStorage.getItem('GSAuserId'),
            name: this.state.new_name,
            email: this.state.new_email,
            password: this.state.new_pw,
        }
        this.props.editadmin(data, this.callback);
        this.setState({
            errorshow: false,
            new_pw: '',
        })
    }

    render() {
        return (
            <div className="Rcontainer" >
                <Card className="updatecard">
                    <CardContent>
                        <Form>
                            <label className="updatelabel"  >Update your account information below</label>
                            {this.state.errorshow && (
                                <Alert  variant="danger" style={{width: '95%', margin: '10px'}} >
                                    Input information correctly!
                                </Alert>
                            )}
                            <Form.Group controlId="formGridFullName" className="formgroup" >
                                {/* <Form.Label>Address</Form.Label> */}
                                <Form.Control placeholder="FullName" className="inputtxt" value={this.state.new_name} onChange={(event) => this.setState({new_name: event.target.value})} />
                            </Form.Group>
                                        
                            <Form.Group controlId="formGridEmail" className="formgroup" >
                                {/* <Form.Label>Email</Form.Label> */}
                                <Form.Control type="email" placeholder="Email address" className="inputtxt" value={this.state.new_email} onChange={(event) => this.setState({new_email: event.target.value})} />
                            </Form.Group>

                            <Form.Group controlId="formGridPassword" className="formgroup" >
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control type="password" placeholder="Password" className="inputtxt"  value={this.state.new_pw} onChange={(event) => this.setState({new_pw: event.target.value})} />
                            </Form.Group>                    

                            <Button className="updatebnt" onClick={this.onEditUpdata} >
                                Update Account
                            </Button>
                        </Form>
                    </CardContent>
                </Card>
                
            </div>            
        );
    }
}

const mapDispatchToProps = { 
    editadmin: editAdmin, 
    getAllData: getData,
    setusername: setUserName,
};
UpdateAccount = connect(null, mapDispatchToProps)(UpdateAccount)
export default UpdateAccount 