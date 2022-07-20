import "./ArticleItem.css";
import ArticleItem1 from "./ArticleItem1";
import ArticleItem2 from "./ArticleItem2";
import ArticleItem3 from "./ArticleItem3";
import ArticleItem4 from "./ArticleItem4";
export default function ArticleItem({ type }) {
  switch (type) {
    case "1":
      return <ArticleItem1 />;
    case "2":
      return <ArticleItem2 />;
    case "3":
      return <ArticleItem3 />;
    case "4":
      return <ArticleItem4 />;
  }
}
