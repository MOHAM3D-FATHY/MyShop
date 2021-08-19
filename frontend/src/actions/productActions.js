import axios from 'axios'
import * as actions from '../constants/productConstants'

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: actions.PRODUCT_LIST_REQUEST,
    })
    const { data } = await axios.get('/api/products')
    dispatch({
      type: actions.PRODUCT_LIST_SUCCESS,
      data,
    })
  } catch (error) {
    dispatch({
      type: actions.PRODUCT_LIST_FAIL,
      error:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actions.PRODUCT_DETAILS_REQUEST,
    })
    const { data } = await axios.get(`/api/products/${id}`)
    dispatch({
      type: actions.PRODUCT_DETAILS_SUCCESS,
      data,
    })
  } catch (error) {
    dispatch({
      type: actions.PRODUCT_DETAILS_FAIL,
      error:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
