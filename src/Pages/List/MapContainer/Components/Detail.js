import React, { Component } from 'react';
import ImgSlider from '../../../../Components/ImgSlider/ImgSlider';
import './Detail.scss';

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      mapDetail: true,
    };
  }

  render() {
    const { data, price } = this.props;
    const { mapDetail } = this.state;
    return (
      <>
        {data && (
          <div className="Detail">
            <div className="miniSlider">
              <ImgSlider images={data.mediaSrc} mapDetail={mapDetail} />
            </div>
            <div className="content">
              <div className="bottomWrapper">
                <p className="rating">
                  <img className="starImg" alt="별점" src="/images/star.png" />
                  {data.ratings}
                </p>
                <ul className="description">
                  {data.area ? (
                    <>
                      <li>{data.allowedSpace}</li>
                      <li>{data.area}</li>
                    </>
                  ) : (
                    <li>{data.allowedSpace}...</li>
                  )}
                </ul>
                <p className="title">{data.title}</p>
                <p className="price">
                  {price}
                  <span>/1박</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Detail;
