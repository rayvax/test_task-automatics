import { register } from '@antv/x6-react-shape';
import styles from './Current.module.scss';
import { Node } from '@antv/x6';

type CurrentNodeData = {
  name: string;
  delta: number;
  progress: number;
  liquidAmount: number;
};

type CurrentProps = {
  node: Node;
};

export function Current({ node }: CurrentProps) {
  const { name, delta, progress, liquidAmount } = node.getData<CurrentNodeData>();

  const deltaText = `${delta > 0 ? '+' : '-'}${Math.abs(delta)}`;

  return (
    <div className={styles.current}>
      <div className={styles.current__name}>{name}</div>
      <div className={styles.current__valuesContainer}>
        <div className={styles.current__delta}>
          <span className={styles.current__accentText}>Δ {deltaText}</span>т
        </div>
        <div className={styles.current__progress}>
          (<span className={styles.current__accentText}>{progress}</span>%)
        </div>
        <div className={styles.current__liquidAmount}>
          <span className={styles.current__accentText}>Ω {liquidAmount}</span>
        </div>
      </div>
    </div>
  );
}

Current.shapeName = 'current';
Current.register = () =>
  register({
    shape: Current.shapeName,
    width: 165,
    height: 52,
    effect: ['data'],
    component: Current,
  });
