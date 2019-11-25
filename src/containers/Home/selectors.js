import {createSelector} from 'reselect';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import toArray from 'lodash/toArray';
import {initialState} from './reducer';

// Select reducer domain
export const selectDomain = state => state.home || initialState;

// Get data
const getEntities = (state, keyItem) =>
  get(state, `items.entities[${keyItem}]`);

// Get all items
export const makeSelectAllOffers = () =>
  createSelector(
    selectDomain,
    state => {
      const items = getEntities(state, 'offers');
      if (isEmpty(items)) {
        return [];
      }

      return toArray(items);
    },
  );

export const makeSelectFetchingStatus = () =>
  createSelector(
    selectDomain,
    state => state.isFetching,
  );

export default selectDomain;
