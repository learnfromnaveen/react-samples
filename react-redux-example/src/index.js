import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './redux/configureStore'
import { Provider as ReduxProvider } from 'react-redux'

const store = configureStore();
const ReductProviderContext =  <ReduxProvider store={store}>
                                    <App/>
                                </ReduxProvider>
ReactDOM.render(ReductProviderContext, document.getElementById('root'));