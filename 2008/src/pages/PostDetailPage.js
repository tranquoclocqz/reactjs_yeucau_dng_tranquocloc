import { useParams } from "react-router-dom";
import PostDetailContent from "../components/PostDetail/PostDetailContent";
import PostDetailHead from "../components/PostDetail/PostDetailHead";
import PostDetailSidebar from "../components/PostDetail/PostDetailSidebar";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchDetailAsync } from "../store/post/actions";
import { formatDate } from "../helpers";
function PostDetailPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const { detail } = useSelector((state) => state.Post);
  useEffect(() => {
    if (params.slug) {
      const payload = {
        slug: params.slug,
      };
      dispatch(actFetchDetailAsync(payload));
    }
  }, [params.slug, dispatch]);
  if (!detail) return <>Loading...</>;
  return (
    <main className="post-detail">
      <div className="spacing" />

      <PostDetailHead
        title={detail.title}
        commentCount={detail.commentCount}
        viewCount={detail.viewCount}
        date={formatDate(detail.datePublish)}
        authorName={detail.authorName}
        thumbnail={detail.thumbnail}
      />

      <div className="spacing" />

      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            <PostDetailContent content={detail.content} thumbnail={detail.thumbnail} title={detail.thumbnail}/>

            <PostDetailSidebar authorName={detail.authorName} authorAvatar={detail.authorAvatar}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PostDetailPage;
