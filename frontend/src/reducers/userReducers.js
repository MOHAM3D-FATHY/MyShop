import * as constants from '../constants/userConstants'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.USER_LOGIN_REQUEST:
      return { loading: true }
    case constants.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.data }
    case constants.USER_LOGIN_FAIL:
      return { loading: false, error: action.error }
    case constants.USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.USER_REGISTER_REQUEST:
      return { loading: true }
    case constants.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.data }
    case constants.USER_REGISTER_FAIL:
      return { loading: false, error: action.error }
    case constants.USER_LOGOUT:
      return {}
    default:
      return state
  }
}
