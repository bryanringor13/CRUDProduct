import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { RootState } from '../../../redux/reducers';
import { productItemDelete } from '../../../redux/actions/product';

const TableView = ({ setCurrentItem, editHandler }: any) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const product = useSelector((state: RootState) => state.product)

    const editItemHandler = (id: number, item: any) => {
        setCurrentItem({
            ...item,
            id,
        })
        editHandler(true)
    }

    const deleteItemHandler = (id: number) => {
        dispatch(productItemDelete({ id }))
    }

    return (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Item Name</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Image</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {product.items.map((item, index) => (
                <TableRow key={index}>
                    <TableCell component="th" scope="row">
                        {item.name}
                    </TableCell>
                    <TableCell align="right">{item.price}</TableCell>
                    <TableCell align="right"><img src={item.image} alt={item.name} style={{ width: 50 }} /></TableCell>
                    <TableCell align="right">     
                        <Button variant="contained" color="primary" onClick={() => editItemHandler(index, item)}>
                            Edit
                        </Button>{' '}
                        <Button variant="contained" color="secondary" onClick={() => deleteItemHandler(index)}>
                            Delete
                        </Button>
                    </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    )
}

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

export default TableView
