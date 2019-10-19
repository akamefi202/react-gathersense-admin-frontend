import React, {Component} from 'react';
import {
    Card, 
    CardContent,
    Grid,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide, 
    Button,
    Fab,
    Avatar,
} from '@material-ui/core';

import {
    Form,
    Col,
    Alert,
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { 
    addClose,
    addOrgan,
    editOrgan, 
    deleteOrgan,  
    getData,
} from '../actions';
import StyledPopper from '../common/styledPopper';

import '../assets/css/overview.css';
import '../assets/css/bodypanel.css';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class Organizations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            organ_data: this.props.data,

            selectedId: '',
            name: '',
            email: '',
            password: '',
            editopen: false,
            anchordot3: null,
            dot3open: false,
            arrowRef: null,
            delopen: false,

            errorshow: false,
            file:null,
            organ_name: '',
            descr: '',
            new_email: '',
            new_pw: '',

        }
        this.onChange = this.onChange.bind(this)
    }

    callback = () => {
        this.props.getAllData();
    }

    onChange(e) {
        this.setState({file:e.target.files[0]})
    }

    validateEmail = (email) => {
        var re = /\S+@\S+.\S+\S/;
        return re.test(email);
    }
    organCreate = () => {        
        if (this.state.organ_name === '' || 
            this.state.new_email === '' ||
            this.state.descr === '' ||
            this.state.new_pw === '' ||
            this.state.file === null
        ){
            this.setState({errorshow: true})
            return;
        }
        
        if (!this.validateEmail(this.state.new_email)){
            this.setState({errorshow: true})
            return;
        }
        const formData = new FormData();

        formData.append("name",this.state.organ_name);
        formData.append("email",this.state.new_email);
        formData.append("description",this.state.descr);
        formData.append("password",this.state.new_pw);
        formData.append("image",this.state.file);

        this.props.addorgan(formData, this.callback);
        this.handleClose();
    }

    onDotShow = (event, id) => {
        if (this.state.dot3open)
            this.setState({
                anchordot3: null,
                dot3open: false
            })
        else
            this.setState({
                selectedId: id,
                anchordot3: event.currentTarget,
                dot3open: true
            })
    }

    onEditShow = () => {
        for( var i = 0; i < this.state.organ_data.length; i++){            
            if ( this.state.organ_data[i].id === this.state.selectedId){                
                this.setState({
                    organ_name: this.state.organ_data[i].name,
                    new_email: this.state.organ_data[i].email,
                    descr: this.state.organ_data[i].description,
                    dot3open: false,
                    editopen: true,
                });
                break;
            }
        }
    }

    onEditUpdata = () => {
        if (this.state.selectedId === '' || 
            this.state.organ_name === '' ||
            this.state.new_email === '' ||
            this.state.new_pw === '' ||
            this.state.descr === ''
        ){
            this.setState({errorshow: true})
            return;
        }
        
        if (!this.validateEmail(this.state.new_email)){
            this.setState({errorshow: true})
            return;
        }
        const formData = new FormData();

        formData.append("id",this.state.selectedId);
        formData.append("name",this.state.organ_name);
        formData.append("email",this.state.new_email);
        formData.append("description",this.state.descr);
        formData.append("password",this.state.new_pw);
        if (this.state.file)
            formData.append("image",this.state.file);

        this.props.editorgan(formData, this.callback);
        this.handleClose();
    }

    onDeleteShow = () => {
        this.setState({
            anchordot3: null,
            dot3open: false,
            delopen: true,
        })
    }

    onDeleteUpdate = () => {
        var data = {
            id: this.state.selectedId,
        }
        this.props.deleteorgan(data, this.callback);
        this.handleClose();
    }

    handleClose = () => {
        this.setState({
            selectedId: '',
            email: '',
            editopen: false,
            delopen: false,

            errorshow: false,
            file:null,
            organ_name: '',
            descr: '',
            new_email: '',
            new_pw: '',
        });
        this.props.addclose();
    };

    handleArrowRef = node => {
        this.setState({
            arrowRef: node,
        });
    };
    
    render() {
        return (
            <div className="Rcontainer">
                <div className="container" >
                    <Grid container className="root" justify="flex-start">
                        {
                            this.state.organ_data.map(item => 
                                <Grid item xs={12} sm={6} xd={4} lg={3} container justify="center" style={{marginBottom: '20px'}} key={item.id}>
                                    <Card className="card">
                                        <CardContent>
                                            <div className="dot3" onClick={(event) => this.onDotShow(event, item.id)}>
                                                <svg  width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M2 4C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2C4 3.10457 3.10457 4 2 4ZM9 4C7.89543 4 7 3.10457 7 2C7 0.89543 7.89543 0 9 0C10.1046 0 11 0.89543 11 2C11 3.10457 10.1046 4 9 4ZM14 2C14 3.10457 14.8954 4 16 4C17.1046 4 18 3.10457 18 2C18 0.89543 17.1046 0 16 0C14.8954 0 14 0.89543 14 2Z" fill="#CFCFCF"/>
                                                </svg>
                                            </div>                                       
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
                    
                    
                    <Dialog
                        open={this.props.addopen}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                        fullWidth={true}
                    >
                        <DialogTitle id="alert-dialog-slide-title" className="deltitle" style={{margin: 'auto', padding: '25px 100px 10px'}}>
                            Add a new organization
                        </DialogTitle>
                        <DialogContent>
                            <Form style={{width: '550px'}}>
                                <Form.Row className="formgroupO" >
                                    {this.state.errorshow && (
                                        <Alert  variant="danger" style={{width: '95%', margin: '10px'}} >
                                            Input information correctly!
                                        </Alert>
                                    )}
                                    
                                    <input
                                        accept="image/*"
                                        ref="file"
                                        style={{display: 'none'}}
                                        id="outlined-button-file"
                                        multiple
                                        type="file"
                                        onChange={this.onChange}
                                    />
                                    {this.state.file === null ? (
                                        <label htmlFor="outlined-button-file">
                                            <Fab variant="round" component="span" aria-label="add" style={{color: '#F2F2F2'}}>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M11 9H20V11H11V20H9V11H0V9H9V0H11V9Z" fill="#979797"/>
                                                </svg>
                                            </Fab>
                                        </label>
                                    ) : (
                                        <div className="thumbInner">
                                            <Avatar alt="Remy Sharp" src={URL.createObjectURL(this.state.file)} style={{width: 65, height: 65, border: '2px solid #fff'}} />
                                            {/* <img src={URL.createObjectURL(this.state.file)} className="img" alt="sfdsdfsdfdsf"/> */}
                                        </div>
                                    )}
                                    
                                    
                                    <div style={{paddingLeft: '20px'}}>
                                        <p style={{margin: '2px', color: '#FF475B', fontSize: '16px', fontWeight: 'bold'}} >Add a Logo</p>
                                        <p style={{margin: '2px', color: '#979797', fontSize: '12px'}} >(Square Images Only)</p>
                                    </div>
                                </Form.Row>                            
                                <Form.Row>
                                    <Form.Group as={Col} controlId="aformGridOName" className="formgroupO" >
                                        <Form.Control placeholder="Organization Name" value={this.state.organ_name} className="inputtxtO" onChange={(event) => this.setState({organ_name: event.target.value})} />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="aformGridDescription" className="formgroupO" >
                                        <Form.Control placeholder="Description" value={this.state.descr} className="inputtxtO" onChange={(event) => this.setState({descr: event.target.value})} />
                                    </Form.Group>
                                </Form.Row>   
                                <Form.Row>                                    
                                    <Form.Group as={Col} controlId="aformGridOEmail" className="formgroupO" >
                                        <Form.Control type="email" value={this.state.new_email} required placeholder="Email address" className="inputtxtO" onChange={(event) => this.setState({new_email: event.target.value})} />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="aformGridOPassword" className="formgroupO" >
                                        <Form.Control type="password" value={this.state.new_pw} placeholder="Password" className="inputtxtO" onChange={(event) => this.setState({new_pw: event.target.value})} />
                                    </Form.Group>
                                </Form.Row> 
                            </Form>
                        </DialogContent>
                        <DialogActions style={{ paddingRight: '30px', marginBottom: '30px'}}>
                            <Button onClick={this.organCreate} style={{borderRadius: '10px', color: '#fff', backgroundColor: '#FF475B', borderWidth: '0px', alignSelf: 'right'}}>
                                Create Organization
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Dialog
                        open={this.state.editopen}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                        fullWidth={true}
                        id="add-organization"
                    >
                        <DialogTitle id="alert-dialog-slide-title" className="deltitle" style={{margin: 'auto', padding: '25px 100px 10px'}}>
                            Edit Organization: {this.state.organ_name}
                        </DialogTitle>
                        <DialogContent>
                            <Form style={{width: '550px'}}>
                                {this.state.errorshow && (
                                    <Alert  variant="danger" style={{width: '95%', margin: '10px'}} >
                                        Input information correctly!
                                    </Alert>
                                )}                                
                                <Form.Row className="formgroupO" >
                                    <input
                                        accept="image/*"
                                        ref="file"
                                        style={{display: 'none'}}
                                        id="outlined-button-file1"
                                        multiple
                                        type="file"
                                        onChange={this.onChange}
                                    />
                                    {this.state.file === null ? (
                                        <label htmlFor="outlined-button-file">
                                            <Fab variant="round" component="span" aria-label="add" style={{color: '#F2F2F2'}}>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M11 9H20V11H11V20H9V11H0V9H9V0H11V9Z" fill="#979797"/>
                                                </svg>
                                            </Fab>
                                        </label>
                                    ) : (
                                        <div className="thumbInner">
                                            <Avatar alt="Remy Sharp" src={URL.createObjectURL(this.state.file)} style={{width: 65, height: 65, border: '2px solid #fff'}} />
                                            {/* <img src={URL.createObjectURL(this.state.file)} className="img" alt="sfdsdfsdfdsf"/> */}
                                        </div>
                                    )}
                                    
                                    <div style={{paddingLeft: '20px'}}>
                                        <p style={{margin: '2px', color: '#FF475B', fontSize: '16px', fontWeight: 'bold'}} >Replace Logo</p>
                                        <p style={{margin: '2px', color: '#979797', fontSize: '12px'}} >(Square Images Only)</p>
                                    </div>
                                </Form.Row>                            
                                <Form.Row>
                                    <Form.Group as={Col} controlId="aformstarbucks" className="formgroupO" >
                                        <Form.Control placeholder="Starbucks" value={this.state.organ_name} className="inputtxtO" onChange={(event) => this.setState({organ_name: event.target.value, errorshow: false})} />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="aformdescription" className="formgroupO" >
                                        <Form.Control placeholder="Description" value={this.state.descr} className="inputtxtO" onChange={(event) => this.setState({descr: event.target.value, errorshow: false})} />
                                    </Form.Group>
                                </Form.Row>   
                                <Form.Row>                                    
                                    <Form.Group as={Col} controlId="aformemail" className="formgroupO" >
                                        <Form.Control type="email" value={this.state.new_email} placeholder="info@starbucks.com" className="inputtxtO" onChange={(event) => this.setState({new_email: event.target.value, errorshow: false})} />
                                    </Form.Group>
                                    <Form.Group as={Col} controlId="aformpassword" className="formgroupO" >
                                        <Form.Control type="password" value={this.state.new_pw} placeholder="Password" className="inputtxtO" onChange={(event) => this.setState({new_pw: event.target.value, errorshow: false})} />
                                    </Form.Group>
                                </Form.Row> 
                            </Form>
                        </DialogContent>
                        <DialogActions style={{ paddingRight: '30px', marginBottom: '30px'}}>
                            <Button onClick={this.onEditUpdata} style={{borderRadius: '10px', color: '#fff', backgroundColor: '#FF475B', borderWidth: '0px', alignSelf: 'right'}}>
                                Save Changes
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Dialog
                        open={this.state.delopen}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle id="alert-dialog-slide-title" className="deltitle" style={{margin: 'auto', padding: '25px 100px 10px'}}>
                            Are you sure you want to delete?
                        </DialogTitle>
                        <DialogContent>
                            {/* <DialogContentText id="alert-dialog-slide-description">
                                Let Google help apps determine location. This means sending anonymous location data to
                                Google, even when no apps are running.
                            </DialogContentText> */}
                        </DialogContent>
                        <DialogActions style={{margin: 'auto', padding: '0px 30px 30px'}}>
                            <Button onClick={this.onDeleteUpdate} style={{marginRight: '20px', borderRadius: '10px', color: '#fff', backgroundColor: '#FF475B', borderWidth: '0px'}}>
                                Yes
                            </Button>
                            <Button onClick={this.handleClose} style={{marginLeft: '20px', borderRadius: '10px', color: '#fff', backgroundColor: '#9AA9B7', borderWidth: '0px'}}>
                                No
                            </Button>
                        </DialogActions>
                    </Dialog>
                    {
                        this.state.anchordot3 &&
                        <StyledPopper
                        placement="bottom"
                        open={this.state.dot3open}
                        anchorEl={this.state.anchordot3}
                        modifiers={{
                            flip: {
                            enabled: true,
                            },
                            arrow: {
                            enabled: true,
                            element: this.state.arrowRef,
                            },
                            preventOverflow: {
                            enabled: "true",
                            boundariesElement: 'scrollParent'
                            },
                        }}
                        >
                        {
                            true &&
                            <span className="arrow" ref={this.handleArrowRef} />
                        }
                        <div className={"popper-content-3dot"}>
                            <Link to="#" className="clickClink" onClick={this.onEditShow}> Edit</Link>
                            
                            <Link to="#" className="clickClink" onClick={this.onDeleteShow}> Delete </Link>
                        </div>
                        </StyledPopper>
                    }
                </div>
            </div>            
        );
    }
}

const mapDispatchToProps = { 
    addclose: addClose, 
    addorgan: addOrgan,
    editorgan: editOrgan,
    deleteorgan: deleteOrgan, 
    getAllData: getData,
};

const mapStateToProps = ({Normal}) => {
    const {addopen} = Normal;
    return {addopen}
};

Organizations = connect(mapStateToProps, mapDispatchToProps)(Organizations)
export default Organizations;
