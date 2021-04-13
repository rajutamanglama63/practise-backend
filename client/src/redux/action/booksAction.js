import * as actionTypes from '../constant/booksConstant'
import axios from 'axios'

export const getBook = () => async (dispatch) => {
    try {
        dispatch({
            type : actionTypes.GET_BOOK_REQUEST
        })

        const {data} = await axios.get("/api/bookRoutes");

        dispatch({
            type : actionTypes.GET_BOOK_SUCCESS,
            payload : data
        })
    } catch (error) {
        dispatch({
            type : actionTypes.GET_BOOK_FAIL,
            payload : error.response && error.response.data.messege ? error.response.data.messege : error.message
        })
    }
}