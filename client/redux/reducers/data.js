import { fromJS } from 'immutable';
import constants from '../constants';

// At first all dialogs are not visiible
const defaultState = fromJS({
  data: []
});

// If state is undefined use default state
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      // Always return current state as the default
      return state;
  }
};

export default reducer;
