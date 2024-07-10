import '@fontsource/roboto';
import './styles/index.scss';

import { useCallback } from 'react';
import { Graph, graphGlobalConfig } from './lib/antv-x6';
import AddFromJson from './lib/antv-x6/AddFromJson';
import { registerAppNodes } from './components/custom-cells';

registerAppNodes();
graphGlobalConfig();

function App() {
  const importGraphData = useCallback(() => import('./data/nodes.json'), []);
  return (
    <>
      <Graph
        autoResize
        connecting={{ snap: true }}
        // keyboard
        // clipboard
        mousewheel
        width={800}
        height={700}
      >
        <AddFromJson fetchGraphData={importGraphData} />
      </Graph>
    </>
  );
}

export default App;
