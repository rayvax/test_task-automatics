import { Node } from '@antv/x6';
import { register } from '@antv/x6-react-shape';

import styles from './Installation.module.scss';
import { Cpu } from 'react-feather';

import { openGlobalChartModal } from '../../../lib/global-modal';

type InstallationNodeData = {
  name: string;
  char_data: number[][];
};

type InstallationProps = {
  node: Node;
};

export function Installation({ node }: InstallationProps) {
  const { name, char_data: chartData } = node.getData<InstallationNodeData>();

  function handleInstallationClick() {
    openGlobalChartModal(chartData);
  }

  return (
    <div className={styles.installation} onClick={handleInstallationClick}>
      <div className={styles.installation__iconContainer}>
        <Cpu size={12} />
      </div>
      {name}
    </div>
  );
}

Installation.shapeName = 'installation';
Installation.register = () =>
  register({
    shape: Installation.shapeName,
    width: 120,
    height: 32,
    effect: ['data'],
    component: Installation,
  });
