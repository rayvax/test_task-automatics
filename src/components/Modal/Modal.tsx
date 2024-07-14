import { MouseEvent, ReactNode, useRef } from 'react';
import styles from './Modal.module.scss';
import { X } from 'react-feather';

type ModalProps = {
  id?: string;

  headerTitle?: string;
  children: ReactNode;

  onCloseModal(): void;
};

export const modalOpenClassName = styles.modalContainer_open;

export function Modal({ id, children, headerTitle, onCloseModal }: ModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  function handleClickOutsideModal(event: MouseEvent<HTMLDivElement>) {
    if (!modalRef.current || modalRef.current.contains(event.target as Node)) return;

    onCloseModal();
  }

  return (
    <div id={id} className={styles.modalContainer} onClick={handleClickOutsideModal}>
      <div className={styles.modal} ref={modalRef}>
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
