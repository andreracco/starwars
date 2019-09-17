import React             from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout   from './components/Layout/Layout';
import Home     from './containers/Home/Home';
import CharView from './containers/CharView';


const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/char/:id" exact component={CharView} />
            </Switch>
        </Layout>
    );
};

export default Routes;