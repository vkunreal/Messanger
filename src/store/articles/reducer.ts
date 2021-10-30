import { IAction } from "./../messages/interfaces";
import { REQUEST_STATUS } from "../../utils/constants";
import {
  GET_ARTICLES_FAILURE,
  GET_ARTICLES_LOADING,
  GET_ARTICLES_SUCCESS,
} from "./actions";

const initialState = {
  list: [],

  request: {
    error: "",
    status: REQUEST_STATUS.IDLE,
  },
};

export const ArticlesReducer = (
  state = initialState,
  { type, payload }: IAction
) => {
  switch (type) {
    case GET_ARTICLES_LOADING:
      return {
        ...state,
        request: {
          error: "",
          status: REQUEST_STATUS.LOADING,
        },
      };

    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        list: payload,

        request: {
          ...state.request,
          status: REQUEST_STATUS.SUCCESS,
        },
      };

    case GET_ARTICLES_FAILURE:
      return {
        ...state,
        request: {
          error: payload,
          status: REQUEST_STATUS.FAILURE,
        },
      };

    default:
      return state;
  }
};
