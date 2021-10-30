import { API_URL } from "../../utils/constants";

export const GET_ARTICLES = "ARTICLES::GET_ARTICLES";
export const GET_ARTICLES_LOADING = "ARTICLES::GET_ARTICLES_LOADING";
export const GET_ARTICLES_SUCCESS = "ARTICLES::GET_ARTICLES_SUCCESS";
export const GET_ARTICLES_FAILURE = "ARTICLES::GET_ARTICLES_FAILURE";

export const getArticlesLoading = () => ({
  type: GET_ARTICLES_LOADING,
});

export const getArticlesSuccess = (articles: any) => ({
  type: GET_ARTICLES_SUCCESS,
  payload: articles,
});

export const getArticlesFailure = (error: string) => ({
  type: GET_ARTICLES_FAILURE,
  payload: error,
});

export const getArticles = () => async (dispatch: any) => {
  dispatch(getArticlesLoading());

  try {
    const res = await fetch(API_URL);

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    const result = await res.json();
    dispatch(getArticlesSuccess(result));
  } catch (e: any) {
    console.log(e);
    dispatch(getArticlesFailure(e.message));
  }
};
