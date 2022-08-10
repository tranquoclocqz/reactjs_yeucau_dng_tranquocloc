import "./article-item.css";
import cls from "classnames";
import ArticleItemDesc from "./ArticleItemDesc";
import ArticleItemThumb from "./ArticleItemThumb";
import ArticleItemTitle from "./ArticleItemTitle";
import ArticleItemInfo from "./ArticleItemInfo";
import ArticleItemCategories from "./ArticleItemCategories";
import ArticleItemStats from "./ArticleItemStats";

export default function ArticleItem({
  isStyleRow = false,
  isStyleCard = false,
  isShowDesc = false,
  isShowCategoies = false,
  isShowAvatar = true,
  postItem,
}) {
  const classes = cls("article-item", {
    "style-card": isStyleCard,
    "style-row": isStyleRow,
  });

  const propAuthor = { ...postItem.author_data, date: postItem.date };

  const propThumbnail = {
    href: postItem.link,
    thumbnail: postItem.featured_media_url,
    title: postItem.title.rendered,
  };
  const propTitle = {
    title: postItem.title.rendered,
    href: postItem.link,
  };
  
  return (
    <article className={classes}>
      <ArticleItemThumb {...propThumbnail} />
      <div className="article-item__content">
        {isShowCategoies && <ArticleItemCategories />}
        {isShowCategoies && <ArticleItemStats />}

        <ArticleItemTitle {...propTitle} />

        {isShowDesc && (
          <ArticleItemDesc description={postItem.excerpt.rendered} />
        )}

        <ArticleItemInfo author={propAuthor} isShowAvatar={isShowAvatar} />
      </div>
    </article>
  );
}
