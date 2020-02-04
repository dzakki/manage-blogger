import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';

import Posts from './pages/Posts';
import AddPost from './pages/AddPost';
import DetailPost from './pages/DetailPost';

export default function() {
    return (
        <>
            <Router>
                <nav className="navbar navbar-light bg-white shadow-sm fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to="/">Medium</Link>
                    </div>
                </nav>
                <div className="container "  style={{ marginTop: '75px'}}>
                    <Switch>
                        <Route exact path="/">
                            <Posts />
                        </Route>
                        <Route path="/posts/add">
                            <AddPost />
                        </Route >
                        <Route path="/posts/:id" component={DetailPost} />
                    </Switch>
                </div>
            </Router>
        </>
    )
}