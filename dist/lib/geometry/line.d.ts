import { Line, Point } from './types';
export declare const lineToVector: ({ x1, y1, x2, y2 }: Line) => Point;
export declare const createLine: ({ x: x1, y: y1 }: Point, { x: x2, y: y2 }: Point) => Line;
export declare const normalizeLine: ({ x1: startX, y1: startY, x2: endX, y2: endY }: Line) => Line;
export declare const distance: (line: Line) => number;
