import { LEFT, RIGHT, TOP, BOTTOM, XCENTER, YCENTER, xSideNames, ySideNames, centerNames, xPositionNames, yPositionNames } from './consts';
export declare type Point = {
    x: number;
    y: number;
};
export declare type Size = {
    width: number;
    height: number;
};
export declare type Rect = Point & Size;
export declare type StringRect = {
    [key in keyof Rect]: string;
};
export declare type ScaleTransform = Point & {
    scale: number;
};
export declare type Line = {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
};
export declare type Left = typeof LEFT;
export declare type Right = typeof RIGHT;
export declare type Top = typeof TOP;
export declare type Bottom = typeof BOTTOM;
export declare type XCenter = typeof XCENTER;
export declare type YCenter = typeof YCENTER;
export declare type XSide = typeof xSideNames[number];
export declare type YSide = typeof ySideNames[number];
export declare type Side = XSide | YSide;
export declare type Center = typeof centerNames[number];
export declare type XPosition = typeof xPositionNames[number];
export declare type YPosition = typeof yPositionNames[number];
export declare type Position = XPosition | YPosition;
export declare type Positions = [XPosition, YPosition];
export declare type SidesRect = Record<Side, number>;
