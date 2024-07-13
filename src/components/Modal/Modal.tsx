import { ReactNode } from 'react';
import styles from './Modal.module.scss';
import { X } from 'react-feather';

type ModalProps = {
  id?: string;

  headerTitle?: string;
  children: ReactNode;

  onCloseModal(): void;
};

export const openModalClassName = styles.modalContainer_open;

export function Modal({ id, children, headerTitle, onCloseModal }: ModalProps) {
  return (
    <div id={id} className={styles.modalContainer}>
      <div className={styles.modal}>
        <div className={styles.modal__header}>
          <div className={styles.modal__headerTitle}>{headerTitle}</div>
          <button className={styles.modal__closeButton} onClick={onCloseModal}>
            <X />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
