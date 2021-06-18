import React from 'react';
import {Provider} from 'react-redux';
import {create} from 'dva-core';
import homeModel from './models/home';
import listModel from './models/list';
import Router from './routes';
const App = () => {
  const app = create();
  app.model(homeModel);
  app.model(listModel);
  app.start();
  const store = app._store;
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};
export default App;
