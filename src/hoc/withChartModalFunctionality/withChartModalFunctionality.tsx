import { useState } from 'react';
import { openGlobalChartModal } from '../../lib/global-modal';
import { CustomNodeProps } from '../../types/custom-node';

type ChartModalFunctionalityNodeData = {
  char_data: number[][];
};

export function withChartModalFunctionality(Component: React.ComponentType<CustomNodeProps>) {
  return (props: CustomNodeProps) => {
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
