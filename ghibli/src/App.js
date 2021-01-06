import React from 'react';
import axios from 'axios';
import imageList from './images.json';
const filmsUrl = 'https://ghibliapi.herokuapp.com/films';
class App extends React.Component {
    constructor(){
        super();
        this.state = {
            anime: ''
        }
    }
    renderList= (films) => {
        if(films){
            return films.map((data) => {
                const images=imageList.filter(
                    (image) =>{
                        return (data.id===image.id)
                    }
                )
                //console.log(images);
                // for ( var i =0; i<images.length; i++){
                //     if (images[i].id === data.id){
                //         return (
                //             <li key={data.id}><img alt='movie_image' src={images[i].url} />{data.title}</li>
                //         )
                //     }
                // }
                return (
                    <li key={data.id}><img alt='movie_image' src={images[0].url} />{data.title}</li>
                )
                
            })
        }
    }
    render(){
        return (
            <ul>
                {this.renderList(this.state.anime)}
            </ul>
        )
    }
    componentDidMount(){
        axios.get(filmsUrl)
        .then((response) => {
            this.setState({anime: response.data});
            //console.log(response.data);
        })
    }
}

export default App;
