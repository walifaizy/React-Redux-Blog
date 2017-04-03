import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPost, deletePost} from "../actions/index";
import {bindActionCreators} from "redux";
import {Link} from "react-router";

class PostsShow extends Component {
    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick() {
      this.props.deletePost(this.props.params.id);
    }
    render() {
        if (!this.props.post) {
            return <div><img src="https://s-media-cache-ak0.pinimg.com/originals/72/66/03/7266036c9f3383d21730484150602f01.gif"/></div>;
        }
        return (
            <div>
              <Link className="back btn btn-info" to="/">Back to index</Link>
              <button className="btn btn-danger delete-post" onClick={this.onDeleteClick.bind(this)}>Delete post</button>
                <div className="well">
                    <h3>{this.props.post.title}</h3>
                    <h5>Categories: {this.props.post.categories}</h5>
                    <p className="content">{this.props.post.content}</p>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {post: state.posts.post}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchPost: fetchPost,
        deletePost: deletePost
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);
