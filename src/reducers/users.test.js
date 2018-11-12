import users from './users';
import * as types from '../constants/ActionTypes';

describe('User reducer', () => {
  it('should return the initial state, empty', () => {
    expect(users(undefined, {})).toEqual([]);
  })

  it('should handle ADD_USER and store every user', () => {
    expect(message([], {
      type: types.ADD_USER,
      name: 'Tony'
    })).toEqual([
      {
        name: 'Tony'
      }
    ])

    expect(messages([
      {
        name: 'Tony'
      }
    ], {
      type: types.ADD_USER,
      name: 'Mark'
    })).toEqual([
      {
        name: 'Tony'
      },
      {
        name: 'Mark'
      }
    ])
  })
});
