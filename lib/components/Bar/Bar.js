"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../../common");
var Bar = (function (_super) {
    __extends(Bar, _super);
    function Bar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bar.prototype.render = function () {
        return (common_1.React.createElement("div", __assign({}, styles.base), "Bar"));
    };
    return Bar;
}(common_1.React.Component));
exports.Bar = Bar;
var styles = {
    base: common_1.css({
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQmFyL0Jhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBMEM7QUFRMUM7SUFBeUIsdUJBQWdDO0lBQXpEOztJQVFBLENBQUM7SUFQUSxvQkFBTSxHQUFiO1FBQ0UsTUFBTSxDQUFDLENBQ0wsaURBQVMsTUFBTSxDQUFDLElBQUksU0FFZCxDQUNQLENBQUM7SUFDSixDQUFDO0lBQ0gsVUFBQztBQUFELENBQUMsQUFSRCxDQUF5QixjQUFLLENBQUMsU0FBUyxHQVF2QztBQVJZLGtCQUFHO0FBV2hCLElBQU0sTUFBTSxHQUFHO0lBQ2IsSUFBSSxFQUFFLFlBQUcsQ0FBQztRQUNSLGVBQWUsRUFBRSxzQkFBc0I7S0FDeEMsQ0FBQztDQUNILENBQUMifQ==