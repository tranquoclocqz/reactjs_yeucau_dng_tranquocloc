import * as type from "../constants"
import {
    getPost
} from "../../services/post"
export function getListPost(value) {
    return {
        type: type.GET_LIST_POST,
        payload: {
            value
        }
    }
}

export const getListPostAsync = () => {
    return async (dispatch) => {
        try {
            const response = await getPost();
            if(response.status == 200){
                dispatch(getListPost(response.posts))
            }
            // getPost().then(response => {
            //     const {
            //         posts,
            //         status
            //     } = response;
            //     if (status == 200) {
            //         dispatch(getListPost(posts))
            //     }
            // })
        } catch (error) {
            throw new Error(error);
        }
    }
}