import React from "react";
import Gallery, { PhotoProps } from "react-photo-gallery";

import * as styles from "./photo-gallery.module.css";

interface PhotoGalleryProps {
    photos: Array<PhotoProps<any>>;
}

interface PhotoGalleryState {
    images: Array<PhotoProps<any>>;
    currentImage: number;
}

export default class PhotoGallery extends React.Component<
    PhotoGalleryProps,
    PhotoGalleryState
> {
    constructor(props: PhotoGalleryProps) {
        super(props);
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

    override render = () => {
        return (
            <section className={styles.photoGallery}>
                <Gallery photos={this.state.images} />
            </section>
        );
    };
}
