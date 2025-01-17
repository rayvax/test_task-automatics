import { Graph as GraphX6 } from '@antv/x6';
import { useRef, createContext, useContext, forwardRef, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

const GraphContext = createContext<GraphX6 | null>(null);

export type GraphProps = GraphX6.Options & {
  className?: string;
  container?: HTMLDivElement;
  children?: ReactNode;
};

export const Graph = forwardRef<GraphX6, GraphProps>((props, ref) => {
  const [graph, setGraph] = useState<GraphX6 | null>(null);
  const { container, children, className = 'react-x6-graph', ...other } = props;
  const containerRef = useRef<HTMLDivElement>(container || null);

  useEffect(() => {
    if (containerRef.current && !graph) {
      const graph = new GraphX6({
        container: containerRef.current,
        ...other,
      });
      setGraph(graph);
      if (typeof ref === 'function') {
        ref(graph);
      } else if (ref) {
        ref.current = graph;
      }
    }
  }, [graph, other, ref]);

  return (
    <div
      className={className}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <GraphContext.Provider value={graph}>
        {!container && <div ref={containerRef} />}
        {!!graph && children}
      </GraphContext.Provider>
    </div>
  );
});

export const useGraphInstance = () => useContext(GraphContext);
