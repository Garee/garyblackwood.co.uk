import React from "react";
import Gallery, { PhotoProps } from "react-photo-gallery";
import * as styles from "./photo-gallery.module.css";

interface PhotoGalleryProps {
    photos: Array<PhotoProps<any>>;
}

interface PhotoGalleryState {
    images: Array<PhotoProps<any>>;
    lightbox?: IGlightbox;
}

export default class PhotoGallery extends React.Component<
    PhotoGalleryProps,
    PhotoGalleryState
> {
    constructor(props: PhotoGalleryProps) {
        super(props);
        this.state = {
            images: props.photos,
        };
    }

    openLightbox = (_: any, at: { index: number }) => {
        if (!this.state.lightbox) {
            const Glightbox = require("glightbox");
            this.setState(
                {
                    ...this.state,
                    lightbox: Glightbox({
                        elements: this.state.images.map((i) => {
                            i.href = i.src;
                            return i;
                        }),
                    }),
                },
                () => this.state.lightbox?.openAt(at.index)
            );
        } else {
            this.state.lightbox?.openAt(at.index);
        }
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
