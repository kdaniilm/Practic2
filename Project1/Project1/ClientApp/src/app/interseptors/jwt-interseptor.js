"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtInterseptor = void 0;
var JwtInterseptor = /** @class */ (function () {
    function JwtInterseptor() {
    }
    JwtInterseptor.prototype.intercept = function (request, next) {
        var token = localStorage.getItem('jwt');
        request = request.clone({ setHeaders: { Authorization: "Bearer " + token } });
        return next.handle(request);
    };
    return JwtInterseptor;
}());
exports.JwtInterseptor = JwtInterseptor;
//# sourceMappingURL=file.js.map