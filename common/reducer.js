import * as types from './constants'
import {newStateSuccess} from './updateState'
import {initialState} from './initialState'

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOAD_DATA_SUCCESS:
      return newStateSuccess(state, action.payload)
    case types.LOAD_DATA_REQUEST:
      return Object.assign({}, state, {loading: true})
    case types.LOAD_POSTS_FAILURE:
      return { ...state,
        posts: {
          error: action.payload
        }
      }
    default:
      return state
  }
}
