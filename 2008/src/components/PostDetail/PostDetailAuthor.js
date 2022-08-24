import './post-author.css'

function PostDetailAuthor({authorAvatar, authorName}) {
  return (
    <div className="post-author">
      <div className="post-author__bg-avatar">
        <a href="/" className="post-author__avatar">
          <img src={authorAvatar} alt="" />
        </a>
      </div>
      <div className="post-author__nickname">
        <a href="/">{authorName}</a>
      </div>
      <p className="post-author__desc">Lorem ipsum, dolor sit amet conse ctetur adipi sicing elit. Necessitatibus, vel vero vel vero vel vero vel vero!</p>
    </div>

  )
}

export default PostDetailAuthor