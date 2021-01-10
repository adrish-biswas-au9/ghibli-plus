import React,{Component} from 'react';

const url = "http://localhost:5000/api/auth/userinfo";

class Home extends Component{
    constructor(){
        super()

        this.state={
            user:'',
            error:''
        }
    }

    handleLogout=() => {
        sessionStorage.removeItem('_ltk');
        sessionStorage.removeItem('_rtk');
        this.props.history.push('/LoginComponent')
    }

    render(){
        if(sessionStorage.getItem('_ltk') == null){
            this.props.history.push('/LoginComponent')
        }
  return(
<div>

    <button className="btn btn-danger" onClick={this.handleLogout}> Logout </button>
</div>
 )}}

export default Home;