const state = {
  tasks: []
};

const listeners = [];

export const store = {
  getState() {
    return state;
  },

  setState(newState) {
    Object.assign(state, newState);

    listeners.forEach(listener => listener(state));
  },

  subscribe(listener) {
    listeners.push(listener);
  }
};