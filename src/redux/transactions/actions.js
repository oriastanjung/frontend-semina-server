import {
  START_FETCHING_TRANSACTIONS,
  SUCCESS_FETCHING_TRANSACTIONS,
  ERROR_FETCHING_TRANSACTIONS,
  SET_KEYWORD,
  SET_PAGE,
  SET_DATE,
  SET_EVENT,
} from './constants';

import { getData } from '../../utils/fetchData';
import debounce from 'debounce-promise';
import { clearNotif } from '../notif/actions';
import moment from 'moment';

let debouncedFetchTransactions = debounce(getData, 1000);

export const startFetchingTransactions = () => {
  return {
    type: START_FETCHING_TRANSACTIONS,
  };
};

export const successFetchingTransactions = ({ transactions, pages }) => {
  return {
    type: SUCCESS_FETCHING_TRANSACTIONS,
    transactions,
    pages,
  };
};

export const errorFetchingTransactions = () => {
  return {
    type: ERROR_FETCHING_TRANSACTIONS,
  };
};

export const fetchTransactions = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingTransactions());

    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 5000);

      let params = {
        keyword: getState().transactions.keyword,
        event: getState()?.transactions?.event?.value || '',
        page: getState().transactions?.page || 1,
        limit: getState().transactions?.limit || 10,
        startDate: moment(getState().transactions?.date?.startDate).format(
          'YYYY-MM-DD'
        ),
        endDate: moment(getState().transactions?.date?.endDate).format(
          'YYYY-MM-DD'
        ),
      };

      let res = await debouncedFetchTransactions('api/v1/transactions', params);

      const _temp = [];
      res.data.data.forEach((res) => {
        _temp.push({
          name: `${res.personalDetail.firstName} ${res.personalDetail.lastName}`,
          email: res.personalDetail.email,
          title: res.historyEvent.title,
          date: res.historyEvent.date,
          venueName: res.historyEvent.venueName,
        });
      });

      dispatch(
        successFetchingTransactions({
          transactions: _temp,
          pages: res.data.pages,
        })
      );
    } catch (error) {
      dispatch(errorFetchingTransactions());
    }
  };
};

export const setKeyword = (keyword) => {
  return {
    type: SET_KEYWORD,
    keyword,
  };
};

export const setPage = (page) => {
  return {
    type: SET_PAGE,
    page,
  };
};

export const setDate = (ranges) => {
  return {
    type: SET_DATE,
    ranges,
  };
};

export const setEvent = (event) => {
  return {
    type: SET_EVENT,
    event,
  };
};
