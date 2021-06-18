export default {
  namespace: 'home',
  state: {
    name: '123',
    modalVisible: false,
  },
  reducers: {
    updateState(state, {payload}) {
      return {...state, ...payload};
    },
  },
};
