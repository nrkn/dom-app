export declare const blobToDataUrl: (source: Blob) => Promise<string>;
export declare const blobToHtmlImage: (source: Blob) => Promise<HTMLImageElement>;
export declare const blobToCanvas: (source: Blob) => Promise<HTMLCanvasElement>;
export declare const cloneBlob: (source: Blob) => Promise<Blob>;
export declare const stringifyBlob: ({ size, type }: Blob) => string;
