import { SearchForm } from '../../components/SearchFrom/SearchForm';
import { SearchResults } from '../../components/SearchResults/SearchResults';
import Spinner from '../../components/UI/Spinner';
import './home-page.css';

type HomePageProps = {
  isLoading: boolean;
  error: string;
};

const HomePage = ({ isLoading, error }: HomePageProps): JSX.Element => {
  return (
    <div className='home-page'>
      <SearchForm />
      {isLoading && <Spinner />}
      {!isLoading ? <SearchResults /> : error}
      {!isLoading ? error : ''}
    </div>
  );
};

export default HomePage;
