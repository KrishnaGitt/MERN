import { 
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_REQUEST,
    PRODUCTDETAIL_PRODUCT_FAIL,
    PRODUCTDETAIL_PRODUCT_SUCCESS,
    PRODUCTDETAIL_PRODUCT_REQUEST,
    CLEAR_ERROR
} from "../constanst/productConstants";

export const productReducers=(state={product:[]},action)=>{
    switch(action.type){
        case ALL_PRODUCT_REQUEST:
            return{
                loading:true,
                product:[]
            };
        case ALL_PRODUCT_SUCCESS:
            return{
                loading:false,
                product:action.payload.product
            };
        case ALL_PRODUCT_FAIL:
            return{
                loading:false,
                error:action.payload
            };
        case CLEAR_ERROR:
            return{
                    ...state,
                    error:null
                };
        default:
            return state;
    }
}

export const getProductDetailReducers=(state={product:{}},action)=>{
    switch(action.type){
        case PRODUCTDETAIL_PRODUCT_REQUEST:
            return{
                loading:true,
                product:{}
            };
        case PRODUCTDETAIL_PRODUCT_SUCCESS:
            return{
                loading:false,
                product:action.payload.product
            };
        case PRODUCTDETAIL_PRODUCT_FAIL:
            return{
                loading:false,
                error:action.payload
            };
        case CLEAR_ERROR:
            return{
                    ...state,
                    error:null
                };
        default:
            return state;
    }
}
