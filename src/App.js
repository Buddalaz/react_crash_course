// import React from 'react';
import './App.css';
import Header from './components/Header';


function App() {
  const name = "Sandun";
  return (
    <div className="App">
      {/* <h1>Hello World!</h1>
      <h2>Hello {2 + 3}</h2>
      <h3>Hello {2 + 4 === 6 ? name : "User"}</h3> */}
      <Header />
    </div>
  );
}

// we can create arrow base function component also
// const App = () => {
//   const name = "Sandun";
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//       <h2>Hello {2 + 3}</h2>
//       <h3>Hello {2 + 4 === 6 ? name : "User"}</h3>
//     </div>
//   );
// }

// we can create class base component also
// class App extends React.Component{
// render(){
// return <h1>Hello Friends!!</h1>
// }
// }

export default App;
