import { combineReducers } from "redux";
import articlesReducer from "./reduece/articles";
import favReduece from "./reduece/fav";

export default combineReducers({
    favList : favReduece,
    art : articlesReducer
})