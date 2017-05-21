import { React, css } from '../../common';

export interface IFooProps { }

/**
 * primitive
 */
export class Foo extends React.Component<IFooProps, void> {
  public render() {
    return (
      <div {...styles.base}>
        <h1>Foo!</h1>
      </div>
    );
  }
}


const styles = {
  base: css({
    padding: 30,
    backgroundColor: 'rgba(255, 0, 0, 0.1)', /* RED */
  }),
};
