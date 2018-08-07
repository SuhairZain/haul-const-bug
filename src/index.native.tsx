import 'haul/hot/patch';

declare var module;

import { clearCacheFor, makeHot, redraw } from 'haul/hot';

import { AppRegistry } from 'react-native';

import App from './App';

AppRegistry.registerComponent('haulgradient', makeHot(() => App));

if (module.hot) {
    module.hot.accept(() => { });
    module.hot.accept('./App', () => {
        clearCacheFor(require.resolve('./App'));
        redraw(() => require('./App').default);
    });
}
