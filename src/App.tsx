import '@fontsource/roboto';
import './styles/index.scss';

import { useCallback } from 'react';
import { FullscreenGraph, graphGlobalConfig } from './lib/antv-x6';
import AddFromJson from './lib/antv-x6/AddFromJson';
import { registerAppNodes } from './components/custom-nodes';
import { GlobalChartModal } from './lib/global-modal';
import { Header } from './components/Header';

registerAppNodes();
graphGlobalConfig();

function App() {
  const importGraphData = useCallback(() => import('./data/nodes.json'), []);

  return (
    <>
      <Header />
      <FullscreenGraph
        autoResize
        panning
        connecting={{ snap: true, router: 'manhattan' }}
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
