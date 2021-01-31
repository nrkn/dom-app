import { Point, ScaleTransform } from './types';
export declare const transformRelativeTo: (existing: ScaleTransform, newScale: number, origin: Point) => ScaleTransform;
export declare const translateAndScalePoint: ({ x, y }: Point, { x: tx, y: ty, scale }: ScaleTransform) => Point;
export declare const zoomAt: (transform: ScaleTransform, { scale, x, y }: ScaleTransform, minScale: number) => ScaleTransform;
