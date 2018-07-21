import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { buildCarProps } from "Utils";
import InfiniteScroll from "react-infinite-scroller";
import { splitEvery } from "ramda";
import { Translate } from "react-localize-redux";
import ReactPlaceholder from "react-placeholder";
import { NUM_OF_VISABLE_CARS } from "../../../constants";
import {
  fetchCars,
  setVisableCars,
  setSortBy,
  setSearchString
} from "../modules/actions";
import { getSortedCars } from "../modules/selectors";
import PlaceHolder from "../components/PlaceHolder";
import CarCard from "../components/CarCard";
import CarListItem from "../components/CarListItem";
import Filters from "../components/Filters";
import SortBy from "../components/SortBy";
import ViewToggle from "../components/ViewToggle";
import SearchBox from "../components/SearchBox";

class CarsContainer extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    chunks: PropTypes.array.isRequired,
    cars: PropTypes.array.isRequired,
    pages: PropTypes.number.isRequired,
    setSortByAction: PropTypes.func.isRequired,
    sortBy: PropTypes.shape({
      assc: PropTypes.bool,
      by: PropTypes.string
    }).isRequired,
    setVisableCars: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired,
    setSearchStringAction: PropTypes.func.isRequired,
    searchString: PropTypes.string.isRequired,
    fetchCarsAction: PropTypes.func.isRequired
  };

  state = {
    hasMore: true,
    view: "grid"
  };

  componentWillMount() {
    this.props.fetchCarsAction();
  }

  handleViewToggle = view => {
    this.setState({ view });
  };

  handleLoadMore = page => {
    const { chunks, pages, cars } = this.props;
    if (page < pages) {
      this.props.setVisableCars([...cars, ...chunks[page]]);
      this.setState({
        hasMore: page < pages
      });
    }
  };

  render() {
    const {
      isFetching,
      cars,
      sortBy,
      setSortByAction,
      total,
      searchString,
      setSearchStringAction,
      fetchCarsAction
    } = this.props;
    const { view } = this.state;
    return (
      <Translate>
        {({ activeLanguage, translate }) => (
          <React.Fragment>
            <div className="w-full lg:w-1/6 pl-5 bg-grey-lighter fixed lg:h-screen lg:block hidden">
              <Filters />
            </div>

            <ReactPlaceholder
              showLoadingAnimation
              customPlaceholder={<PlaceHolder />}
              ready={!isFetching}
            >
              <div className="w-full lg:w-5/6 ml-auto p-5">
                <div className="flex justify-between items-center py-5 px-5 mb-5">
                  <SearchBox
                    value={searchString}
                    placeholder={translate("vehicles", { count: total })}
                    onChange={e =>
                      setSearchStringAction({
                        searchString: e.target.value,
                        locale: activeLanguage.code
                      })
                    }
                  />
                  <div className="flex items-center justify-end">
                    <ViewToggle onChange={this.handleViewToggle} value={view} />
                    <SortBy value={sortBy} onChange={setSortByAction} />
                    <button
                      type="button"
                      className="text-md text-grey hover:text-black px-2"
                    >
                      <i
                        className="fas fa-sync"
                        onClick={() => fetchCarsAction(true)}
                      />
                    </button>
                  </div>
                </div>
                <InfiniteScroll
                  pageStart={0}
                  loadMore={this.handleLoadMore}
                  initialLoad
                  hasMore={this.state.hasMore}
                  loader={
                    <div className="loader" key={0}>
                      Loading ...
                    </div>
                  }
                >
                  <div className="bg-transparent flex flex-wrap -mx2">
                    {cars.map(
                      car =>
                        view === "grid" ? (
                          <CarCard
                            key={car.carID}
                            {...buildCarProps(activeLanguage.code, car)}
                          />
                        ) : (
                          <CarListItem
                            key={car.carID}
                            {...buildCarProps(activeLanguage.code, car)}
                          />
                        )
                    )}
                  </div>
                </InfiniteScroll>
              </div>
            </ReactPlaceholder>
          </React.Fragment>
        )}
      </Translate>
    );
  }
}

const mapSateToProps = state => {
  const chunks = splitEvery(NUM_OF_VISABLE_CARS, state.cars.items);
  return {
    isFetching: state.cars.isFetching,
    searchString: state.cars.searchString,
    cars: getSortedCars(state),
    chunks,
    pages: chunks.length,
    sortBy: state.cars.sortBy,
    total: state.cars.itemsRepositry.length
  };
};
const mapDispatchToProps = dispatch => ({
  fetchCarsAction: payload => dispatch(fetchCars(payload)),
  setVisableCars: payload => dispatch(setVisableCars(payload)),
  setSortByAction: payload => dispatch(setSortBy(payload)),
  setSearchStringAction: payload => dispatch(setSearchString(payload))
});

export default connect(
  mapSateToProps,
  mapDispatchToProps
)(CarsContainer);
