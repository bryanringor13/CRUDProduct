import React, { useState } from 'react'
import { Button, Container } from '@material-ui/core'
import TableView from './Component/TableView'
import EditItem from './Component/EditItem'
import AddItem from './Component/AddItem'
import Header from './Component/Header'

const Main = () => {
    const [editModal, setEditModal] = useState(false)
    const [addModal, setAddModal] = useState(false)
    const [currentItem, setCurrentItem] = useState({})
    return (
        <Container>
            <Header addHandler={setAddModal}/>
            <TableView setCurrentItem={setCurrentItem} editHandler={setEditModal}  />
            <EditItem openEdit={editModal} editHandler={setEditModal} itemDetails={currentItem} />
            <AddItem openAdd={addModal} addHandler={setAddModal}/>
        </Container>
    )
}

export default Main