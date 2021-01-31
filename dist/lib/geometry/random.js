"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomConvexPoly = void 0;
const util_1 = require("../util");
exports.randomConvexPoly = (n) => {
    const xPool = util_1.createSequence(n, () => Math.random()).sort();
    const yPool = util_1.createSequence(n, () => Math.random()).sort();
    const minX = xPool[0];
    const maxX = xPool[n - 1];
    const minY = yPool[0];
    const maxY = yPool[n - 1];
    let xVec = [];
    let yVec = [];
    let lastTop = minX;
    let lastBottom = minX;
    for (let i = 1; i < n - 1; i++) {
        const x = xPool[i];
        if (util_1.randomInt(2)) {
            xVec.push(x - lastTop);
            lastTop = x;
        }
        else {
            xVec.push(lastBottom - x);
            lastBottom = x;
        }
    }
    xVec.push(maxX - lastTop);
    xVec.push(lastBottom - maxX);
    let lastLeft = minY;
    let lastRight = minY;
    for (let i = 1; i < n - 1; i++) {
        const y = yPool[i];
        if (util_1.randomInt(2)) {
            yVec.push(y - lastLeft);
            lastLeft = y;
        }
        else {
            yVec.push(lastRight - y);
            lastRight = y;
        }
    }
    yVec.push(maxY - lastLeft);
    yVec.push(lastRight - maxY);
    yVec = util_1.shuffle(yVec);
    const vec = util_1.createSequence(n, i => ({
        x: xVec[i],
        y: yVec[i]
    }));
    vec.sort((a, b) => Math.atan2(a.y, a.x) - Math.atan2(b.y, b.x));
    let x = 0, y = 0;
    let minPolygonX = 0;
    let minPolygonY = 0;
    const points = util_1.createSequence(n, i => {
        const point = { x, y };
        x += vec[i].x;
        y += vec[i].y;
        minPolygonX = Math.min(minPolygonX, x);
        minPolygonY = Math.min(minPolygonY, y);
        return point;
    });
    let xShift = minX - minPolygonX;
    let yShift = minY - minPolygonY;
    for (let i = 0; i < n; i++) {
        const { x, y } = points[i];
        points[i] = {
            x: x + xShift,
            y: y + yShift
        };
    }
    return points;
};
//# sourceMappingURL=random.js.map