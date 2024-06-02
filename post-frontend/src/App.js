import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';

function App() {
  return (
    // make react fragments
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          {/* By help of outlet we will using multiple routes in layout. */}
          <Route index element={<Home/>} />
          <Route path='my-profile' element={<Profile/>} />
          <Route path='login' element={<Login/>} />
          <Route path='signup' element={<SignUp/>} />
          <Route path='profile' element={<Profile/>} />
          <Route exact path="/entertainment" element={<Home key="entertainment" pageSize={8} country="in" category="entertainment"/>}></Route>
          <Route exact path="/general" element={<Home key="general" pageSize={8} country="in" category="general"/>}></Route>            
          <Route exact path="/health" element={<Home key="health" pageSize={8} country="in" category="health"/>}></Route>
          <Route exact path="/science" element={<Home key="science" pageSize={8} country="in" category="science"/>}></Route>
          <Route exact path="/sports" element={<Home key="sports" pageSize={8} country="in" category="sports"/>}></Route>
          <Route exact path="/technology" element={<Home key="technology" pageSize={8} country="in" category="technology"/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};
export default App;