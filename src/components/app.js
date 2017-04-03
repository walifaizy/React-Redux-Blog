import React, {Component} from 'react';

export default class App extends Component {
    render() {
        return (
            <div className="container">
              <div classname="row">
                <div className="col-md-10 col-md-offset-1 col-xs-12">
                  <h1 className="page-header">Blog Application</h1>
                  {this.props.children}
                </div>
              </div>
            </div>
        );
    }
}
