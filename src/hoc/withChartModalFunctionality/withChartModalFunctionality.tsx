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

    function handleInstallationClick() {
      if (!chartData) return;

      openGlobalChartModal(chartData);
    }

    return (
      <div onClick={handleInstallationClick}>
        <Component {...props} />
      </div>
    );
  };
}
