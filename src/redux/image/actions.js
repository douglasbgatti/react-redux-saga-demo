import { constants as IMAGE_ACTIONS } from "./constants";

const loadImages = () => ({
  type: IMAGE_ACTIONS.LOAD_REQUEST
});

const setImages = images => ({
  type: IMAGE_ACTIONS.LOAD_SUCCESS,
  images
});

const setError = error => ({
  type: IMAGE_ACTIONS.LOAD_FAILURE,
  error
});

export default { loadImages, setImages, setError };
