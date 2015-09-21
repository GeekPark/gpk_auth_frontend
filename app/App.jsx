import $ from 'jquery';
import _ from 'lodash';
import React from 'react';
import thunk from 'redux-thunk';
import { Router } from 'director';
import { Provider } from 'react-redux';
import { devTools, persistState } from 'redux-devtools';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import Login from 'pages/Login';
import Info from 'pages/Info';
import reducers from './reducers';

let finalCreateStore;

if(__DEV_TOOLS__) {
  finalCreateStore = compose(
    applyMiddleware(thunk),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    createStore
  );
} else {
  finalCreateStore = applyMiddleware(thunk)(createStore);
}

const store = finalCreateStore(reducers);

const mountPage = _.partial(mountContainer, '#app');

let router = Router({
  '/': mountPage(Login)
});

router.init();

const routes = {
  '/info': Info
};

_.forIn(routes, (value, key) => {
  router.on(key, function () {
    mountPage(value);
  });
});


function mountContainer(dom, Component) {
  if($(dom).length === 0) return;
  console.log('mount route');

  React.render(
      <div>
        <Provider store={store}>
          {() => <Component />}
        </Provider>
        {__DEV_TOOLS__ ?
          <DebugPanel top right bottom>
            <DevTools store={store}
              monitor={LogMonitor} />
          </DebugPanel> : null
        }
      </div>

      , $(dom).get()[0]
  );
}
