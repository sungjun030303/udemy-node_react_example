import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import { postEvents } from '../actions'
import _ from 'lodash';

class EventNew extends Component {
  //
  componentDidMount() {
    //빈 화면이라 없음.
  }

  render() {
    const props = this.props

    return ( 
    <React.Fragment>
      foo
      
    </React.Fragment> 
    );
  }
}

// const mapStateToProps = state =>({ 
//    events : state.events
// })

//const mapDispatchToProps = ({ readEvents   })

export default connect( null , null )(EventNew)

