import styles from './button-library.module.scss';

/* eslint-disable-next-line */
export interface ButtonLibraryProps {}

export function ButtonLibrary(props: ButtonLibraryProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ButtonLibrary!</h1>
    </div>
  );
}

export default ButtonLibrary;
