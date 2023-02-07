import Form from '../FormContainer/Form';
import TableCompoenet from '../Table/Table';
import styles from './main.module.css';

type Props = {}

export default function Main({}: Props) {
  return (
    <div className={styles.main}>
        <Form/>
        <TableCompoenet/>
    </div>
  )
}