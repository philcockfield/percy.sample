"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var storybook_1 = require("@kadira/storybook");
storybook_1.storiesOf('Bar', module)
    .add('with text', function () { return (React.createElement("button", { onClick: storybook_1.action('clicked') }, "Hello Button")); })
    .add('with some emoji', function () { return (React.createElement("button", { onClick: storybook_1.action('clicked') }, "\uD83D\uDE00 \uD83D\uDE0E \uD83D\uDC4D \uD83D\uDCAF")); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFyLnN0b3JpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9CYXIvQmFyLnN0b3JpZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBYUEsNkJBQStCO0FBQy9CLCtDQUFzRDtBQUV0RCxxQkFBUyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7S0FDckIsR0FBRyxDQUFDLFdBQVcsRUFBRSxjQUFNLE9BQUEsQ0FDdEIsZ0NBQVEsT0FBTyxFQUFFLGtCQUFNLENBQUMsU0FBUyxDQUFDLG1CQUF1QixDQUMxRCxFQUZ1QixDQUV2QixDQUFDO0tBQ0QsR0FBRyxDQUFDLGlCQUFpQixFQUFFLGNBQU0sT0FBQSxDQUM1QixnQ0FBUSxPQUFPLEVBQUUsa0JBQU0sQ0FBQyxTQUFTLENBQUMsMERBQXNCLENBQ3pELEVBRjZCLENBRTdCLENBQUMsQ0FBQyJ9