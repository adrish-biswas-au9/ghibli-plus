import LoginComponent from './Components/LoginComponent';
import SignupComponent from './Components/SignupComponent';
import Helper from './Components/Helper';
import {Route, Switch} from 'react-router-dom'



function App() {
  return (
    <div className="App">
    <Helper/>
    <Switch>
      <Route exact path='/logincomponent' component={LoginComponent}/>
      <Route exact path='/signupcomponent' component={SignupComponent}/>
    </Switch>
    {/* <LoginComponent/>
    <SignupComponent/> */}

     
    </div>
  );
}

export default App;
