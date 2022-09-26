import { useState } from 'react';
import classNames from 'classnames';
import Button from 'common/components/button';

interface SearchProps {
  placeHolder?: string;
  className?: string;
  handleSearch: any;
}

const Search = (props: SearchProps) => {
  const { className, placeHolder, handleSearch } = props;
  const [value, setValue] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    handleSearch(value);
    event.preventDefault();
  }
  
  return (
    <form className="form-inline">
      <input className={classNames("form-control mr-sm-2", className)} type="search" placeholder={placeHolder} aria-label={placeHolder} onChange={onChange} />
      <Button onClick={handleSubmit} text="Search" type="submit" />
    </form>
  )
};

export default Search;
