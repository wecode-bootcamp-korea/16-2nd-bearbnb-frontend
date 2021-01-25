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
      showDetail,
    } = this.props;

    return (
      <div className="wrapper">
        {selected === id && <Detail data={data} price={price} />}
        {price && (
          <button
            className={selected === id ? 'Label selected' : 'Label'}
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
