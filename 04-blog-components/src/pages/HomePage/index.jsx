import ArticleLatest from "../../components/ArticleLatest";
import ArticleList from "../../components/ArticleList";
import ArticlePopular from "../../components/ArticlePopular";
export default function HomePage() {
  return (
    <>
      <ArticleLatest />
      <ArticlePopular />
      <ArticleList />
    </>
  );
}
