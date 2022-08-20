import './article-item.css';
import cls from 'classnames';
import ArticleItemDesc from './ArticleItemDesc';
import ArticleItemThumb from './ArticleItemThumb';
import ArticleItemTitle from './ArticleItemTitle';
import ArticleItemInfo from './ArticleItemInfo';
import ArticleItemCategories from './ArticleItemCategories';
import ArticleItemStats from './ArticleItemStats';

export default function ArticleItem({
  isStyleRow = false,
  isStyleCard = false,
  isShowDesc = false,
  isShowCategoies = false,
  isShowAvatar = true,
  post
}) {

  const classes = cls('article-item', {
    'style-card': isStyleCard,
    'style-row': isStyleRow,
  })

  if (!post) return null;

  const title = post.title;
  const thumbnail = post.thumbnail;
  const author = post.author;
  const createdDate = post.createdDate;
  const slug = post.slug;
  const authorId = post.authorId;
  const viewCount = post.viewCount;
  const categoriesId = post.categoriesId;

  const slugLink = '/post/' + slug;
  const authorLink = '/user/' + authorId;


  return (
    <article className={classes}>
      <ArticleItemThumb thumbnail={thumbnail} slugLink={slugLink} title={title} />
      <div className="article-item__content">

        {isShowCategoies && <ArticleItemCategories categoriesId={categoriesId} />}
        {isShowCategoies && <ArticleItemStats viewCount={viewCount} />}

        <ArticleItemTitle title={title} slugLink={slugLink} />

        {isShowDesc && <ArticleItemDesc />}

        <ArticleItemInfo
          author={author}
          createdDate={createdDate}
          authorLink={authorLink}
          isShowAvatar={isShowAvatar} />
      </div>
    </article>
  )
}