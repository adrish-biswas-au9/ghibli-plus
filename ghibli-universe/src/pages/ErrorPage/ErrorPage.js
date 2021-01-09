import React from 'react';

const ErrorPage = (props) =>{
  return(
    <div style={{margin: '110px 0px 303px 10px'}}>
      <h2>ERROR 404</h2>
      <p><span style={{color: 'blue'}} onClick={() => props.history.push('/')} >click here</span> to go back to login page</p>
    </div>
  )
}

export default ErrorPage;