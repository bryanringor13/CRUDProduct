
import { action } from 'typesafe-actions';
import { ProductItemState, ProductTypes } from '../metatypes/product';

export const addNewProductItem = (payload: any) => action(ProductTypes.ADD_PRODUCT, payload);
export const productItemSaveChanges = (payload: ProductItemState) => action(ProductTypes.EDIT_PRODUCT, payload);
export const productItemDelete = (payload: any) => action(ProductTypes.DELETE_PRODUCT, payload);