import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import SearchBar from './Components/SearchBar/SearchBar';
import Location from './Components/Location/Location';
import Guests from './Components/Guests/Guests';
import './SearchContainer.scss';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      startDate:
        this.props.location.pathname === '/'
          ? null
          : moment(this.props.location.state.startDate),
      endDate:
        this.props.location.pathname === '/'
          ? null
          : moment(this.props.location.state.endDate),
      focusedInput: null,
      adult:
        this.props.location.pathname === '/'
          ? 0
          : this.props.location.state.adult,
      child:
        this.props.location.pathname === '/'
          ? 0
          : this.props.location.state.child,
      kid:
        this.props.location.pathname === '/'
          ? 0
          : this.props.location.state.kid,
      searchList: [],
      searchInputValue:
        this.props.location.pathname === '/'
          ? ''
          : this.props.location.state.searchVal,
    };
  }

  componentDidMount() {
    fetch('/data/search.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          searchList: data.SEARCH_DATA,
        });
      });
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

  inputValHandler = evt => {
    this.setState({
      searchInputValue: evt.target.value,
    });
  };

  selectLocation = selected => {
    this.setState({
      searchInputValue: selected,
      currentTab: 0,
    });
  };

  goToList = () => {
    if (this.state.startDate && this.state.endDate) {
      this.props.history.push({
        pathname: '/list',
        state: {
          startDate: this.state.startDate._d,
          endDate: this.state.endDate._d,
          longitude: this.state.searchList.filter(
            list => list.gu === this.state.searchInputValue
          )[0].longitude,
          latitude: this.state.searchList.filter(
            list => list.gu === this.state.searchInputValue
          )[0].latitude,
          adult: this.state.adult,
          child: this.state.child,
          kid: this.state.kid,
          searchVal: this.state.searchInputValue,
        },
      });
    } else {
      this.props.history.push({
        pathname: '/list',
        state: {
          startDate: new Date('14 / 02 / 2021'),
          endDate: new Date('06 / 02 / 2021'),
          longitude: this.state.searchList.filter(
            list => list.gu === this.state.searchInputValue
          )[0].longitude,
          latitude: this.state.searchList.filter(
            list => list.gu === this.state.searchInputValue
          )[0].latitude,
          adult: this.state.adult,
          child: this.state.child,
          kid: this.state.kid,
          searchVal: this.state.searchInputValue,
        },
      });
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
      searchList,
      searchInputValue,
    } = this.state;

    const SEARCH_TABS = {
      1: (
        <Location
          searchList={searchList}
          searchInputValue={searchInputValue}
          selectLocation={this.selectLocation}
        />
      ),
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
          onDatesChange={this.onDatesChange}
          focusedInput={focusedInput}
          onFocusChange={this.onFocusChange}
          searchInputValue={searchInputValue}
          inputValHandler={this.inputValHandler}
          goToList={this.goToList}
        />
        <div>{SEARCH_TABS[currentTab]}</div>
      </section>
    );
  }
}

export default withRouter(SearchContainer);
