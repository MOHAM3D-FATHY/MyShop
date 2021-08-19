import axios from 'axios'
import * as constants from '../constants/productConstants'

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: constants.PRODUCT_LIST_REQUEST,
    })
    const { data } = await axios.get('/api/products')
    dispatch({
      type: constants.PRODUCT_LIST_SUCCESS,
      data,
    })
  } catch (error) {
    dispatch({
      type: constants.PRODUCT_LIST_FAIL,
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
      type: constants.PRODUCT_DETAILS_REQUEST,
    })
    const { data } = await axios.get(`/api/products/${id}`)
    dispatch({
      type: constants.PRODUCT_DETAILS_SUCCESS,
      data,
    })
  } catch (error) {
    dispatch({
      type: constants.PRODUCT_DETAILS_FAIL,
      error:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
