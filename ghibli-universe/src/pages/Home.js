import React,{Component} from 'react';
import HomeDisplay from '../components/HomeDisplay';
import axios from 'axios';
import Logout from './Logout';
const filmsUrl = 'http://localhost:8900/films';
class Home extends Component{
    constructor(){
      super()
      this.state={
          films: ''
      }
    }
    render(){
      return(
        <>
              <HomeDisplay filmslist={this.state.films}/>
              <Logout history={this.props.history}/>
        </>    
      )
    }
    componentDidMount(){
      axios.get(filmsUrl)
      .then((response)=>{
          //console.log(response.data);
          this.setState({films:response.data})
      })
    }
}

export default Home;