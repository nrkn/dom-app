import { Point, Rect, Size } from './types';
export declare const isXPosition: (value: any) => value is "left" | "right" | "xCenter";
export declare const isYPosition: (value: any) => value is "bottom" | "top" | "yCenter";
export declare const isPoint: (value: any) => value is Point;
export declare const isSize: (value: any) => value is Size;
export declare const isRect: (value: any) => value is Rect;
