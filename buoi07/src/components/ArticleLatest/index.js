import "./latest-news-list.css";
import ArticleItem from "../ArticleItem";
import MainTitle from "../shared/MainTitle";
import { useSelector, useDispatch } from "react-redux";
import { getListPostAsync } from "../../redux/actions/post";
import { useEffect } from "react";

function ArticleLatest() {
  const dispatch = useDispatch();
  const { articleLatest } = useSelector((state) => state.post);

  useEffect(() => {
    const playload = {
      per_page: 10,
      page: 1,
    };
    dispatch(getListPostAsync(playload));
  }, []);

  return (
    <div className="latest-news section">
      <div className="tcl-container">
        <MainTitle />

        <div className="latest-news__list spacing">
          {articleLatest.length > 0 &&
            articleLatest.map((item, index) => {
              return (
                <div className="latest-news__card" key={item.id}>
                  <ArticleItem postItem={item} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ArticleLatest;
