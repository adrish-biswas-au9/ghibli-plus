import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
    console.log(this.state)
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
    return (
      <div className="float" style={{float:'right', display:'flex', flexWrap:'wrap'}}>
      <div style={{margin: "80px 0px 0px 1110px" }}>
        {/* <div className="container" style={{ width: "250px", height: "75px", margin: "80px 0px 0px 930px", padding: '20px 0px 30px 40px ', backgroundColor: '#666633', borderRadius: '10px', display: 'flex' }} > */}
          <NavLink to='./LoginComponent'><button className='btn' style={{ marginRight: '10px', backgroundColor: '#2b250f' }}>LOGIN </button></NavLink>
          <NavLink to='./'><button className='btn' style={{backgroundColor: '#2b250f' }} > SIGNUP</button></NavLink>

        </div>
        <div className="container" style={{ width: "400px", margin: "3px 0px 100px 900px" }}>
          <div className="panel panel-danger" style={{
            backgroundColor: '#3d361c', borderRadius: '10px', padding: '15px', color: '#cccdb4'
          }}>
            <div className="panel-heading">
              <h4>Login</h4>
              <hr style={{ backgroundColor: '#2b250f', height: '2px' }}></hr>
            </div>
            <h2>{this.state.error}</h2>
            <div className="panel-body">
              <div className="form-group">
                <label className="control-label">Email</label>
                <input type="text" name="order_id" value={this.state.email} className="form-control"
                  onChange={this.handleChangeEmail} required />
              </div>
              <div className="form-group">
                <label className="control-label">Password</label>
                <input type="password" name="order_id" value={this.state.password} className="form-control"
                  onChange={this.handleChangePassword} required />
              </div>
              <button className="btn btn-success" onClick={this.handleSubmit}>Login</button>
            </div>
          </div>

        </div>
        </div>
    )
  }
}



export default LoginComponent;