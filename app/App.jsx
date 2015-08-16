import $ from 'jquery';
import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { devTools, persistState } from 'redux-devtools';
import { createStore, compose, applyMiddleware } from 'redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import Login from 'pages/Login';
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

let store = finalCreateStore(reducers);

mountContainer('#page-login', Login);

function mountContainer(dom, Component) {
  if($(dom).length === 0) return;

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
