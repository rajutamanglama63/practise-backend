import * as actionTypes from '../constant/booksConstant'


export const getBookReducers = (state = {books : []}, action) => {
    switch (action.type) {
        case actionTypes.GET_BOOK_REQUEST:
            return {
                loading : true,
                books : []
            }
        case actionTypes.GET_BOOK_SUCCESS:
            return {
                loading : false,
                books : action.payload
            }
        case actionTypes.GET_BOOK_FAIL:
            return {
                loading : false,
                error : action.payload
            }    
        default:
            return state;
    }
}