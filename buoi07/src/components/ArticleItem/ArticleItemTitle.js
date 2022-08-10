
export default function ArticleItemTitle({title, href}) {
  return (
    <h2 className="article-item__title">
      <a href={href}>{title}</a>
    </h2>
  )
}