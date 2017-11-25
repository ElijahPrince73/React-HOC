import React, {Component} from 'react';
import {connect} from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/')
      }
    }

    componentWillUpdate(nextProps) {
      console.log(nextProps);
      if (!nextProps.authenticated) {
        this.context.router.push('/')
      }
    }

    render() {
      return <ComposedComponent {...this.props}/>;
    }
  }

  function mapStateToProps(state) {
    return{ authenticated: state.authenticated}
  }
  return connect(mapStateToProps)(Authentication );
}


// In some other location ... Not in this file...
// We want to use this HOC

// import Authentication  This is my HOC
// import Resources This is my Component I want to wrap

// const ComposedComponent = Authentication(resources)

// In sone render method...
{/* <ComposedComponent resources={resourceList}/> */}
