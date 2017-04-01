import React from "react";
import {Route, IndexRoute} from "react-router";
import PostsIndex from "./components/PostsIndex";

import App from "./components/app";
import PostsNew from "./components/PostsNew";



export default(
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex}/>
        <Route path="posts/new" component={PostsNew}/>
    </Route>
);
