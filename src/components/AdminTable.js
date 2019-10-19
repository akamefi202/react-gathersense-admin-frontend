import React, {Component} from 'react';
import {
    Paper, 
    Button,
    //DialogContentText,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
} from '@material-ui/core';

import {
    Form,
    Col,
    Alert,
} from 'react-bootstrap';

import { connect } from 'react-redux'
import { 
    addClose, 
    addAdmin,
    editAdmin,
    deleteAdmin,
    getData, 
} from '../actions';

import '../assets/css/bodypanel.css';
import '../assets/css/admin.css';

const columns = [
  { id: 'name', label: 'Name', minWidth: 200 },
  { id: 'email', label: 'Email', minWidth: 300 },
  {
    id: 'action',
    label: 'Actions',
    minWidth: 220,
    align: 'right',
    format: value => value.toLocaleString(),
  },
];

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class AdminTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            rowsPerPage: 10,            
            delopen: false,

            rows: this.props.data,
            editopen: false,
            selectedId: '',
            selectedname: '',
            selectedemail: '',
            selectedpassword: '',

            new_name: '',
            new_email: '',
            new_pw: '',
            errorshow: false,
        }
    }

    componentDidMount() {
        
    }
    
    callback = () => {
        this.props.getAllData();
    }

    validateEmail = (email) => {
        var re = /\S+@\S+.\S+\S/;
        return re.test(email);
    }
    
    onCreateAcount = () => {
        if (this.state.new_name === '' || 
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
            name: this.state.new_name,
            email: this.state.new_email,
            password: this.state.new_pw,
        }

        this.props.addadmin(data, this.callback);
        this.handleClose();
    }

    handleChangePage = (event, newPage) => {
        this.setState({page:newPage});
    };

    handleChangeRowsPerPage = event => {
        var rowsPerPage = this.state.rowsPerPage + event.target.value;
        this.setState({
            page: 0,
            rowsPerPage:rowsPerPage,
        });
    };

    onEditShow(id) {
        for( var i = 0; i < this.state.rows.length; i++){            
            if ( this.state.rows[i].id === id){                
                this.setState({
                    selectedname: this.state.rows[i].name,
                    selectedemail: this.state.rows[i].email,
                    selectedId: id,
                    editopen: true,
                });
                break;
            }
        }
    }

    onEditUpdata = () => {
        if (this.state.selectedId === '' || 
            this.state.selectedname === '' ||
            this.state.selectedemail === '' ||
            this.state.selectedpassword === ''
        ){
            this.setState({errorshow: true})
            return;
        }
        
        if (!this.validateEmail(this.state.selectedemail)){
            this.setState({errorshow: true})
            return;
        }
        var data = {
            id: this.state.selectedId,
            name: this.state.selectedname,
            email: this.state.selectedemail,
            password: this.state.selectedpassword,
        }

        this.props.editadmin(data, this.callback);
        this.handleClose();
    }

    onDeleteShow(id) {
        this.setState({
            delopen: true,
            selectedId: id,
        });
    };

    onDeleteUpdate = () => {
        var data = {
            id: this.state.selectedId,
        }
        this.props.deleteadmin(data, this.callback);
        this.handleClose();
    }
    
    handleClose = () => {
        this.setState({
            editopen: false,
            delopen: false,
            selectedId: '',
            fullname: '',
            email: '',
            password: '',
            new_name: '',
            new_email: '',
            new_pw: '',
            errorshow: false,
        });
        this.props.addclose();
    };

    render() {
        if (this.props.uploading)
            return(<div className="Rcontainer"> ...uploading </div>)
        //this.props.getAllData;
        return (
            <div className="Rcontainer">
                <div className="container" >
                    <Paper className="tableroot">
                        <div className="tableWrapper">
                            <Table stickyHeader>
                                <TableHead>
                                    <TableRow>
                                    {columns.map(column => (
                                        <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                        >
                                        {column.label}
                                        </TableCell>
                                    ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.rows.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map(row => 
                                    // if (localStorage.getItem('GSAuserId') !== row.id)
                                        // return (
                                            localStorage.getItem('GSAuserId') !== row.id &&
                                            (<TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                                <TableCell key={columns[0].id} align={columns[0].align}>
                                                    {columns[0].format && typeof value === 'number' ? columns[0].format(row[columns[0].id]) : row[columns[0].id]}
                                                </TableCell>
                                                <TableCell key={columns[1].id} align={columns[1].align}>
                                                    {columns[1].format && typeof value === 'number' ? columns[1].format(row[columns[1].id]) : row[columns[1].id]}
                                                </TableCell>
                                                <TableCell key={columns[2].id} align={columns[2].align}>
                                                    <Button onClick={() => this.onEditShow(row.id)} style={{margin: '0px 20px', borderRadius: '30px', color: '#009FFA', backgroundColor: 'rgba(0, 159, 250, 0.1)', borderWidth: '0px'}}> 
                                                        Edit 
                                                    </Button> 
                                                    <Button onClick={() => this.onDeleteShow(row.id)} style={{margin: '0px 20px', borderRadius: '30px', color: '#F11564', backgroundColor: '#FFEDED', borderWidth: '0px'}} > 
                                                        Delete 
                                                    </Button>
                                                </TableCell>
                                            </TableRow>)
                                        // );
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={this.state.rows.length-1}
                            rowsPerPage={this.state.rowsPerPage}
                            page={this.state.page}
                            backIconButtonProps={{
                            'aria-label': 'previous page',
                            }}
                            nextIconButtonProps={{
                            'aria-label': 'next page',
                            }}
                            onChangePage={this.handleChangePage}
                            onChangeRowsPerPage={this.handleChangeRowsPerPage}
                            />
                    </Paper>
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
                            Add a new administrator
                        </DialogTitle>
                        <DialogContent>
                            <Form style={{width: '560px'}}>
                                {this.state.errorshow && (
                                    <Alert  variant="danger" style={{width: '95%', margin: '10px'}} >
                                        Input information correctly!
                                    </Alert>
                                )}
                                <Form.Group controlId="aformGridFullName" className="" >
                                    <Form.Control placeholder="FullName" value={this.state.new_name} className="inputtxtD" onChange={(event) => this.setState({new_name: event.target.value})} />
                                </Form.Group>   
                                <Form.Row>                                    
                                <Form.Group as={Col} controlId="aformGridEmail" className="formgroupD" >
                                    <Form.Control type="email" value={this.state.new_email} placeholder="Email address" className="inputtxtD" onChange={(event) => this.setState({new_email: event.target.value})} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="aformGridPassword" className="formgroupD" >
                                    <Form.Control type="password" value={this.state.new_pw} placeholder="Password" className="inputtxtD" onChange={(event) => this.setState({new_pw: event.target.value})} />
                                </Form.Group>
                                </Form.Row> 
                            </Form>
                        </DialogContent>
                        <DialogActions style={{margin: 'auto', padding: '0px 30px 30px'}}>
                            <Button onClick={this.onCreateAcount} style={{borderRadius: '10px', color: '#fff', backgroundColor: '#FF475B', borderWidth: '0px'}}>
                                Create Account
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
                        style={{paddingLeft: '316px'}}
                    >
                        <DialogTitle id="alert-dialog-slide-title" className="deltitle" style={{margin: 'auto', padding: '25px 100px 10px'}}>
                            Edit Administrator Information
                        </DialogTitle>
                        <DialogContent>
                            <Form>
                                {this.state.errorshow && (
                                    <Alert  variant="danger" style={{width: '95%', margin: '10px'}} >
                                        Input information correctly!
                                    </Alert>
                                )}
                                <Form.Group controlId="formGridFullName" className="formgroupD" >
                                    <Form.Control placeholder="FullName" value={this.state.selectedname} className="inputtxtD" onChange={(event) => this.setState({selectedname: event.target.value})} />
                                </Form.Group>                                        
                                <Form.Group controlId="formGridEmail" className="formgroupD" >
                                    <Form.Control type="email" value={this.state.selectedemail} placeholder="Email address" className="inputtxtD" onChange={(event) => this.setState({selectedemail: event.target.value})} />
                                </Form.Group>
                                <Form.Group controlId="formGridPassword" className="formgroupD" >
                                    <Form.Control type="password" value={this.state.selectedpassword} placeholder="Password" className="inputtxtD" onChange={(event) => this.setState({selectedpassword: event.target.value})} />
                                </Form.Group> 
                            </Form>
                        </DialogContent>
                        <DialogActions style={{margin: 'auto', padding: '0px 30px 30px'}}>
                            <Button onClick={this.onEditUpdata} style={{borderRadius: '10px', color: '#fff', backgroundColor: '#FF475B', borderWidth: '0px'}}>
                                Update Account
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
                </div>                
          </div>
        );
    }
}

const mapStateToProps = ({
    Normal,
    Admin,
}) => {
    const {
        addopen,
    } = Normal;
    const {
        uploading,
    } = Admin;
    return {
        addopen,
        uploading,
    }
};
const mapDispatchToProps = { 
    addclose: addClose, 
    addadmin: addAdmin,
    editadmin: editAdmin,
    deleteadmin: deleteAdmin, 
    getAllData: getData,
};
AdminTable = connect(mapStateToProps, mapDispatchToProps)(AdminTable)
export default AdminTable 