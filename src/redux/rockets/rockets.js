const ADD_ROCKET = 'space-travelers-hub/rockets/ADD_ROCKET';
const REMOVE_ROCKET = 'space-travelers-hub/rockets/REMOVE_ROCKET';

const initialState = [];

export const addRocket = (payload) => ({
  type: ADD_ROCKET,
  payload,
});

export const removeRocket = (payload) => ({
  type: REMOVE_ROCKET,
  payload,
});

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCKET:
      return [...state, action.payload];
    case REMOVE_ROCKET:
      return state.filter((rocket) => rocket.id !== action.payload.id);
    default:
      return state;
  }
};

export default rocketsReducer;
