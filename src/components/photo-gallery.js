import React from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

import styles from "./photo-gallery.module.css";

export default class PhotoGallery extends React.Component {
  constructor(props) {
    super();
    this.state = {
      images: props.photos,
      currentImage: 0
    };
  }

  openLightbox = (_, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  };

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  };

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };

  render = () => {
    return (
      <section className={styles.photoGallery}>
        <Gallery photos={this.state.images} onClick={this.openLightbox} />
        <Lightbox
          images={this.state.images}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </section>
    );
  };
}
