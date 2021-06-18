import Database from '../../database';
const db = new Database();

export default {
  namespace: 'list',
  state: {
    isLoading: false,
    errorMsg: null,
    stickyHeaderIndices: [],
    data: [],
  },
  reducers: {
    updateState(state, {payload}) {
      return {...state, ...payload};
    },
    getProducts(state, {dispatch}) {
      db.listProduct()
        .then(data => {
          console.warn('getProducts:' + JSON.stringify(data));
          dispatch({
            type: 'list/updateState',
            payload: {
              data: data,
              isLoading: false,
              errorMsg: null,
            },
          });
        })
        .catch(err => {
          console.warn('getProducts:' + JSON.stringify(err));
          dispatch({
            type: 'list/updateState',
            payload: {
              isLoading: false,
              errorMsg: err,
            },
          });
        });

      return {...state, ...{isLoading: true}};
    },
    addProduct(state, {dispatch, payload}) {
      db.addProduct(payload)
        .then(data => {
          console.warn('addProduct:' + JSON.stringify(data));
          dispatch({
            type: 'list/getProducts',
            dispatch,
          });
        })
        .catch(err => {
          console.warn('addProduct:' + JSON.stringify(err));
          dispatch({
            type: 'list/updateState',
            payload: {
              isLoading: false,
              errorMsg: err,
            },
          });
        });

      return {...state, ...{isLoading: true}};
    },
  },
};
