import { Link } from 'react-router-dom';

const UserPageHeader = (): JSX.Element => {
  return (
    <header className='user-page__header'>
      <h1 className='user-page__header-title'>User page</h1>
      <Link to={'/'} className='user-page__header-link'>
        to back
      </Link>
    </header>
  );
};

export default UserPageHeader;
