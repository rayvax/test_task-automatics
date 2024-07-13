import { useCallback } from 'react';
import { Modal } from '../../components/Modal';
import { GLOBAL_MODAL_CONTAINER_ID, MODAL_CHART_CONTAINER_CLASSNAME } from './contants';
import { closeGlobalChartModal } from './utils';

type GlobalChartModalProps = {};

export function GlobalChartModal({}: GlobalChartModalProps) {
  const handleCloseModal = useCallback(() => {
    closeGlobalChartModal();
  }, []);

  return (
    <Modal id={GLOBAL_MODAL_CONTAINER_ID} onCloseModal={handleCloseModal}>
      <div className={MODAL_CHART_CONTAINER_CLASSNAME} />
    </Modal>
  );
}
