import getRockets from '../../api/rockets';

const ADD_ROCKET = 'space-travelers-hub/rockets/ADD_ROCKET';

const initialState = [];

const getRocketsAction = () => async (dispatch) => {
  const rockets = await getRockets();

  dispatch({
    type: ADD_ROCKET,
    payload: rockets,
  });
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCKET:
      return [...state, action.payload];
    default:
      return state;
  }
};

export { getRocketsAction, rocketsReducer };
