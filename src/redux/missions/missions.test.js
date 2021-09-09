import reducer, { getList, joinMission, leaveMission } from "./missions";

describe("test reducer function", () => {
  let list = [
    {
      mission_id: 1,
    },
    {
      mission_id: 2,
    }
  ]

  it('return the redux state when there is a default action', () => {
    const exampleAction = () => ({
      type: "EXAMPLE_ACTION",
      payload: {
        mission_id: 2,
      },
    });
    expect(reducer([], exampleAction())).toStrictEqual([]);
  });
  
  it('store list in redux state', () => {
    expect(reducer([], getList(list))).toBe(list);
  });
  
  it('join mission with id 1', () => {
    expect(reducer(list,joinMission(1))).toStrictEqual([
      {
        mission_id: 1,
        reserved: true,
      },
      {
        mission_id: 2,
      }
    ]);
  });
  it('join mission with id 2', () => {
    expect(reducer(list,joinMission(2))).toStrictEqual([
      {
        mission_id: 1,
      },
      {
        mission_id: 2,
        reserved: true,
      }
    ]);
  });
  it('leave mission with id 1', () => {
    expect(reducer(list,leaveMission(1))).toStrictEqual([
      {
        mission_id: 1,
        reserved: false,
      },
      {
        mission_id: 2,
      }
    ]);
  });
  it('leave mission with id 2', () => {
    expect(reducer(list,leaveMission(2))).toStrictEqual([
      {
        mission_id: 1,
      },
      {
        mission_id: 2,
        reserved: false,
      }
    ]);
  });
});