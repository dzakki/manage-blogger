import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import PrivateRoute from "./components/PrivateRoute";
import Navigation from './components/Navigation';
import Blogs from './containers/Blogs';
import Posts from './containers/Posts';
import AddPost from './containers/AddPost';
import DetailPost from './containers/DetailPost';

export default function() {
    return (
        <>
            <Router>
                <Navigation />
                <div className="container "  style={{ marginTop: '75px'}}>
                    <Switch>
                        <Route exact path="/">
                            <Blogs />
                        </Route>
                        <PrivateRoute path="/blogs/:blogId/posts/:id" component={DetailPost} />
                        <PrivateRoute path="/blogs/:id">
                            <Posts />
                        </PrivateRoute>
                        <PrivateRoute path="/blogs/:blogId/posts/add">
                            <AddPost />
                        </PrivateRoute>
                    </Switch>
                </div>
            </Router>
        </>
    )
}