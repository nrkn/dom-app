import { Size } from '../../geometry/types';
export declare const createCanvas: (size: Size) => HTMLCanvasElement;
export declare const canvasToImageData: (source: HTMLCanvasElement) => ImageData;
export declare const canvasToHtmlImage: (source: HTMLCanvasElement) => Promise<HTMLImageElement>;
export declare const canvasToBlob: (source: HTMLCanvasElement) => Promise<Blob>;
export declare const canvasToDataUrl: (source: HTMLCanvasElement) => string;
export declare const canvasToSvg: (source: HTMLCanvasElement) => Promise<SVGSVGElement>;
export declare const cloneCanvas: (source: HTMLCanvasElement) => HTMLCanvasElement;
export declare const canvasToContext: (source: HTMLCanvasElement) => CanvasRenderingContext2D;
