"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadFont = exports.cloneImageData = exports.cloneElement = exports.setRectElRect = exports.getRectElRect = exports.strictFind = exports.strictGetData = exports.strictFormRadioNodes = exports.strictFieldsetRadioNodes = exports.strictFieldsetElement = exports.strictFormElement = exports.strictSelect = exports.attr = void 0;
const styleKey = 'style';
const attr = (el, ...attributeRecords) => {
    attributeRecords.forEach(attributes => {
        Object.keys(attributes).forEach(key => {
            if (key === styleKey) {
                if (styleKey in el) {
                    const value = attributes[key];
                    if (typeof value === 'string') {
                        el.setAttribute('style', value);
                        return;
                    }
                    const styleTarget = el[styleKey];
                    try {
                        Object.assign(styleTarget, value);
                    }
                    catch (err) {
                        console.warn('setting style on el', { styleTarget, value });
                        throw err;
                    }
                }
                return;
            }
            const value = String(attributes[key]);
            el.setAttribute(key, value);
        });
    });
};
exports.attr = attr;
const strictSelect = (selectors, el = document) => {
    const result = el.querySelector(selectors);
    if (result === null)
        throw Error(`Expected ${selectors} to match something`);
    return result;
};
exports.strictSelect = strictSelect;
const strictFormElement = (formEl, name) => {
    const el = formEl.elements.namedItem(name);
    if (el instanceof HTMLInputElement)
        return el;
    if (el instanceof RadioNodeList)
        return el;
    throw Error(`Expected an HTMLInputElement or RadioNodeList called ${name}`);
};
exports.strictFormElement = strictFormElement;
const strictFieldsetElement = (fieldsetEl, name) => {
    const el = fieldsetEl.elements.namedItem(name);
    if (el instanceof HTMLInputElement)
        return el;
    if (el instanceof RadioNodeList)
        return el;
    throw Error(`Expected an HTMLInputElement or RadioNodeList called ${name}`);
};
exports.strictFieldsetElement = strictFieldsetElement;
const strictFieldsetRadioNodes = (fieldsetEl, name) => {
    const el = fieldsetEl.elements.namedItem(name);
    if (el instanceof RadioNodeList)
        return el;
    throw Error(`Expected a RadioNodeList called ${name}`);
};
exports.strictFieldsetRadioNodes = strictFieldsetRadioNodes;
const strictFormRadioNodes = (formEl, name) => {
    const el = formEl.elements.namedItem(name);
    if (el instanceof RadioNodeList)
        return el;
    throw Error(`Expected a RadioNodeList called ${name}`);
};
exports.strictFormRadioNodes = strictFormRadioNodes;
const strictGetData = (el, key) => {
    const value = el.dataset[key];
    if (value === undefined)
        throw Error(`Expected element dataset to contain ${key}`);
    return value;
};
exports.strictGetData = strictGetData;
const strictFind = (elements, predicate) => {
    const result = elements.find(predicate);
    if (result === undefined)
        throw Error(`Expected predicate to match something`);
    return result;
};
exports.strictFind = strictFind;
const getRectElRect = (rectEl) => {
    const { x: ex, y: ey, width: ew, height: eh } = rectEl;
    const x = ex.baseVal.value;
    const y = ey.baseVal.value;
    const width = ew.baseVal.value;
    const height = eh.baseVal.value;
    const rect = { x, y, width, height };
    return rect;
};
exports.getRectElRect = getRectElRect;
const setRectElRect = (rectEl, rect) => {
    const initialRect = exports.getRectElRect(rectEl);
    const { x, y, width, height } = Object.assign({}, initialRect, rect);
    rectEl.x.baseVal.value = x;
    rectEl.y.baseVal.value = y;
    rectEl.width.baseVal.value = width;
    rectEl.height.baseVal.value = height;
};
exports.setRectElRect = setRectElRect;
const cloneElement = (value) => value.cloneNode(true);
exports.cloneElement = cloneElement;
const cloneImageData = (source) => {
    const dest = new ImageData(source.width, source.height);
    for (let i = 0; i < source.data.length; i++) {
        dest.data[i] = source.data[i];
    }
    return dest;
};
exports.cloneImageData = cloneImageData;
const loadFont = async (name, src) => {
    const fontFace = new FontFace(name, `url(${src})`, {});
    await fontFace.load();
    document['fonts'].add(fontFace);
};
exports.loadFont = loadFont;
//# sourceMappingURL=util.js.map