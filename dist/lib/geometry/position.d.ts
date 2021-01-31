import { Point, Positions, Rect, XPosition, YPosition } from './types';
export declare const getXPosition: ({ x, width }: Rect, position: XPosition) => number;
export declare const getYPosition: ({ y, height }: Rect, position: YPosition) => number;
export declare const findXPosition: (values: string[]) => "left" | "right" | "xCenter" | undefined;
export declare const findYPosition: (values: string[]) => "bottom" | "top" | "yCenter" | undefined;
export declare const getEdgePositions: (rect: Rect, growBy: number, point: Point) => Positions | undefined;
