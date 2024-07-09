import { useCallback } from 'react';
import { Graph } from './lib/antv-x6';
import AddFromJson from './lib/antv-x6/AddFromJson';
import './components/custom-nodes';

function App() {
  const importGraphData = useCallback(() => import('./data/nodes.json'), []);
  return (
    <>
      <Graph
        grid
        autoResize
        connecting={{ snap: true }}
        // keyboard
        // clipboard
        mousewheel
        width={800}
        height={600}
      >
        <AddFromJson fetchGraphData={importGraphData} />
      </Graph>
    </>
  );
}

export default App;
