import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ImgSlider from '../../../Components/ImgSlider/ImgSlider';
import PaginationBtns from './PaginationBtns/PaginationBtns';
import './Availables.scss';

class Availables extends Component {
  goToDetail = id => {
    this.props.history.push(`/details/${id}`);
  };

  toKRW = price => {
    return price.toLocaleString('ko-KR', {
      style: 'currency',
      currency: 'KRW',
    });
  };

  render() {
    const { searchOptions, rooms } = this.props;
    const { goToDetail, toKRW } = this;
    return (
      <div className="Availables">
        <div>
          <ul>
            {rooms.map(room => {
              const {
                maxOccupancy,
                roomNum,
                bed,
                bathroom,
                elevator,
                kitchen,
                wifi,
                airConditioner,
              } = room.specifications;
              return (
                <li className="rooms" key={room.id}>
                  <div className="listImgSlider">
                    <ImgSlider images={room.mediaSrc} />
                  </div>
                  <div className="infoBox">
                    <p className="description">{`${room.area}의 ${room.type} ${room.allowedSpace}`}</p>
                    <p className="title">{room.title}</p>
                    <div className="divider"></div>
                    <div className="specWrapper">
                      <ul>
                        <li>최대 인원 {maxOccupancy}명</li>
                        <li>침실 {roomNum}개 </li>
                        <li>침대 {bed}개 </li>
                        <li>욕실 {bathroom}개 </li>
                      </ul>
                      <ul>
                        {elevator && <li>엘리베이터</li>}
                        {kitchen && <li>주방</li>}
                        {wifi && <li>무선 인터넷</li>}
                        {airConditioner && <li>에어컨</li>}
                      </ul>
                    </div>
                    {room.tag ? (
                      <span className="tag">
                        <img
                          className="tagImage"
                          src="/images/label copy.png"
                          alt="label"
                        />
                        {room.tag}
                      </span>
                    ) : (
                      <div style={{ height: '22px' }}></div>
                    )}
                    {/* <span>{parseInt((room.price) - (room.price / parseInt(room.discount)))}</span> */}
                    <p className="price">
                      {toKRW(room.price)}
                      <span>/1박</span>
                    </p>
                    <div className="bottomWrapper">
                      <span className="rating">
                        <img
                          className="starImg"
                          alt="별점"
                          src="/images/star.png"
                        />
                        {room.ratings}
                      </span>
                      <span className="totalPrice">
                        총 요금: {toKRW(room.price * searchOptions.dates)}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="suggetions">RecentlyViewed slider?</div>

        <div className="pageBtns">
          <PaginationBtns />
        </div>
      </div>
    );
  }
}

export default withRouter(Availables);
