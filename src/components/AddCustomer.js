import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddCustomer(props) {
  const [open, setOpen] = React.useState(false);
  const [customer, setCustomer] = React.useState({
    firstname: '', lastname: '', streetadress: '', postcode: '', city: '', email: '', phone: ''
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    setCustomer({ ...customer, [event.target.name]: event.target.value });
  };

  const addCustomer = () => {
    props.addCustomer(customer);
    handleClose();
  };


  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        New Customer
        </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="firstname"
            value={customer.firstname}
            onChange={e => handleInputChange(e)}
            label="First Name"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            name="lastname"
            value={customer.lastname}
            onChange={e => handleInputChange(e)}
            label="Last Name"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            name="streetaddress"
            value={customer.streetaddress}
            onChange={e => handleInputChange(e)}
            label="Street Adress"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            name="postcode"
            value={customer.postcode}
            onChange={e => handleInputChange(e)}
            label="Post Code"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            name="city"
            value={customer.city}
            onChange={e => handleInputChange(e)}
            label="City"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            name="email"
            value={customer.email}
            onChange={e => handleInputChange(e)}
            label="EMail"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            name="phone"
            value={customer.phone}
            onChange={e => handleInputChange(e)}
            label="Phone"
            fullWidth
          />


        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
            </Button>
          <Button onClick={addCustomer} color="primary">
            Subscribe
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}