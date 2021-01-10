import React, { Component } from 'react';
import {Link, NavLink } from 'react-router-dom';
import Home from '../pages/Home'

const burl = "http://localhost:5000/api/auth/login";

class LoginComponent extends Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: '',
            error: '',
            role: ''
        }
    }
    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    handleChangePassword = (event) => {
        this.setState({ password: event.target.value })
    }
    handleSubmit = () => {
        // console.log(this.state)
        fetch(burl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                sessionStorage.setItem('email', this.state.email);
                sessionStorage.setItem('_ltk', data.token);
                this.props.history.push('/home')
            })
            .catch((err) => {
                this.setState({ error: "Invalid UserName or Password" })
            })
    }

  



  render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//       <div className="container" style={{ width: "250px", height: "75px", margin: "80px 0px 0px 930px", padding: '20px 0px 30px 40px ', backgroundColor: '#666633', borderRadius: '10px', display: 'flex'}} >
//           <NavLink to= './LoginComponent'><button className="btn btn-success" style={{ marginRight: '20px' }}>LOGIN </button></NavLink>
//           <NavLink to= './'><button className="btn btn-success" > SIGNUP</button></NavLink>
          
//         </div>
//       <div className="container" style={{ width: "500px", margin: "3px 0px 100px 700px" }}>
//         <div className="panel panel-danger" style={{
//           backgroundColor: '#666633', borderRadius: '10px', padding: '15px'
//         }} >

//           <h3 style={{ marginLeft: '15px' }}> Login </h3>
//           <hr style={{ backgroundColor: '#424224', height: '2px' }}></hr>


//           <div className="panel-body">
//             <div className="form-group">
//               <label className="control-label">Email</label>
//               <input type="text" name="email" value={this.state.email} className="form-control"
//                 onChange={this.handleChangeEmail} required />
//             </div>
//             <div className="form-group">
//               <label className="control-label">Password</label>
//               <input type="password" name="password" value={this.state.password} className="form-control"
//                 onChange={this.handleChangePassword} required />
//             </div>
//             <button className="btn btn-success" onSubmit={this.handleSubmit}>Login</button>
//           </div>
//         </div>

//       </div>
//       </form>
//     )
//   }
// }
return (
<>
        <div className="container" style={{ width: "250px", height: "75px", margin: "80px 0px 0px 930px", padding: '20px 0px 30px 40px ', backgroundColor: '#666633', borderRadius: '10px', display: 'flex'}} >
          <NavLink to= './LoginComponent'><button className="btn btn-success" style={{ marginRight: '20px' }}>LOGIN </button></NavLink>
          <NavLink to= './'><button className="btn btn-success" > SIGNUP</button></NavLink>
          
        </div>
  <div className="container" style={{ width: "500px", margin: "3px 0px 100px 700px" }}>
      <div className="panel panel-danger" style={{
          backgroundColor: '#666633', borderRadius: '10px', padding: '15px'
        }}>
          <div className="panel-heading">
              <h4>Login</h4>
              <hr style={{ backgroundColor: '#424224', height: '2px' }}></hr>
          </div>
          <h2>{this.state.error}</h2>
          <div className="panel-body">
              <div className="form-group">
                  <label className="control-label">Email</label>
                  <input type="text" name="order_id" value={this.state.email} className="form-control"
                      onChange={this.handleChangeEmail} required  />
              </div>
              <div className="form-group">
                  <label className="control-label">Password</label>
                  <input type="text" name="order_id" value={this.state.password} className="form-control"
                      onChange={this.handleChangePassword} required  />
              </div>
              <button className="btn btn-success" onClick={this.handleSubmit}>Login</button>
          </div>
      </div>

  </div>
  </>
)
}
}



export default LoginComponent;