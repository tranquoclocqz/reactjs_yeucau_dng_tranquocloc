import {
  ACT_FETCH_MENU
} from "./actions";

const intState = {
  menus: [],
}

function reducer(state = intState, action) {
  switch (action.type) {
    case ACT_FETCH_MENU:
      return {
        ...state, menus: action.payload.menus
      }
      default:
        return state;
  }
}

export default reducer;