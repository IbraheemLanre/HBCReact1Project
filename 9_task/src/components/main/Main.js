import React from "react";
import Home from "./Home";
import Blog from "./Blog";
import NewPost from "./NewPost";
import { Switch, Route } from "react-router-dom";
import Nothing from "./Nothing";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/new_post" component={NewPost} />
        <Route component={Nothing}/>
      </Switch>
    </main>
  );
};

export default Main;
