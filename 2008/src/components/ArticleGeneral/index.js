import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchArticleGeneralAsync } from "../../store/post/actions";
import ArticleItem from "../ArticleItem";
import Button from "../shared/Button";
import MainTitle from "../shared/MainTitle";

function ArticleGeneral() {
  const dispatch = useDispatch();
  const { list: posts, currentPage, totalPages } = useSelector(state => state.Post.articlePaging);
  const [loading, setLoading] = useState(false);
  const hasMorePost = currentPage < totalPages;

  function handleLoadMore() {
    if (loading) return;

    setLoading(true);
    const params = { currentPage: currentPage + 1 };
    dispatch(actFetchArticleGeneralAsync(params)).then(() => {
      setLoading(false);
    })
  }

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="Xem them">Bai Viet Tong Hop</MainTitle>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
          {
            posts.map(item => {
              return (
                <div className="tcl-col-12 tcl-col-md-6" key={item.id}>
                  <ArticleItem isStyleCard isShowAvatar={false} post={item} />
                </div>
              )
            })
          }
        </div>
        {/* End Row News List */}
        {
          hasMorePost && (
            <div className="text-center">
              <Button type="primary" size="large" loading={loading} onClick={handleLoadMore}>Tải thêm</Button>
            </div>
          )
        }

      </div>
    </div>
  )
}

export default ArticleGeneral