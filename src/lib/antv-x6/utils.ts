import { Graph, Node, Edge, ObjectExt, StringExt } from '@antv/x6';

type Metadata = Node.Metadata | Edge.Metadata;
type GraphElement = Node | Edge;
type T = GraphElement | { [key: string]: any };
type U = T[];

export const diffCells = (
  graph: Graph | null,
  cells: Metadata[] = [],
  type: 'node' | 'edge' = 'node',
) => {
  const create: GraphElement[] = [];
  const update: U[] = [];
  const remove: string[] = [];
  if (graph) {
    const createGraphElemenet = type === 'node' ? Node.create : Edge.create;
    cells.forEach((cell) => {
      const graphCell = graph.getCellById(cell.id);
      if (graphCell) {
        // Here we try to call create again, and then put the newly created one directly into it through setProp
        const newElem = createGraphElemenet(cell);
        const newElemProp = newElem.getProp();
        newElem.dispose();
        if (!ObjectExt.isEqual(graphCell.getProp(), newElemProp)) {
          update.push([graphCell, newElemProp]);
        }
      } else {
        create.push(createGraphElemenet(cell));
      }
    });
    const cellIds = new Set(cells.map((c) => c.id));
    const graphElements = type === 'node' ? graph.getNodes() : graph.getEdges();
    graphElements.forEach((cell) => {
      if (!cellIds.has(cell.id)) {
        remove.push(cell.id);
      }
    });
  }
  return { create, update, remove };
};

export const patch = (graph: Graph | null, data: ReturnType<typeof diffCells>) => {
  const { create = [], update = [], remove = [] } = data;

  if (graph) {
    graph.batchUpdate(
      'update',
      () => {
        graph.addCell(create);
        update.forEach(([cell, prop]) => {
          // Directly updating all props at once may cause some properties to fail to update successfully cell.setProp(prop)
          // @ts-ignore
          Object.keys(prop).forEach((key: string) => cell.setProp(key, prop[key]));
        });
        remove.forEach((item) => graph.removeCell(item));
      },
      data,
    );
  }
};

// If there is no id, add one
export const provideId = (metadata: Metadata) =>
  ({ ...metadata, id: metadata.id || StringExt.uuid() } as Metadata);
