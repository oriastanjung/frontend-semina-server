import {
  START_FETCHING_SPEAKERS,
  SUCCESS_FETCHING_SPEAKERS,
  ERROR_FETCHING_SPEAKERS,
  SET_KEYWORD,
} from './constants';

import { getData } from '../../utils/fetchData';
import debounce from 'debounce-promise';
import { clearNotif } from '../notif/actions';

let debouncedFetchSpeakers = debounce(getData, 1000);

export const startFetchingSpeakers = () => {
  return {
    type: START_FETCHING_SPEAKERS,
  };
};

export const successFetchingSpeakers = ({ speakers }) => {
  return {
    type: SUCCESS_FETCHING_SPEAKERS,
    speakers,
  };
};

export const errorFetchingSpeakers = () => {
  return {
    type: ERROR_FETCHING_SPEAKERS,
  };
};

export const fetchSpeakers = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingSpeakers());

    try {
      setTimeout(() => {
        dispatch(clearNotif());
      }, 5000);

      let params = {
        keyword: getState().speakers.keyword,
      };

      let res = await debouncedFetchSpeakers('api/v1/speakers', params);

      dispatch(
        successFetchingSpeakers({
          speakers: res.data.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingSpeakers());
    }
  };
};

export const setKeyword = (keyword) => {
  return {
    type: SET_KEYWORD,
    keyword,
  };
};
