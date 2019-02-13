'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = is_touch_device;
function is_touch_device() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
};