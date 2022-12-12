import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { setModalIsOpen } from '../../store/slices/modalSlise';

export default function Modal({ header, text, actions }) {
  const [open, setOpen] = React.useState(false);
  const isOpen = useSelector((store) => store.modal.isOpen);

  useEffect(() => {
    setOpen(isOpen);
  });

  const dispatch = useDispatch();
  const handleClose = () => dispatch(setModalIsOpen(false));

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {header}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" />
          {text}
          <DialogContentText />
        </DialogContent>
        <DialogActions>
          {actions}
        </DialogActions>
      </Dialog>
    </div>
  );
}
