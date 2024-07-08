// @ts-nocheck
import React, { useCallback, useState, useEffect } from 'react';
import { useGraphInstance } from './Graph';
import { Model } from '@antv/x6';

type AddFromJsonProps = {
  fetchGraphData(): Promise<Model.FromJSONData>;
};

function AddFromJson({ fetchGraphData }: AddFromJsonProps) {
  const graph = useGraphInstance();

  useEffect(() => {
    if (!graph) {
      return;
    }

    (async function () {
      const data = await fetchGraphData();
      graph.fromJSON(data);
    })();

    return () => {
      graph?.clearCells();
    };
  }, [graph, fetchGraphData]);

  return null;
}

export default AddFromJson;
