import _ from 'lodash'

import { READ_EVENTS } from '../actions'


export default ( events = {  }, action) => {
  
  switch (action.type) {
    case READ_EVENTS:
      //console.log(action.type)
      //console.log(  _.mapKeys( action.response.data,'id' ))
      //lib 를 잘 써봐야겠다. 
      return _.mapKeys( action.response.data,'id' )

    default:
      return events
  }

}
