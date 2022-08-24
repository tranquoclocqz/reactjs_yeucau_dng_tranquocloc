import {
  mappingMenuData
} from "../../helpers";
import menuService from "../../services/menu";

// Action Type
export const ACT_FETCH_MENU = 'ACT_FETCH_MENU';


// Action
export function actFetchMenu(menus) {
  return {
    type: ACT_FETCH_MENU,
    payload: {
      menus
    }
  }
}

// Action Async
export function actFetchMenuAync() {
  return async (dispatch) => {
    try {
      const response = await menuService.getMenu();
      const menus = response.data.items.map(mappingMenuData);
      dispatch(actFetchMenu(menus));
    } catch (err) {
      // TODO
    }
  }
}