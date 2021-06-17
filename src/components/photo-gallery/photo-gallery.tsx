import React from "react";
import Gallery, { PhotoProps } from "react-photo-gallery";
import Glightbox from "glightbox";
import * as styles from "./photo-gallery.module.css";

interface PhotoGalleryProps {
    photos: Array<PhotoProps<any>>;
}

interface PhotoGalleryState {
    images: Array<PhotoProps<any>>;
    lightbox: IGlightbox;
}

export default class PhotoGallery extends React.Component<
    PhotoGalleryProps,
    PhotoGalleryState
> {
    constructor(props: PhotoGalleryProps) {
        super(props);
        this.state = {
            images: props.photos,
            lightbox: Glightbox({
                elements: props.photos.map((p) => {
                    p.href = p.src;
                    return p;
                }),
            }),
        };
    }

    openLightbox = () => {
        this.state.lightbox.open();
    };

    override render = () => {
        return (
            <section className={styles.photoGallery}>
                <Gallery
                    photos={this.state.images}
                    onClick={this.openLightbox}
                />
            </section>
        );
    };
}
