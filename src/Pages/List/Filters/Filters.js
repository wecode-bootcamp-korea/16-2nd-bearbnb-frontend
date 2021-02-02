import React, { Component, Fragment } from 'react';
import RefundPolicy from './FilterModals/RefundPolicy';
import Type from './FilterModals/Type';
import Price from './FilterModals/Price';
import AddFilter from './FilterModals/AddFilter';
import { FILTER_OPTIONS } from '../Data';
import './Filters.scss';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: '',
    };
  }

  toggleFilterModal = e => {
    e.stopPropagation();
    const { name } = e.target;
    this.setState(
      this.state.showModal === name
        ? {
            showModal: '',
          }
        : {
            showModal: name,
          }
    );
  };

  render() {
    const { toggleFilterModal } = this;
    const { showModal } = this.state;
    const MODAL_MAPPER = {
      RefundPolicy: <RefundPolicy />,
      Type: <Type />,
      Price: <Price />,
      AddFilter: (
        <AddFilter
          toggleFilterModal={toggleFilterModal}
          showModal={showModal}
        />
      ),
    };
    return (
      <>
        <div className="Filters">
          {FILTER_OPTIONS.map(filter => {
            return (
              <Fragment key={filter.id}>
                <button
                  className={showModal === filter.name ? 'selected' : ''}
                  name={filter.name}
                  onClick={toggleFilterModal}
                >
                  {filter.description}
                </button>
              </Fragment>
            );
          })}
        </div>
        {MODAL_MAPPER[showModal]}
        <p>예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요.</p>{' '}
        <a href="https://www.airbnb.co.kr/help/topic/1418/%EC%A0%95%EB%B6%80%EC%9D%98-%EC%97%AC%ED%96%89-%EC%A0%9C%ED%95%9C-%EB%B0%8F-%EC%97%AC%ED%96%89-%EA%B2%BD%EB%B3%B4">
          자세히 알아보기
        </a>
      </>
    );
  }
}

export default Filters;
