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
var Foo = (function (_super) {
    __extends(Foo, _super);
    function Foo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Foo.prototype.render = function () {
        return (common_1.React.createElement("div", __assign({}, styles.base),
            common_1.React.createElement("h1", null, "Hello Tim")));
    };
    return Foo;
}(common_1.React.Component));
exports.Foo = Foo;
var styles = {
    base: common_1.css({
        padding: 30,
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
    }),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9vLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRm9vL0Zvby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBMEM7QUFPMUM7SUFBeUIsdUJBQWdDO0lBQXpEOztJQVFBLENBQUM7SUFQUSxvQkFBTSxHQUFiO1FBQ0UsTUFBTSxDQUFDLENBQ0wsaURBQVMsTUFBTSxDQUFDLElBQUk7WUFDbEIscURBQWtCLENBQ2QsQ0FDUCxDQUFDO0lBQ0osQ0FBQztJQUNILFVBQUM7QUFBRCxDQUFDLEFBUkQsQ0FBeUIsY0FBSyxDQUFDLFNBQVMsR0FRdkM7QUFSWSxrQkFBRztBQVdoQixJQUFNLE1BQU0sR0FBRztJQUNiLElBQUksRUFBRSxZQUFHLENBQUM7UUFDUixPQUFPLEVBQUUsRUFBRTtRQUNYLGVBQWUsRUFBRSxzQkFBc0I7S0FDeEMsQ0FBQztDQUNILENBQUMifQ==