//export const CHECK_SESSION = 'CHECK_SESSION'
//export const CHECK_SUBMIT_LOGIN_FORM = 'CHECK_SUBMIT_LOGIN_FORM'
//export const LOGIN = 'LOGIN'
//export const LOGOUT = 'LOGOUT'
//export const RENDER_GAMES_LIST = 'RENDER_GAMES_LIST'

import {
  CHECK_SESSION,
  LOGIN
} from '../constants/ActionTypes'

const initialState = {
  userName: "",
  tempName: ""
}

const user = (state = initialState, action) => {
	switch (action.type) {
		case CHECK_SESSION:
			return Object.assign({}, state, {
				userName: action.userName,
				tempName: ""
			})
//		case 'CHECK_LOGIN_FORM':
//			return Object.assign({}, state, {
//				tempName: action.tempName
//			})
//		case 'RENDER_LOGIN_FORM':
//			if(state.userName !== undefined && state.userName.length >= 3) {
//				return state
//			}
		case LOGIN:
			if(action.userName === undefined || action.userName.length < 3) {
				return state
			}
			return state
//			return Object.assign({}, state, {
//				userName: action.userName,
//				tempName: ""
//			})
//		case 'LOGOUT':
//			return Object.assign({}, state, {
//				userName: "",
//				tempName: ""
//			})
			
		default:
			return state
	}
}

export default user

/*import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action
      return { ...state,
        [productId]: (state[productId] || 0) + 1
      }
    default:
      return state
  }
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export default cart*/