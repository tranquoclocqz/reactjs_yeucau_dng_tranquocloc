import "./latest-news-list.css";

import MainTitle from "../shared/MainTitle";
import ArticleItem from "../ArticleItem";

function ArticleLatest() {
  const articleAttr = {
    href: "/",
    image: "assets/images/blog-1.jpg",
    className: "",
    title: "Only Someone Who's Seen The Mummy Will Pass This",
  };
  const authorAttr = {
    avatar: "/assets/images/john-doe.png",
    title: "John Doe",
    date: "June 02, 2020",
    time: "1 min",
  };
  return (
    <div className="latest-news section">
      <div className="tcl-container">
        <MainTitle />

        <div className="latest-news__list spacing">
          <div className="latest-news__card">
            <ArticleItem articleAttr={articleAttr} authorAttr={authorAttr} />
          </div>

          <div className="latest-news__card">
            <ArticleItem articleAttr={articleAttr} authorAttr={authorAttr} />
          </div>

          <div className="latest-news__card">
            <ArticleItem articleAttr={articleAttr} authorAttr={authorAttr} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleLatest;
