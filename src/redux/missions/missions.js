const GET_MISSION_LIST = 'space-travelers-hub/missions/GET_MISSION_LIST';
const JOIN_MISSION = 'space-travelers-hub/missions/JOIN_MISSION';
const LEAVE_MISSION = 'space-travelers-hub/missions/LEAVE_MISSION';

const initialState = [];

export const getList = (payload) => ({
  type: GET_MISSION_LIST,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });
      return newState;
    }
    case LEAVE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: false };
      });
      return newState;
    }
    case GET_MISSION_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
