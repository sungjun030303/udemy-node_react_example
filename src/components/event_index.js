import React,{Component} from 'react';
import { connect } from 'react-redux';

import { increment , decrement } from '../actions'


//const App = () => (<App></App>);
//이런식의 연습을 하였으나 리듀스 리덕스를 사용하면 다음과 같이 된다.

class Eventindex extends Component {

  render() {

    const props = this.props

    return ( 
    <React.Fragment>
    <div> value: {  props.value} </div> 
    <button onClick={ props.increment }>+1</button>
    <button onClick={ props.decrement }>-1</button>
    </React.Fragment> 
    );
  }
}

const mapStateToProps = state =>({ value: state.count.value })

const mapDispatchToProps = ({increment, decrement})
//원래는 위처럼 디스패치 하면서 값을 넘겨주는 것을 보여주는것이 였으니 현재는 간단히 된다.
export default connect( mapStateToProps , mapDispatchToProps)(Eventindex)

//export default App;