import React, { useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, loadUsers } from '../redux/Action';
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { useLocation } from 'react-router';
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    body: {
        fontSize: 14,
    }
}))(TableCell);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
    table: {
        marginTop: 100,
        minWidth: 900,
    },
});

const ButtonIcon = styled.button`
    font-size: 18px;
    padding: 7px 12px;
    color: white;
    background-color: red;
    border:none;
    border-radius: 50%;
    margin-right: 10px;
`;

const ButtonIcon1 = styled.button`
    font-size: 18px;
    padding: 7px 12px;
    color: white;
    background-color: #13d313;
    border:none;
    border-radius: 50%;
`;

const Home = () => {
    const classes = useStyles();
    const history = useNavigate();
    const navigate = () => {
        history("/addUser")
    };
    const dispatch = useDispatch();
    const { users } = useSelector(state => state.data)
    const { loading } = useSelector(state => state.data)

    const location = useLocation()

    useEffect(() => {
        dispatch(loadUsers());
    }, [loading])

    const handleDelete = (id) => {
        if (window.confirm("Are you  sure wanted to delete the user ?")) {
            dispatch(deleteUser(id))
        }
    }

    return (
        <div>
            <div>
                <button onClick={navigate}>Add User</button>
            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="center">Email</StyledTableCell>
                            <StyledTableCell align="center">Contact</StyledTableCell>
                            <StyledTableCell align="center">Address</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users && users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell component="th" scope="row">
                                    {user.name}
                                </TableCell>
                                <TableCell align="center">{user.email}</TableCell>
                                <TableCell align="center">{user.contact}</TableCell>
                                <TableCell align="center">{user.address}</TableCell>
                                <TableCell align="center">
                                    <ButtonIcon onClick={() => handleDelete(user.id)}><i class="fas fa-trash-alt"></i></ButtonIcon>
                                    <ButtonIcon1 onClick={() => history(`/editUser/${user.id}`)}><i class="far fa-edit"></i></ButtonIcon1>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Home;
