import './user-page.css';
import UserPageHeader from '../../components/UserPage/UserPageHeader';
import UserPageCard from '../../components/UserPage/UserPageCard';

const UserPage = (): JSX.Element => {
  return (
    <section className='container'>
      <UserPageHeader />
      <UserPageCard />
    </section>
  );
};

export default UserPage;
