import {
  SUPPORTER_CREATE_REQUEST,
  SUPPORTER_CREATE_SUCCESS,
  SUPPORTER_CREATE_FAIL,
  SUPPORTER_LIST_REQUEST,
  SUPPORTER_LIST_SUCCESS,
  SUPPORTER_LIST_FAIL,
} from "../constants/supporterConstants";


export const supporterCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case SUPPORTER_CREATE_REQUEST:
        return {
          loading: true,
        }
      case SUPPORTER_CREATE_SUCCESS:
        return {
          loading: false,
          success: true,
          supporter: action.payload,
        }
      case SUPPORTER_CREATE_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      default:
        return state
    }
  }

  
  export const supListReducer = (state = { suportors: [] }, action) => {
    switch (action.type) {
      case SUPPORTER_LIST_REQUEST:
        return {
          loading: true,
        }
      case SUPPORTER_LIST_SUCCESS:
        return {
          loading: false,
          suportors: action.payload,
        }
      case SUPPORTER_LIST_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
      default:
        return state
    }
  }