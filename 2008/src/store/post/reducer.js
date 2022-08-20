import { ACT_FETCH_ARTICLE_GENERAL, ACT_FETCH_ARTICLE_LATEST, ACT_FETCH_ARTICLE_POPULAR } from "./actions";

const intState = {
  articleLatest: [],
  articlePopular: [],
  articleGeneral: [],
  articlePaging: {
    list: [],
    currentPage: 1
  }
}

function reducer(postState = intState, action) {
  switch (action.type) {
    case ACT_FETCH_ARTICLE_LATEST:
      return {
        ...postState,
        articleLatest: action.payload.posts
      }
    case ACT_FETCH_ARTICLE_POPULAR:
      return {
        ...postState,
        articlePopular: action.payload.posts
      }
    case ACT_FETCH_ARTICLE_GENERAL:
      return {
        ...postState,
        articlePaging: {
          ...postState.articlePaging,
          list: action.payload.currentPage === 1 ? action.payload.posts : [...postState.articlePaging.list, ...action.payload.posts],
          total: action.payload.total,
          totalPages: action.payload.totalPages,
          currentPage: action.payload.currentPage,
        }
      }
    default:
      return postState;
  }
}

export default reducer;