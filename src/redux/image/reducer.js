import { constants as IMAGE_CONSTANTS } from "./constants";

const initialState = {
  images: [],
  loading: false,
  error: '',
  page: 1
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_CONSTANTS.LOAD_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case IMAGE_CONSTANTS.LOAD_SUCCESS: {
        return {
          ...state,
          images: action.images,
          error: '',
          loading: true,
          page: state.page + 1
        };
      }

      case IMAGE_CONSTANTS.LOAD_FAILURE: {
        return {
          ...state,
          images: [],
          error: action.error,
          loading: false
        };
      }
  

    default:
      return state
  }
};
