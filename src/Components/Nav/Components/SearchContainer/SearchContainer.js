import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  locationSearchValAction,
  setKidQtyAction,
  plusGuestQtyAction,
  minusGuestQtyAction,
} from '../../../../actions';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import SearchBar from './Components/SearchBar/SearchBar';
import Location from './Components/Location/Location';
import Guests from './Components/Guests/Guests';
import './SearchContainer.scss';

const SearchContainer = props => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentTab: 0,
  //     startDate:
  //       this.props.location.pathname === '/list'
  //         ? moment(this.props.location.state.startDate)
  //         : null,
  //     endDate:
  //       this.props.location.pathname === '/list'
  //         ? moment(this.props.location.state.endDate)
  //         : null,
  //     focusedInput: null,
  //     adult:
  //       this.props.location.pathname === '/list'
  //         ? this.props.location.state.adult
  //         : 0,
  //     child:
  //       this.props.location.pathname === '/list'
  //         ? this.props.location.state.child
  //         : 0,
  //     kid:
  //       this.props.location.pathname === '/list'
  //         ? this.props.location.state.kid
  //         : 0,
  //     searchList: [],
  //     searchInputValue:
  //       this.props.location.pathname === '/list'
  //         ? this.props.location.state.searchVal
  //         : '',
  //   };
  // }

  const [currentTab, setCurrentTab] = useState(0);
  const [startDate, setStartDate] = useState(
    props.location.pathname === '/list'
      ? moment(props.location.state.startDate)
      : null
  );
  const [endDate, setEndDate] = useState(
    props.location.pathname === '/list'
      ? moment(props.location.state.endDate)
      : null
  );
  const [focusedInput, setFocusedInput] = useState(null);
  // const [adult, setAdult] = useState(
  //   props.location.pathname === '/list' ? props.location.state.adult : 0
  // );
  // const [child, setChild] = useState(
  //   props.location.pathname === '/list' ? props.location.state.child : 0
  // );
  // const [kid, setKid] = useState(
  //   props.location.pathname === '/list' ? props.location.state.kid : 0
  // );
  // const [guestQty, setGusetQty] = useState({
  //   adult: props.location.pathname === '/list' ? props.location.state.adult : 0,
  //   child: props.location.pathname === '/list' ? props.location.state.child : 0,
  //   kid: props.location.pathname === '/list' ? props.location.state.kid : 0,
  // });
  const [searchList, setSearchList] = useState([]);
  // const [searchInputValue, setSearchInputValue] = useState(
  //   props.location.pathname === '/list' ? props.location.state.searchVal : ''
  // );

  //redux 적용 부분
  const searchInputValue = useSelector(state => state.locationValReducer);
  const guestQty = useSelector(state => state.guestQtyReducer);
  const dispatch = useDispatch();

  // componentDidMount() {
  //   fetch('/data/search.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         searchList: data.SEARCH_DATA,
  //       });
  //     });
  // }

  useEffect(() => {
    fetch('/data/search.json')
      .then(res => res.json())
      .then(data => {
        setSearchList(data.SEARCH_DATA);
      });
  }, []);

  const clickTab = id => {
    // this.setState({
    //   currentTab: id,
    // });
    setCurrentTab(id);
  };

  const onDatesChange = ({ startDate, endDate }) => {
    // this.setState({
    //   startDate,
    //   endDate,
    // });
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const onFocusChange = focusedInput => {
    // this.setState({
    //   focusedInput,
    // });
    setFocusedInput(focusedInput);
  };

  const controllQuantity = (evt, selectedId) => {
    // if (evt.target.name === 'plus') {
    //   selectedId === 'kid' && this.state.kid === 0 && this.state.adult === 0
    //     ? this.setState(prevState => ({
    //         adult: prevState.adult + 1,
    //         kid: prevState.kid + 1,
    //       }))
    //     : this.setState(prevState => ({
    //         [selectedId]: prevState[selectedId] + 1,
    //       }));
    // } else {
    //   this.setState(prevState => ({
    //     [selectedId]: prevState[selectedId] - 1,
    //   }));
    // }
    if (evt.target.name === 'plus') {
      if (selectedId === 'kid' && guestQty.kid === 0 && guestQty.adult === 0) {
        dispatch(setKidQtyAction());
      } else {
        dispatch(plusGuestQtyAction(selectedId));
      }
    } else {
      dispatch(minusGuestQtyAction(selectedId));
    }
  };

  const inputValHandler = evt => {
    // this.setState({
    //   searchInputValue: evt.target.value,
    // });
    // setSearchInputValue(evt.target.value);
    dispatch(locationSearchValAction(evt.target.value));
  };

  const selectLocation = selected => {
    // this.setState({
    //   searchInputValue: selected,
    //   currentTab: 0,
    // });
    // setSearchInputValue(selected);
    dispatch(locationSearchValAction(selected));
    setCurrentTab(0);
  };

  const goToList = () => {
    if (startDate && endDate) {
      props.history.push({
        pathname: '/list',
        state: {
          startDate: startDate._d,
          endDate: endDate._d,
          longitude: searchList.filter(list => list.gu === searchInputValue)[0]
            .longitude,
          latitude: searchList.filter(list => list.gu === searchInputValue)[0]
            .latitude,
          // adult: guestQty.adult,
          // child: guestQty.child,
          // kid: guestQty.kid,
          // searchVal: searchInputValue,
        },
      });
    } else {
      this.props.history.push({
        pathname: '/list',
        state: {
          startDate: new Date('14 / 02 / 2021'),
          endDate: new Date('06 / 02 / 2021'),
          longitude: searchList.filter(list => list.gu === searchInputValue)[0]
            .longitude,
          latitude: searchList.filter(list => list.gu === searchInputValue)[0]
            .latitude,
          // adult: guestQty.adult,
          // child: guestQty.child,
          // kid: guestQty.kid,
          // searchVal: searchInputValue,
        },
      });
    }
  };

  const SEARCH_TABS = {
    1: (
      <Location
        searchList={searchList.length > 0 && searchList}
        searchInputValue={searchInputValue}
        selectLocation={selectLocation}
      />
    ),
    4: (
      <Guests
        controllQuantity={controllQuantity}
        // adult={adult}
        // child={child}
        // kid={kid}
        guestQty={guestQty}
      />
    ),
  };

  return (
    <section>
      <SearchBar
        clickTab={clickTab}
        startDate={startDate}
        endDate={endDate}
        // adult={adult}
        // child={child}
        // kid={kid}
        guestQty={guestQty}
        onDatesChange={onDatesChange}
        focusedInput={focusedInput}
        onFocusChange={onFocusChange}
        searchInputValue={searchInputValue}
        inputValHandler={inputValHandler}
        goToList={goToList}
      />
      <div>{SEARCH_TABS[currentTab]}</div>
    </section>
  );
};

export default withRouter(SearchContainer);
