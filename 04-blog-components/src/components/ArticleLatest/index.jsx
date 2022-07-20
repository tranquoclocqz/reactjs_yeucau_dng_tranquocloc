import "./ArticleLatest.css";
import MainTitle from "../Shared/MainTitle";
import ArticleItem from "../ArticleItem";
export default function ArticleLatest() {
  return (
    <div className="latest-news section">
      <div className="tcl-container">
        <MainTitle title="Latest Articles"/>
        <div className="latest-news__list spacing">
          <ArticleItem type="1"/>
          <ArticleItem type="1"/>
          <ArticleItem type="1"/>
        </div>
      </div>
    </div>
  );
}
