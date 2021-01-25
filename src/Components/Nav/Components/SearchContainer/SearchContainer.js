import React, { Component } from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import Location from './Components/Location/Location';
import CheckInOutDate from './Components/CheckInOutDate/CheckInOutDate';
import Guests from './Components/Guests/Guests';
import './SearchContainer.scss';

class SearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      currentTab: 0,
      startDate: null,
      endDate: null,
      focusedInput: null,
      adult: 0,
      child: 0,
      kid: 0,
    };
  }

  clickTab = id => {
    this.setState({
      currentTab: id,
    });
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.setState({
      startDate,
      endDate,
    });
  };

  onFocusChange = focusedInput => {
    this.setState({
      focusedInput,
    });
  };

  controllQuantity = (evt, selectedId) => {
    if (evt.target.name === 'plus') {
      selectedId === 'kid' && this.state.kid === 0 && this.state.adult === 0
        ? this.setState(prevState => ({
            adult: prevState.adult + 1,
            kid: prevState.kid + 1,
          }))
        : this.setState(prevState => ({
            [selectedId]: prevState[selectedId] + 1,
          }));
    } else {
      this.setState(prevState => ({
        [selectedId]: prevState[selectedId] - 1,
      }));
    }
  };

  render() {
    const {
      currentTab,
      startDate,
      endDate,
      focusedInput,
      adult,
      child,
      kid,
    } = this.state;

    const SEARCH_TABS = {
      1: <Location />,
      2: (
        <CheckInOutDate
          startDate={startDate}
          endDate={endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={focusedInput}
          onFocusChange={this.onFocusChange}
        />
      ),
      3: <CheckInOutDate />,
      4: (
        <Guests
          controllQuantity={this.controllQuantity}
          adult={adult}
          child={child}
          kid={kid}
        />
      ),
    };

    return (
      <section>
        <SearchBar
          clickTab={this.clickTab}
          startDate={startDate}
          endDate={endDate}
          adult={adult}
          child={child}
          kid={kid}
        />
        <div>{SEARCH_TABS[currentTab]}</div>
      </section>
    );
  }
}

export default SearchContainer;
