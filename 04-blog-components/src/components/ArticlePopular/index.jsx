import "./ArticlePopular.css";
import ArticleItem from "../ArticleItem";
import MainTitle from "../Shared/MainTitle";
export default function ArticlePopular() {
  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        <MainTitle
          type="1"
          title="Popular Articles"
          href="/"
          btnText="View More"
        />
        <div className="popular-news__list spacing">
          <div className="popular-news__list--left">
            <div className="popular-news__list--row">
              <ArticleItem type="2" />
              <ArticleItem type="2" />
            </div>
          </div>
          <div className="popular-news__list--right">
            <div className="popular-news__list--row">
              <ArticleItem type="4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
