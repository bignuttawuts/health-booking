import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

function BookingDialogContainer(props) {

  const { onClose, selectedValue, open } = props;

  function handleClose() {
    onClose(selectedValue);
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Information</DialogTitle>
      <DialogContent>
        <p>{selectedValue}</p>
        <FormControl>
          <TextField
            id="name"
            label="ชื่อ"
            margin="normal"
          />
          <TextField
            id="phonenumber"
            label="เบอร์โทรศัพท์"
            margin="normal"
          />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          ยกเลิก
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          ยืนยัน
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default BookingDialogContainer;
