import React from 'react';
import './App.css';
//components
import GrantHeader from './components/GrantHeader'

class App extends React.Component{
  contextRef = React.createRef()
  render() {
    return (
      <div className="App">
        <div className='fake-header-one'></div>
        <div className='fake-header-two'></div>
        <GrantHeader />        
      </div>
    );
  }
  
}

export default App;
