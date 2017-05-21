import { React, describe } from '../../common/storybook';
import { Bar } from '.';


describe('primtives', {
  title: 'A sample Bar component.',
})
  .add('Bar', () => {
    return (
      <Bar />
    );
  });
