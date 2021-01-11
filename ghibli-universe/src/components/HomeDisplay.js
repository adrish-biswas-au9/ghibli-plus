import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomeDisplay.css';
import Slider from "react-slick";

var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1
};

const HomeDisplay = (props) => {
    const display = (filmslist) => {
        if (filmslist) {
            return filmslist.map((item) => {
                return (
                <>
                   
                    <div className='movie_poster_container'><Link><img className='movie_poster' src={item.image_url} alt='movie_poster'></img><br /><center>{item.title}</center></Link></div>
                </>    
                )
            })
        }
    }
    const slick = (filmslist)=>{
        if (filmslist) {
            return filmslist.map((item) => {
                return (
                <>
                    <div class='slider' style={{ width: 1500, height: 1100, backgroundImage: `url(${item.image_url})` }} >
                        <h3>{item.title}</h3>
                        <br />
                        <h4>Slide to go to the next movie image</h4>
                    </div>
                </>    
                )
            })
        }
    }
    return (
        <>
            <Slider {...settings}>
                {slick(props.filmslist)}
            </Slider>
           
            <div className="container">
                <div className="movie_grid">
                    {display(props.filmslist)}
                </div>
            </div>
        </>
    )
}

export default HomeDisplay;