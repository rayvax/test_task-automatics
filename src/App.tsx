import '@fontsource/roboto';
import './styles/index.scss';

import { useCallback } from 'react';
import { FullscreenGraph, graphGlobalConfig } from './lib/antv-x6';
import AddFromJson from './lib/antv-x6/AddFromJson';
import { registerAppNodes } from './components/custom-cells';
import { GlobalChartModal } from './lib/global-modal';

registerAppNodes();
graphGlobalConfig();

function App() {
  const importGraphData = useCallback(() => import('./data/nodes.json'), []);

  return (
    <>
      <FullscreenGraph
        autoResize
        grid
        panning
        connecting={{ snap: true }}
        mousewheel
        width={800}
        height={700}
      >
        <AddFromJson fetchGraphData={importGraphData} />
      </FullscreenGraph>
      <GlobalChartModal />
    </>
  );
}

export default App;
