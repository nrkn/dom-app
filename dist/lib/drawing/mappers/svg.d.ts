import { Size } from '../../geometry/types';
export declare const loadSvgImage: (src: string) => Promise<SVGImageElement>;
export declare const createSvg: ({ width, height }: Size) => SVGSVGElement;
export declare const svgToDataUrl: (source: SVGSVGElement) => string;
export declare const svgToHtmlImage: (source: SVGSVGElement) => Promise<HTMLImageElement>;
export declare const svgToSize: (source: SVGSVGElement) => Promise<Size>;
export declare const svgToCanvas: (source: SVGSVGElement) => Promise<HTMLCanvasElement>;
export declare const sizeFromSvgViewBox: (source: SVGSVGElement) => Promise<Size>;
export declare const svgDataUrlToSvg: (source: string) => SVGSVGElement;
