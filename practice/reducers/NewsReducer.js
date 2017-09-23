import { FETCH_NEWS_LIST_REQUEST, FETCH_NEWS_LIST_SUCCESS, FETCH_NEWS_LIST_FAILURE, CHANGE_NEWS_LIST_PAGE } from '../actions/NewsAction'

const initailState = {
  page: 1,
  status: null,
  data: [],
  error: null
};

export default (state = initailState, action) => {
  switch (action.type) {
    case FETCH_NEWS_LIST_REQUEST:
      return {
        ...state,
        status: 'request'
      };
    case FETCH_NEWS_LIST_SUCCESS:
      return {
        ...state,
        status: 'success',
        data: action.response
      }
    case FETCH_NEWS_LIST_FAILURE:
      return {
        ...state,
        status: 'failure',
        error: action.error
      }
    case CHANGE_NEWS_LIST_PAGE: 
      return {
        ...state,
        page: action.payload.page
      };
    default:
      return state;
  }
}