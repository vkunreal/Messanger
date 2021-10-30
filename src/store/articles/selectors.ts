import { IState } from "../index";
import { REQUEST_STATUS } from "../../utils/constants";

export const selectArticlesLoading = (state: IState) =>
  state.articles.request.status === REQUEST_STATUS.LOADING;

export const selectArticlesError = (state: IState) =>
  state.articles.request.error;

export const selectArticles = (state: IState) => state.articles.list;
