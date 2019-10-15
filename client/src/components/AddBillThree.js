import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import DatePicker from './DatePicker'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
},
textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
},
dense: {
    marginTop: 19,
},
menu: {
    width: 200,
},
button: {
    margin: theme.spacing(1),
  },
}));

export default function SimpleModal(props) {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [values, setValues] = React.useState({
        name: '',
        amount: '',
        multiline: 'Controlled',
    });
    const [newBill, setNewBill] = React.useState({
      dueDate: [],
      month: null,
      year: null,
      day:null,
    })

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
        console.log(values)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
        
      // const dueDate = newBill.dueDate.split('-');
      // newBill.month = parseInt(dueDate[1])-1;
      // newBill.year = parseInt(dueDate[0]);
      // newBill.day = parseInt(dueDate[2]);
      // newBill.dueDate = dueDate[1] + "/" + dueDate[2];
      // console.log(newBill)
      // this.props.addBill(newBill);
    } 




  return (
    <div>
      <Button color="primary" onClick={handleOpen}>Add Bill</Button>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <form onSubmit={handleSubmit} className={classes.container} noValidate autoComplete="off">
              <TextField
                  id="standard-name"
                  label="Name"
                  className={classes.textField}
                  value={values.name}
                  onChange={props.handleBillFormChange('name')}
                  margin="normal"
              />
              <TextField
                  id="adornment-amount"
                  label="Amount"
                  margin="normal"
                  value={values.amount}
                  onChange={props.handleBillFormChange('amount')}
                  className={clsx(classes.margin, classes.textField)}
                  placeholder = '00.00'
              />
              <DatePicker />
              {/* <Button onClick={handleSubmit} >Submit</Button> */}
          </form>
        </div>
      </Modal>
    </div>
  );
}
