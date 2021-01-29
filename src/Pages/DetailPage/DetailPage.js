import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Components/Header';
import PhotoContainer from './Components/PhotoContainer';
import HostInfo from './Components/HostInfo';
import BedType from './Components/BedType';
import Facility from './Components/Facility';
import Location from './Components/Location';
import { ReservationBox } from './Components/ReservationBox/ReservationBox';
import { HostInfoDetail } from './Components/HostInfoDetail';
import { ReviewList } from './Components/ReviewList';
// import { MenuTab } from './Components/MenuTab/MenuTab';
import { Footer } from '../../Components/Footer/Footer';
import { SERVER_API } from '../../config';

const DetailPage = props => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`${SERVER_API}/spaces/${parseInt(props.match.params.id)}`)
      .then(res => res.json())
      .then(data => setData(data.detail_space[0]));
  };

  return (
    <>
      {/* <MenuTab /> */}
      <Article>
        <div>
          <Header data={data} />
          <PhotoContainer data={data} />
          <ContentWrapper>
            <Content>
              <HostInfo data={data} />
              <BedType data={data} />
              <Facility data={data} />
            </Content>
            <ReservationBox data={data} />
          </ContentWrapper>
          <ReviewList data={data} />
          <HostInfoDetail data={data} />
          <Location data={data} />
        </div>
      </Article>
      <Footer />
    </>
  );
};

export default withRouter(DetailPage);

const Article = styled.article`
  width: 1200px;
  margin: 108px auto 24px auto;
  padding: 0 80px;
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  width: 55%;
`;
