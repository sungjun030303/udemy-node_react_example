import _ from 'lodash'

import { 
  READ_EVENTS , 
  DELETE_EVENT
 } from '../actions'


export default ( events = { }, action) => {
  
  switch (action.type) {
    case READ_EVENTS:
      //console.log(action.type)
      //console.log(  _.mapKeys( action.response.data,'id' ))
      //lib 를 잘 써봐야겠다. 
      return _.mapKeys( action.response.data,'id' )

      case DELETE_EVENT:
        console.log( 'action' )
        console.log( action.response.data.id )
        delete events[ action.response.data.id ]
        return { ...events }
    default:
      return events
  }

}
