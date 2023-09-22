import styles from './my-button.module.scss';

/* eslint-disable-next-line */
export interface MyButtonProps {
  title: string
}

export function MyButton(props: MyButtonProps) {
  return (
    <div className={styles['container']}>
      <button type="button">{props.title}</button>
    </div>
  );
}

export default MyButton;
