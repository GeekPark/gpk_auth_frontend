import React, { Component } from 'react';

class Modal extends Component {
  render() {
    const { contentPath, type, title, actions} = this.props;
    const ModalContent = require(`${contentPath}`);

    return (
      <div className={`modal ${type}`}>
        <section className='modal-main'>
          <h4>{title}</h4>
          <ModalContent />
          <button className='modal-closed' onClick={()=> actions.closeModal()}>X</button>
        </section>
        <section className='modal-bg' onClick={()=> actions.closeModal()}></section>
      </div>
    );
  }
}

export default Modal;
