import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, CircularProgress } from "@material-ui/core";
import { getArticles } from "../../store/articles/actions";
import {
  selectArticles,
  selectArticlesError,
  selectArticlesLoading,
} from "../../store/articles/selectors";
import "./styles.scss";

const News = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectArticlesError);
  const loading = useSelector(selectArticlesLoading);
  const articles = useSelector(selectArticles);

  const reload = useCallback(() => {
    dispatch(getArticles());
  }, [dispatch]);

  useEffect(() => {
    reload();
  }, [reload]);

  return (
    <div className="newsCont">
      <h2>News:</h2>

      <section className="newsSec">
        {loading && (
          <div>
            <CircularProgress />
          </div>
        )}

        <div className="newsBlock">
          {error ? (
            <div>Error! {error}</div>
          ) : (
            articles.map((elem) => <h3 key={elem.id}>{elem.title}</h3>)
          )}
        </div>
      </section>
      <Button variant="outlined" onClick={reload}>
        Refresh
      </Button>
    </div>
  );
};

export default News;
