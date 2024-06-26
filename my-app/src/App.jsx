// useContext() => react hook that allows you to share values between multiple levels of components (nested) without passing through each level

// PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext=createContext();
// 3. <MyContext.Provider value={value}>
//        <Child />
//    </MyContext.Provider>

// CONSUMER COMPONENTS
// 1. import React, { useContext } from 'react';
//    import { MyContext } from './ComponentA';
// 2. const value = useContext(MyContext);

import React from 'react';
import ComponentA  from './ComponentA.jsx';

function App() {
  return (
    <div className="App">
      <ComponentA/>
    </div>
  );
}

export default App;
