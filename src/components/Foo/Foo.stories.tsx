import * as React from 'react';
import { describe } from '../../common/storybook';
import { Foo } from './Foo';


describe('primitives', {
  title: 'Sample component',
  width: 350,
})
  .add('Foo', () => {
    return (
      <Foo />
    );
  });
