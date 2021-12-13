
export const addToFav = (data) => {
  return {
    type: "ADD_FAVORITE",
    payload: data
  }
}


export const removeToFav = (data) => {
  return {
    type: "Remove_FAVORITE",
    payload: data
  }
}

