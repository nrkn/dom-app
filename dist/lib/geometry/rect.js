"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flipRectInBounds = exports.scaleRectFromBounds = exports.scaleRectFrom = exports.scaleSidesRect = exports.growSidesRectByDelta = exports.translateRect = exports.sidesRectToRect = exports.rectToSidesRect = exports.growRect = exports.stringRectToRect = exports.rectToStringRect = exports.scaleRect = exports.rectIntersection = exports.getBoundingRect = exports.expandRect = exports.contractRect = exports.rectContainsPoint = void 0;
const util_1 = require("../util");
const point_1 = require("./point");
const rectContainsPoint = (rect, point) => {
    if (point.x < rect.x)
        return false;
    if (point.y < rect.y)
        return false;
    if (point.x > (rect.x + rect.width))
        return false;
    if (point.y > (rect.y + rect.height))
        return false;
    return true;
};
exports.rectContainsPoint = rectContainsPoint;
const contractRect = ({ x, y, width, height }, amount = 1) => {
    x += amount;
    y += amount;
    width -= amount * 2;
    height -= amount * 2;
    return { x, y, width, height };
};
exports.contractRect = contractRect;
const expandRect = ({ x, y, width, height }, amount = 1) => {
    x -= amount;
    y -= amount;
    width += amount * 2;
    height += amount * 2;
    return { x, y, width, height };
};
exports.expandRect = expandRect;
const getBoundingRect = (rects) => {
    if (rects.length === 0)
        return;
    const [first, ...rest] = rects;
    let { x: left, y: top } = first;
    let right = left + first.width;
    let bottom = top + first.height;
    rest.forEach(rect => {
        const { x: rx, y: ry, width: rw, height: rh } = rect;
        const rr = rx + rw;
        const rb = ry + rh;
        if (rx < left)
            left = rx;
        if (ry < top)
            top = ry;
        if (rr > right)
            right = rr;
        if (rb > bottom)
            bottom = rb;
    });
    const x = left;
    const y = top;
    const width = right - left;
    const height = bottom - top;
    return { x, y, width, height };
};
exports.getBoundingRect = getBoundingRect;
const rectIntersection = (a, b) => {
    const x = Math.max(a.x, b.x);
    const y = Math.max(a.y, b.y);
    const right = Math.min(a.x + a.width, b.x + b.width);
    const bottom = Math.min(a.y + a.height, b.y + b.height);
    if (right >= x && bottom >= y) {
        const width = right - x;
        const height = bottom - y;
        return { x, y, width, height };
    }
};
exports.rectIntersection = rectIntersection;
const scaleRect = ({ x, y, width, height }, { x: sx, y: sy }) => {
    x *= sx;
    y *= sy;
    width *= sx;
    height *= sy;
    const scaled = { x, y, width, height };
    return scaled;
};
exports.scaleRect = scaleRect;
const rectToStringRect = ({ x, y, width, height }) => ({
    x: String(x),
    y: String(y),
    width: String(width),
    height: String(height)
});
exports.rectToStringRect = rectToStringRect;
const stringRectToRect = ({ x, y, width, height }) => ({
    x: Number(x),
    y: Number(y),
    width: Number(width),
    height: Number(height)
});
exports.stringRectToRect = stringRectToRect;
const growRect = (rect, ...args) => {
    let { x, y, width, height } = rect;
    if (args.length === 0)
        return { x, y, width, height };
    if (args.length === 1) {
        x -= args[0];
        y -= args[0];
        width += args[0] * 2;
        height += args[0] * 2;
        return { x, y, width, height };
    }
    if (args.length === 2) {
        x -= args[1];
        y -= args[0];
        width += args[1] * 2;
        height += args[0] * 2;
        return { x, y, width, height };
    }
    if (args.length === 3) {
        x -= args[1];
        y -= args[0];
        width += args[1] * 2;
        height += args[0] + args[2];
        return { x, y, width, height };
    }
    x -= args[3];
    y -= args[0];
    width += args[3] + args[1];
    height += args[0] + args[2];
    return { x, y, width, height };
};
exports.growRect = growRect;
const rectToSidesRect = ({ x, y, width, height }) => {
    const left = x;
    const top = y;
    const right = x + width;
    const bottom = y + height;
    return { top, right, bottom, left };
};
exports.rectToSidesRect = rectToSidesRect;
const sidesRectToRect = ({ top, right, bottom, left }) => {
    const x = left;
    const y = top;
    const width = right - left;
    const height = bottom - top;
    return { x, y, width, height };
};
exports.sidesRectToRect = sidesRectToRect;
const translateRect = (rect, delta) => {
    const p = point_1.translatePoint(rect, delta);
    return Object.assign({}, rect, p);
};
exports.translateRect = translateRect;
const growSidesRectByDelta = (sidesRect, delta, origin) => {
    const [oX, oY] = origin;
    let { top, right, bottom, left } = sidesRect;
    if (oY === 'top')
        top += delta.y;
    if (oX === 'right')
        right += delta.x;
    if (oY === 'bottom')
        bottom += delta.y;
    if (oX === 'left')
        left += delta.x;
    const grownRect = { top, right, bottom, left };
    return grownRect;
};
exports.growSidesRectByDelta = growSidesRectByDelta;
const scaleSidesRect = (sidesRect, scale) => {
    let { top, right, bottom, left } = sidesRect;
    top *= scale.y;
    right *= scale.x;
    bottom *= scale.y;
    left *= scale.x;
    const scaledRect = { top, right, bottom, left };
    return scaledRect;
};
exports.scaleSidesRect = scaleSidesRect;
// TODO - this is a weird way to do it, research better implementation
// 
const scaleRectFrom = (bounds, appRect, delta, origin) => {
    const sidesRect = exports.rectToSidesRect(bounds);
    const grown = exports.growSidesRectByDelta(sidesRect, delta, origin);
    const newBoundsRect = exports.sidesRectToRect(grown);
    let flipX = false;
    let flipY = false;
    if (newBoundsRect.width < 0) {
        flipX = true;
        newBoundsRect.x += newBoundsRect.width * 2;
        newBoundsRect.width *= -1;
    }
    if (newBoundsRect.height < 0) {
        flipY = true;
        newBoundsRect.y += newBoundsRect.height * 2;
        newBoundsRect.height *= -1;
    }
    if (newBoundsRect.width === 0 || newBoundsRect.height === 0)
        return;
    appRect = exports.scaleRectFromBounds(appRect, bounds, newBoundsRect);
    appRect = exports.flipRectInBounds(appRect, newBoundsRect, flipX, flipY);
    return appRect;
};
exports.scaleRectFrom = scaleRectFrom;
const scaleRectFromBounds = (rect, fromBounds, toBounds) => {
    rect = util_1.clone(rect);
    const x = toBounds.width / fromBounds.width;
    const y = toBounds.height / fromBounds.height;
    const scale = { x, y };
    const negativeTranslate = point_1.scalePoint(fromBounds, -1);
    const delta = point_1.deltaPoint(toBounds, fromBounds);
    Object.assign(rect, exports.translateRect(rect, negativeTranslate));
    Object.assign(rect, exports.scaleRect(rect, scale));
    Object.assign(rect, exports.translateRect(rect, fromBounds));
    Object.assign(rect, exports.translateRect(rect, delta));
    return rect;
};
exports.scaleRectFromBounds = scaleRectFromBounds;
const flipRectInBounds = (rect, bounds, flipX, flipY) => {
    rect = util_1.clone(rect);
    const negativeTranslate = point_1.scalePoint(bounds, -1);
    Object.assign(rect, exports.translateRect(rect, negativeTranslate));
    let { x, y, width, height } = rect;
    if (flipX) {
        x = bounds.width - x - width;
    }
    if (flipY) {
        y = bounds.height - y - height;
    }
    Object.assign(rect, { x, y, width, height });
    Object.assign(rect, exports.translateRect(rect, bounds));
    return rect;
};
exports.flipRectInBounds = flipRectInBounds;
//# sourceMappingURL=rect.js.map