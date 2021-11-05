import { ADD_POST } from "./types";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      return [
        ...state,
        {
          id: Math.random(),
          title: action.post.title,
          content: action.post.content,
        },
      ];
    default:
      return state;
  }
};
