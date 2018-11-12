import messages from './messages';
import * as types from '../constants/ActionTypes';

describe('Message reducer', () => {
  it('should return the initial state, empty', () => {
    expect(messages(undefined, {})).toEqual([]);
  })

  it('should handle ADD_MESSAGE and store every message', () => {
    expect(message([], {
      type: types.ADD_MESSAGE,
      message: 'hey',
      author: 'me'
    })).toEqual([
      {
        message: 'hey',
        author: 'me'
      }
    ])

    expect(messages([
      {
        message: 'hey',
        author: 'me'
      }
    ], {
      type: types.ADD_MESSAGE,
      message: 'Hey again',
      author: 'Me again'
    })).toEqual([
      {
        message: 'hey',
        author: 'me'
      },
      {
        message: 'Hey again',
        author: 'Me again'
      }
    ])
  })
});
