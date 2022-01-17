import {getUsers,deleteUser} from '../Service/api';
import { useState,useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow , makeStyles, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
const AllUser=()=>{
    const [users,setUsers]=useState([]);
    const getAllUsers=async ()=>{
        const response=await getUsers();
        console.log(response.data);
        setUsers(response.data);
    }
    useEffect(()=>{
        getAllUsers();
    },[])
    const deleteuser=async(id)=>{
       await deleteUser(id);
        getAllUsers();
    }
    const usestyles=makeStyles({
        thead:{
            '&> *':{
                backgruound:'#000000',
                color:'#FFFFFF',
                fontsize:20
            }
        },
        table:{
            width:'90%',
            margin:'50px 0 0 50px'
        },
        row:{
            fontsize:20
        }
    })
    const classes=usestyles();
    return(
        <Table className={classes.table}>
            <TableHead className={classes.thead}>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map((user)=>(
                        <TableRow className={classes.row}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant='contained' color='primary' component={Link} style={{marginRight:20}} to={`/edit/${user.id}`}>EDIT</Button>
                                <Button variant='contained' color='secondary' onClick={()=>deleteuser(user.id)}>DELETE</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}
export default AllUser;