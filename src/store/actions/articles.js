// const getArticles =(payload) =>{
//     return {
//         type:"GET_ARTICLES",
//         payload,
//     }
// }

import axiosInstance from "../../axiosConfiq";

export const getArticles = () => (dispatch) => {

    return axiosInstance.get("/movie/popular", {
        params: {
          api_key: "057e4cd794ab0a190b966e211f106805",
         },
      }).then(
    (res) => dispatch({ type: 'GET_ARTICLES', payload :
    res.data.results }),
    (err) => console.log("err")
    );
    };