export default function articlesReducer(state=[],action){
switch(action.type){
    case 'GET_ARTICLES':
        return action.payload;
        default :
        return state
}
}