import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImgSlider.scss';

class ImgSlider extends Component {
  render() {
    const { images, mapDetail = false, id, goToDetail, hoveredId } = this.props;
    return (
      <div className="ImgSlider">
        <Slider
          dots={true}
          arrows={id === hoveredId || mapDetail ? true : false}
        >
          {images.map((image, idx) => {
            return (
              <img
                className={mapDetail ? 'detailImg' : 'sliderImg'}
                key={idx}
                alt={`이미지${idx}`}
                src={image}
                onClick={() => goToDetail(id)}
              />
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default ImgSlider;
