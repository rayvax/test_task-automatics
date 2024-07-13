import { Shape } from '@antv/x6';

export function initGraphGlobalConfig() {
  Shape.Edge.config({
    attrs: {
      line: {
        stroke: '#606580',
      },
    },
  });
}
