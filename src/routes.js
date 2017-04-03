import React from "react";
import {Route, IndexRoute} from "react-router";
import PostsIndex from "./components/PostsIndex";

import App from "./components/app";
import PostsNew from "./components/PostsNew";
import PostsShow from "./components/PostsShow";



export default(
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex}/>
        <Route path="posts/new" component={PostsNew}/>
        <Route path="posts/:id" component={PostsShow}/>
    </Route>
);
