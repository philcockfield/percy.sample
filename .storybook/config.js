import { configure } from "@kadira/storybook";
if (typeof window === 'object') window.__storybook_stories__ = require('@kadira/storybook').getStorybook();


// Load stories.
const req = require.context("../lib", true, /.stories.js$/);
configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
