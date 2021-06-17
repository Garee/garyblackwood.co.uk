interface IGlightbox {
    openAt(idx: number): void;
}

declare module "glightbox" {
    const content: (options) => Glightbox;
    export = content;
}
