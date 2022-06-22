/* eslint-disable @typescript-eslint/no-unsafe-return */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const stateReducer = (prevState: any, newState: any) => ({
  ...prevState,
  ...newState,
});
