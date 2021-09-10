import rocketsReducer, { getRocketsAction, reserveRocketAction, cancelRocketAction } from './rockets'

describe('Rockets reducer', () => {
  const list = [
    {
      rocket_id: 1,
    },
    {
      rocket_id: 2,
    },
  ];

  it('return the redux state when there is a default action', () => {
    const exampleAction = () => ({
      type: 'EXAMPLE_ACTION',
      payload: {
        rocket_id: 1,
      },
    });
    expect(rocketsReducer([], exampleAction())).toStrictEqual([]);
  });

  it('store list in redux state', () => {
    expect(rocketsReducer([], getRocketsAction(list))).toBe(list);
  });

  it('reserve rocket with id 1', () => {
    expect(rocketsReducer(list, reserveRocketAction(1))).toStrictEqual([
      {
        rocket_id: 1,
        reserved: true,
      },
      {
        rocket_id: 2,
      },
    ]);
  });

  it('reserve rocket with id 2', () => {
    expect(rocketsReducer(list, reserveRocketAction(2))).toStrictEqual([
      {
        rocket_id: 1,
      },
      {
        rocket_id: 2,
        reserved: true,
      },
    ]);
  });

  it('cancel rocket reservation  with id 1', () => {
    expect(rocketsReducer(list, cancelRocketAction(1))).toStrictEqual([
      {
        rocket_id: 1,
        reserved: false,
      },
      {
        rocket_id: 2,
      },
    ]);
  });

  it('cancel rocket reservation  with id 2', () => {
    expect(rocketsReducer(list, cancelRocketAction(2))).toStrictEqual([
      {
        rocket_id: 1,
      },
      {
        rocket_id: 2,
        reserved: false,
      },
    ]);
  });
});
