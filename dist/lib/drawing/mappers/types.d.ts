import { Size } from '../../geometry/types';
export declare const drawingMappableNames: readonly ["imageSource", "htmlImage", "canvas", "context", "imageData", "blob", "svg", "dataUrl", "size"];
export declare type DrawingMapFromType = {
    imageSource: CanvasImageSource;
    htmlImage: HTMLImageElement;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    imageData: ImageData;
    blob: Blob;
    svg: SVGSVGElement;
    dataUrl: string;
    size: Size;
};
export declare type DrawingMapToType = {
    imageSource: Promise<CanvasImageSource>;
    htmlImage: Promise<HTMLImageElement>;
    canvas: Promise<HTMLCanvasElement>;
    context: Promise<CanvasRenderingContext2D>;
    imageData: Promise<ImageData>;
    blob: Promise<Blob>;
    svg: Promise<SVGSVGElement>;
    dataUrl: Promise<string>;
    size: Promise<Size>;
};
export declare type DrawingMappable = (typeof drawingMappableNames[number] & string & keyof DrawingMapFromType);
export declare type DrawingMapperFn<From, To> = (source: From) => To;
export declare type DrawingMapper = {
    [from in DrawingMappable]: {
        [to in DrawingMappable]: DrawingMapperFn<DrawingMapFromType[from], DrawingMapToType[to]>;
    };
};
