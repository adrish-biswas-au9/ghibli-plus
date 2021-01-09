import React, { Component } from 'react';




class SignupComponent extends Component {

  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }
  // handleChangeName = (event) => {
  //   this.setState({ name: event.target.value })
  // }
  // handleChangeEmail = (event) => {
  //   this.setState({ email: event.target.value })
  // }
  // handleChangePassword = (event) => {
  //   this.setState({ password: event.target.value })
  // }

  handleChange = (event) => {
    const{name,value} = event.target
    this.setState({[name]:value})
  }

  handleSubmit =(event) => {
    event.preventDefault()
    console.log("hello")
    this.props.history.push('/LoginComponent')
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="container" style={{ width: "500px", margin: "150px 0px 100px 700px" }}>
        <div className="panel panel-danger" style={{
          backgroundColor: '#666633', borderRadius: '10px', padding: '15px'
        }} >

          <h3 style={{ marginLeft: '15px' }}> Signup </h3>
          <hr style={{ backgroundColor: '#424224', height: '2px' }}></hr>


          <div className="panel-body">
            <div className="form-group">
              <label className="control-label">Name</label>
              <input type="text" name="name" value={this.state.name} className="form-control"
                onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label className="control-label">Email</label>
              <input type="text" name="email" value={this.state.email} className="form-control"
                onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label className="control-label">Password</label>
              <input type="text" name="password" value={this.state.password} className="form-control"
                onChange={this.handleChange} />
            </div>
            <button className="btn btn-success" onClick={this.handleSubmit}>Signup</button>
          </div>
        </div>

      </div>
      </form>
    )
  }
}

export default SignupComponent;