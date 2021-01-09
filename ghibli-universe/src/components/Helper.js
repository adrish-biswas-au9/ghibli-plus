import React, { Component } from 'react';
import {Link, NavLink } from 'react-router-dom';



const Helper = () => {
    return (
      <>


        <div className="container" style={{ width: "500px", height: "150px", margin: "200px 0px 100px 700px", padding: '60px 0px 60px 140px ', backgroundColor: '#666633', borderRadius: '10px' }} >
          <NavLink to= './LoginComponent'><button className="btn btn-success" style={{ marginRight: '60px' }}>LOGIN </button></NavLink>
          <NavLink to= './SignupComponent'><button className="btn btn-success" > SIGNUP</button></NavLink>
          
        </div>

      </>
    )
  }


export default Helper;