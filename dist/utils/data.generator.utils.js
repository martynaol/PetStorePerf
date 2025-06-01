"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = generateRandomEmailAndUsername;
function generateRandomEmailAndUsername(options) {
    const username = (options === null || options === void 0 ? void 0 : options.username) || "test";
    const domain = (options === null || options === void 0 ? void 0 : options.domain) || "example.com";
    const salt = Date.now();
    const email = `${username}-${salt}@${domain}`;
    return [username, email];
}
