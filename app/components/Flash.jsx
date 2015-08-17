import React, { findDOMNode, Component, PropTypes } from 'react';

class Flash extends Component {
  render() {
    const { text, type, isShow} = this.props;
    return (
      <section className={ `flash ${type}` }>
        {text}
      </section>
    );
  }
}

export default Flash;
