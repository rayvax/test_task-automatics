import { ECharts, getInstanceByDom, init } from 'echarts';
import {
  ECHARTS_ELEMENT_CLASSNAME,
  GLOBAL_MODAL_CONTAINER_ID,
  MODAL_CHART_CONTAINER_CLASSNAME,
} from './contants';

export function openGlobalChartModal(chartData: number[][]) {
  const globalElements = getGlobalChartModalElements();

  if (!globalElements || globalElements.chartElement) return;

  const { modal, chartContainer } = globalElements;

  const chartElement = createChartElement(chartData);

  chartContainer.insertAdjacentElement('beforeend', chartElement);

  modal.style.display = 'flex';
}

export function closeGlobalChartModal() {
  const globalElements = getGlobalChartModalElements();

  if (!globalElements || !globalElements.chartElement) return;

  const { modal, chartElement } = globalElements;

  const chart = getInstanceByDom(chartElement);

  if (!chart) return;

  chart.dispose();
  chartElement.remove();
  modal.style.display = 'none';
}

function getGlobalChartModalElements() {
  const modal = document.querySelector(`#${GLOBAL_MODAL_CONTAINER_ID}`);
  if (!modal || !(modal instanceof HTMLDivElement)) return null;

  const chartContainer = modal.querySelector(`.${MODAL_CHART_CONTAINER_CLASSNAME}`);
  if (!chartContainer || !(chartContainer instanceof HTMLDivElement)) return null;

  const chartElement = chartContainer.querySelector(`.${ECHARTS_ELEMENT_CLASSNAME}`);

  if (chartElement && !(chartElement instanceof HTMLDivElement)) return null;

  return { modal, chartContainer, chartElement };
}

function createChartElement(chartData: number[][]) {
  const chartElement = document.createElement('div');

  chartElement.style.width = '700px';
  chartElement.style.height = '350px';

  const chart: ECharts = init(chartElement);
  chart.setOption({
    xAxis: {},
    yAxis: {},
    series: [
      {
        data: chartData,
        type: 'line',
      },
    ],
  });

  chartElement.classList.add(ECHARTS_ELEMENT_CLASSNAME);

  return chartElement;
}
