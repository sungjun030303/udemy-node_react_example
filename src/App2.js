//import logo from './logo.svg';
//import './App.css';

//import { render } from "@testing-library/react";

const App = () => {
const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "NoName"  }
  ];

  return (
    <div>
      {
        profiles.map ((profile, index) => {
            return <User name={profile.name} age={profile.age}  key={index}/>
        })
      }
    </div>
  )
}

// const Cat =() => {
//     return <div>Meow!</div>    
// }

const User =( props ) => {
    return <div>Hi , I am {props.name} , and I am {props.age} years old</div>    
}

User.defaultProps = {
    age: 1
}

//export default App;