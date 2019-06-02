import React from "react";

import BaseLayout from "../components/layouts/base";
import PhotoGallery from "../components/photo-gallery";

const photos = [
  {
    src: "/gallery/london-marathon-1.jpg",
    width: 1,
    height: 1
  },
  {
    src: "/gallery/ben-nevis.jpg",
    width: 2,
    height: 1
  },
  {
    src: "/gallery/ben-cruachan.jpg",
    width: 1,
    height: 1
  },
  {
    src: "/gallery/london-marathon-2.jpg",
    width: 1,
    height: 1
  },
  {
    src: "/gallery/dam.jpg",
    width: 1,
    height: 1
  },
  {
    src: "/gallery/reservoir.jpg",
    width: 2,
    height: 1
  },
  {
    src: "/gallery/kili.jpg",
    width: 1,
    height: 1
  },

  {
    src: "/gallery/me.jpg",
    width: 1,
    height: 1
  },
  {
    src: "/gallery/porto.jpg",
    width: 1,
    height: 1
  },
  {
    src: "/gallery/gsr-shoe.jpg",
    width: 1,
    height: 1
  }
];

export default () => {
  return (
    <BaseLayout title="Photos">
      <PhotoGallery photos={photos} />
    </BaseLayout>
  );
};
