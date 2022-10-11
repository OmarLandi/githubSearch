import { useState } from 'react';
import classNames from 'classnames';
import Button from 'common/components/button';

interface SearchProps {
  placeHolder?: string;
  className?: string;
  handleSearch: any;
  value?: string;
}

const Search = (props: SearchProps) => {
  const { className, placeHolder, handleSearch, value } = props;
  const [searchValue, setSearchValue] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    handleSearch(searchValue);
    event.preventDefault();
  }

  return (
    <form className="form-inline">
      <input
        className={classNames("form-control mr-sm-2", className)}
        type="search"
        placeholder={placeHolder}
        aria-label={placeHolder}
        onChange={onChange}
        value={value === undefined || (value !== searchValue && searchValue !== '')? searchValue : value}
      />
      <Button onClick={handleSubmit} text="Search" type="submit" />
    </form>
  )
};

export default Search;
