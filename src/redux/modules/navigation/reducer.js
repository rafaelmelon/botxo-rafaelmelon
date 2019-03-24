export const NAVIGATION_MODAL_SET = 'NAVIGATION/MODAL_SET';
export const NAVIGATION_MODAL_CLOSE = 'NAVIGATION/MODAL_CLOSE';

const initialState = {
  modal: null,
}

export const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATION_MODAL_SET:
      {
        return {
          modal: action.payload
        }
      }
    case NAVIGATION_MODAL_CLOSE:
      {
        return {
          modal: null
        }
      }
    default:
      {
        return state
      }
  }
}