import $ from 'jquery';
import React from 'react';
import Login from 'pages/Login';

import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducers from './reducers';

import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

const finalCreateStore = compose(
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
);

let store = finalCreateStore(reducers);

mountContainer('#page-login', Login);

function mountContainer(dom, Component) {
  if($(dom).length === 0) return;

  React.render(
      <div>
        <Provider store={store}>
          {() => <Component />}
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={store}
                    monitor={LogMonitor} />
        </DebugPanel>
      </div>

      , $(dom).get()[0]
  );
}
