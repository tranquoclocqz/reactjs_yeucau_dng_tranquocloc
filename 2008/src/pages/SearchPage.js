import Button from "../components/shared/Button";
import ArticleItem from "../components/ArticleItem";
import MainTitle from "../components/shared/MainTitle";
import { getQueryStr } from "../helpers";
import { useSelector, useDispatch } from "react-redux";
import { actFetchListAsync } from "../store/post/actions";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function SearchPage() {
  const { articlePaging } = useSelector((state) => state.Post);
  const location = useLocation();
  const queryStr = getQueryStr(location);
  const dispatch = useDispatch();

  console.log(`queryStr = `, queryStr);
  useEffect(() => {
    const payload = {
      search: queryStr,
      per_page: 3,
      page: 1,
    };
    dispatch(actFetchListAsync(payload));
  }, [queryStr, dispatch]);

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle type="search">
          {articlePaging.total} kết quả tìm kiếm với từ khóa "{queryStr}"
        </MainTitle>

        <div className="tcl-row tcl-jc-center">
          {articlePaging?.list.map((item) => {
            return (
              <div className="tcl-col-12 tcl-col-md-8">
                <ArticleItem
                  post={item}
                  isStyleCard
                  isShowCategoies
                  isShowAvatar={false}
                  isShowDesc={false}
                />
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button type="primary" size="large">
            Tải thêm
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
