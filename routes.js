import ReactDOM from 'react-dom';
import App from './src/app';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById('root'))
const Routes = () => (
    <Router>
        <Route exact path="/" component={App} />
    </Router>
);

ReactDOM.render(<Routes />, document.getElementById('root'))