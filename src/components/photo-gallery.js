import React from "react";
import Gallery from "react-photo-gallery";

import { photoGallery } from "./photo-gallery.module.css";

export default class PhotoGallery extends React.Component {
    constructor(props) {
        super();
        this.state = {
            images: props.photos,
            currentImage: 0,
        };
    }

    gotoPrevious = () => {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    };

    gotoNext = () => {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    };

    render = () => {
        return (
            <section className={photoGallery}>
                <Gallery photos={this.state.images} />
            </section>
        );
    };
}
