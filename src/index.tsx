import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

import { ChartPage } from './containers/ChartPage';
import './index.css';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <ChartPage />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);