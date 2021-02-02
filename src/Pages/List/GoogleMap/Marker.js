import React, { Component } from 'react';
import Detail from './Components/Detail';
import './Marker.scss';

class Marker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      id,
      price,
      data,
      selected,
      toggleSelected,
      goToDetail,
      hoveredId,
    } = this.props;

    return (
      <div
        className={
          selected === id || hoveredId === id ? 'wrapper selected' : 'wrapper'
        }
      >
        {selected === id && (
          <Detail data={data} price={price} goToDetail={goToDetail} />
        )}
        {price && (
          <button
            className={
              selected === id || hoveredId === id ? 'Label selected' : 'Label'
            }
            onClick={() => toggleSelected(id)}
          >
            {price}
          </button>
        )}
      </div>
    );
  }
}

export default Marker;
