import React from "react";

import BaseLayout from "../components/layouts/base/base";
import PhotoGallery from "../components/photo-gallery/photo-gallery";

const photos = [
  {
    src: "/gallery/london-marathon-1.jpg",
    width: 1,
    height: 1,
    description: "Running 2:59:50 at The London Marathon 2019.",
    type: "image",
  },
  {
    src: "/gallery/ben-nevis.jpg",
    width: 2,
    height: 1,
    description: "Ben Nevis 2018 - Taken on the West Highland Way.",
    type: "image",
  },
  {
    src: "/gallery/ben-cruachan.jpg",
    width: 1,
    height: 1,
    description: "Ben Crauchan - Climbed with Daniel during November 2018.",
    type: "image",
  },
  {
    src: "/gallery/london-marathon-2.jpg",
    width: 1,
    height: 1,
    description: "Running 2:59:50 at The London Marathon 2019.",
    type: "image",
  },
  {
    src: "/gallery/dam.jpg",
    width: 1,
    height: 1,
    description: "Ben Crauchan Dam - November 2018.",
    type: "image",
  },
  {
    src: "/gallery/reservoir.jpg",
    width: 2,
    height: 1,
    description: "Ben Crauchan Dam Reservoir - November 2018.",
    type: "image",
  },
  {
    src: "/gallery/kili.jpg",
    width: 1,
    height: 1,
    description: "I climbed Mount Kilimanjaro with my mum in 2010.",
    type: "image",
  },

  {
    src: "/gallery/me.jpg",
    width: 1,
    height: 1,
    description: "Taken near Callendar in 2018.",
    type: "image",
  },
  {
    src: "/gallery/porto.jpg",
    width: 1,
    height: 1,
    description: "Taken while working in Porto, 2015.",
    type: "image",
  },
  {
    src: "/gallery/gsr-shoe.jpg",
    width: 1,
    height: 1,
    description: "I ran 1:23:43 at the Great Scottish Run Half Marathon 2018.",
    type: "image",
  },
];

const PhotosPage = () => {
  return (
    <BaseLayout title="Photos">
      <PhotoGallery photos={photos} />
    </BaseLayout>
  );
};

export default PhotosPage;
