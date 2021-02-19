import { Button } from '@material-ui/core'
import React from 'react'
import { HeaderContent, ButtonContent } from '../../../assets/styles'

const Header = ({ addHandler }: any) => {

    const addItemHandler = () => {
        addHandler(true)
    }

    return (
        <HeaderContent>
            <h1>Code Exam</h1>
            <ButtonContent>
                <Button variant="contained" onClick={() => addItemHandler()} >
                    Add Item
                </Button>
            </ButtonContent>
        </HeaderContent>
    )
}

export default Header
