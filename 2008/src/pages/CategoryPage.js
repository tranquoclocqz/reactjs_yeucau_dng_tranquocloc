import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchArticleByCategoryAsync } from "../store/post/actions";
import ArticleItem from "../components/ArticleItem";
import Button from "../components/shared/Button";
import MainTitle from "../components/shared/MainTitle";
import { useParams } from "react-router-dom";
import { handleGetCategoryBySlug } from "../helpers";

function CategoryPage() {
  const dispatch = useDispatch();
  let { slug } = useParams();
  const hashCategoryById = useSelector(
    (state) => state.Category.hashCategoryById
  );
  const {
    list: posts,
    currentPage,
    totalPages,
  } = useSelector((state) => state.Post.articlePaging);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(null);
  const hasMorePost = currentPage < totalPages;

  function handleLoadMore() {
    if (loading) return;
    setLoading(true);
    const params = { categories: category.key, currentPage: currentPage + 1 };
    dispatch(actFetchArticleByCategoryAsync(params)).then(() => {
      setLoading(false);
    });
  }

  useEffect(() => {
    if (Object.keys(hashCategoryById).length !== 0) {
      const obj = handleGetCategoryBySlug(slug, hashCategoryById);
      setCategory(obj);
    }
  }, [hashCategoryById]);

  useEffect(() => {
    if (slug && category) {
      const payload = {
        categories: category.key,
      };
      dispatch(actFetchArticleByCategoryAsync(payload));
    }
  }, [slug, category]);

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="Xem thêm">{category?.element.name}</MainTitle>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
          {posts.map((item) => {
            return (
              <div className="tcl-col-12 tcl-col-md-6" key={item.id}>
                <ArticleItem isStyleCard isShowAvatar={false} post={item} />
              </div>
            );
          })}
        </div>
        {/* End Row News List */}
        {hasMorePost && (
          <div className="text-center">
            <Button
              type="primary"
              size="large"
              loading={loading}
              onClick={handleLoadMore}
            >
              Tải thêm
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
