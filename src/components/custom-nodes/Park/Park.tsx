import styles from './Park.module.scss';

import { register } from '@antv/x6-react-shape';
import { withChartModalFunctionality } from '../../../hoc/withChartModalFunctionality';
import { CustomNodeProps } from '../../../types/custom-node';
import { Database } from 'react-feather';

type ParkNodeData = {
  name: string;
  slots: string[];
  pouringSum: string;
};

export function Park({ node }: CustomNodeProps) {
  const { name, slots, pouringSum } = node.getData<ParkNodeData>();

  return (
    <div className={styles.park}>
      <div className={styles.park__title}>{name}</div>
      <ol className={styles.park__slotList}>
        {slots.map((slot) => (
          <li key={slot} className={styles.park__slotItem}>
            <div className={styles.park__slotIconContainer}>
              <Database />
            </div>
            {slot}
          </li>
        ))}
      </ol>
      <div className={styles.park__pouringSum}>
        <div className={styles.park__pouringSumTitle}>Сумма влива:</div>
        <div className={styles.park__pouringSumValue}>{pouringSum}</div>
      </div>
    </div>
  );
}

Park.shapeName = 'park';
Park.register = () =>
  register({
    shape: Park.shapeName,
    width: 132,
    height: 440,
    effect: ['data'],
    component: withChartModalFunctionality(Park),
  });
