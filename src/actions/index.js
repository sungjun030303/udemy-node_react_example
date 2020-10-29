import axios from 'axios'
// 비동기 처리.
//redux-thunk

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})
//-------------------------
const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1/'
const QUERYSTRING ='?token=token123'

export const READ_EVENTS = 'READ_EVENTS'
export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  //console.log(response)
  dispatch ({type: READ_EVENTS , response })
}
//-------------------------
export const CREATE_EVENT = 'CREATE_EVENT'
export const postEvents = ( data ) => async dispatch => {
  const response = await axios.post( `${ROOT_URL}/events${QUERYSTRING}` , data )
  
  //console.log(response)
  dispatch ({type: READ_EVENTS , response })
}

//-------------

export const READ_EVENT ='READ_EVENT'
export const DELETE_EVENT ='DELETE_EVENT'

export const deleteEvent = (id) => async dispatch => {
  const response = await axios.delete( `${ROOT_URL}/events/${id}${QUERYSTRING}`  )
  dispatch ({type: DELETE_EVENT , response })
}

export const getEvent = id => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
  dispatch({ type: READ_EVENT, response })
}

//-------------

export const UPDATE_EVENT ='UPDATE_EVENT'

export const putEvent = (data) => async dispatch => {
  const id = data.id
  const response = await axios.put( `${ROOT_URL}/events/${id}${QUERYSTRING}`,data)
  dispatch ( {type: UPDATE_EVENT , response})
}
