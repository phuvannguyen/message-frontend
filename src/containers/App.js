import React, {Component} from 'react';
import './App.css';
import Main from '../component/Main';
import Sidebar from '../component/Sidebar';
import store from '../Store/store';
import  _ from "lodash";


class App extends Component {
  

  render() {
    const { contacts } = store.getState();
    return (
      <div className="App">        
        <Sidebar contacts={_.values(contacts)}/>
        <Main />
      </div>
    );

  }
  
  
}

export default App;
