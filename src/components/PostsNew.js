import React, {Component} from "react";
import {reduxForm} from "redux-form";
import {createPost} from "../actions/index";
import {Link} from "react-router";

class PostsNew extends Component {
    render() {
        const {fields:{ title, categories, content },handleSubmit} = this.props;
        //console.log(title);
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3>Create new post</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={handleSubmit(this.props.createPost)}>
                        <div className={`form-group ${title.touched && title.invalid ? 'has-error' : ''}` }>
                            <label className="control-label">Title</label>
                            <input type="text" className="form-control" {...title}/>
                            <div className="text-help">
                              {title.touched ? title.error : ""}
                            </div>
                        </div>

                        <div className={`form-group ${categories.touched && categories.invalid ? 'has-error' : ''}` }>
                            <label>Categories</label>
                            <input type="text" className="form-control" {...categories} />
                            <div className="text-help">
                              {categories.touched ? categories.error : ""}
                            </div>
                        </div>

                        <div className={`form-group ${content.touched && content.invalid ? 'has-error' : ''}` }>
                            <label>Content</label>
                            <textarea rows="5" className="form-control" { ...content }/>
                            <div className="text-help">
                              {content.touched ? content.error : ""}
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary ">Submit</button>

                        <Link to="/" className="btn btn-danger">Cancel</Link>
                    </form>
                </div>
            </div>
        );
    }
}

 function validate(values) {
    const errors = {};

    if(!values.title) {
      errors.title = "Enter a username";
    }
    if(!values.categories) {
      errors.categories = "Enter categories";
    }
    if(!values.content) {
      errors.content = "Enter some content";
    }

    return errors;
 }

  //connect: first argument is mapStatetoProps and 2nd argument is mapDispatchToProps
  //reduxForm: 1st argument is form config, 2nd argument is mapStatetoProps and 3rd arguments is mapDispatchToProps

export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, {createPost})(PostsNew);

 //'<p className="text-help validate-err">' + Enter Username + '</p>';
