import PostDetailAuthor from "./PostDetailAuthor";
import PostDetailRelatedPosts from "./PostDetailRelatedPosts";

function PostDetailSidebar({ authorName, authorAvatar }) {
  return (
    <div className="post-detail__side">
      <PostDetailAuthor authorName={authorName} authorAvatar={authorAvatar} />
      <div className="spacing" />
      <PostDetailRelatedPosts />
    </div>
  );
}

export default PostDetailSidebar;
