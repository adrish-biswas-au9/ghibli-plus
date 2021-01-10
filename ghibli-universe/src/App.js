import React from 'react'
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';
// import Helper from './components/Helper';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage/ErrorPage'

import {BrowserRouter} from 'react-router-dom'; 
import Footer from './components/Footer';
import Login from './pages/Login';
import Header from './components/Header';



const App = () => {
    return (
      <div className="App">

        <BrowserRouter>
        <Header />
        <Route exact path='/' component={SignupComponent} />
          <Route path='/logincomponent' component={LoginComponent}/>
          
          <Route path="/home" component={Home}/>

          <Footer />
          {/* <Route path= '*' component={ErrorPage}/> */}
        </BrowserRouter>
        {/* <LoginComponent/>
      <SignupComponent/> */}


      </div>
    );
  }



export default App;
