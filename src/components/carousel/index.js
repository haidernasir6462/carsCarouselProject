import React, { Component } from "react";
import Slider from "react-slick";
import Data from './cars.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", right: 10, zIndex: 999 }}
      onClick={onClick}
      />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", left: 10, zIndex: 999 }}
      onClick={onClick}
    />
  );
}
export default class Responsive extends Component {
  render() {
    var settings = {
      arrows: true,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: true,
            prevArrow: '',
            nextArrow: '',
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            prevArrow: '',
            nextArrow: '',
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings} className="mx-1">
        {Data.map( post =>{
            return(
              <div className="m-3">
                <p className="card-text">{post.bodyType}</p>
                <div className="d-flex flex-xl-row flex-md-column">
                  <h5 className="card-title me-2">{post.modelName}</h5>
                  <p className="card-text">{post.modelType}</p>
                </div>
                <img src={post.imageUrl} className="card-img-top p-1" alt="..."/>
              </div>
            )})
          }
        </Slider>
      </div>
    );
  }
}

