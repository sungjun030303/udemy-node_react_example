import React,{Component} from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom'



import { readEvents ,increment,decrement} from '../actions'
import _ from 'lodash';

//const App = () => (<App></App>);
//이런식의 연습을 하였으나 리듀스 리덕스를 사용하면 다음과 같이 된다.

class EventIndex extends Component {
  //
  componentDidMount() {

    this.props.readEvents()
    this.props.increment()
    this.props.decrement()

  }

  renderEvents() {
    return _.map( this.props.events , event =>(
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    const props = this.props

    return ( 
    <React.Fragment>
    <div> value: {  props.value} </div> 
    <button onClick={ props.increment }>+1</button>
    <button onClick={ props.decrement }>-1</button>
      <div> 첫 부분 내비둠 ㅋㅋ</div>

      <div>
        <table>
          <thead>
            <tr>
              <th>
                ID
              </th>
              <th>
                Title
              </th>
              <th>
                Body
              </th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}

          </tbody>
        </table>
        <Link to="events/new">New Event </Link>
      </div>
    </React.Fragment> 
    );
  }
}

const mapStateToProps = state =>({ 
   events : state.events
  ,value: state.count.value })

const mapDispatchToProps = ({ readEvents ,increment ,decrement  })
//원래는 위처럼 디스패치 하면서 값을 넘겨주는 것을 보여주는것이 였으니 현재는 간단히 된다.
export default connect( mapStateToProps , mapDispatchToProps)(EventIndex)

//export default App;