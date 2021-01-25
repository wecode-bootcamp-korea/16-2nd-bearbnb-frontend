import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImgSlider.scss';

class ImgSlider extends Component {
  render() {
    const { images, mapDetail = false } = this.props;
    return (
      <div className="ImgSlider">
        <Slider dots={true}>
          {images.map((image, idx) => {
            return (
              <img
                className={mapDetail ? 'detailImg' : 'sliderImg'}
                key={idx}
                alt={`이미지${idx}`}
                src={image}
              />
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default ImgSlider;
