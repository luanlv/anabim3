import { LOAD_DATA_REQUEST, LOAD_DATA_SUCCESS, LOAD_DATA_FAILURE } from '../../constants'
import {price, course, videos} from '../../dataRequire'

export function loadData (slug) {
  console.log('run load data')
  return (dispatch, getState, { axios }) => {
    const { protocol, host } = getState().sourceRequest
    const requireList = requireData(getState(), slug)
    dispatch({type: LOAD_DATA_REQUEST})
    return axios.post(`${protocol}://${host}/api/get`, requireList)
      .then(res => {
        dispatch({
          type: LOAD_DATA_SUCCESS,
          payload: res.data
        })
      })
      .catch(error => {
        console.error(`Error in reducer that handles ${LOAD_DATA_SUCCESS}: `, error)
        dispatch({
          type: LOAD_DATA_FAILURE,
          payload: error,
          error: true
        })
      })
  }
}

function requireData (state, slug) {
  var data = []
  data = price(data, state)
  data = course(data, state, slug)
  data = videos(data, state, slug)
  return data
}
