import React from 'react';
import { withRouter } from 'react-router-dom';
import Filters from './Filters/Filters';
import Availables from './Availables/Availables';
// import { data } from './Data';
import GoogleMap from './GoogleMap/GoogleMap';
import PaginationBtns from './Availables/PaginationBtns/PaginationBtns';
import { Footer } from '../../Components/Footer/Footer';
// import { results } from './Data';
import { SPACES_API } from '../../config';
import './List.scss';

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInfo: {},
      roomsData: [],
      pageNum: 5,
      currentPage: 1,
      hoveredId: 0,
    };
  }

  componentDidMount() {
    this.setState({
      searchInfo: this.props.location.state,
    });
    fetch(SPACES_API)
      .then(res => res.json())
      .then(res => {
        this.setState({
          roomsData: res.results,
        });
      });
    // this.setState({
    //   roomsData: results,
    // });
  }

  fetchRooms = num => {
    fetch(`${SPACES_API}?page=${num}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          roomsData: data.results,
        });
      });
    this.setState({
      currentPage: num,
    });
  };

  addFilter = str => {
    fetch(`${SPACES_API}?type=${str}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          roomsData: data.results,
        });
      });
  };

  goToDetail = id => {
    this.props.history.push(`list/detail/${id}`);
  };

  toggleHoverId = id => {
    this.setState(
      this.state.hoveredId === id
        ? {
            hoveredId: 0,
          }
        : { hoveredId: id }
    );
  };

  render() {
    const {
      roomsData,
      hoveredId,
      pageNum,
      currentPage,
      searchInfo,
    } = this.state;

    const { fetchRooms, goToDetail, toggleHoverId } = this;
    const diffDate =
      Math.ceil(
        Math.abs(
          searchInfo.endDate?.getTime() - searchInfo.startDate?.getTime()
        )
      ) /
      (1000 * 3600 * 24);
    const totalGuest = searchInfo.adult + searchInfo.child + searchInfo.kid;
    console.log(this.state.searchInfo);
    return (
      <>
        {this.state.roomsData.length > 0 ? (
          <div>
            <div className="List">
              <div className="listWrapper">
                <div className="filter">
                  <div className="searchOption">
                    <ul>
                      <li>
                        {roomsData?.length > 300
                          ? `${roomsData?.length}개 이상의 숙소`
                          : `숙박 ${roomsData?.length}건`}{' '}
                      </li>
                      <li>
                        {`${
                          1 + searchInfo.startDate?.getMonth()
                        }월 ${searchInfo.startDate?.getDate()}일 - ${
                          1 + searchInfo.endDate?.getMonth()
                        }월 ${searchInfo.endDate?.getDate()}일`}
                      </li>
                      <li> 게스트 {totalGuest}명 </li>
                    </ul>
                  </div>
                  <h1>{searchInfo.searchVal}의 숙소</h1>
                  <Filters />
                </div>
                <div className="content">
                  <Availables
                    roomsData={roomsData}
                    goToDetail={goToDetail}
                    toggleHoverId={toggleHoverId}
                    hoveredId={hoveredId}
                    diffDate={diffDate}
                  />
                </div>
                <PaginationBtns
                  pageNum={pageNum}
                  fetchRooms={fetchRooms}
                  dataLength={roomsData.length}
                  currentPage={currentPage}
                />
              </div>

              <div className="mapWrapper">
                <GoogleMap
                  goToDetail={goToDetail}
                  hoveredId={hoveredId}
                  roomsData={roomsData}
                />
              </div>
            </div>
            <Footer />
          </div>
        ) : (
          <div className="loadingContainer">
            <img
              className="loadingImg"
              alt="bearbnb"
              src="/images/Nav/redbear.png"
            />
          </div>
        )}
      </>
    );
  }
}

export default withRouter(List);
