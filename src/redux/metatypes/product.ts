export enum ProductTypes {
    ADD_PRODUCT = 'PRODUCT/ADD_PRODUCT',
    EDIT_PRODUCT = 'PRODUCT/EDIT_PRODUCT',
    DELETE_PRODUCT = 'PRODUCT/DELETE_PRODUCT',

    SET_LOADING = 'PRODUCT/SET_LOADING',
}

export interface ProductState {
    readonly items: any[];
    readonly loading: boolean;
    readonly error: null;
}
  
export interface ProductAction {
    type: string;
    payload: any;
}

export interface ProductItemState {
    id: number;
    name: string;
    price: number;
    image: string;
}