// import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';

function App() {
  // const name = "Sandun";
  return (
    <Router>
      <div className="App">
        {/* <h1>Hello World!</h1>
      <h2>Hello {2 + 3}</h2>
      <h3>Hello {2 + 4 === 6 ? name : "User"}</h3> */}
        {/* <HomePage /> */}
        {/* <AboutUsPage /> */}
        {/* title="Welcome Sandun" */}
      </div>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutUsPage} />
    </Router>
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
