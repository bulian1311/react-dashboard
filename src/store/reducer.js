import { LOAD_MORE } from './types';

const reducer = (state, action) => {
  if (action.type === LOAD_MORE) {
    return { ...state, visible: state.visible + 15 };
  }
};

export default reducer;
