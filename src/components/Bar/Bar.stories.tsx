// import { React, describe } from '../../common/storybook';
// import { Bar } from '.';


// describe('primtives', {
//   title: 'A sample Bar component.',
// })
//   .add('Bar', () => {
//     return (
//       <Bar />
//     );
//   });

import * as React from 'react';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Bar', module)
  .add('with text', () => (
    <button onClick={action('clicked')}>Hello Button</button>
  ))
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ));