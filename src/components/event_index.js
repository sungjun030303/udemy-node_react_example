import React,{Component} from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { readEvents ,increment,decrement} from '../actions'
import _ from 'lodash';

//const App = () => (<App></App>);
//이런식의 연습을 하였으나 리듀스 리덕스를 사용하면 다음과 같이 된다.


import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


class EventIndex extends Component {
  //
  componentDidMount() {

    this.props.readEvents()
    this.props.increment()
    this.props.decrement()

  }

  renderEvents() {
    return _.map( this.props.events , event =>(
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn><Link to={`/events/${event.id}`}>{event.title}</Link></TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ))
  }

  render() {
    const props = this.props

    const style = {
      position: "fixed",
      right:12,
      bottom:12
    };
    return ( 
    <React.Fragment>
    <div> value: {  props.value} </div> 
    <button onClick={ props.increment }>+1</button>
    <button onClick={ props.decrement }>-1</button>
      <div> 첫 부분 내비둠 ㅋㅋ</div>
    
      <div>
        <Table >
          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>
                ID
              </TableHeaderColumn>
              <TableHeaderColumn>
                Title
              </TableHeaderColumn>
              <TableHeaderColumn>
                Body
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.renderEvents()}

          </TableBody>
        </Table>
        <FloatingActionButton style={style} containerElement={<Link to="events/new"></Link>}> 
        <ContentAdd />
        </FloatingActionButton>
        {/* <Link to="events/new">New Event </Link> */}
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