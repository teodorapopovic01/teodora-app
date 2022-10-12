const initState = {
  posts: [],
};
const rootReducer = (state = initState, action: any) => {
  // if(action.type === "ADD_POSTS") {
  return {
    posts: [...state.posts],
  };
  // }
};

export default rootReducer;
