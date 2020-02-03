import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';

import Posts from './pages/posts';
import AddPost from './pages/addPost';
import DetailPost from './pages/detailPost';

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
                        <Route exact path="/" component={Posts} />
                        <Route path="/posts/add" component={AddPost} />
                        <Route path="/posts/:id" component={DetailPost} />
                    </Switch>
                </div>
            </Router>
        </>
    )
}