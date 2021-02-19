import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewProductItem } from '../../../redux/actions/product'

const initialState = {
    name: '',
    image: '',
    price: 0
}

const AddItem = ({ openAdd, addHandler }: any) => {
    const dispatch = useDispatch()
    const [item, setItem] = useState(initialState)

    const handleClose = () => {
        setItem(initialState)
        addHandler(false)
    }

    const addItemHandler = () => {
        addHandler(false)
        dispatch(addNewProductItem({ item }))
        setItem(initialState)
    }

    const editItemHandler = (event: any) => {
        setItem({
            ...item,
            [event.target.id]: event.target.value
        })
    }

    return (
        <Dialog open={openAdd} onClose={() => handleClose()} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">New Item</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              id="name"
              label="Name"
              type="text"
              value={item.name}
              onChange={(event: any) => editItemHandler(event)}
              fullWidth
            />
            <TextField
              margin="dense"
              id="price"
              label="Price"
              type="number"
              value={item.price}
              onChange={(event: any) => editItemHandler(event)}
              fullWidth
            />
            <TextField
              margin="dense"
              id="image"
              label="Image Url"
              type="text"
              value={item.image}
              onChange={(event: any) => editItemHandler(event)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => handleClose()} color="primary">
              Cancel
            </Button>
            <Button onClick={() => addItemHandler()} color="primary">
              Add Item
            </Button>
          </DialogActions>
        </Dialog>
    )
}

export default AddItem
