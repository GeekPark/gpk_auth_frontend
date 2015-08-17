import React, { findDOMNode, Component, PropTypes } from 'react';

class Flash extends Component {
  render() {
    const { text, type, isShow} = this.props;
    const showStatus = isShow ? 'show' : '';
    return (
      <section className={ `flash ${type} ${showStatus}` }>
        {text}
      </section>
    );
  }
}

export default Flash;
