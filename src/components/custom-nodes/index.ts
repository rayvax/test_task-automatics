import { Graph } from '@antv/x6';
import { Current } from './Current';
import { Installation } from './Installation';
import { Park } from './Park';

export function registerAppNodes() {
  Installation.register();
  Current.register();
  Park.register();
  Graph.registerEdge('line-edge', {
    inherit: 'edge',
    attrs: {
      line: {
        stroke: '#606580',
        targetMarker: null,
      },
    },
  });
}
