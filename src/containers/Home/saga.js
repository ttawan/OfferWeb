/**
 * Create Redux saga
 */

import {put, call, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {API_BASE} from 'utils/apis';
import {FETCH_ITEMS_REQUEST} from './actionTypes';
import {fetchItemsSuccess, fetchItemsFailed} from './actions';
import normalized from './schemas';

/**
 * Load items
 */
function getOfferService() {
  return new Promise((resolve, reject) => {
    axios
      .get(API_BASE)
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
}

/**
 * Get items from API and update on reducer
 */
function* getOfferItems() {
  try {
    const items = yield call(getOfferService);
    const allItems = normalized({offers: items});
    yield put(fetchItemsSuccess(allItems));
  } catch (err) {
    yield put(fetchItemsFailed(err));
  }
}

/**
 * Saga root
 */
export default function* root() {
  // User request items
  yield takeLatest(FETCH_ITEMS_REQUEST, getOfferItems);
}
