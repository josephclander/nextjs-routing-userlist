import styles from '../page.module.css';
import users from './user_data.json';

export default function Page() {
  return (
    <>
      <h1 className={styles.main}>Users Page</h1>
      <ul>
        {users &&
          users.map((user) => <li key={user.id}>{user?.name?.first_name}</li>)}
      </ul>
    </>
  );
}
