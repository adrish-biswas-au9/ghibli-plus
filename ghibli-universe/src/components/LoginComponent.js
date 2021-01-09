import React, { Component } from 'react';




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



  render() {
    return (
      <div className="container" style={{ width: "500px", margin: "150px 0px 100px 700px" }}>
        <div className="panel panel-danger" style={{
          backgroundColor: '#666633', borderRadius: '10px', padding: '15px'
        }} >

          <h3 style={{ marginLeft: '15px' }}> Login </h3>
          <hr style={{ backgroundColor: '#424224', height: '2px' }}></hr>


          <div className="panel-body">
            <div className="form-group">
              <label className="control-label">Email</label>
              <input type="text" name="order_id" value={this.state.email} className="form-control"
                onChange={this.handleChangeEmail} />
            </div>
            <div className="form-group">
              <label className="control-label">Password</label>
              <input type="text" name="order_id" value={this.state.password} className="form-control"
                onChange={this.handleChangePassword} />
            </div>
            <button className="btn btn-success" >Login</button>
          </div>
        </div>

      </div>
    )
  }
}

export default LoginComponent;