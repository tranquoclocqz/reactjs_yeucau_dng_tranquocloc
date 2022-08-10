// import { Link } from 'react-router-dom';

export default function ArticleItemThumb({ title, href, thumbnail }) {
  return (
    <div className="article-item__thumbnail">
      <a href={href}>
        <img src={thumbnail} alt={title} />
      </a>
    </div>
  );
}
