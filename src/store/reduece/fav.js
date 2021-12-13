

const INITIAL_STATE = {
    favList:[]
  };

export default function favReduece(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "ADD_FAVORITE":
        return {
          ...state,
          favList: [...state.favList,action.payload]
        };
      case "Remove_FAVORITE":
          return {
            ...state,
            favList: [...state.favList]
          };
      default:
        return state;
    }
  }
  