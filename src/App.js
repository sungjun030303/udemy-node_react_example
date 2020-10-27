//import logo from './logo.svg';
//import './App.css';

import { render } from "@testing-library/react";

function App() {
  // tag　를 존재 하지 않게 하기위한 React.Fragment도 있다.
const inputtext =
<div> <label> bar </label>
<input type="text" onClick= { ()=> {console.log("I am clicked.")}   }/>
</div>;

const greeting = "hello";
const dom = <h1>
<header >
  {/* <img src={logo} className="App-logo" alt="logo" /> */}
  <p>
    Edit <code>src/App.js</code> and save to reload. reload good
  </p>
</header>
{greeting}world 
{/* div tagㄱㅏ jsx html같은식으로 되어있다.
  왜 이걸 사용하는가.. 토란스파일 -> 자바스크립트 코드로 변경되어진다.
   대충 밑의 느낌으로 코딩인듯 현 버전은 안돔 jsx가 직관적 코딩이 가능하다.*/}
</h1>;
  return inputtext;

}

export default App;
