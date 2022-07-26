import "./popular-news-list.css";
import ArticleItem from "../ArticleItem";
import MainTitle from "../shared/MainTitle";
function ArticlePopular() {
  const listCategory = [
    {
      title: "News",
      href: "/",
    },
    {
      title: "News",
      href: "/",
    }
  ];
  const articleAttr = {
    href: "/",
    image: "assets/images/blog-1.jpg",
    className: "style-card",
    title: "Only Someone Who's Seen The Mummy Will Pass This",
    description: `Markdown is a lightweight markup language with plain-text-formatting
    syntax. Its design allows it to…`,
  };
  const authorAttr = {
    avatar: "/assets/images/john-doe.png",
    title: "John Doe",
    date: "June 02, 2020",
    time: "1 min",
  };
  const btnAttr = {
    type: 'category'
  }
  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        <MainTitle
          title="Popular Articles"
          btnAttribute={{
            as: "a",
            type: "default",
            children: "View More",
            htmlType: "",
            href: "/",
          }}
        />
        {/* End Main Title */}
        <div className="popular-news__list spacing">
          <div className="popular-news__list--left">
            <div className="popular-news__list--row">
              {/* Popular news card */}
              <div className="popular-news__list--card">
                <ArticleItem
                  articleAttr={articleAttr}
                  authorAttr={authorAttr}
                  listCategory={listCategory}
                  btnAttr={btnAttr}
                />
              </div>
              <div className="popular-news__list--card">
                <ArticleItem
                  articleAttr={articleAttr}
                  authorAttr={authorAttr}
                  listCategory={listCategory}
                  btnAttr={btnAttr}
                />
              </div>
              {/* End Popular news card */}
            </div>
          </div>
          <div className="popular-news__list--right">
            <div className="popular-news__list--row">
              {/* Popular news card */}
              <div className="popular-news__list--card">
                <ArticleItem
                  articleAttr={{...articleAttr, className: `style-card style-row`}}
                  authorAttr={authorAttr}
                  listCategory={listCategory}
                  btnAttr={btnAttr}
                />
              </div>
              {/* End Popular news card */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePopular;
