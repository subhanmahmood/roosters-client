import React from 'react';

import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

//Dialog components
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import ReactJsonView from 'react-json-view'

class ClockIn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      driverID: '', 
      open: false,
      driverDetails: {
        name: '',
        phone: '',
        email: '',
        id: ''
      }
    }
    this.handleDriverIDChange = this.handleDriverIDChange.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleDriverIDChange(e){
    e.preventDefault();
    this.setState({driverID: e.target.value})
  }
  handleChange(e){
    e.preventDefault()

    let updatedDriverDetails = Object.assign({}, this.state.driverDetails);
    updatedDriverDetails[e.target.id] = e.target.value
    this.setState({driverDetails: updatedDriverDetails})
  }
  handleOpen(){
    this.setState({open: true})
  }
  handleClose(){
    this.setState({open: false})
  }
  render(){
    const style = {
      driverID: {
        width: '100%'
      },
      buttons: {
        width: '100%'
      }
    }
    return(
      <Grid container spacing={24} direction="row" justify="center">
        <Grid item xs={12} md={6}>
          <Grid container spacing={24} direction="row">
            <Grid item xs={12} md={12}>
              <h1>Clock In</h1>
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField 
                id="driver-id"
                label="Driver ID"
                style={style.driverID}
                onChange={this.handleDriverIDChange}
                value={this.state.driverID}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container direction="row" spacing={24}>
                <Grid item xs={6}>
                  <Button variant="contained" color="primary" style={style.buttons}>Clock In</Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="contained" color="primary" style={style.buttons} onClick={this.handleOpen}>Register Driver</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <ReactJsonView src={this.state}/>
        </Grid>

        

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add driver</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add a driver, please enter details here
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="phone"
              label="Phone Number"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="id"
              label="ID"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Add driver
            </Button>
          </DialogActions>
        </Dialog>
        
      </Grid>

    )
  }
}

export default ClockIn;