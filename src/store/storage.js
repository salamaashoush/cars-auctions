export const __REDUX_STATE_KEY__ = "pushbotsState";
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(__REDUX_STATE_KEY__);
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {};
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(__REDUX_STATE_KEY__, serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};
