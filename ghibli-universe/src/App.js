import React from 'react'
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';
// import Helper from './components/Helper';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage/ErrorPage'



class App extends React.Component {
  state = {
    isLog: false
  }

  handleLogin = (isLog) => this.setState({ isLog })
  render() {
    const { isLog } = this.state;
    return (
      <div className="App">

        <Switch>
          <Route exact path='/' render={() => !isLog ? <LoginComponent isLogin={this.handleLogin} /> : <Home />} />
          <Route exact path='/signupcomponent' component={SignupComponent} />
          <Route path= '*' component={ErrorPage}/>
        </Switch>
        {/* <LoginComponent/>
      <SignupComponent/> */}


      </div>
    );
  }

}

export default App;
