export declare const imageSourceToContext: (source: CanvasImageSource) => CanvasRenderingContext2D;
export declare const imageSourceToCanvas: (source: CanvasImageSource) => HTMLCanvasElement;
export declare const imageSourceToImageData: (source: CanvasImageSource) => ImageData;
export declare const imageSourceToHtmlImage: (source: CanvasImageSource) => Promise<HTMLImageElement>;
export declare const imageSourceToElement: (source: CanvasImageSource) => Promise<Element>;
export declare const imageSourceToSize: (source: CanvasImageSource) => {
    width: number;
    height: number;
};
export declare const imageSourceToSvg: (source: CanvasImageSource) => Promise<SVGSVGElement>;
export declare const imageSourceToDataUrl: (source: CanvasImageSource) => Promise<string>;
export declare const cloneImageSource: (source: CanvasImageSource) => Promise<HTMLCanvasElement | HTMLImageElement>;
