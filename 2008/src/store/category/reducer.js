import { ACT_FETCH_ALL_CATEGORIES } from "./actions";

const intState = {
  hashCategoryById: {}
}

function reducer(categoryState = intState, action) {
  switch (action.type) {
    case ACT_FETCH_ALL_CATEGORIES:
      return {
        ...categoryState,
        hashCategoryById: action.payload.hashCategoryById
      }
    default:
      return categoryState
  }
}

export default reducer;