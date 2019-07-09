import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

import { TodoContainer } from './containers/todo';
import './index.css';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <TodoContainer />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);