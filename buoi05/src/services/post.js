import axiosClient from "../axiosClient";

export async function getPost(){
    return await axiosClient.get("https://api-meme-zendvn-01.herokuapp.com/api/v2/post/getListPagination.php?pageSize=3&currPage=1")
}