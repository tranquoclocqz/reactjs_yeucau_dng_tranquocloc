import Button from "../shared/Button";
import _ from "lodash";
import ArticleItem from "../ArticleItem";
function ArticleGeneral() {
  const range = _.range(1, 7);
  const articleAttr = {
    href: "/",
    image: "assets/images/blog-1.jpg",
    className: "style-card",
    title: "Only Someone Who's Seen The Mummy Will Pass This",
  };
  const authorAttr = {
    title: "John Doe",
    date: "June 02, 2020",
    time: "1 min",
  };
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <div className="main-title spacing d-flex tcl-jc-between tcl-ais-center">
          <h2>News List</h2>
          <a href="/" className="btn btn-default">
            View More
          </a>
        </div>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
          {range.map((e) => {
            return (
              <div className="tcl-col-12 tcl-col-md-6" key={`item_` + e}>
                <ArticleItem
                  articleAttr={articleAttr}
                  authorAttr={authorAttr}
                />
              </div>
            );
          })}
        </div>
        {/* End Row News List */}
        <div className="text-center">
          <Button type="primary" size="large" loading="true">
            Load more
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ArticleGeneral;
