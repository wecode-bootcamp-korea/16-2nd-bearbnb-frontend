import React, { Component } from 'react';
import RefundPolicy from './FilterModals/RefundPolicy';
import Type from './FilterModals/Type';
import Price from './FilterModals/Price';
import AddFilter from './FilterModals/AddFilter';
import './Filters.scss';

// const modalMapper = {
//   RefundPolicy : <RefundPolicy />,
//   Type : <Type />,
//   Price : <Price />,
//   AddFilter : <AddFilter />,
// }
class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedModal: 0,
    };
  }

  toggleFilterModal = e => {
    const { name } = e.target;
    this.setState({
      selectedModal: name,
    });
  };

  render() {
    const { toggleFilterModal } = this;
    return (
      <div className="Filters">
        <button name="RefundPolicy" onClick={toggleFilterModal}>
          유연한 환불정책
        </button>
        <button name="Type" onClick={this.toggleFilterModal}>
          숙소 유형
        </button>
        <button name="Price" onClick={this.toggleFilterModal}>
          요금
        </button>
        <button name="AddFilter" onClick={this.toggleFilterModal}>
          필터 추가하기
        </button>
      </div>
    );
  }
}

export default Filters;
