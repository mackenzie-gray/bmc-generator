import objectAssign from 'object-assign';
import {
  ADD_BMC_ITEM,
  UPDATE_SELECTED_CAT,
  UPDATE_TEXT_INPUT
} from '../constants/ActionTypes';

const initialState = {
  sections: [[],[],[],[],[],[],[],[],[],[]],
  bmc_title: null,
  textInputValue: null,
  selectedCategory: 0
};

export default function bmcAppState(state = initialState, action) {
  let newState = objectAssign({}, state);
  switch(action.type) {
    case ADD_BMC_ITEM:
    {
      if (action.value != null) {
        let item = {
          text: action.value
        };
        newState.sections[action.sectionId].push(item);
      }
      return newState;
    }
    case UPDATE_SELECTED_CAT:
      window.console.log(action);
      newState.selectedCategory = action.value;
      return newState;
    case UPDATE_TEXT_INPUT:
      newState.textInputValue = action.value;
      return newState;
    default:
      return state;
  }
}