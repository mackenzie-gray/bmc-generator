import * as types from '../constants/ActionTypes';

export function addBMCItem(state, sectionId, value) {
  return {
    type: types.ADD_BMC_ITEM,
    state,
    sectionId,
    value
  };
}

export function updateTextInput(state, name, value) {
  return {
    type: types.UPDATE_TEXT_INPUT,
    state,
    name,
    value
  };
}

export function updateSelectedCat(state, name, value) {
  return {
    type: types.UPDATE_SELECTED_CAT,
    state,
    name,
    value
  };
}