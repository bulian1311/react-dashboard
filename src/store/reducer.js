import { LOAD_MORE, SEARCH_CHANGE } from './types';

const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_MORE:
      return { ...state, visible: state.visible + 15 };
    case SEARCH_CHANGE:
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

export default reducer;
