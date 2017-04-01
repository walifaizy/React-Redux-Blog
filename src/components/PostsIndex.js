import React, {Component} from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {fetchPosts} from "../actions/index";
import { Link } from "react-router";

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        <div className="btn-link">
          <Link to="/posts/new" className="btn btn-primary btn-block">
            Add a post
          </Link>
        </div>
        <h2>List of Blog</h2>
      </div>

    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPosts}, dispatch);
}

export default connect(null, mapDispatchToProps)(PostsIndex);
