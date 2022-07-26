import "./article-item.css";
import classnames from "classnames";
import Button from "../shared/Button";
import Author from "../ArticleInfo/Author";
export default function ArticleItem({
  articleAttr,
  btnAttr,
  authorAttr = {},
  listCategory = [],
}) {
  const { href, image, className, title, description } = articleAttr;
  let tag, desc, author;
  if (listCategory.length !== 0) {
    tag = (
      <>
        <ul className="article-item__categories">
          {listCategory.map((e, i) => {
            return (
              <li key={i}>
                <Button href={e.href} children={e.title} {...btnAttr} />
              </li>
            );
          })}
        </ul>
        <ul className="article-item__stats">
          <li>
            <i className="icons ion-ios-eye"></i>
            <span className="text">Views</span>
          </li>
        </ul>
      </>
    );
  }
  desc = description && <p className="article-item__desc">{description}</p>;
  author = Object.keys(authorAttr).length !== 0 && <Author {...authorAttr} />;
  return (
    <article className={classnames("article-item", className)}>
      <div className="article-item__thumbnail">
        <a href={href}>
          <img src={image} alt={title} />
        </a>
      </div>
      <div className="article-item__content">
        {tag}
        <h2 className="article-item__title">
          <a href={href}>{title}</a>
        </h2>
        {desc}
        {author}
      </div>
    </article>
  );
}
