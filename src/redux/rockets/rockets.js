import getRockets from '../../api/rockets';

const GET_ROCKETS = 'space-travelers-hub/rockets/GET_ROCKET';
const RESERVE_ROCKET = 'space-travelers-hub/rockets/RESERVE_ROCKET';
const CANCEL_ROCKET = 'space-travelers-hub/rockets/CANCEL_ROCKET';

export const getRocketsAction = () => async (dispatch) => {
  const rockets = await getRockets();

  dispatch({
    type: GET_ROCKETS,
    payload: rockets,
  });
};

export const reserveRocketAction = (id) => ({
  type: RESERVE_ROCKET,
  payload: id,
});

export const cancelRocketAction = (id) => ({
  type: CANCEL_ROCKET,
  payload: id,
});

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...state, ...action.payload];
    case RESERVE_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      return newState;
    }
    case CANCEL_ROCKET: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: false };
      });
      return newState;
    }
    default:
      return state;
  }
};

export default rocketsReducer;
