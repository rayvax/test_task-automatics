import { Aperture, MoreVertical, User } from 'react-feather';
import styles from './Header.module.scss';

type HeaderProps = {};

export function Header({}: HeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.header__logoContainer}>
        <div className={styles.header__logoIconContainer}>
          <Aperture />
        </div>
        Проект
        <div className={styles.header__moreButton}>
          <MoreVertical />
        </div>
      </div>

      <div className={styles.header__accountContainer}>
        <div className={styles.header__accountIconContainer}>
          <User />
        </div>
        Фамилия И.О.
      </div>
    </div>
  );
}
