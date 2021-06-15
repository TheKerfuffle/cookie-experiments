import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import './App.css';
import UnivCookie from '../UnivCookie/UnivCookie';
import RCookie from '../RCookie/RCookie';
import ObjectCookie from '../ObjectCookie/ObjectCookie';

function App() {

  return (
    <div className="App">

      {/* <UnivCookie />

      <RCookie /> */}

      <ObjectCookie />

    </div>
  );
}

export default App;
