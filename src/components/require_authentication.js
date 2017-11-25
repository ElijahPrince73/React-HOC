import React, {Component} from 'react';

export default function (ComposedComponent) {
  class Authentication extends Component {
    render() {
      return <ComposedComponent {...this.props}/>;
    }
  }

  return Authentication;
}


// In some other location ... Not in this file...
// We want to use this HOC

// import Authentication  This is my HOC
// import Resources This is my Component I want to wrap

// const ComposedComponent = Authentication(resources)

// In sone render method...
{/* <ComposedComponent resources={resourceList}/> */}
