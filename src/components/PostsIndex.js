import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {fetchPosts} from "../actions/index";
import { Link } from "react-router";

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <strong>{post.title}</strong>
          <span className="badge pull-right">{post.categories}</span>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="btn-link">
          <Link to="/posts/new" className="btn btn-primary btn-block">
            Add a post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          <li>{this.renderPosts()}</li>
        </ul>
      </div>

    );
  }
}

function mapStatetoProps(state) {
  return {posts: state.posts.all};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPosts}, dispatch);
}

export default connect(mapStatetoProps, mapDispatchToProps)(PostsIndex);
