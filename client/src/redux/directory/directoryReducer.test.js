import directoryReducer, { INITIAL_STATE } from './directory.reducer';

describe('directoryReducer', () => {
  // it('should return initial state', () => {
  //   expect(directoryReducer(undefined, {})).toEqual(INITIAL_STATE);
  // });

  it('should return initial state', () => {
    const mockState = { hidden: true, items: [] }
    expect(directoryReducer(undefined, {})).toEqual(mockState)
  })
})