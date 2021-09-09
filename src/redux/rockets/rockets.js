import getRockets from '../../api/rockets';

const GET_ROCKETS = 'space-travelers-hub/rockets/GET_ROCKET';
const RESERVE_ROCKET = 'space-travelers-hub/rockets/RESERVE_ROCKET';

const getRocketsAction = () => async (dispatch) => {
  const rockets = await getRockets();

  dispatch({
    type: GET_ROCKETS,
    payload: rockets,
  });
};

const reserveRocketAction = (id) => ({
  type: RESERVE_ROCKET,
  payload: id,
});

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...state, ...action.payload];
    case RESERVE_ROCKET:
      const newState = state.map(rocket => {
        if(rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
    default:
      return newState;
  }
};

export { getRocketsAction, reserveRocketAction, rocketsReducer };
