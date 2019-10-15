import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import DatePicker from './DatePicker'



const useStyles = makeStyles(theme => ({
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

export default function TextFields() {
    const classes = useStyles();
    const [showForm,setShowForm] = React.useState(false)
    const [values, setValues] = React.useState({
        name: '',
        amount: '',
        multiline: 'Controlled',
    });
    
    const handleClick = () =>{
        setShowForm(!showForm)
    }

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // const newBill = {...this.state.newBill};
        // const dueDate = newBill.dueDate.split('-');
        // newBill.month = parseInt(dueDate[1])-1;
        // newBill.year = parseInt(dueDate[0]);
        // newBill.day = parseInt(dueDate[2]);
        // newBill.dueDate = dueDate[1] + "/" + dueDate[2];
        // console.log(newBill)
        // this.props.addBill(newBill);
        handleClick();  
    }

    const formToggle = () => {
        if (showForm) {
        return (
            <form onSubmit={handleSubmit} className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="standard-name"
                    label="Name"
                    className={classes.textField}
                    value={values.name}
                    onChange={handleChange('name')}
                    margin="normal"
                />
                <TextField
                    id="adornment-amount"
                    label="Amount"
                    margin="normal"
                    value={values.amount}
                    onChange={handleChange('amount')}
                    className={clsx(classes.margin, classes.textField)}
                    placeholder = '00.00'
                />
                <DatePicker />
            </form>
        )
        }
    }

    return (
        <div> 
            <Button color="primary" onClick={handleClick}>Add Bill</Button>
            {formToggle()}

        </div>
        
    );
}