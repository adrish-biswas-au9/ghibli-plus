import React, { Component } from 'react';




class SignupComponent extends Component {

  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      role: '',
      password: ''
    }
  }
  render() {
    return (
      <div className="container" style={{ width: "500px", margin: "150px 0px 100px 700px" }}>
        <div className="panel panel-danger" style={{
          backgroundColor: '#666633', borderRadius: '10px'
        }} >

          <h3 style={{ marginLeft: '15px' }}> Signup </h3>
          <hr style={{ backgroundColor: '#424224', height: '2px' }}></hr>


          <div className="panel-body">
            <div className="form-group">
              <label className="control-label">Name</label>
              <input type="text" name="order_id" value={this.state.name} className="form-control"
                onChange={this.handleChangeName} />
            </div>
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
            <button className="btn btn-success" >Signup</button>
          </div>
        </div>

      </div>
    )
  }
}

export default SignupComponent;