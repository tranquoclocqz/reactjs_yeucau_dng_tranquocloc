import ArticleLatest from "../components/ArticleLatest";
import ArticlePopular from "../components/ArticlePopular";
import ArticleGeneral from "../components/ArticleGeneral";

function HomePage() {
  return (
    <>
      <ArticleLatest />
      <ArticlePopular />
      <ArticleGeneral />
    </>
  );
}

export default HomePage;