import { Node } from '@antv/x6';
import { register } from '@antv/x6-react-shape';

import styles from './Installation.module.scss';

export const Installation = ({ node }: { node: Node }) => {
  const data = node.getData();

  return <div className={styles.installation}></div>;
};

Installation.shapeName = 'installation';
Installation.register = () =>
  register({
    shape: Installation.shapeName,
    width: 100,
    height: 40,
    effect: ['data'],
    component: Installation,
  });
