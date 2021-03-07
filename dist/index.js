"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawingMapper = exports.cloneImageData = exports.fillImageData = exports.pasteImageData = exports.copyImageData = void 0;
__exportStar(require("@mojule/spa-router"), exports);
var copy_1 = require("@rgba-image/copy");
Object.defineProperty(exports, "copyImageData", { enumerable: true, get: function () { return copy_1.copy; } });
var paste_1 = require("@rgba-image/paste");
Object.defineProperty(exports, "pasteImageData", { enumerable: true, get: function () { return paste_1.paste; } });
var fill_1 = require("@rgba-image/fill");
Object.defineProperty(exports, "fillImageData", { enumerable: true, get: function () { return fill_1.fill; } });
var clone_1 = require("@rgba-image/clone");
Object.defineProperty(exports, "cloneImageData", { enumerable: true, get: function () { return clone_1.clone; } });
__exportStar(require("@rgba-image/gray"), exports);
__exportStar(require("@rgba-image/color"), exports);
__exportStar(require("@rgba-image/pixel"), exports);
__exportStar(require("./lib/dom/h"), exports);
__exportStar(require("./lib/dom/s"), exports);
__exportStar(require("./lib/dom/util"), exports);
__exportStar(require("./lib/geometry/line"), exports);
__exportStar(require("./lib/geometry/number"), exports);
__exportStar(require("./lib/geometry/point"), exports);
__exportStar(require("./lib/geometry/rect"), exports);
__exportStar(require("./lib/geometry/scale"), exports);
__exportStar(require("./lib/geometry/size"), exports);
__exportStar(require("./lib/util"), exports);
var mappers_1 = require("./lib/drawing/mappers");
Object.defineProperty(exports, "drawingMapper", { enumerable: true, get: function () { return mappers_1.drawingMapper; } });
//# sourceMappingURL=index.js.map