import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { productItemSaveChanges } from '../../../redux/actions/product'
import { ProductItemState } from '../../../redux/metatypes/product'

const initialState = {
    id: 0,
    name: '',
    image: '',
    price: 0
}

const EditItem = ({ openEdit, editHandler, itemDetails }: any) => {
    const dispatch = useDispatch()
    const [item, setItem] = useState<ProductItemState>(initialState)

    const handleClose = () => {
        editHandler(false)
    }

    const saveChangesHandler = () => {
        editHandler(false)
        dispatch(productItemSaveChanges(item))
    }

    const editItemHandler = (event: any) => {
        setItem({
            ...item,
            [event.target.id]: event.target.value
        })
    }

    useEffect(() => {
        setItem(itemDetails)
    }, [itemDetails])

    return (
        <Dialog open={openEdit} onClose={() => handleClose()} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Edit Item</DialogTitle>
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
            <Button onClick={() => saveChangesHandler()} color="primary">
              Save Changes
            </Button>
          </DialogActions>
        </Dialog>
    )
}

export default EditItem
