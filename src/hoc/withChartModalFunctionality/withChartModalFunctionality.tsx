import { useState } from 'react';
import { openGlobalChartModal } from '../../lib/global-modal';
import { Graph, Node } from '@antv/x6';

type ChartModalFunctionalityNodeData = {
  char_data: number[][];
};

export function withChartModalFunctionality(
  Component: React.ComponentType<{
    node: Node;
    graph: Graph;
  }>,
) {
  return (props: { node: Node; graph: Graph }) => {
    const { char_data: chartData } = props.node.getData<ChartModalFunctionalityNodeData>();

    const [isMouseDown, setIsMouseDown] = useState(false);
    const [isDrag, setIsDrag] = useState(false);

    function handleClick() {
      if (!chartData) return;

      if (isDrag) {
        resetDrag();
        return;
      }

      openGlobalChartModal(chartData);
    }

    function handleMouseDown() {
      setIsMouseDown(true);
    }

    function handleMouseMove() {
      if (!isMouseDown || isDrag) return;

      setIsDrag(true);
    }

    function resetDrag() {
      setIsMouseDown(false);
      setIsDrag(false);
    }

    return (
      <div onClick={handleClick} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove}>
        <Component {...props} />
      </div>
    );
  };
}
