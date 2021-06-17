interface IGlightbox {
    open(): void;
}

declare module "glightbox" {
    const content: (options) => Glightbox;
    export = content;
}
