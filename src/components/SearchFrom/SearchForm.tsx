import { SearchContext } from '../SearchResults/SearchContext';
import './styles.css';
import { ChangeEventHandler, useContext } from 'react';

export function SearchForm(): JSX.Element {
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const inputSearchHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    return setSearchValue(value);
  };

  return (
    <div className='searchForm'>
      <form>
        <input
          type='text'
          value={searchValue}
          onChange={inputSearchHandler}
          placeholder='Введите имя'
        />
      </form>
    </div>
  );
}
