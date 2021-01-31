import { Point, Size } from './types';
export declare const translatePoint: ({ x: x1, y: y1 }: Point, { x: x2, y: y2 }: Point) => Point;
export declare const scalePoint: ({ x, y }: Point, scale: number) => Point;
export declare const snapPointToGrid: ({ x, y }: Point, { width: gridW, height: gridH }: Size) => Point;
export declare const deltaPoint: ({ x: x1, y: y1 }: Point, { x: x2, y: y2 }: Point) => Point;
export declare const tupleToPoint: ([x, y]: [number, number]) => Point;
