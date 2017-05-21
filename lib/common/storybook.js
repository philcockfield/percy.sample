"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.React = React;
var storybook_host_1 = require("storybook-host");
var storybook_host_2 = require("storybook-host");
exports.knobs = storybook_host_2.knobs;
function describe(name, config) {
    return storybook_host_1.storiesOf(name, module)
        .addDecorator(storybook_host_1.knobs.withKnobs)
        .addDecorator(storybook_host_1.host(config));
}
exports.describe = describe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rvcnlib29rLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1vbi9zdG9yeWJvb2sudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQStCO0FBR3RCLHNCQUFLO0FBRmQsaURBQTJFO0FBRzNFLGlEQUF1QztBQUE5QixpQ0FBQSxLQUFLLENBQUE7QUFNZCxrQkFBeUIsSUFBWSxFQUFFLE1BQWtCO0lBQ3ZELE1BQU0sQ0FBQywwQkFBUyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7U0FDM0IsWUFBWSxDQUFDLHNCQUFLLENBQUMsU0FBUyxDQUFDO1NBQzdCLFlBQVksQ0FBQyxxQkFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQUpELDRCQUlDIn0=