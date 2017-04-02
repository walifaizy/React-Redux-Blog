import React, {Component} from 'react';

export default class App extends Component {
    render() {
        return (
            <div classNamecontainer>
              <div classname="row">
                <div className="col-md-8 col-md-offset-2 col-xs-12">
                  <h1 className="page-header">Blog Application</h1>
                  {this.props.children}
                </div>
              </div>
            </div>
        );
    }
}
