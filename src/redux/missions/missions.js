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
    case ADD_MISSION:
      return [...state, action.payload];
    case REMOVE_MISSION:
      return state.filter((mission) => mission.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
