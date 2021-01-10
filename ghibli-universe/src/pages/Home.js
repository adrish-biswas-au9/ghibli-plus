import React,{Component} from 'react';
import Logout from './Logout';
const Home = (props) =>{
  return(<div>
    <Logout history={props.history}/>
  </div>)
  
}

export default Home;