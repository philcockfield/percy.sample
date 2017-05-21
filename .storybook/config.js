import { configure } from "@kadira/storybook";
if (typeof window === 'object') window.__storybook_stories__ = require('@kadira/storybook').getStorybook();


// Load stories.
// See:
//    https://github.com/storybooks/storybook/issues/125#issuecomment-212386581

// const req = require.context("../lib", true, /.stories.js$/);
// configure(() => {
//   req.keys().forEach(filename => req(filename));
// }, module);


function loadStories() {
  require('../lib/index.stories.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);


