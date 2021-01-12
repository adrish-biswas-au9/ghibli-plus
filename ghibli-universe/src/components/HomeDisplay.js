import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomeDisplay.css';
import Slider from "react-slick";

var settings = {
    // dots: true,
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
    const slick = (filmslist) => {
        if (filmslist) {
            return filmslist.map((item) => {
                return (
                    <>
                        <div class='slider' style={{ width: 1500, height: 1100, backgroundImage: `url(${item.image_url})` }} >
                            <h3>{item.title}</h3>
                            <br />
                            <h4>Slide to go to the next movie image</h4>
                            <br />
                            <h6>Brought to you by:</h6>
                            <br />
                            <div className='PresentedBy1'>
                                <img id="HomeImage1" src='./826333.png' alt='PresentedBy' />
                            </div>
                            <div className='PresentedBy2' ><img id="HomeImage2" src='https://www.studioghibli.com.au/wp-content/uploads/2017/07/ghibli_logo_white-1.png' alt='PresentedBy' /></div>
                            <div className='HomeLogo'><img id="HomeImage3" src='https://www.studioghibli.com.au/wp-content/uploads/2017/07/ghibli_logo_gold.png' alt='logo' /></div>
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
           
            <div className='HomeDescription'>
                <center>
                    <h2>Studio Ghibli Universe</h2>
                    <p>
                        One of the most acclaimed studios in the world, Studio Ghibli is the home of some of the most revered and beloved animated works to have ever graced the screen.
                    </p>
                    <br />
                    <p>
                        The Studio Ghibli catalogue is now available to buy along with all it's merchandise of characters, vehicles, species and locations. Click on your favourite tag below to order.
                    </p>
                </center>
            </div>
            <div className="container">
                <div className="movie_grid">
                    {display(props.filmslist)}
                </div>
            </div>
        </>
    )
}

export default HomeDisplay;