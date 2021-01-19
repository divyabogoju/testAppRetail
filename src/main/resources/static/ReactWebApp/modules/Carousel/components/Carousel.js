import React, { Component } from 'react';
import Modal from "../../Modal/components/Modal";
import '../scss/carousel.scss';


class Carousel extends Component {

    componentDidMount() {
        const box = document.querySelector('.carousel__carousel-preview-container');
        this.previewImages = box.querySelectorAll('.carousel__preview-img');
        this.thumbnailImages = document.querySelectorAll('.carousel__thumbnail-container');
        this.modalImages = document.querySelectorAll('.carousel__modal-image');
        this.totalImages = this.previewImages.length;
        this.setToInitialCarouselImageState();
    }

    /*
    **  not using arrow functions because you cannot rebind them you have to do something like fn.bind(undefined, arg1,arg2) ..
        binding is used here to set the args for the funs ar the time of react render so that no pre-processing needs
        to be done to call the action handlers.
    */


    setToInitialCarouselImageState = () => {
        this.recalculateCurrentPrevAndNext(0);
        this.moveToCurrent();
    };

    cleanCarouselState = () => {
        this.currentPreviewImage.classList.remove('carousel__preview-img_current');
        this.currentThumbnailImage.classList.remove('carousel__thumbnail-container_current');
        this.nextThumbnailImage.classList.remove('carousel__thumbnail-container_next');
        this.previousThumbnailImage.classList.remove('carousel__thumbnail-container_prev');
        this.currentModalImage.classList.remove('carousel__modal-image_current');
    };

    navigate(direction) {
        // hide the old currentPreviewImage list item
        let updatedIndex = this.currentImageIndex + direction;
        this.moveToGivenIndex(updatedIndex);
    };

    recalculateCurrentPrevAndNext = (index) => {
        this.currentImageIndex = this.calculatePosition(index);
        this.nextImageIndex = this.calculatePosition(this.currentImageIndex + 1);
        this.prevImageIndex = this.calculatePosition(this.currentImageIndex - 1);
    };

    calculatePosition = (modifiedIndex) => {
        if (Math.abs(modifiedIndex) < this.totalImages) {
            if (modifiedIndex < 0) {
                return modifiedIndex + this.totalImages;
            } else {
                return modifiedIndex;
            }
        }
        return 0;
    };

    moveToGivenIndex(index) {
        this.cleanCarouselState();
        this.recalculateCurrentPrevAndNext(index);
        this.moveToCurrent();
    };

    moveToCurrent() {
        const { previewImages, thumbnailImages, modalImages } = this;
        // set new currentPreviewImage element
        // and add CSS classes
        this.currentPreviewImage = previewImages[ this.currentImageIndex ];
        this.currentPreviewImage.classList.add('carousel__preview-img_current');

        this.currentThumbnailImage = thumbnailImages[ this.currentImageIndex ];
        this.currentThumbnailImage.classList.add('carousel__thumbnail-container_current');

        this.nextThumbnailImage = thumbnailImages[ this.nextImageIndex ];
        this.nextThumbnailImage.classList.add('carousel__thumbnail-container_next');

        this.previousThumbnailImage = thumbnailImages[ this.prevImageIndex ];
        this.previousThumbnailImage.classList.add('carousel__thumbnail-container_prev');

        this.currentModalImage = modalImages[ this.currentImageIndex ];
        this.currentModalImage.classList.add('carousel__modal-image_current');
    }

    toggleModal = () => {
        const modal = document.querySelector('.modal');
        modal.classList.toggle('modal_show-modal');
    };

    render() {
        const { productImages, className } = this.props;

        return (
            <div className={`${className} carousel`}>
                <div className="carousel__carousel-preview-container">
                    {productImages.map((obj, index) => {
                        return (
                            <div key={`carousel__preview-img-container-${index}`}>
                                <img className="carousel__preview-img" src={obj.image} />
                            </div>
                        );
                    })}
                </div>
                <button className="carousel__view-larger-button" onClick={this.toggleModal}>
                    View Larger
                </button>
                <div className="carousel__control-buttons">
                    <button className="carousel__control-button-prev" onClick={this.navigate.bind(this, -1)}>
                        ◀ <span className="offscreen">Previous</span>
                    </button>
                    <div className="carousel__thumbnails-outer">
                        {productImages.map((obj, index) => {
                            return (
                                <div key={`carousel-thumbnail-${index}`} className="carousel__thumbnail-container" onClick={this.moveToGivenIndex.bind(this, index)}>
                                    <img src={obj.image} className="carousel__thumbnail-img" />
                                </div>
                            );
                        })}
                    </div>
                    <button className="carousel__control-button-next" onClick={this.navigate.bind(this, 1)}>
                        <span className="offscreen">Next</span> ▶
                    </button>
                </div>
                <Modal>
                    <div className="carousel__modal">
                        {productImages.map((obj, index) => <img key={`modal-image-${index}`} className="carousel__modal-image" src={obj.image} />)}
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Carousel;