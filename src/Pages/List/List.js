import React from 'react';
import Filters from './Filters/Filters';
import Availables from './Availables/Availables';
// import MapContainer from './MapContainer/MapContainer';
// import Navbar from '../../Components/Nav/Navbar';
import { data } from './Data';
import './List.scss';
import GoogleMap from './MapContainer/GoogleMap';

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      searchOptions: {
        searchArea: '서울시 강남구',
        datesString: '1월27일 - 1월30일',
        dates: 3,
        guestNumber: 1,
      },
      roomsData: [],
    };
  }

  componentDidMount() {
    this.setState({
      roomsData: data,
    });
    // fetch(address)
    //  .then(res => res.json())
    //  .then(res => {
    //    this.setState({
    //     searchOptions: res.?,
    //     roomsData: res.spaces,
    //    });
    //  });
  }

  render() {
    const { searchOptions, roomsData } = this.state;
    return (
      <>
        {/* <Navbar /> */}
        <div className="List">
          <div className="listWrapper">
            <div className="filter">
              <div className="searchOption">
                <ul>
                  <li>
                    {roomsData.length > 300
                      ? `${roomsData.length}개 이상의 숙소`
                      : `숙박 ${roomsData.length}건`}{' '}
                  </li>
                  <li>{searchOptions.datesString} </li>
                  <li> 게스트 {searchOptions.guestNumber}명 </li>
                </ul>
              </div>
              <h1>{searchOptions.searchArea}의 숙소</h1>
              <Filters />
              <p>예약하기 전에 코로나10 관련 여행 제한 사항을 확인하세요. </p>
              <a href="https://www.airbnb.co.kr/help/topic/1418/%EC%A0%95%EB%B6%80%EC%9D%98-%EC%97%AC%ED%96%89-%EC%A0%9C%ED%95%9C-%EB%B0%8F-%EC%97%AC%ED%96%89-%EA%B2%BD%EB%B3%B4">
                자세히 알아보기
              </a>
            </div>
            <div className="content">
              <Availables searchOptions={searchOptions} rooms={roomsData} />
            </div>
          </div>

          <div className="mapWrapper">
            {/* <MapContainer /> */}
            <GoogleMap />
          </div>
        </div>
      </>
    );
  }
}

export default List;
