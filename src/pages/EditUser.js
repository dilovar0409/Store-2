import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, getSingleUser,updateUser } from '../redux/Action';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 100,
        "& > *": {
            margin: theme.spacing(1),
            width: "45ch",
        },
    },
}));

const EditUser = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        name: "",
        email: "",
        contact: "",
        address: "",
    });

    const [error, setError] = useState("")
    const { id } = useParams()
    const { user } = useSelector(state => state.data)
    const history = useNavigate();
    const navigate = () => {
        history("/")
    };
    const dispatch = useDispatch();

    const { name, email, contact, address } = state;

    useEffect(() => {
        dispatch(getSingleUser(id))
    }, []);

    useEffect(() => {
        if (user) {
            console.log("user",user);
            setState({ ...user });
        }
    }, [user])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !address || !email || !contact) {
            setError("Please enter all input Fields.");
        } else {
            dispatch(updateUser(state, id));
            navigate();
            setError("")
        }
    }

    return (
        <div>
            <button onClick={navigate}>Go Back</button>
            <h2>Edit User.</h2>
            {error && <h3 style={{ color: "red" }}>{error}</h3>}
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField id="standart-basic" label="Name" name="name" value={name || ""} type="text"
                    onChange={handleInputChange} />
                <br />
                <TextField id="standart-basic" label="Email" name="email" value={email || ""} type="email"
                    onChange={handleInputChange} />
                <br />
                <TextField id="standart-basic" label="Contact" name="contact" value={contact || ""} type="number"
                    onChange={handleInputChange} />
                <br />
                <TextField id="standart-basic" label="Address" name="address" value={address || ""} type="text"
                    onChange={handleInputChange} />
                <br />
                <button>Yangilash</button>
            </form>
        </div>
    )
}

export default EditUser;
