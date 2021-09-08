const GET_MISSION_LIST = 'space-travelers-hub/missions/GET_MISSION_LIST';

const initialState = [];

export const getList = (payload) => ({
  type: GET_MISSION_LIST,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSION_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
