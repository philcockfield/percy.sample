import { React, css } from '../../common';


export interface IBarProps { }

/**
 * A sample Bar component.
 */
export class Bar extends React.Component<IBarProps, void> {
  public render() {
    return (
      <div {...styles.base}>
        Bar
      </div>
    );
  }
}


const styles = {
  base: css({
    backgroundColor: 'rgba(255, 0, 0, 0.1)', /* RED */
  }),
};
