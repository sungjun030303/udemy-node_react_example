import React,{Component} from 'react';
import { connect } from 'react-redux';

import { increment , decrement } from '../actions'


//const App = () => (<App></App>);
//이런식의 연습을 하였으나 리듀스 리덕스를 사용하면 다음과 같이 된다.

class App extends Component {
// 콘스트럭트는 사용 하지 아니한다.
//   constructor (props) {
//     super(props)
//     console.log(this.state)
//     this.state = { count : 0}
//   }
//   handlePushButton =()=> {
//     console.log(this.state.count)
//     this.setState( { count : this.state.count+1 } );
//   }

//   handleMinusButton =()=> {
//     console.log(this.state.count)
//     this.setState( {count : this.state.count-1 });
//   }

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

// const mapDispatchToProps = dispatch => (
//     {
//         increment: () => dispatch(increment()),
//         decrement: () => dispatch(decrement())
//     }
// )
//리듀서 한테 전달하는 인자에 값을 셋팅해서 넘겨주게 한다.

const mapDispatchToProps = ({increment, decrement})
//원래는 위처럼 디스패치 하면서 값을 넘겨주는 것을 보여주는것이 였으니 현재는 간단히 된다.
export default connect( mapStateToProps , mapDispatchToProps)(App)

//export default App;