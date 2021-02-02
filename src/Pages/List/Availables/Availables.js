import React, { Component } from 'react';
import ImgSlider from '../../../Components/ImgSlider/ImgSlider';
import './Availables.scss';

class Availables extends Component {
  toKRW = price => {
    return price.toLocaleString('ko-KR', {
      style: 'currency',
      currency: 'KRW',
    });
  };

  render() {
    const {
      roomsData,
      goToDetail,
      toggleHoverId,
      hoveredId,
      diffDate,
    } = this.props;

    const { toKRW } = this;

    return (
      <div className="Availables">
        <div>
          <ul>
            {roomsData?.map(room => {
              return (
                <li
                  className="rooms"
                  key={room.id}
                  onMouseEnter={() => toggleHoverId(room.id)}
                  onMouseLeave={() => toggleHoverId(room.id)}
                >
                  <div className="listImgSlider">
                    <ImgSlider
                      images={room.space_image}
                      id={room.id}
                      goToDetail={goToDetail}
                      hoveredId={hoveredId}
                    />
                  </div>
                  <div className="infoBox" onClick={() => goToDetail(room.id)}>
                    <p className="description">{`${room.city[0]}의 ${room.property_name} ${room.place_type}`}</p>
                    <p className="title">{room.name}</p>
                    <div className="divider"></div>
                    <div className="specWrapper">
                      <ul>
                        <li>최대 인원 {room.max_people}명</li>
                        <li>침실 {room.bedroom_quantity}개 </li>
                        <li>침대 {room.bed_quantity}개 </li>
                        <li>욕실 {room.bathroom_quantity}개 </li>
                      </ul>
                      <ul>
                        {room.space_option.length > 4
                          ? room.space_option.slice(0, 3).map((option, idx) => {
                              return <li key={idx}>{option}</li>;
                            })
                          : room.space_option.map((option, idx) => {
                              return <li key={idx}>{option}</li>;
                            })}
                      </ul>
                    </div>
                    {room.space_tag.length !== 0 ? (
                      <span className="tag">
                        <img
                          className="tagImage"
                          src="/images/label copy.png"
                          alt="label"
                        />
                        {room.space_tag}
                      </span>
                    ) : (
                      <div style={{ height: '22px' }}></div>
                    )}
                    {/* <span>{parseInt((room.price) - (room.price / parseInt(room.discount)))}</span> */}
                    <p className="price">
                      {toKRW(room.price * 1)}
                      <span>/1박</span>
                    </p>
                    <div className="bottomWrapper">
                      <span className="rating">
                        <img
                          className="starImg"
                          alt="별점"
                          src="/images/star.png"
                        />
                        {room.rating}
                      </span>
                      <span className="totalPrice">
                        총 요금: {toKRW(room.price * diffDate)}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Availables;
