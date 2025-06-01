"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
exports.default = default_1;
const http_1 = __importDefault(require("k6/http"));
const k6_1 = require("k6");
const data_generator_utils_1 = __importDefault(require("../../utils/data.generator.utils"));
exports.options = {
    vus: 2,
    iterations: 5,
};
function healthCheck() {
    const res = http_1.default.get("https://petstore.octoperf.com/");
    (0, k6_1.check)(res, {
        "is status 200": (r) => r.status === 200,
        "is response time < 200ms": (r) => r.timings.duration < 200,
    });
    (0, k6_1.sleep)(1);
}
function register() {
    const url = "https://petstore.octoperf.com/actions/Account.action";
    const [username, email] = (0, data_generator_utils_1.default)();
    const payload = {
        username,
        password: "P@ssword1",
        repeatedPassword: "P@ssword1",
        "account.email": email,
    };
    const headers = {
        "Content-Type": "application/json",
    };
    const res = http_1.default.post(url, payload, { headers });
    (0, k6_1.check)(res, {
        "is status 200": (r) => r.status === 200,
        "is response time < 400ms": (r) => r.timings.duration < 400,
    });
    (0, k6_1.sleep)(3);
}
function default_1() {
    healthCheck();
    register();
}
