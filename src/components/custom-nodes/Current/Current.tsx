import { register } from '@antv/x6-react-shape';
import styles from './Current.module.scss';
import { withChartModalFunctionality } from '../../../hoc/withChartModalFunctionality';
import { CustomNodeProps } from '../../../types/custom-node';

type CurrentNodeData = {
  name: string;
  delta: number;
  progress: number;
  liquidAmount: number;
};

export function Current({ node }: CustomNodeProps) {
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
    component: withChartModalFunctionality(Current),
  });
