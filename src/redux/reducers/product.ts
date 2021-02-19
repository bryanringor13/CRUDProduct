import { Reducer } from 'redux';
import { ProductAction, ProductState, ProductTypes } from '../metatypes/product';

const initialState: ProductState = {
    items: [
        { name: 'Toothbrush', price: 100, image: 'https://images-na.ssl-images-amazon.com/images/I/81l2bK1kAcL._SL1500_.jpg' },
        { name: 'Item 2', price: 200, image: 'url' },
        { name: 'Item 3', price: 300, image: 'url' },
        { name: 'Item 4', price: 400, image: 'url' },
        { name: 'Item 5', price: 500, image: 'url' },
        { name: 'Item 6', price: 600, image: 'url' },
        { name: 'Item 7', price: 700, image: 'url' },
        { name: 'Item 8', price: 800, image: 'url' },
        { name: 'Item 9', price: 900, image: 'url' },
        { name: 'Item 10', price: 1000, image: 'url' },
    ],
    loading: false,
    error: null
};

const productReducer: Reducer<ProductState, ProductAction> = (state = initialState, action: ProductAction) => {
  switch (action.type) {
        case ProductTypes.ADD_PRODUCT:
            return {
                ...state, 
                items: [...state.items, action.payload.item],
                loading: false
            };
        case ProductTypes.EDIT_PRODUCT:
            let getItemForEdit: any[] = state.items

            getItemForEdit[action.payload.id].name = action.payload.name;
            getItemForEdit[action.payload.id].price = action.payload.price;
            getItemForEdit[action.payload.id].image = action.payload.image;

            return {
                ...state, 
                items: getItemForEdit,
                loading: false,
            };
        case ProductTypes.DELETE_PRODUCT:
            console.log(action.payload)
            let getItemForDelete: any[] = []

            getItemForDelete = state.items.filter((item, index) => index !== action.payload.id)          
            
            return {
                ...state, 
                items: [...getItemForDelete],
                loading: false,
            };
        default:
            return state;
  }
};

export default productReducer;