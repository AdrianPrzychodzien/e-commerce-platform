import UserActionTypes from './user.types';
import userReducer from './user.reducer'

describe('userReducer', () => {
  const initialState = {
    currentUser: null,
    error: null
  }

  it('should return initial state', () => {
    expect(userReducer(undefined, {})).toEqual({
      currentUser: null,
      error: null
    })
  })

  it('should set currentUser to payload on signInSuccess action', () => {
    const mockUser = { id: 1, name: 'Adrian' }
    expect(userReducer(initialState, {
      type: UserActionTypes.SIGN_IN_SUCCESS,
      payload: mockUser
    })).toEqual({
      ...initialState,
      currentUser: mockUser
    })
  })

  it('should set currentUser to null on signOutSuccess action', () => {
    expect(userReducer(initialState, {
      type: UserActionTypes.SIGN_OUT_SUCCESS,
    }).currentUser).toBe(null)
  })

  it('should set errorMessage to payload on signInFailure, signOutFailure and signUpFailure action', () => {
    expect(userReducer(initialState, {
      type: UserActionTypes.SIGN_IN_FAILURE,
      type: UserActionTypes.SIGN_OUT_FAILURE,
      type: UserActionTypes.SIGN_UP_FAILURE,
      payload: 'error'
    })).toEqual({
      ...initialState,
      error: 'error'
    })
  })
})
