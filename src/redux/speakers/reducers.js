import {
  START_FETCHING_SPEAKERS,
  SUCCESS_FETCHING_SPEAKERS,
  ERROR_FETCHING_SPEAKERS,
  SET_KEYWORD,
} from './constants';

const statuslist = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error',
};

const initialState = {
  data: [],
  keyword: '',
  status: statuslist.idle,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_SPEAKERS:
      return { ...state, status: statuslist.process };

    case ERROR_FETCHING_SPEAKERS:
      return { ...state, status: statuslist.error };

    case SUCCESS_FETCHING_SPEAKERS:
      return {
        ...state,
        status: statuslist.success,
        data: action.speakers,
      };

    case SET_KEYWORD:
      return {
        ...state,
        keyword: action.keyword,
      };

    default:
      return state;
  }
}
