import { useState, useEffect } from 'react';
import classNames from 'classnames';
import Button from 'common/components/button';
import styled from 'styled-components';

interface SearchProps {
  placeHolder?: string;
  className?: string;
  handleSearch: any;
  value?: string;
}

const StyledError = styled.p`{
  display: block;
}`

const Search = (props: SearchProps) => {
  const { className, placeHolder, handleSearch, value } = props;
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setSearchValue(event.target.value);
  }

  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    if (searchValue !== '') {
      handleSearch(searchValue);
    } else {
      setSearchValue(value || '');
      setError(true);
    }
    
    event.preventDefault();
  }

  useEffect(() => {
    setSearchValue(value || '');
  }, [value])

  return (
    <form className={classNames("form-inline", className)}>
      <input
        className="form-control mr-sm-2"
        type="text"
        placeholder={placeHolder}
        aria-label={placeHolder}
        onChange={onChange}
        value={searchValue}
      />
      <Button onClick={handleSubmit} text="Search" type="submit" />
      { error && <StyledError className="invalid-feedback">* Please provide a search element.</StyledError>}
    </form>
  )
};

export default Search;
