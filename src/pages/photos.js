import React from "react";

import BaseLayout from "../components/layouts/base";
import PhotoGallery from "../components/photo-gallery";

const photos = [
    {
        src: "/gallery/london-marathon-1.jpg",
        width: 1,
        height: 1,
        caption: "Running 2:59:50 at The London Marathon 2019.",
    },
    {
        src: "/gallery/ben-nevis.jpg",
        width: 2,
        height: 1,
        caption: "Ben Nevis 2018 - Taken on the West Highland Way.",
    },
    {
        src: "/gallery/ben-cruachan.jpg",
        width: 1,
        height: 1,
        caption: "Ben Crauchan - Climbed with Daniel during November 2018.",
    },
    {
        src: "/gallery/london-marathon-2.jpg",
        width: 1,
        height: 1,
        caption: "Running 2:59:50 at The London Marathon 2019.",
    },
    {
        src: "/gallery/dam.jpg",
        width: 1,
        height: 1,
        caption: "Ben Crauchan Dam - November 2018.",
    },
    {
        src: "/gallery/reservoir.jpg",
        width: 2,
        height: 1,
        caption: "Ben Crauchan Dam Reservoir - November 2018.",
    },
    {
        src: "/gallery/kili.jpg",
        width: 1,
        height: 1,
        caption: "I climbed Mount Kilimanjaro with my mum in 2010.",
    },

    {
        src: "/gallery/me.jpg",
        width: 1,
        height: 1,
        caption: "Taken near Callendar in 2018.",
    },
    {
        src: "/gallery/porto.jpg",
        width: 1,
        height: 1,
        caption: "Taken while working in Porto, 2015.",
    },
    {
        src: "/gallery/gsr-shoe.jpg",
        width: 1,
        height: 1,
        caption: "I ran 1:23:43 at the Great Scottish Run Half Marathon 2018.",
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
