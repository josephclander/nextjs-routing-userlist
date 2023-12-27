import styles from '../../page.module.css';
import users from '../user_data.json';

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const user = users.filter((item) => item.id === id)[0];
  const { name, job_title, email, phone } = user;
  return (
    <>
      <h1 className={styles.main}>
        {user && name.first_name + ' ' + name.last_name}
      </h1>
      <ul>
        <li>{job_title}</li>
        <li>{email}</li>
        <li>{phone}</li>
      </ul>
    </>
  );
}
