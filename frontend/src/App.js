import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import DataProvider from './context/DataProvider';
import Home from './components/Home';
import Loginadmin from './components/Loginadmin';
import DashBoard from './components/DashBoard';
import Auth from './components/Auth';
import UserHome from './components/UserHome';
import FullViewTask from './components/FullViewTask';
import CreateTask from './components/CreateTask';
import UpdateTask from './components/UpdateTask';




function App() {
  return <React.Fragment>
      <main>
        <DataProvider>
          <Routes>
          <Route path="/" element={<Home/>}/>

          <Route path='/admin' element={<Loginadmin/>}/>
          <Route path='/dashboard' element={<DashBoard/>}/>

          <Route path="/loginuser" element={<Auth/>} />
          <Route path="/home" element={<UserHome/>}/>

          <Route path='/views/:id' element={<FullViewTask/>}/>
          <Route path='/create' element={<CreateTask/>}/>
          <Route path='/update/:id'  element={<UpdateTask/>}/>



          </Routes>
        </DataProvider>
      </main>
      </React.Fragment>
}

export default App;
