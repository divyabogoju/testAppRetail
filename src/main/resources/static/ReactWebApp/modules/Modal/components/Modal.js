import React, { Component } from 'react';
import '../scss/modal.scss';

class Modal extends Component {

    toggleModal = () => {
        const modal = document.querySelector('.modal');
        modal.classList.toggle('modal_show-modal');
    };

    render() {
        const { children: ModalContent } = this.props;
        return (
            <div className="modal">
                <div className="modal__overlay" onClick={this.toggleModal} />
                <div className="modal__overlay-content">
                    {ModalContent}
                    <div className="modal__close-button" onClick={this.toggleModal} />
                </div>
            </div>
        )
    }
}

export default Modal;