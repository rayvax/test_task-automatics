import styles from './FullscreenGraph.module.scss';

import { Graph, GraphProps } from '../Graph';

export function FullscreenGraph(props: GraphProps) {
  return (
    <div className={styles.fullscreenGraphContainer}>
      <Graph {...props} />
    </div>
  );
}
