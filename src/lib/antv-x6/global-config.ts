import { Shape } from '@antv/x6';

export function graphGlobalConfig() {
  Shape.Edge.config({
    attrs: {
      line: {
        stroke: '#606580',
      },
    },
  });
}
