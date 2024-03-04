    import axios from "axios";
    import { getProducts } from "../reducers/productReducer";

    export const asyncGetProducts = () => async (dispatch, getState) => {
        try {
        const resp = await axios.get('https://dummyjson.com/products')
        dispatch(getProducts(resp.data))
        } catch (error) {
            console.log('>>>>>>>>>>>', error)
        }
    };


