import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import get from 'lodash/get';
import DetailView from 'views/Detail';
import {
  fetchItemsRequest,
} from 'containers/Home/actions';
import {
  makeSelectAllOffers,
} from 'containers/Home/selectors';
import {
  makeSelectOffer,
} from './selectors';

const mapStateToProps = createStructuredSelector({
  allOffers: makeSelectAllOffers(),
});

const makeMapStateToProps = (state, ownProps) => {
  const { allOffers } = mapStateToProps(state, ownProps);
  const offerId = Number(get(ownProps, 'match.params.id') || 0);
  return {
    offer: makeSelectOffer(allOffers, offerId),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItemsRequest()),
});

const withConnect = connect(
  makeMapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(DetailView);
