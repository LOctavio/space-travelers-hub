
const ADD_MISSION = 'space-travelers-hub/missions/ADD_MISSION';
const REMOVE_MISSION = 'space-travelers-hub/missions/REMOVE_MISSION';

const initialState = [];

export const addMission = (payload) => ({
  type: ADD_MISSION,
  payload,
});

export const removeMission = (payload) => ({
  type: REMOVE_MISSION,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((mission) => mission.id !== action.payload.id);
    case GET_BOOK_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;