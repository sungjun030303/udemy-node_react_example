import _ from 'lodash'

import { 
  CREATE_EVENT,
  READ_EVENTS , 
  DELETE_EVENT,
  READ_EVENT,
  UPDATE_EVENT
 } from '../actions'


export default ( events = { }, action) => {
  
  switch (action.type) {
    case READ_EVENTS:
      //console.log(action.type)
      //console.log(  _.mapKeys( action.response.data,'id' ))
      //lib 를 잘 써봐야겠다. 
      return _.mapKeys( action.response.data,'id' )
      case CREATE_EVENT:
      case READ_EVENT:
        // const data = action.response.data
        // return { ...events ,[data.id]: data }

      case UPDATE_EVENT:
        const value = action.response.data
        return { ...events ,[value.id]: value }
  
      case DELETE_EVENT:
        console.log( 'action' )
        console.log( action.response.data.id )
        delete events[ action.response.data.id ]
        return { ...events }

    default:
      return events
  }

}
