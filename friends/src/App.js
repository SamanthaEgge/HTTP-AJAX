import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import FriendsList from './components/FriendsList'

const App = () => (
  <div className='app-container'>
    <h1>A List of Friends!</h1>
    <Route exact path='/' component={FriendsList} />
  </div>
)
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
