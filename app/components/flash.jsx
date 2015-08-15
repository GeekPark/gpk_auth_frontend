import React, { findDOMNode, Component, PropTypes } from 'react';

let Flash = React.createClass({
  render() {
    const { text, type } = this.props;
    return (
      <section className={ `flash ${type}` }>
        {text}
      </section>
    );
  }
});

export default Flash;
