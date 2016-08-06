"use strict";
var mockUserData = (function () {
    function mockUserData() {
    }
    mockUserData.prototype.createDb = function () {
        var user = { name: "陈雨", username: "a62527776a" };
        return { user: user };
    };
    return mockUserData;
}());
exports.mockUserData = mockUserData;
//# sourceMappingURL=mockUserdata.service.js.map