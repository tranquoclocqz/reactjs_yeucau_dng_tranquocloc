import { combineReducers } from "redux";
import common from "./common"
import auth from "./auth"
export const rootReducer = combineReducers({
    common,
    auth
});
/**
 * @description Use IRootState to set interface for state for callback
 *  in useSelector
 * const { isLoading } = useSelector((state:IRootState)=>state.common)
 */
export type IRootState = ReturnType<typeof rootReducer>;