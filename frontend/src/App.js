import React from 'react';
import './App.scss';
import Navbar from './component/navBar/Navbar';
import HousesList from './component/list/houses/HousesList';

class App extends React.Component {
  render (){
  return (
    <React.Fragment>
      <Navbar/>
      <HousesList/>
    </React.Fragment>
  );
  }
}

export default App;