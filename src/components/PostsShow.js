import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchPost} from "../actions/index";
import {bindActionCreators} from "redux";

class PostsShow extends Component {
    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }
    render() {
      if (!this.props.post) {
            return <div><img src="https://s-media-cache-ak0.pinimg.com/originals/72/66/03/7266036c9f3383d21730484150602f01.gif"/></div>;
        }
        return (
          <div className="well">
            <h3>{this.props.post.title}</h3>
            <h5>Categories: {this.props.post.categories}</h5>
            <p className="content">{this.props.post.content}</p>
          </div>
        );
   }
}

function mapStateToProps(state) {
    return {post: state.posts.post}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchPost: fetchPost
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);
