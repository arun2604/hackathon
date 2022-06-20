import React from'react';
import Navigation from './components/Navigation'
import Signup from './components/Signup'
import Login from './components/Login'
import './App.css'
import Home from './components/Home';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';

const App = () => {
    return(    
        <Router>
         <div className="App">    
            <Navigation />
            <Routes>
            <Route path='/' element ={<Home />}> </Route>
            <Route path='/login' element ={<Login />}> </Route>
            <Route path='' element ={<Login />}> </Route>
            <Route path='/signup' element ={<Signup />}></Route>
            </Routes>
        </div>
        </Router>
    );
};

export default App;