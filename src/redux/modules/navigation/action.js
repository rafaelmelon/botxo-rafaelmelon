import {
  NAVIGATION_MODAL_SET,
  NAVIGATION_MODAL_CLOSE,
} from './reducer'

export const closeModal = () => ({
  type: NAVIGATION_MODAL_CLOSE,
})

export const setModal = (payload) => ({
  type: NAVIGATION_MODAL_SET,
  payload
})