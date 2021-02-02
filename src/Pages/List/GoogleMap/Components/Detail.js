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
    const { data, price, goToDetail } = this.props;
    const { mapDetail } = this.state;
    return (
      <>
        {data && (
          <div className="Detail">
            <div className="miniSlider">
              <ImgSlider
                images={data.space_image}
                mapDetail={mapDetail}
                goToDetail={goToDetail}
                id={data.id}
              />
            </div>
            <div className="content" onClick={() => goToDetail(data.id)}>
              <div className="bottomWrapper">
                <p className="rating">
                  <img className="starImg" alt="별점" src="/images/star.png" />
                  {data.rating}
                </p>
                <ul className="description">
                  {data.city ? (
                    <>
                      <li>{data.place_type}</li>
                      <li>{data.city}</li>
                    </>
                  ) : (
                    <li>{data.place_type}...</li>
                  )}
                </ul>
                <p className="title">{data.name}</p>
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
